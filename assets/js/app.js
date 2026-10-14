"use strict";
window.escHtml = function (x) {
  return String(x).replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]
  );
};
function sanitizeStoreData(v, depth) {
  depth = depth || 0;
  if (depth > 6) return null;
  if (typeof v === "string") return v.slice(0, 2000).replace(/[<>]/g, "");
  if (typeof v === "number") return isFinite(v) ? v : 0;
  if (typeof v === "boolean" || v === null) return v;
  if (Array.isArray(v)) return v.slice(0, 5000).map((x) => sanitizeStoreData(x, depth + 1));
  if (typeof v === "object") {
    const o = {};
    let n = 0;
    for (const k in v) {
      if (++n > 800) break;
      o[String(k).slice(0, 120).replace(/[<>]/g, "")] = sanitizeStoreData(v[k], depth + 1);
    }
    return o;
  }
  return null;
}
const Store = (function () {
  let lsOK = false;
  try {
    localStorage.setItem("fisi._t", "1");
    localStorage.removeItem("fisi._t");
    lsOK = true;
  } catch (e) {}
  let mem = {};
  try {
    if (window.name && window.name.indexOf("fisiStore:") === 0)
      mem = sanitizeStoreData(JSON.parse(window.name.slice(10))) || {};
  } catch (e) {
    mem = {};
  }
  const flush = () => {
    try {
      window.name = "fisiStore:" + JSON.stringify(mem);
    } catch (e) {}
  };
  return {
    get(k, d) {
      if (k in mem) return mem[k];
      if (lsOK) {
        try {
          const v = localStorage.getItem("fisi." + k);
          return v === null ? d : JSON.parse(v);
        } catch (e) {
          return d;
        }
      }
      return d;
    },
    set(k, v) {
      if (lsOK) {
        try {
          localStorage.setItem("fisi." + k, JSON.stringify(v));
        } catch (e) {}
      }
      mem[k] = v;
      flush();
      if (window.AutoBackup) AutoBackup.geplant();
    },
    dump() {
      const out = {};
      if (lsOK) {
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k && k.indexOf("fisi.") === 0) {
            try {
              out[k.slice(5)] = JSON.parse(localStorage.getItem(k));
            } catch (e) {}
          }
        }
      }
      return Object.assign(out, mem);
    },
    load(obj) {
      try {
        if (JSON.stringify(obj).length > 500000) throw new Error("zu groß");
      } catch (e) {
        return;
      }
      obj = sanitizeStoreData(obj) || {};
      for (const k in obj) this.set(k, obj[k]);
    },
  };
})();
const Progress = {
  doneLessons() {
    return Store.get("lessonsDone", []);
  },
  isDone(id) {
    return this.doneLessons().includes(id);
  },
  markDone(id) {
    const d = this.doneLessons();
    if (!d.includes(id)) {
      d.push(id);
      Store.set("lessonsDone", d);
      Gami.addXp(50, "Lektion abgeschlossen");
      Gami.checkBadges();
    }
  },
  unmark(id) {
    Store.set(
      "lessonsDone",
      this.doneLessons().filter((x) => x !== id)
    );
  },
  setLast(id) {
    Store.set("lastLesson", id);
  },
  last() {
    return Store.get("lastLesson", null);
  },
  quizStat(topic, ok) {
    const s = Store.get("quizStats", {});
    if (!s[topic]) s[topic] = { ok: 0, total: 0 };
    s[topic].total++;
    if (ok) s[topic].ok++;
    Store.set("quizStats", s);
  },
  stats() {
    return Store.get("quizStats", {});
  },
  pushWrong(qid) {
    const w = Store.get("wrongQueue", []);
    if (!w.includes(qid)) {
      w.push(qid);
      Store.set("wrongQueue", w);
    }
  },
  resolveWrong(qid) {
    Store.set(
      "wrongQueue",
      Store.get("wrongQueue", []).filter((x) => x !== qid)
    );
  },
  wrongQueue() {
    return Store.get("wrongQueue", []);
  },
};
const Gami = {
  xp() {
    return Store.get("xp", 0);
  },
  addXp(n, why) {
    Store.set("xp", this.xp() + n);
    this.touchStreak();
    this.weekAdd(n);
    this.dayAdd(n);
    if (why) toast(why);
  },
  touchStreak() {
    const today = new Date().toISOString().slice(0, 10);
    const s = Store.get("streak", { last: null, count: 0 });
    if (s.last === today) return;
    const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    s.count = s.last === y ? s.count + 1 : 1;
    s.last = today;
    Store.set("streak", s);
  },
  streak() {
    const s = Store.get("streak", { last: null, count: 0 });
    const today = new Date().toISOString().slice(0, 10),
      y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    return s.last === today || s.last === y ? s.count : 0;
  },
  weekAdd(n) {
    const wk = weekKey();
    const w = Store.get("week", {});
    w[wk] = (w[wk] || 0) + n;
    Store.set("week", w);
  },
  weekXp() {
    return Store.get("week", {})[weekKey()] || 0;
  },
  dayAdd(n) {
    const d = Store.get("days", {});
    const k = new Date().toISOString().slice(0, 10);
    d[k] = (d[k] || 0) + n;
    const keys = Object.keys(d).sort();
    while (keys.length > 130) delete d[keys.shift()];
    Store.set("days", d);
  },
  badges() {
    return Store.get("badges", []);
  },
  award(id) {
    const b = this.badges();
    if (!b.includes(id)) {
      b.push(id);
      Store.set("badges", b);
    }
  },
  checkBadges() {
    if (!window.DATA) return;
    const done = Progress.doneLessons(),
      stats = Progress.stats();
    let answered = 0,
      correct = 0;
    Object.values(stats).forEach((s) => {
      answered += s.total;
      correct += s.ok;
    });
    if (done.length >= 1) this.award("first-lesson");
    if (done.length >= 6) this.award("halbzeit");
    if (answered >= 20) this.award("quiz-20");
    if (this.streak() >= 3) this.award("streak-3");
    if (Store.get("subnetSolved", 0) >= 3) this.award("subnet-pro");
    if (Store.get("ap1Done", false)) this.award("ap1-general");
    if (Store.get("ap2Done", false)) this.award("ap2-general");
    if (Store.get("laborDone", false)) this.award("chip-explorer");
  },
};
function weekKey() {
  const d = new Date();
  const onejan = new Date(d.getFullYear(), 0, 1);
  const wk = Math.ceil(((d - onejan) / 864e5 + onejan.getDay() + 1) / 7);
  return d.getFullYear() + "-W" + wk;
}
function toast(msg) {
  let t = document.querySelector(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    t.setAttribute("role", "status");
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove("show"), 2600);
}
const TRACKS = {
  fisi: {
    hq: "FISI-HQ",
    kurz: "FISI",
    label: "Systemintegration (FISI)",
    bonus: null,
    ap: "ap2.html",
  },
  ae: {
    hq: "FIAE-HQ",
    kurz: "FIAE",
    label: "Anwendungsentwicklung (FIAE)",
    bonus: "ae",
    ap: "ap2ae.html",
  },
  dp: {
    hq: "FIDP-HQ",
    kurz: "FIDP",
    label: "Daten- & Prozessanalyse (FIDP)",
    bonus: "fidp",
    ap: "lernfeld.html?id=fidp",
  },
  dv: {
    hq: "FIDV-HQ",
    kurz: "FIDV",
    label: "Digitale Vernetzung (FIDV)",
    bonus: "fidv",
    ap: "lernfeld.html?id=fidv",
  },
  itsm: {
    hq: "ITSM-HQ",
    kurz: "ITSM",
    label: "Kaufleute IT-System-Management",
    bonus: "itsm",
    ap: "lernfeld.html?id=itsm",
  },
  kdm: {
    hq: "KDM-HQ",
    kurz: "KDM",
    label: "Kaufleute Digitalisierungsmanagement",
    bonus: "kdm",
    ap: "lernfeld.html?id=kdm",
  },
  itse: {
    hq: "ITSE-HQ",
    kurz: "ITSE",
    label: "IT-System-Elektroniker/in",
    bonus: "itse",
    ap: "lernfeld.html?id=itse",
  },
  kbm: {
    hq: "KBM-HQ",
    kurz: "KBM",
    label: "Büromanagement (kein IT-Beruf)",
    bonus: "kbm",
    ap: "lernfeld.html?id=kbm",
    ap1: false,
  },
  gam: {
    hq: "GAM-HQ",
    kurz: "GAM",
    label: "Groß- & Außenhandelsmanagement",
    bonus: null,
    ap: null,
    ap1: false,
  },
  ik: { hq: "IK-HQ", kurz: "IK", label: "Industriekaufleute", bonus: null, ap: null, ap1: false },
};
window.AKTIVE_TRACKS = window.AKTIVE_TRACKS || ["fisi", "ae"];
const Track = {
  get() {
    const t = Store.get("track", "fisi");
    return TRACKS[t] && AKTIVE_TRACKS.includes(t) ? t : "fisi";
  },
  isAE() {
    return this.get() === "ae";
  },
  isSpec() {
    return this.get() !== "fisi";
  },
  info() {
    return TRACKS[this.get()];
  },
  aeFields: ["ae", "aeap", "wiso", "allgemein", "prap1"],
  fieldsFor: {
    ae: [
      "ae",
      "aeap",
      "lf1",
      "lf2",
      "lf3",
      "lf4",
      "lf5",
      "lf6",
      "lf7",
      "lf8",
      "lf9",
      "aelf10",
      "aelf11",
      "aelf12",
      "komm",
      "wiso",
      "allgemein",
      "zert",
      "prap1",
    ],
    dp: [
      "fidp",
      "lf1",
      "lf2",
      "lf3",
      "lf4",
      "lf5",
      "lf6",
      "lf7",
      "lf8",
      "lf9",
      "dplf10",
      "dplf11",
      "dplf12",
      "komm",
      "wiso",
      "allgemein",
      "zert",
      "prap1",
    ],
    dv: [
      "fidv",
      "lf1",
      "lf2",
      "lf3",
      "lf4",
      "lf5",
      "lf6",
      "lf7",
      "lf8",
      "lf9",
      "dvlf10",
      "lf11a",
      "dvlf12",
      "komm",
      "wiso",
      "allgemein",
      "zert",
      "prap1",
    ],
    itsm: [
      "itsm",
      "lf1",
      "lf2",
      "lf3",
      "lf4",
      "lf5",
      "lf6",
      "itsmlf7",
      "itsmlf8",
      "itsmlf9",
      "itsmlf10",
      "itsmlf11",
      "itsmlf12",
      "itsmlf13",
      "komm",
      "wiso",
      "allgemein",
      "prap1",
    ],
    kdm: [
      "kdm",
      "lf1",
      "lf2",
      "lf3",
      "lf4",
      "lf5",
      "lf6",
      "kdmlf7",
      "kdmlf8",
      "kdmlf9",
      "kdmlf10",
      "kdmlf11",
      "kdmlf12",
      "komm",
      "wiso",
      "allgemein",
      "prap1",
    ],
    itse: [
      "itse",
      "lf1",
      "lf2",
      "lf3",
      "lf4",
      "lf5",
      "lf6",
      "lf7",
      "lf8",
      "lf9",
      "itselflf10",
      "lf11a",
      "itselflf12",
      "komm",
      "wiso",
      "allgemein",
      "zert",
      "prap1",
    ],
    kbm: [
      "kbm",
      "kbmlf1",
      "kbmlf2",
      "kbmlf3",
      "kbmlf4",
      "kbmlf5",
      "kbmlf6",
      "kbmlf7",
      "kbmlf8",
      "kbmlf9",
      "kbmlf10",
      "kbmlf11",
      "kbmlf12",
      "kbmlf13",
      "komm",
      "wiso",
      "allgemein",
    ],
    gam: [
      "gamlf1",
      "gamlf2",
      "gamlf3",
      "gamlf4",
      "gamlf5",
      "gamlf6",
      "gamlf7",
      "gamlf8",
      "gamlf9",
      "gamlf10",
      "gamlf11g",
      "gamlf12g",
      "gamlf13g",
      "gamlf11a",
      "gamlf12a",
      "gamlf13a",
      "komm",
      "wiso",
      "allgemein",
    ],
    ik: [
      "iklf1",
      "iklf2",
      "iklf3",
      "iklf4",
      "iklf5",
      "iklf6",
      "iklf7",
      "iklf8",
      "iklf9",
      "iklf10",
      "iklf11",
      "iklf12",
      "iklf13",
      "komm",
      "wiso",
      "allgemein",
    ],
  },
  cardTags: {
    ae: ["ae", "aeap", "wiso"],
    dp: ["dp", "wiso"],
    dv: ["dv", "wiso"],
    itsm: ["itsm", "wiso"],
    kdm: ["kdm", "dp", "wiso"],
    itse: ["itse", "dv", "wiso"],
    kbm: ["kbm", "wiso"],
    gam: ["wiso"],
    ik: ["wiso"],
  },
};
window.TRACKS = TRACKS;
window.Track = Track;
function setTrack(tr) {
  if (tr !== Track.get()) {
    Store.set("track", tr);
    location.reload();
  }
}
const SYSTEM_THEME =
  window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const SYSTEM_KONTRAST =
  window.matchMedia && matchMedia("(prefers-contrast: more)").matches ? "1" : "0";
function applyTheme() {
  const t = Store.get("theme", SYSTEM_THEME),
    ac = Store.get("accent", "blue"),
    fs = String(Store.get("fontsize", "0"));
  document.documentElement.dataset.theme = t === "light" ? "light" : "dark";
  document.documentElement.dataset.accent = ac === "gold" || ac === "blau" ? ac : "blue";
  document.documentElement.dataset.fs = fs === "1" || fs === "2" ? fs : "0";
  document.documentElement.dataset.track = Track.get();
  document.documentElement.dataset.lesbar = Store.get("lesbar", "0") === "1" ? "1" : "0";
  document.documentElement.dataset.kontrast =
    Store.get("kontrast", SYSTEM_KONTRAST) === "1" ? "1" : "0";
  faviconAkzent();
}
function faviconAkzent() {
  let ac = "";
  try {
    ac = getComputedStyle(document.documentElement).getPropertyValue("--ac").trim();
  } catch (e) {}
  if (!/^#[0-9a-fA-F]{3,8}$/.test(ac)) ac = "#d29922";
  let link = document.querySelector('link[rel="icon"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.href =
    "data:image/svg+xml," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#0d1117"/>' +
        '<text x="16" y="23" font-family="IBM Plex Mono, monospace" font-size="14" font-weight="700" fill="' +
        ac +
        '" text-anchor="middle">&gt;_</text></svg>'
    );
}
function toggleLesbar() {
  Store.set("lesbar", Store.get("lesbar", "0") === "1" ? "0" : "1");
  applyTheme();
  syncHeaderTools();
  toast(
    "Lesbarkeitsmodus: " +
      (Store.get("lesbar", "0") === "1" ? "an (mehr Zeilen- und Zeichenabstand)" : "aus")
  );
}
function toggleKontrast() {
  Store.set("kontrast", Store.get("kontrast", SYSTEM_KONTRAST) === "1" ? "0" : "1");
  applyTheme();
  syncHeaderTools();
  toast("Hoher Kontrast: " + (Store.get("kontrast", "0") === "1" ? "an" : "aus"));
}
function cycleFontSize() {
  Store.set("fontsize", String((parseInt(Store.get("fontsize", "0"), 10) + 1) % 3));
  applyTheme();
  syncHeaderTools();
  toast(
    "Textgröße: " + ["Standard", "Groß", "Sehr groß"][parseInt(Store.get("fontsize", "0"), 10)]
  );
}
function toggleTheme() {
  Store.set("theme", Store.get("theme", SYSTEM_THEME) === "dark" ? "light" : "dark");
  applyTheme();
  syncHeaderTools();
}
function setAccent(a) {
  Store.set("accent", a);
  applyTheme();
  syncHeaderTools();
}
const SPEC_FIELD_IDS = ["ae", "aeap", "fidp", "fidv", "itsm", "kdm", "itse", "kbm"],
  SPEC_TAGS = ["ae", "aeap", "dp", "dv", "itsm", "kdm", "itse", "kbm"];
window.trackFields = function (fields) {
  const tr = Track.get();
  if (tr === "fisi") return fields.filter((f) => !SPEC_FIELD_IDS.includes(f.id) && !f.placeholder);
  return fields.filter((f) => Track.fieldsFor[tr].includes(f.id));
};
window.trackCards = function (cards) {
  const tr = Track.get();
  if (tr === "fisi")
    return cards.filter((c) => {
      const t = c.lf || [];
      return !t.length || t.some((x) => !SPEC_TAGS.includes(x));
    });
  return cards.filter((c) => (c.lf || []).some((t) => Track.cardTags[tr].includes(t)));
};
window.trackShorts = function (shorts) {
  const tr = Track.get();
  return tr === "fisi" ? shorts : shorts.filter((x) => x[tr]);
};
function pomoToggle() {
  const st = Store.get("pomo", null);
  if (st) {
    Store.set("pomo", null);
    toast("Lern-Timer gestoppt");
    pomoTick();
    return;
  }
  const inp = document.querySelector(".timer-min");
  const min = Math.max(
    1,
    Math.min(240, parseInt(inp && inp.value, 10) || Store.get("timerMin", 25))
  );
  Store.set("timerMin", min);
  Store.set("pomo", { end: Date.now() + min * 60000, mode: "timer" });
  toast("Timer läuft: " + min + " Minuten");
  pomoTick();
}
function pomoTick() {
  const btns = document.querySelectorAll(".pomo-btn");
  if (!btns.length) return;
  const st = Store.get("pomo", null);
  if (!st) {
    btns.forEach((b) => {
      b.textContent = "Start";
      b.title = "Timer mit Zeitlimit starten";
      b.style.color = "";
    });
    return;
  }
  const rest = st.end - Date.now();
  if (rest <= 0) {
    Store.set("pomo", null);
    toast("Zeit abgelaufen – Zeitlimit erreicht! Kurz durchatmen.");
    return pomoTick();
  }
  const m = Math.floor(rest / 60000),
    sec = Math.floor((rest % 60000) / 1000);
  btns.forEach((b) => {
    b.textContent = "■ " + m + ":" + String(sec).padStart(2, "0");
    b.title = "Klicken zum Stoppen";
    b.style.color = "var(--ac-strong)";
  });
}
const NAV_REF = {
  label: "Nachschlagen",
  group: "nachschlagen",
  items: [
    { href: "formeln.html", label: "Formelsammlung" },
    { href: "glossar.html", label: "Glossar" },
    { href: "links.html", label: "Linksammlung" },
    { href: "quellen.html", label: "Quellen & Lizenzen" },
  ],
};
const NAV = [
  { href: "index.html", label: "Start" },
  {
    label: "Lernen",
    group: "lernen",
    items: [
      { href: "lernfelder.html", label: "Lernfelder LF1–LF12a" },
      { href: "jahr1.html", label: "Ausbildungsjahr 1" },
      { href: "jahr2.html", label: "Ausbildungsjahr 2" },
      { href: "jahr3.html", label: "Ausbildungsjahr 3" },
      { href: "firma.html", label: "Deine Firma (Praxisszenario)" },
    ],
  },
  {
    label: "Üben",
    group: "ueben",
    items: [
      { href: "training.html", label: "Alle Übungsformate" },
      { href: "quiz.html", label: "Quiz & Challenges" },
      { href: "uebungstools.html", label: "Übungs-Generatoren (Rechnen)" },
      { href: "labor.html", label: "IT-Labor" },
      { href: "lernkarten.html", label: "Lernkarten" },
      { href: "shorts.html", label: "Lern-Snacks" },
    ],
  },
  {
    label: "Prüfung",
    group: "pruefung",
    items: [
      { href: "ap1.html", label: "AP1-Vorbereitung" },
      { href: "ap2.html", label: "AP2-Vorbereitung" },
      { href: "mp.html", label: "Musterprüfungen (Prüfungsformat)" },
    ],
  },
  {
    label: "Fortschritt",
    group: "fortschritt",
    items: [
      { href: "dashboard.html", label: "Dashboard" },
      { href: "lernstand.html", label: "Lernstand & Datensicherung" },
    ],
  },
  NAV_REF,
];
const TRAIN_TABS = [
  { href: "training.html", label: "Übersicht" },
  { href: "quiz.html", label: "Quiz & Challenges" },
  { href: "praxis.html", label: "Terminal & Missionen" },
  { href: "ernstfall.html", label: "Ernstfall-Simulator" },
  { href: "netztrainer.html", label: "Netz & Subnetting" },
  { href: "uebungstools.html", label: "Übungs-Generatoren" },
  { href: "analyse.html", label: "Fehler-Analyse" },
];
const NAV_AE = [
  { href: "index.html", label: "Start" },
  {
    label: "Lernen",
    group: "lernen",
    items: [
      { href: "lernfelder.html", label: "Lernbereiche" },
      { href: "lernfeld.html?id=ae", label: "AE-Bonus: Programmierung & DB" },
    ],
  },
  {
    label: "Üben",
    group: "ueben",
    items: [
      { href: "training.html", label: "Alle Übungsformate" },
      { href: "quiz.html", label: "Quiz & Challenges" },
      { href: "lernkarten.html", label: "Lernkarten" },
    ],
  },
  {
    label: "Prüfung",
    group: "pruefung",
    items: [
      { href: "ap1.html", label: "AP1-Vorbereitung" },
      { href: "ap2ae.html", label: "FIAE-AP2: Fragen-Training" },
      { href: "mp.html", label: "Musterprüfungen (Prüfungsformat)" },
      { href: "lernfeld.html?id=aeap", label: "AE-Aufgabentraining" },
    ],
  },
  {
    label: "Fortschritt",
    group: "fortschritt",
    items: [
      { href: "dashboard.html", label: "Dashboard" },
      { href: "lernstand.html", label: "Lernstand & Datensicherung" },
    ],
  },
  NAV_REF,
];
function specNav() {
  const i = Track.info();
  const pruef = (i.ap1 === false ? [] : [{ href: "ap1.html", label: "AP1-Vorbereitung" }]).concat(
    i.ap ? [{ href: i.ap, label: i.kurz + "-Prüfungstraining" }] : []
  );
  const lern = [{ href: "lernfelder.html", label: "Lernbereiche" }].concat(
    i.bonus ? [{ href: "lernfeld.html?id=" + i.bonus, label: i.kurz + "-Bonus" }] : []
  );
  const nav = [
    { href: "index.html", label: "Start" },
    { label: "Lernen", group: "lernen", items: lern },
    {
      label: "Üben",
      group: "ueben",
      items: [
        { href: "training.html", label: "Alle Übungsformate" },
        { href: "quiz.html", label: "Quiz & Challenges" },
        { href: "lernkarten.html", label: "Lernkarten" },
      ],
    },
  ];
  if (pruef.length) nav.push({ label: "Prüfung", group: "pruefung", items: pruef });
  nav.push({
    label: "Fortschritt",
    group: "fortschritt",
    items: [
      { href: "dashboard.html", label: "Dashboard" },
      { href: "lernstand.html", label: "Lernstand & Datensicherung" },
    ],
  });
  nav.push(NAV_REF);
  return nav;
}
function here() {
  return location.pathname.split("/").pop() || "index.html";
}
function buildHeader() {
  const h = document.getElementById("site-header");
  if (!h) return;
  document.body.dataset.js = "1";
  const cur = here();
  const ae = Track.isAE();
  const tr = Track.get();
  const navList = tr === "fisi" ? NAV : tr === "ae" ? NAV_AE : specNav();
  const link = (n) =>
    `<a href="${n.href}" ${n.href === cur ? 'aria-current="page"' : ""}>${n.label}</a>`;
  const navItem = (n) =>
    n.items
      ? `<div class="nav-more" data-group="${n.group}">
        <button aria-expanded="false" aria-haspopup="true" ${n.items.some((x) => x.href === cur) ? 'class="grp-active"' : ""}>${n.label} &#9662;</button>
        <div class="menu" role="menu">${n.items.map(link).join("")}</div>
      </div>`
      : link(n);
  h.classList.add("gebaut");
  h.innerHTML = `
  <div class="header-in">
    <div class="header-row1">
      <a class="brand" href="index.html"><span class="logo" aria-hidden="true">&gt;_</span> ${Track.info().hq}</a>
      <button class="tool-btn nav-toggle" aria-expanded="false" aria-label="Menü öffnen">&#9776;</button>
      <div class="header-tools">
        <div class="search-wrap">
          <label class="visually-hidden" for="global-search">Suche</label>
          <input id="global-search" type="search" placeholder="Suche… (auch LF3, AP1 …)" autocomplete="off">
          <div class="search-results" role="listbox" aria-label="Suchergebnisse"></div>
        </div>
        <div class="nav-more view-menu track-pick" data-group="fach">
          <button class="tool-btn" aria-expanded="false" aria-haspopup="true" title="Fachrichtung wählen">${Track.info().kurz} &#9662;</button>
          <div class="menu" role="menu">
            ${AKTIVE_TRACKS.map((k) => `<button type="button"class="vm-track"role="menuitemradio"data-track="${k}"aria-checked="${k === tr}">${TRACKS[k].label}</button>`).join("")}
          </div>
        </div>
        <div class="nav-more view-menu" data-group="ansicht">
          <button class="tool-btn" aria-expanded="false" aria-haspopup="true">Ansicht &#9662;</button>
          <div class="menu" role="menu">
            <div class="vm-row"><span>Hell / Dunkel</span><button class="tool-btn theme-toggle" aria-label="Hell-/Dunkelmodus umschalten" title="Hell/Dunkel">&#9681;</button></div>
            <div class="vm-row"><span>Textgröße</span><button class="tool-btn fs-toggle" aria-label="Textgröße umschalten: Standard, Groß, Sehr groß" title="Textgröße">A</button></div>
            <div class="vm-row"><span>Lesbarkeit</span><button class="tool-btn lesbar-toggle" aria-pressed="false" aria-label="Lesbarkeitsmodus umschalten: mehr Zeilen- und Zeichenabstand, kürzere Zeilen" title="Hilft z. B. bei Legasthenie: luftigerer Text">Aus</button></div>
            <div class="vm-row"><span>Hoher Kontrast</span><button class="tool-btn kontrast-toggle" aria-pressed="false" aria-label="Hohen Kontrast umschalten" title="Maximaler Text-/Hintergrund-Kontrast">Aus</button></div>
            <div class="vm-row"><span>Akzentfarbe</span><div class="accent-pick" role="group" aria-label="Akzentfarbe wählen">
              <button class="swatch-blue" data-accent="blue" aria-label="Akzentfarbe Rot" title="Rot"><span></span></button>
              <button class="swatch-blau" data-accent="blau" aria-label="Akzentfarbe Blau" title="Blau"><span></span></button>
              <button class="swatch-gold" data-accent="gold" aria-label="Akzentfarbe Gelbgold" title="Gelbgold"><span></span></button>
            </div></div>
            <div class="vm-row"><span>Lern-Timer</span><span class="timer-set"><input type="number" class="timer-min gap-input" min="1" max="240" value="${Store.get("timerMin", 25)}" aria-label="Zeitlimit in Minuten"> min <button class="tool-btn pomo-btn" aria-label="Lern-Timer mit Zeitlimit starten oder stoppen" title="Timer läuft ab, dann kommt ein Hinweis">Start</button></span></div>
            <div class="vm-row"><span>Hintergrund-Animation</span><button class="tool-btn fx-toggle" aria-label="Animierten Hintergrund ein- oder ausschalten" title="Animierter Hintergrund (nicht bei Quiz und Prüfungen)">${Store.get("fx", true) ? "An" : "Aus"}</button></div>            <div class="vm-row pwa-row" ${pwaLaeuftAlsApp() ? "hidden" : ""}><span>Als App nutzen</span><button class="tool-btn pwa-btn" aria-label="FISI-HQ als App auf diesem Gerät installieren" title="Installiert die Seite als App – ohne Store, direkt vom eigenen Server">Installieren</button></div>            <div class="vm-row"><span>Einführung</span><button class="tool-btn tour-btn" aria-label="Geführte Einführung starten" title="Kurze Tour über die wichtigsten Bereiche – jederzeit abbrechbar">Starten</button></div>
          </div>
        </div>
      </div>
    </div>
    <nav class="main-nav" id="main-nav" aria-label="Hauptnavigation">
      ${navList.map(navItem).join("")}
    </nav>
  </div>`;
  h.querySelector(".theme-toggle").addEventListener("click", toggleTheme);
  h.querySelector(".fs-toggle").addEventListener("click", cycleFontSize);
  h.querySelector(".lesbar-toggle").addEventListener("click", toggleLesbar);
  h.querySelector(".kontrast-toggle").addEventListener("click", toggleKontrast);
  h.querySelector(".pomo-btn").addEventListener("click", pomoToggle);
  const fxBtn = h.querySelector(".fx-toggle");
  if (fxBtn)
    fxBtn.addEventListener("click", () => {
      const on = window.FISI_FX
        ? FISI_FX.toggle()
        : (Store.set("fx", !Store.get("fx", true)), Store.get("fx", true));
      fxBtn.textContent = on ? "An" : "Aus";
      toast("Hintergrund-Animation: " + (on ? "an" : "aus"));
    });
  if (window._pomoIv) clearInterval(window._pomoIv);
  window._pomoIv = setInterval(pomoTick, 1000);
  pomoTick();
  h.querySelectorAll(".track-pick .vm-track, .track-pick > button[data-track]").forEach((b) =>
    b.addEventListener("click", () => setTrack(b.dataset.track))
  );
  h.querySelectorAll(".accent-pick button").forEach((b) =>
    b.addEventListener("click", () => setAccent(b.dataset.accent))
  );
  if (TRAIN_TABS.some((t) => t.href === cur)) {
    const m = document.getElementById("main");
    if (m && !m.querySelector(".train-tabs"))
      m.insertAdjacentHTML(
        "afterbegin",
        '<nav class="train-tabs" aria-label="Trainings-Bereiche">' +
          TRAIN_TABS.map(
            (t) =>
              '<a href="' +
              t.href +
              '"' +
              (t.href === cur ? ' aria-current="page"' : "") +
              ">" +
              t.label +
              "</a>"
          ).join("") +
          "</nav>"
      );
  }
  if (Track.isSpec()) {
    const m = document.getElementById("main");
    if (m && !m.querySelector(".track-note"))
      m.insertAdjacentHTML(
        "afterbegin",
        '<p class="track-note"><strong>' +
          Track.info().kurz +
          "-Modus aktiv.</strong> Gezeigt werden die Inhalte deiner Fachrichtung (" +
          Track.info().label +
          ") plus die berufsübergreifenden Bereiche (WISO, Berufsschule, Zertifikate, AP1). Fachrichtung wechseln: Menü oben rechts.</p>"
      );
  }
  const ehLernstand = (() => {
    try {
      return Object.keys(localStorage).some((k) =>
        /^fisi\.(quizStats|qstats|xp|gami|done|lessonsDone|wrongQueue)/.test(k)
      );
    } catch (e) {
      return false;
    }
  })();
  const ehZu = +(Store.get("ehZu", 0) || 0);
  if (
    !location.pathname.endsWith("lernstand.html") &&
    ehLernstand &&
    Date.now() - ehZu > 14 * 864e5
  ) {
    const hint = document.createElement("div");
    hint.className = "export-hinweis";
    hint.setAttribute("role", "region");
    hint.setAttribute("aria-label", "Hinweis zur Datensicherung");
    hint.innerHTML =
      '<span>Dein Fortschritt wird nur in diesem Browser gespeichert – beim Löschen der Browserdaten ist er weg. <a href="lernstand.html#h-backup">Jetzt per Export sichern</a></span><button type="button" class="eh-zu" aria-label="Hinweis für 14 Tage ausblenden" title="Hinweis für 14 Tage ausblenden">✗</button>';
    h.after(hint);
    hint.querySelector(".eh-zu").addEventListener("click", () => {
      Store.set("ehZu", Date.now());
      hint.remove();
    });
  }
  const burger = h.querySelector(".nav-toggle");
  burger.setAttribute("aria-controls", "mobile-overlay");
  buildMobileOverlay(navList, cur);
  burger.addEventListener("click", () => toggleMobileOverlay(true));
  const drops = [...h.querySelectorAll(".nav-more")];
  const closeAll = (except) =>
    drops.forEach((dr) => {
      if (dr !== except) {
        dr.querySelector(".menu").classList.remove("open");
        dr.querySelector("button").setAttribute("aria-expanded", "false");
      }
    });
  drops.forEach((dr) => {
    const btn = dr.querySelector(":scope>button"),
      menu = dr.querySelector(".menu");
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeAll(dr);
      const oeffnen = !menu.classList.contains("open");
      btn.setAttribute("aria-expanded", oeffnen);
      if (!oeffnen) {
        menu.classList.remove("open");
        return;
      }
      menu.style.left = "";
      menu.style.right = "";
      menu.style.visibility = "hidden";
      menu.classList.add("open");
      const r = menu.getBoundingClientRect();
      if (r.right > window.innerWidth - 8) {
        menu.style.left = "auto";
        menu.style.right = "0";
      } else if (r.left < 8) {
        menu.style.left = "0";
        menu.style.right = "auto";
      }
      menu.classList.remove("open");
      void menu.offsetWidth;
      menu.style.visibility = "";
      menu.classList.add("open");
    });
    if (dr.classList.contains("view-menu"))
      menu.addEventListener("click", (e) => e.stopPropagation());
  });
  document.addEventListener("click", () => closeAll(null));
  initSearch(h);
  syncHeaderTools();
}
function toggleMobileOverlay(open) {
  const ov = document.getElementById("mobile-overlay"),
    burger = document.querySelector(".nav-toggle");
  if (!ov) return;
  ov.hidden = !open;
  document.body.classList.toggle("no-scroll", open);
  if (burger) burger.setAttribute("aria-expanded", open);
  if (open) {
    const c = ov.querySelector(".mo-close");
    if (c) c.focus();
    pomoTick();
    syncHeaderTools();
  }
}
function buildMobileOverlay(navList, cur) {
  const old = document.getElementById("mobile-overlay");
  if (old) old.remove();
  const ov = document.createElement("div");
  ov.id = "mobile-overlay";
  ov.className = "mobile-overlay";
  ov.setAttribute("role", "dialog");
  ov.setAttribute("aria-modal", "true");
  ov.setAttribute("aria-label", "Menü");
  ov.hidden = true;
  const link = (n) =>
    `<a href="${n.href}" ${n.href === cur ? 'aria-current="page"' : ""}>${n.label}</a>`;
  ov.innerHTML = `
  <div class="mo-head">
    <span class="brand"><span class="logo" aria-hidden="true">&gt;_</span> ${Track.isAE() ? "FIAE-HQ" : "FISI-HQ"}</span>
    <button type="button" class="mo-close" aria-label="Menü schließen">Schließen ✗</button>
  </div>
  <div class="mo-search">
    <label class="visually-hidden" for="mo-search-in">Suche</label>
    <input id="mo-search-in" type="search" placeholder="Suche… (auch LF3, AP1 …)" autocomplete="off">
    <div class="search-results" role="listbox" aria-label="Suchergebnisse"></div>
  </div>
  <nav class="mo-nav" aria-label="Hauptnavigation (mobil)">${navList.map((n) => (n.items ? `<span class="mo-sec"style="grid-column:1/-1">${n.label}</span>` + n.items.map(link).join("") : link(n))).join("")}</nav>
  <div class="mo-sec">Einstellungen</div>
  <div class="mo-tools">
    <button type="button" class="tool-btn theme-toggle" aria-label="Hell-/Dunkelmodus umschalten">&#9681;</button>
    <div class="accent-pick" role="group" aria-label="Akzentfarbe wählen">
      <button class="swatch-blue" data-accent="blue" aria-label="Akzentfarbe Rot"><span></span></button>
      <button class="swatch-blau" data-accent="blau" aria-label="Akzentfarbe Blau"><span></span></button>
      <button class="swatch-gold" data-accent="gold" aria-label="Akzentfarbe Gelbgold"><span></span></button>
    </div>
    <button type="button" class="tool-btn fs-toggle" aria-label="Textgröße umschalten">A</button>
    <button type="button" class="tool-btn lesbar-toggle" aria-pressed="false" aria-label="Lesbarkeitsmodus umschalten">Lesbarkeit</button>
    <button type="button" class="tool-btn kontrast-toggle" aria-pressed="false" aria-label="Hohen Kontrast umschalten">Kontrast</button>
    <div class="track-pick" role="group" aria-label="Fachrichtung wählen">
      ${AKTIVE_TRACKS.map((k) => `<button type="button"data-track="${k}">${TRACKS[k].kurz}</button>`).join("")}
    </div>
    <button type="button" class="tool-btn pomo-btn" aria-label="Fokus-Timer starten oder stoppen">Fokus</button>
  </div>`;
  document.body.appendChild(ov);
  ov.querySelector(".mo-close").addEventListener("click", () => toggleMobileOverlay(false));
  ov.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      toggleMobileOverlay(false);
      return;
    }
    if (e.key === "Tab") {
      const focusable = ov.querySelectorAll(
        'a, button, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0],
        last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
  ov.querySelectorAll(".mo-nav a").forEach((x) =>
    x.addEventListener("click", () => toggleMobileOverlay(false))
  );
  wireSearch(ov.querySelector("#mo-search-in"), ov.querySelector(".search-results"));
  ov.querySelector(".theme-toggle").addEventListener("click", toggleTheme);
  ov.querySelector(".fs-toggle").addEventListener("click", cycleFontSize);
  ov.querySelector(".lesbar-toggle").addEventListener("click", toggleLesbar);
  ov.querySelector(".kontrast-toggle").addEventListener("click", toggleKontrast);
  ov.querySelector(".pomo-btn").addEventListener("click", pomoToggle);
  ov.querySelectorAll(".track-pick button").forEach((b) =>
    b.addEventListener("click", () => setTrack(b.dataset.track))
  );
  ov.querySelectorAll(".accent-pick button").forEach((b) =>
    b.addEventListener("click", () => setAccent(b.dataset.accent))
  );
}
function syncHeaderTools() {
  const theme = Store.get("theme", SYSTEM_THEME),
    accent = Store.get("accent", "blue");
  document
    .querySelectorAll(".accent-pick button")
    .forEach((b) => b.setAttribute("aria-pressed", b.dataset.accent === accent));
  document.querySelectorAll(".track-pick button[data-track]").forEach((b) => {
    b.setAttribute("aria-pressed", b.dataset.track === Track.get());
    if (b.classList.contains("vm-track"))
      b.setAttribute("aria-checked", b.dataset.track === Track.get());
  });
  const f = String(Store.get("fontsize", "0"));
  document.querySelectorAll(".fs-toggle").forEach((fsb) => {
    fsb.textContent = f === "1" ? "A+" : f === "2" ? "A++" : "A";
  });
  const lb = Store.get("lesbar", "0") === "1",
    kt = Store.get("kontrast", SYSTEM_KONTRAST) === "1";
  document.querySelectorAll(".lesbar-toggle").forEach((b) => {
    b.setAttribute("aria-pressed", lb);
    if (b.closest(".vm-row")) b.textContent = lb ? "An" : "Aus";
  });
  document.querySelectorAll(".kontrast-toggle").forEach((b) => {
    b.setAttribute("aria-pressed", kt);
    if (b.closest(".vm-row")) b.textContent = kt ? "An" : "Aus";
  });
  document.querySelectorAll(".theme-toggle").forEach((tt) => {
    tt.innerHTML = theme === "dark" ? "&#9728;" : "&#9789;";
  });
}
if (
  "serviceWorker" in navigator &&
  (location.protocol === "https:" || ["localhost", "127.0.0.1"].includes(location.hostname))
) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
window.MERKHILFEN = [
  {
    t: "OSI-Schichten (1→7)",
    txt: "„<strong>A</strong>lle <strong>d</strong>eutschen <strong>S</strong>tudenten <strong>t</strong>rinken <strong>v</strong>erschiedene <strong>S</strong>orten <strong>B</strong>ier“ – von Schicht 7 nach 1 gelesen: Anwendung, Darstellung, Sitzung, Transport, Vermittlung, Sicherung, Bitübertragung.",
    lessons: ["l103"],
    lf: ["lf3"],
  },
  {
    t: "Geräte je OSI-Schicht",
    txt: "Schicht 1 = Repeater/Hub, Schicht 2 = Switch (MAC), Schicht 3 = Router (IP). Merksatz: „<strong>H</strong>ub <strong>S</strong>chiebt <strong>R</strong>auf“ – je schlauer das Gerät, desto höher die Schicht.",
    lessons: ["l103", "l203"],
    lf: ["lf3"],
  },
  {
    t: "DHCP-Ablauf",
    txt: "<strong>DORA</strong>: Discover, Offer, Request, Acknowledge – der Client ruft, der Server bietet, der Client nimmt, der Server bestätigt.",
    lessons: ["l202"],
    lf: ["lf9", "lf10a"],
  },
  {
    t: "Backup-Grundregel",
    txt: "<strong>3-2-1</strong>: 3 Kopien, auf 2 verschiedenen Medientypen, 1 davon extern/offline. Und: Ein Restore-Test pro Quartal, sonst ist es Hoffnung statt Backup.",
    lessons: ["l204"],
    lf: ["lf4", "lf11a"],
  },
  {
    t: "Differenziell vs. inkrementell",
    txt: "<strong>DIFF</strong>erenziell = Differenz zur letzten <strong>VOLL</strong>sicherung (wächst täglich). <strong>INKR</strong>ementell = nur seit der <strong>letzten Sicherung</strong> (klein, aber Restore braucht die ganze Kette).",
    lessons: ["l204"],
    lf: ["lf4"],
  },
  {
    t: "Schutzziele",
    txt: "<strong>VIV</strong> (deutsch) bzw. <strong>CIA</strong> (englisch): Vertraulichkeit/Confidentiality, Integrität/Integrity, Verfügbarkeit/Availability.",
    lessons: [],
    lf: ["lf4"],
  },
  {
    t: "SMART-Ziele",
    txt: "<strong>S</strong>pezifisch, <strong>M</strong>essbar, <strong>A</strong>ttraktiv/akzeptiert, <strong>R</strong>ealistisch, <strong>T</strong>erminiert – jedes Projektziel muss alle fünf erfüllen.",
    lessons: ["l304"],
    lf: ["lf1", "lf12a"],
  },
  {
    t: "Lastenheft vs. Pflichtenheft",
    txt: "Der Kunde ver<strong>LAST</strong>et, WAS er will (Lastenheft). Der Auftragnehmer ver<strong>PFLICHT</strong>et sich, WIE er es umsetzt (Pflichtenheft). Reihenfolge: erst Lasten, dann Pflichten.",
    lessons: ["l304"],
    lf: ["lf2", "lf12a"],
  },
  {
    t: "Private IPv4-Bereiche",
    txt: "<strong>10</strong>.0.0.0/8 · <strong>172.16</strong>–31.x.x/12 · <strong>192.168</strong>.x.x/16 (RFC 1918) – Merkzahl „10-172-192“, alles andere ist öffentlich.",
    lessons: ["l104"],
    lf: ["lf3"],
  },
  {
    t: "Subnetz-Sprünge",
    txt: "Blockgrößen im letzten Oktett: <strong>128 · 64 · 32 · 16 · 8 · 4 · 2</strong>. Netzadressen springen immer im Blockgrößen-Takt: /26 → 0, 64, 128, 192.",
    lessons: ["l201", "l104"],
    lf: ["lf3", "lf9"],
  },
  {
    t: "RAID-5-Nettokapazität",
    txt: "(n − 1) × Plattengröße – „eine Platte zahlt die Parität“. RAID 6: (n − 2), RAID 1: die Hälfte.",
    lessons: ["l204", "l305"],
    lf: ["lf3", "lf11a"],
  },
  {
    t: "T568B-Auflegereihenfolge",
    txt: "„<strong>Blau wohnt in der Mitte (4/5), Braun ganz rechts (7/8)</strong>“ – B beginnt mit weiß-orange/orange, A mit weiß-grün/grün. Nur Orange- und Grün-Paar tauschen zwischen A und B.",
    lessons: ["l205"],
    lf: ["lf2", "lf3"],
  },
  {
    t: "Cloud-Servicemodelle",
    txt: "Je mehr „aaS“, desto weniger Arbeit: <strong>IaaS</strong> (du pflegst OS + Software), <strong>PaaS</strong> (nur deine Anwendung), <strong>SaaS</strong> (nur noch benutzen).",
    lessons: ["l302"],
    lf: ["lf11a"],
  },
  {
    t: "MTBF & MTTR",
    txt: "<strong>MTBF</strong> = Zeit <strong>B</strong>is zum nächsten Fehler (je größer, desto besser). <strong>MTTR</strong> = Zeit <strong>T</strong>o <strong>R</strong>epair (je kleiner, desto besser). Verfügbarkeit = MTBF / (MTBF + MTTR).",
    lessons: ["l301"],
    lf: ["lf11a"],
  },
];
window.merkFuer = function (opts) {
  return (window.MERKHILFEN || []).filter(
    (m) => (opts.lesson && m.lessons.includes(opts.lesson)) || (opts.lf && m.lf.includes(opts.lf))
  );
};
function dailyJoke() {
  if (!window.WITZE || !window.DailyTask) return "";
  return WITZE[DailyTask.seed("witz") % WITZE.length];
}
let pwaPrompt = null;
const pwaLaeuftAlsApp = () =>
  (window.matchMedia && matchMedia("(display-mode: standalone)").matches) ||
  navigator.standalone === true;
function pwaRowsAktualisieren() {
  document.querySelectorAll(".pwa-row").forEach((r) => {
    r.hidden = pwaLaeuftAlsApp();
  });
}
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  pwaPrompt = e;
  pwaRowsAktualisieren();
});
window.addEventListener("appinstalled", () => {
  pwaPrompt = null;
  document.querySelectorAll(".pwa-row").forEach((r) => {
    r.hidden = true;
  });
  toast("FISI-HQ ist jetzt als App installiert.");
});
document.addEventListener("click", (e) => {
  if (e.target.closest(".tour-btn")) Tour.start();
});
document.addEventListener("click", async (e) => {
  if (!e.target.closest(".pwa-btn")) return;
  if (pwaPrompt) {
    const p = pwaPrompt;
    pwaPrompt = null;
    try {
      p.prompt();
      const wahl = await p.userChoice;
      if (wahl && wahl.outcome !== "accepted")
        toast("Kein Problem – der Knopf bleibt da, falls du es dir anders überlegst.");
    } catch (err) {
      toast(
        "Installation gerade nicht möglich – über das Browser-Menü geht es immer: „App installieren“."
      );
    }
    return;
  }
  if (pwaLaeuftAlsApp()) {
    toast("FISI-HQ läuft bereits als App.");
    return;
  }
  const ua = navigator.userAgent;
  toast(
    /iPhone|iPad/.test(ua)
      ? "iOS: Teilen-Symbol → „Zum Home-Bildschirm“ – dann läuft FISI-HQ als App."
      : /Firefox/.test(ua)
        ? "Firefox unterstützt die App-Installation am Desktop nicht – am Handy: Menü → „Zum Startbildschirm hinzufügen“."
        : "Browser-Menü (⋮) → „App installieren“ bzw. Install-Symbol in der Adressleiste – dann läuft FISI-HQ als App."
  );
});
const APP_VERSION = "0.19.0 · Build d712778e803e · 2026-09-23";
function buildFooter() {
  const f = document.getElementById("site-footer");
  if (!f) return;
  f.className = "site-footer";
  f.innerHTML = `<div class="footer-in">
    <div><strong>FISI-HQ</strong> · Lernplattform Fachinformatik Systemintegration · Alle Fortschrittsdaten bleiben lokal in deinem Browser (kein Tracking, kein Server). <span class="small-dim" title="Geladene Version – ändert sich mit jedem Release-Build">Version: ${APP_VERSION}</span></div>
    <div><a href="lernfelder.html">Lernfelder</a> · <a href="glossar.html">Glossar</a> · <a href="quellen.html">Quellen &amp; Lizenzen</a> · <a href="impressum.html">Impressum</a> · <a href="datenschutz.html">Datenschutz</a></div>
    <div class="footer-ki">KI-Hinweis: Die Lerninhalte dieser Plattform wurden mit Unterstützung künstlicher Intelligenz erstellt (Kennzeichnung gemäß Art. 50 EU-KI-Verordnung). Inhaltsstand: 08/2026 · Angaben ohne Gewähr – bitte melde Fehler. <a href="quellen.html#ki-transparenz">Mehr erfahren</a></div>
  </div>
  <div class="footer-joke"><span class="fj-label">Nerd-Witz des Tages</span><span class="fj-text">${dailyJoke()}</span><button type="button" class="fj-more" aria-label="Noch einen Witz anzeigen">Noch einer</button></div>`;
  const fjBtn = f.querySelector(".fj-more"),
    fjText = f.querySelector(".fj-text"),
    fjLabel = f.querySelector(".fj-label");
  if (fjBtn)
    fjBtn.addEventListener("click", () => {
      fjLabel.textContent = "Nerd-Witz";
      let w = fjText.textContent;
      while (w === fjText.textContent) w = WITZE[Math.floor(Math.random() * WITZE.length)];
      fjText.textContent = w;
    });
}
function searchIndex() {
  const idx = [];
  if (!window.DATA) return idx;
  DATA.lessons.forEach((l) =>
    idx.push({
      t: l.title,
      s: "Lektion · Jahr " + l.year,
      href: "lektion.html?id=" + l.id,
      k: (l.title + " " + l.tags.join(" ") + " " + (l.lf || []).join(" ")).toLowerCase(),
    })
  );
  DATA.glossary.forEach((g) =>
    idx.push({
      t: g.term,
      s: "Glossar",
      href: "glossar.html?q=" + encodeURIComponent(g.term),
      k: (g.term + " " + g.simple).toLowerCase(),
    })
  );
  NAV.flatMap((n) => n.items || [n]).forEach((n) =>
    idx.push({ t: n.label, s: "Seite", href: n.href, k: n.label.toLowerCase() })
  );
  TRAIN_TABS.filter((t) => t.href !== "training.html").forEach((t) =>
    idx.push({ t: t.label, s: "Training", href: t.href, k: t.label.toLowerCase() })
  );
  [
    ["ap1", "AP1 – Bogen A (Physiotherapie-Praxis)"],
    ["ap1b", "AP1 – Bogen B (Steuerkanzlei)"],
    ["ap1c", "AP1 – Bogen C (Eventtechnik)"],
    ["ap2si", "FISI AP2 – Bogen A"],
    ["ap2sib", "FISI AP2 – Bogen B (Spedition)"],
    ["ap2ga1", "FISI AP2 – GA1 Konzeption & Administration"],
    ["ap2ga2", "FISI AP2 – GA2 Netzwerkanalyse"],
    ["ap2ae", "FIAE AP2 – Bogen A"],
    ["wiso", "WiSo – Bogen A"],
    ["wisob", "WiSo – Bogen B"],
    ["wisoc", "WiSo – Bogen C"],
    ["wisod", "WiSo – Bogen D"],
    ["wisoe", "WiSo – Bogen E"],
    ["wisof", "WiSo – Bogen F"],
    ["wisog", "WiSo – Bogen G"],
  ].forEach(([id, t]) =>
    idx.push({
      t: "Musterprüfung " + t,
      s: "Prüfung",
      href: "mp.html?id=" + id,
      k: ("musterprüfung prüfungsbogen " + t).toLowerCase(),
    })
  );
  [
    ["zahlen", "Zahlensysteme"],
    ["subnetz", "Subnetting (FLSM)"],
    ["vlsm", "Subnetting (VLSM)"],
    ["ipv6", "IPv6 kürzen & ausschreiben"],
    ["durchsatz", "Durchsatz & Übertragungszeit"],
    ["netzplan", "Netzplan (Vorgangsknoten)"],
    ["kalk", "Bezugskalkulation & AfA"],
    ["usvklima", "USV & Klima (Serverraum)"],
    ["zuschlag", "Zuschlagskalkulation"],
    ["lwl", "LWL-Dämpfungsbudget"],
    ["buchung", "Buchungssätze"],
    ["ablauf", "Struktogramm-Trace"],
    ["uml", "UML-Beziehungen"],
  ].forEach(([id, t]) =>
    idx.push({
      t: "Generator: " + t,
      s: "Training",
      href: "uebungstools.html#gen-" + id,
      k: ("generator übung " + t).toLowerCase(),
    })
  );
  idx.push({
    t: "Werkzeug: Zahlen- & Einheiten-Umrechner",
    s: "Training",
    href: "uebungstools.html#werkzeuge",
    k: "umrechner hex binär dezimal bit byte werkzeug rechner",
  });
  idx.push({
    t: "Werkzeug: Subnetz- & VLSM-Rechner",
    s: "Training",
    href: "netztrainer.html#rechner",
    k: "subnetzrechner vlsm rechner werkzeug netzadresse broadcast",
  });
  idx.push({
    t: "Themenfinder: Projektthema wählen",
    s: "Prüfung",
    href: "ap2.html#themenfinder",
    k: "themenfinder projektarbeit projektthema praktikum thema abschlussprojekt antrag ideen",
  });
  if (window.LF_INDEX) {
    LF_INDEX.fields.forEach((f) =>
      idx.push({
        t: f.nr + " – " + f.name,
        s: f.type === "lf" ? "Lernfeld · Jahr " + f.year : "Zusatzbereich",
        href: "lernfeld.html?id=" + f.id,
        k: (
          f.id +
          " " +
          f.nr +
          " lernfeld " +
          f.nr.replace(/\D/g, "") +
          " " +
          f.name +
          " " +
          f.schoolTitles.join(" ") +
          " " +
          f.ap
        ).toLowerCase(),
      })
    );
    LF_INDEX.lessonsIdx.forEach((l) =>
      idx.push({
        t: l.t,
        s: "Lektion · " + l.lf.toUpperCase(),
        href: "lernfeld.html?id=" + l.lf + "#" + l.id,
        k: (l.t + " " + l.lf + " lernfeld").toLowerCase(),
      })
    );
  }
  return idx;
}
function levDist(a, b, max) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prev = [],
    cur = [];
  for (let j = 0; j <= b.length; j++) prev[j] = j;
  for (let i = 1; i <= a.length; i++) {
    cur[0] = i;
    let best = i;
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      if (cur[j] < best) best = cur[j];
    }
    if (best > max) return max + 1;
    const t = prev;
    prev = cur;
    cur = t;
  }
  return prev[b.length];
}
function wireSearch(inp, box) {
  let idx = null;
  inp.addEventListener("input", () => {
    if (!idx) idx = searchIndex();
    const q = inp.value.trim().toLowerCase();
    if (q.length < 2) {
      box.classList.remove("open");
      return;
    }
    const terms = q.split(/\s+/);
    let hits = idx.filter((e) => terms.every((t) => e.k.includes(t))).slice(0, 9);
    let unscharf = false;
    if (!hits.length && q.length >= 4) {
      const maxD = (t) => (t.length >= 6 ? 2 : 1);
      const scored = [];
      for (const e of idx) {
        let sum = 0,
          ok = true;
        for (const t of terms) {
          if (e.k.includes(t)) continue;
          if (t.length < 3) {
            ok = false;
            break;
          }
          let best = maxD(t) + 1;
          for (const w of e.k.split(/[^a-z0-9äöüß]+/)) {
            if (!w) continue;
            const d = levDist(
              t,
              w.length > t.length + maxD(t) ? w.slice(0, t.length + maxD(t)) : w,
              maxD(t)
            );
            if (d < best) {
              best = d;
              if (!best) break;
            }
          }
          if (best > maxD(t)) {
            ok = false;
            break;
          }
          sum += best;
        }
        if (ok) scored.push([sum, e]);
      }
      hits = scored
        .sort((a, b) => a[0] - b[0])
        .slice(0, 6)
        .map((x) => x[1]);
      unscharf = hits.length > 0;
    }
    box.innerHTML = hits.length
      ? (unscharf
          ? '<div class="empty" style="padding:8px 10px 2px;font-size:.78rem;color:var(--tx3)">Keine exakten Treffer – meintest du:</div>'
          : "") +
        hits
          .map(
            (e) => `<a href="${e.href}"><div class="t">${e.t}</div><div class="s">${e.s}</div></a>`
          )
          .join("")
      : '<div class="empty" style="padding:10px">Keine Treffer.</div>';
    box.classList.add("open");
  });
  box.addEventListener("mousedown", (e) => {
    const a = e.target.closest("a");
    if (!a || e.button !== 0) return;
    e.preventDefault();
    location.href = a.getAttribute("href");
  });
  inp.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      box.classList.remove("open");
      return;
    }
    if (e.key === "Enter" && box.classList.contains("open")) {
      const l = box.querySelector("a");
      if (l) {
        e.preventDefault();
        location.href = l.getAttribute("href");
      }
      return;
    }
    if (e.key === "ArrowDown" && box.classList.contains("open")) {
      const l = box.querySelector("a");
      if (l) {
        e.preventDefault();
        l.focus();
      }
    }
  });
  box.addEventListener("keydown", (e) => {
    const links = [...box.querySelectorAll("a")];
    const akt = links.indexOf(document.activeElement);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      (links[akt + 1] || links[0]).focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (akt <= 0) inp.focus();
      else links[akt - 1].focus();
    } else if (e.key === "Escape") {
      box.classList.remove("open");
      inp.focus();
    }
  });
}
function initSearch(h) {
  const inp = h.querySelector("#global-search"),
    box = h.querySelector(".search-results");
  wireSearch(inp, box);
  document.addEventListener("click", (e) => {
    if (!h.querySelector(".search-wrap").contains(e.target)) box.classList.remove("open");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "/" || e.ctrlKey || e.altKey || e.metaKey) return;
    const a = document.activeElement;
    if (
      a &&
      (a.tagName === "INPUT" ||
        a.tagName === "TEXTAREA" ||
        a.tagName === "SELECT" ||
        a.isContentEditable)
    )
      return;
    if (!inp.offsetParent) return;
    e.preventDefault();
    inp.focus();
    inp.select();
  });
}
function breadcrumbs(items) {
  const el = document.querySelector(".breadcrumbs");
  if (!el) return;
  el.innerHTML = ['<a href="index.html">Start</a>']
    .concat(
      items.map((i) =>
        i.href
          ? `<a href="${i.href}">${i.label}</a>`
          : `<span aria-current="page">${i.label}</span>`
      )
    )
    .join(" › ");
}
const LF = {
  cache: {},
  meta(fid) {
    return window.LF_INDEX ? LF_INDEX.fields.find((f) => f.id === fid) : null;
  },
  mergeExtra(fid, content) {
    const ex = window.LF_EXTRA_CONTENT && window.LF_EXTRA_CONTENT[fid];
    if (ex && content && !content._extraMerged) {
      content.topics = (content.topics || []).concat(ex.topics || []);
      content._extraMerged = true;
    }
    return content;
  },
  load(fid) {
    if (window.LF_CONTENT && window.LF_CONTENT[fid])
      return Promise.resolve(this.mergeExtra(fid, window.LF_CONTENT[fid]));
    if (this.cache[fid]) return this.cache[fid];
    this.cache[fid] = new Promise((res, rej) => {
      const s = document.createElement("script");
      s.src = "assets/data/lf-" + String(fid).replace(/[^a-z0-9]/gi, "") + ".js";
      s.onload = () =>
        window.LF_CONTENT && window.LF_CONTENT[fid]
          ? res(LF.mergeExtra(fid, window.LF_CONTENT[fid]))
          : rej(new Error("Datenmodul leer oder ungültig: " + fid));
      s.onerror = () => rej(new Error("Datenmodul nicht ladbar: " + fid));
      document.head.appendChild(s);
    });
    return this.cache[fid];
  },
  questions(fid, content) {
    const out = [];
    (content.topics || []).forEach((t) =>
      t.lessons.forEach((l) =>
        l.quiz.forEach((q) =>
          out.push(
            Object.assign(
              {
                type: "single",
                topic: t.title,
                lf: [fid],
                rel: "med",
                diff: "mittel",
                xp: 8,
                srcType: "import",
                lesson: l.id,
              },
              q
            )
          )
        )
      )
    );
    return out;
  },
  baseQuestions(fid) {
    return DATA.quiz.concat(DATA.ap1exam, DATA.ap2exam).filter((q) => (q.lf || []).includes(fid));
  },
  read(fid) {
    return Store.get("lfRead", {})[fid] || [];
  },
  markRead(fid, lessonId) {
    const r = Store.get("lfRead", {});
    r[fid] = r[fid] || [];
    if (!r[fid].includes(lessonId)) {
      r[fid].push(lessonId);
      Store.set("lfRead", r);
    }
  },
  stats(fid) {
    const qs_ = QStats.all();
    let answered = 0,
      ok = 0,
      openWrong = 0,
      okQ = 0;
    Object.values(qs_).forEach((s) => {
      if ((s.lf || []).includes(fid)) {
        answered += s.tries;
        ok += s.ok;
        if (s.ok > 0 && s.status !== "offen") okQ++;
        if (s.wrong > 0 && s.status !== "gelernt") openWrong++;
      }
    });
    return { answered, ok, okQ, openWrong, pct: answered ? Math.round((ok / answered) * 100) : 0 };
  },
  status(fid) {
    const m = this.meta(fid);
    if (!m) return "noch nicht begonnen";
    const read = this.read(fid).length,
      s = this.stats(fid);
    if (!read && !s.answered) return "noch nicht begonnen";
    if (s.openWrong > 0) return "in Wiederholung";
    if (read >= m.lessons && s.answered >= 10 && s.pct >= 80) return "abgeschlossen";
    if (s.answered >= 10 && s.pct >= 70) return "prüfungsbereit";
    return "begonnen";
  },
  progressPct(fid) {
    const m = this.meta(fid);
    if (!m || !m.lessons) return 0;
    const read = Math.min(this.read(fid).length, m.lessons);
    const s = this.stats(fid);
    const qPart = Math.min(1, s.answered / Math.max(10, Math.round(m.quiz * 0.1)));
    return Math.round(((read / m.lessons) * 0.6 + qPart * 0.4) * 100);
  },
};
const QStats = {
  all() {
    return Store.get("qstats", {});
  },
  record(q, ok) {
    const s = this.all();
    const e = s[q.id] || {
      tries: 0,
      ok: 0,
      wrong: 0,
      lf: q.lf || [],
      topic: q.topic || "",
      diff: q.diff || "mittel",
      cat: "",
    };
    e.tries++;
    ok ? e.ok++ : e.wrong++;
    e.last = Date.now();
    e.lf = q.lf || e.lf;
    e.topic = q.topic || e.topic;
    if (ok) {
      e.stufe = Math.min((e.stufe || 0) + 1, 7);
      const tage = [1, 1, 3, 7, 14, 30, 60, 120][e.stufe];
      e.due = Date.now() + tage * 864e5;
      e.status = e.wrong > 0 && e.ok >= 2 ? "gelernt" : "ok";
    } else {
      e.stufe = 0;
      e.due = Date.now();
      e.status = "offen";
      e.cat = q.mistakeCat || (q.type === "gap" ? "Rechenweg" : "Verwechslung");
    }
    s[q.id] = e;
    Store.set("qstats", s);
  },
  due() {
    const now = Date.now();
    return Object.entries(this.all())
      .filter(([, e]) => e.status === "offen" || (e.due && e.due <= now))
      .map(([id]) => id);
  },
  plan() {
    const now = Date.now(),
      tag = 864e5;
    let heute = 0,
      morgen = 0,
      woche = 0;
    Object.values(this.all()).forEach((e) => {
      if (!e.due) return;
      if (e.status === "offen" || e.due <= now) heute++;
      else if (e.due <= now + tag) morgen++;
      else if (e.due <= now + 7 * tag) woche++;
    });
    return { heute, morgen, woche };
  },
  faelligeMitQueue() {
    return [...new Set(Progress.wrongQueue().concat(this.due()))];
  },
};
window.QStats = QStats;
window.DailyTask = {
  date() {
    return new Date().toISOString().slice(0, 10);
  },
  seed(extra) {
    let h = 0;
    const str = this.date() + (extra || "");
    for (const ch of str) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    return h;
  },
  lf() {
    if (!window.LF_INDEX) return null;
    let fields = (window.trackFields ? trackFields(LF_INDEX.fields) : LF_INDEX.fields).filter(
      (f) => !f.placeholder && f.quiz > 0
    );
    if (!Track.isSpec()) fields = fields.filter((f) => f.type === "lf");
    return fields.length ? fields[this.seed("lf") % fields.length] : null;
  },
  done() {
    return Store.get("dailyDone", "") === this.date();
  },
};
function dailySeedShuffle(arr) {
  const seedStr = new Date().toISOString().slice(0, 10);
  let seed = 0;
  for (const ch of seedStr) seed = (seed * 31 + ch.charCodeAt(0)) >>> 0;
  const rnd = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296;
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function renderQuestion(q, host, opts = {}) {
  host.innerHTML = "";
  const wrap = document.createElement("div");
  const relBadge =
    q.rel === "high"
      ? '<span class="badge hot">Sehr prüfungsrelevant</span>'
      : q.rel === "med"
        ? '<span class="badge ap">Prüfungsrelevant</span>'
        : "";
  const lfBadge =
    q.lf && q.lf.length && window.LF_INDEX
      ? q.lf
          .map((f) => {
            const m = LF.meta(f);
            return m
              ? `<a class="badge" href="lernfeld.html?id=${f}" style="text-decoration:none">${m.nr}</a>`
              : "";
          })
          .join("")
      : "";
  wrap.innerHTML = `<div class="q-meta"><span class="badge">${q.topic}</span>${relBadge}${lfBadge}</div>
    <div class="q-title">${q.q}</div><div class="q-body"></div><div class="q-actions"></div>`;
  host.appendChild(wrap);
  const body = wrap.querySelector(".q-body"),
    actions = wrap.querySelector(".q-actions");
  let answered = false;
  function finish(ok, chosenText) {
    if (answered) return;
    answered = true;
    Progress.quizStat(q.topic, ok);
    QStats.record(q, ok);
    if (ok) {
      Gami.addXp(q.xp || 10, "Richtige Antwort");
      Progress.resolveWrong(q.id);
    } else Progress.pushWrong(q.id);
    Gami.checkBadges();
    const fb = document.createElement("div");
    fb.className = "q-feedback " + (ok ? "good" : "bad");
    fb.setAttribute("role", "status");
    let html = ok
      ? `<strong>Richtig!</strong> ${q.explain}`
      : `<strong>Leider falsch.</strong> ${q.explain}` +
        (q.mistake ? `<p><strong>Typischer Denkfehler:</strong> ${q.mistake}</p>` : "") +
        (q.hint ? `<p><strong>Hinweis:</strong> ${q.hint}</p>` : "");
    fb.innerHTML = html;
    wrap.appendChild(fb);
    if (!ok && q.simpler && opts.showSimpler !== false) {
      const btn = document.createElement("button");
      btn.className = "btn ghost small";
      btn.textContent = "Vereinfachte Teilaufgabe anzeigen";
      btn.addEventListener("click", () => {
        btn.remove();
        const s = document.createElement("div");
        s.className = "callout simple";
        s.innerHTML = `<span class="ct">Schritt für Schritt</span>${q.simpler}`;
        fb.appendChild(s);
      });
      fb.appendChild(btn);
    }
    if (opts.onAnswered) opts.onAnswered(ok);
  }
  if (q.type === "single" || q.type === "mc") {
    const multi = q.type === "mc" && Array.isArray(q.correct);
    const list = document.createElement("div");
    list.className = "q-opts";
    list.setAttribute("role", "group");
    const chosen = new Set();
    const optEl = (i) => list.querySelector('.q-opt[data-i="' + i + '"]');
    shuffle(q.options.map((o, i) => i)).forEach((i) => {
      const o = q.options[i];
      const b = document.createElement("button");
      b.type = "button";
      b.className = "q-opt";
      b.dataset.i = i;
      b.innerHTML = o;
      b.setAttribute("aria-pressed", "false");
      b.addEventListener("click", () => {
        if (answered) return;
        if (multi) {
          chosen.has(i) ? chosen.delete(i) : chosen.add(i);
          b.setAttribute("aria-pressed", chosen.has(i));
        } else {
          const ok = i === q.correct;
          b.classList.add(ok ? "correct" : "wrong");
          optEl(q.correct).classList.add("correct");
          finish(ok);
        }
      });
      list.appendChild(b);
    });
    body.appendChild(list);
    if (multi) {
      const ok_btn = document.createElement("button");
      ok_btn.className = "btn small";
      ok_btn.textContent = "Antwort prüfen";
      ok_btn.addEventListener("click", () => {
        if (answered) return;
        const ok = q.correct.length === chosen.size && q.correct.every((c) => chosen.has(c));
        q.correct.forEach((c) => optEl(c).classList.add("correct"));
        chosen.forEach((c) => {
          if (!q.correct.includes(c)) optEl(c).classList.add("wrong");
        });
        finish(ok);
      });
      actions.appendChild(ok_btn);
      const hintEl = document.createElement("span");
      hintEl.className = "q-progress";
      hintEl.textContent = "Mehrfachauswahl möglich";
      actions.appendChild(hintEl);
    }
  } else if (q.type === "gap") {
    const inp = document.createElement("input");
    inp.className = "gap-input";
    inp.setAttribute("aria-label", "Antwort eingeben");
    inp.placeholder = q.placeholder || "Antwort…";
    const b = document.createElement("button");
    b.className = "btn small";
    b.textContent = "Prüfen";
    const check = () => {
      if (answered) return;
      const v = inp.value.trim().toLowerCase().replace(/\s+/g, "");
      const ok = q.accept.some((a) => a.toLowerCase().replace(/\s+/g, "") === v);
      finish(ok);
    };
    b.addEventListener("click", check);
    inp.addEventListener("keydown", (e) => {
      if (e.key === "Enter") check();
    });
    body.appendChild(inp);
    actions.appendChild(b);
  } else if (q.type === "order") {
    let items = q.items.map((t, i) => ({ t, i }));
    if (items.length > 1) {
      let n = 0;
      do {
        items = shuffle(items);
        n++;
      } while (n < 20 && items.every((it, pos) => it.i === pos));
    }
    const list = document.createElement("div");
    list.setAttribute("role", "list");
    list.setAttribute("aria-label", "Reihenfolge, von oben nach unten");
    const say = document.createElement("span");
    say.className = "visually-hidden";
    say.setAttribute("role", "status");
    say.setAttribute("aria-live", "polite");
    function move(pos, dir) {
      const to = pos + dir;
      if (to < 0 || to >= items.length) return;
      [items[to], items[pos]] = [items[pos], items[to]];
      draw();
      say.textContent = items[to].t + ": jetzt Position " + (to + 1) + " von " + items.length;
      const row = list.children[to];
      const btn = row && row.querySelector(dir < 0 ? ".mv-up" : ".mv-dn");
      (btn && !btn.disabled ? btn : row.querySelector(dir < 0 ? ".mv-dn" : ".mv-up")).focus();
    }
    function draw() {
      list.innerHTML = "";
      items.forEach((it, pos) => {
        const row = document.createElement("div");
        row.className = "order-item";
        row.setAttribute("role", "listitem");
        row.innerHTML = `<span class="ord-nr" aria-hidden="true">${pos + 1}.</span><span>${it.t}</span><span class="mv"></span>`;
        const up = document.createElement("button");
        up.type = "button";
        up.className = "mv-up";
        up.textContent = "↑";
        up.setAttribute("aria-label", it.t + " nach oben");
        const dn = document.createElement("button");
        dn.type = "button";
        dn.className = "mv-dn";
        dn.textContent = "↓";
        dn.setAttribute("aria-label", it.t + " nach unten");
        up.disabled = pos === 0;
        dn.disabled = pos === items.length - 1;
        up.addEventListener("click", () => move(pos, -1));
        dn.addEventListener("click", () => move(pos, 1));
        row.querySelector(".mv").append(up, dn);
        list.appendChild(row);
      });
    }
    draw();
    body.append(list, say);
    const b = document.createElement("button");
    b.className = "btn small";
    b.textContent = "Reihenfolge prüfen";
    b.addEventListener("click", () => {
      if (!answered) finish(items.every((it, pos) => it.i === pos));
    });
    actions.appendChild(b);
  } else if (q.type === "match") {
    const sel = [];
    const mOrder = shuffle(q.pairs.map((p, j) => j));
    q.pairs.forEach((p, i) => {
      const row = document.createElement("div");
      row.className = "order-item";
      const lab = document.createElement("span");
      lab.textContent = p.l;
      lab.style.minWidth = "40%";
      const s = document.createElement("select");
      s.className = "gap-input";
      s.style.width = "auto";
      s.setAttribute("aria-label", "Zuordnung für " + p.l);
      s.innerHTML =
        '<option value="">– wählen –</option>' +
        mOrder.map((j) => `<option value="${j}">${q.pairs[j].r}</option>`).join("");
      sel.push(s);
      row.append(lab, s);
      body.appendChild(row);
    });
    const b = document.createElement("button");
    b.className = "btn small";
    b.textContent = "Zuordnung prüfen";
    b.addEventListener("click", () => {
      if (!answered) finish(sel.every((s, i) => s.value !== "" && +s.value === i));
    });
    actions.appendChild(b);
  }
}
function runQuiz(questions, host, opts = {}) {
  let i = 0,
    ok = 0;
  const results = [];
  let timeLeft = opts.timed || 0,
    timerH = null;
  host.innerHTML = "";
  const head = document.createElement("div");
  head.className = "q-actions";
  head.style.marginBottom = "12px";
  const prog = document.createElement("span");
  prog.className = "q-progress";
  head.appendChild(prog);
  let timerEl = null;
  if (opts.timed) {
    timerEl = document.createElement("span");
    timerEl.className = "timer";
    timerEl.setAttribute("role", "timer");
    head.appendChild(timerEl);
    timerH = setInterval(() => {
      timeLeft--;
      timerEl.textContent = fmtTime(timeLeft);
      if (timeLeft <= 60) timerEl.classList.add("low");
      if (timeLeft <= 0) {
        clearInterval(timerH);
        end(true);
      }
    }, 1000);
    timerEl.textContent = fmtTime(timeLeft);
  }
  const qhost = document.createElement("div");
  qhost.className = "q-box";
  host.append(head, qhost);
  function show() {
    prog.textContent = "Frage " + (i + 1) + " / " + questions.length;
    renderQuestion(questions[i], qhost, {
      onAnswered(good) {
        if (good) ok++;
        results.push({ q: questions[i], ok: good });
        const b = document.createElement("button");
        b.className = "btn";
        b.textContent = i === questions.length - 1 ? "Auswertung anzeigen" : "Nächste Frage →";
        b.addEventListener("click", () => {
          i++;
          i < questions.length ? show() : end(false);
        });
        qhost.appendChild(b);
        b.focus();
      },
    });
  }
  function end(timeout) {
    if (timerH) clearInterval(timerH);
    const byTopic = {};
    results.forEach((r) => {
      const t = r.q.topic;
      byTopic[t] = byTopic[t] || { ok: 0, total: 0 };
      byTopic[t].total++;
      if (r.ok) byTopic[t].ok++;
    });
    const pct = results.length ? Math.round((ok / questions.length) * 100) : 0;
    qhost.innerHTML = `<h3>${timeout ? "Zeit abgelaufen! " : ""}Auswertung</h3>
      <p><strong>${ok} von ${questions.length}</strong> richtig (${pct} %).</p>
      <div class="progress" role="img" aria-label="${pct} Prozent richtig"><span style="width:${pct}%"></span></div>
      <h4 class="mt-16">Nach Themengebiet</h4>
      ${Object.entries(byTopic)
        .map(
          ([t, s]) =>
            `<div style="margin:8px 0"><div style="display:flex;justify-content:space-between;font-size:.9rem"><span>${t}</span><span>${s.ok}/${s.total}</span></div><div class="progress"><span style="width:${Math.round((s.ok / s.total) * 100)}%"></span></div></div>`
        )
        .join("")}
      ${results.some((r) => !r.ok) ? `<p class="mt-14">Falsche Fragen wurden in deine<a href="quiz.html?mode=repeat">Wiederholungsliste</a>übernommen.</p>` : "<p style='margin-top:14px'>Alles richtig – stark!</p>"}`;
    if (opts.onDone) opts.onDone({ ok, total: questions.length, pct, byTopic });
    prog.textContent = "Fertig";
    if (timerEl) timerEl.remove();
  }
  show();
}
function fmtTime(s) {
  s = Math.max(0, s);
  return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
}
function shuffle(a) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function esc(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}
function qs(k) {
  return new URLSearchParams(location.search).get(k);
}
const TOPIC_LF = {
  Hardware: ["lf2"],
  Zahlensysteme: ["lf2", "lf5"],
  "OSI-Modell": ["lf3"],
  IPv4: ["lf3", "lf9"],
  Subnetting: ["lf3", "lf9"],
  "DHCP & DNS": ["lf9", "lf10a"],
  "VLAN & Switching": ["lf9"],
  "Storage & Backup": ["lf4", "lf11a"],
  Hochverfügbarkeit: ["lf11a"],
  Cloud: ["lf11a", "lf12a"],
  Automatisierung: ["lf10a"],
  Projektmanagement: ["lf12a"],
  "Arbeitsplatz & Hardware": ["lf2"],
  Elektrotechnik: ["lf2"],
  Netzwerktechnik: ["lf3"],
  "IT-Sicherheit": ["lf4", "lf11a"],
  Datenschutz: ["lf4"],
  WISO: ["wiso"],
  Betriebssysteme: ["lf2"],
  Fehleranalyse: ["lf6"],
  Netzwerkanalyse: ["lf9"],
  Systemintegration: ["lf9", "lf12a"],
  Serverdienste: ["lf10a"],
  "Backup & Recovery": ["lf4", "lf11a"],
  Monitoring: ["lf6", "lf10a", "lf11a"],
  "Präsentation & Fachgespräch": ["lf12a"],
  Netzwerkplanung: ["lf9"],
  Verkabelung: ["lf3", "lf2"],
  Speichernetze: ["lf9", "lf11a"],
};
function slug(t) {
  return t
    .toLowerCase()
    .replace(/[äöüß]/g, (c) => ({ ä: "ae", ö: "oe", ü: "ue", ß: "ss" })[c])
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
}
function buildJumpNav(items, host) {
  if (!items || items.length < 2 || document.getElementById("jump-nav")) return;
  const nav = document.createElement("nav");
  nav.id = "jump-nav";
  nav.className = "jump-nav";
  nav.setAttribute("aria-label", "Direkt zu einem Abschnitt");
  nav.innerHTML =
    '<span class="jump-label">Direkt zu:</span>' +
    items
      .map((i) => `<a class="chip" href="#${i.id}" title="${esc(i.label)}">${esc(i.label)}</a>`)
      .join("");
  const main = document.getElementById("main");
  const after = host || main.querySelector(".page-head") || main.querySelector(".breadcrumbs");
  (after || main).insertAdjacentElement(after ? "afterend" : "afterbegin", nav);
  const kopf = document.getElementById("site-header");
  const setzeVersatz = () => {
    const kh = kopf ? kopf.offsetHeight : 96;
    document.documentElement.style.setProperty("--kopf-h", kh + "px");
    document.documentElement.style.setProperty("--anker-versatz", kh + 58 + "px");
  };
  setzeVersatz();
  window.addEventListener("resize", setzeVersatz);
  let tickt = false;
  const pruefeHaftung = () => {
    tickt = false;
    const kh = kopf ? kopf.offsetHeight : 96;
    nav.classList.toggle(
      "haftet",
      nav.getBoundingClientRect().top <= kh + 1 && window.scrollY > 40
    );
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!tickt) {
        tickt = true;
        setTimeout(pruefeHaftung, 40);
      }
    },
    { passive: true }
  );
  pruefeHaftung();
  nav.addEventListener("click", (e) => {
    const a = e.target.closest("a[href^='#']");
    if (!a) return;
    const el = document.getElementById(a.getAttribute("href").slice(1));
    if (!el) return;
    const det = el.closest("details") || (el.tagName === "DETAILS" ? el : null);
    if (det) det.open = true;
  });
}
function autoJumpNav() {
  if (document.body.dataset.nojump !== undefined) return;
  const hs = [...document.querySelectorAll("#main h2")]
    .filter(
      (h) =>
        h.textContent.trim() && !h.classList.contains("fs-105") && !h.classList.contains("fs-100")
    )
    .filter((h) => !h.closest("details") || h.closest("summary"));
  if (hs.length < 4) return;
  const items = hs.map((h) => {
    if (!h.id) h.id = "abs-" + slug(h.textContent);
    const sum = h.closest("summary");
    const det = h.closest("details");
    const zielId = det ? det.id || (det.id = "abs-d-" + slug(h.textContent)) : h.id;
    const label = [...h.childNodes]
      .map((n) => (n.nodeType === 1 && getComputedStyle(n).display === "none" ? "" : n.textContent))
      .join("")
      .trim()
      .replace(/\s+/g, " ");
    return { id: zielId, label };
  });
  buildJumpNav(items);
}
function enrichData() {
  if (!window.DATA || DATA._enriched) return;
  DATA._enriched = true;
  const LESSON_LF = {
    l101: ["lf2"],
    l102: ["lf2", "lf5"],
    l103: ["lf3"],
    l104: ["lf3", "lf9"],
    l201: ["lf3", "lf9"],
    l202: ["lf9", "lf10a"],
    l203: ["lf9"],
    l204: ["lf4", "lf11a"],
    l301: ["lf11a"],
    l302: ["lf11a", "lf12a"],
    l303: ["lf10a"],
    l304: ["lf12a"],
  };
  DATA.lessons.forEach((l) => {
    l.lf = LESSON_LF[l.id] || [];
  });
  const diffByYear = { 1: "leicht", 2: "mittel", 3: "schwer" };
  DATA.quiz.forEach((q) => {
    q.lf = q.lf || TOPIC_LF[q.topic] || [];
    q.diff = q.diff || diffByYear[q.year] || "mittel";
    q.srcType = "basis";
  });
  DATA.ap1exam.forEach((q) => {
    q.lf = q.lf || TOPIC_LF[q.topic] || [];
    q.diff = q.diff || "mittel";
    q.srcType = "basis";
    q.exam = "ap1";
  });
  DATA.ap2exam.forEach((q) => {
    q.lf = q.lf || TOPIC_LF[q.topic] || [];
    q.diff = q.diff || "schwer";
    q.srcType = "basis";
    q.exam = "ap2";
  });
  const CARD_LF = ["lf2", "lf3", "lf3", "lf3", "lf9", "lf2", "lf4", "lf12a", "lf3", "lf11a"];
  DATA.cards.forEach((c, i) => (c.lf = c.lf || [CARD_LF[i] || "lf2"]));
  DATA.missions.forEach(
    (m) => (m.lf = m.lf || { m1: ["lf6", "lf9"], m2: ["lf9"], m3: ["lf3", "lf2"] }[m.id] || [])
  );
  DATA.shorts.forEach((s) => {
    const l = DATA.lessons.find((x) => x.id === s.lesson);
    s.lf = l ? l.lf : [];
  });
  const ZOOM_LF = {
    1: ["lf2", "lf3"],
    2: ["lf2", "lf4"],
    3: ["lf2"],
    4: ["lf2"],
    5: ["lf2", "lf5"],
    6: ["lf5"],
    7: ["lf5"],
    8: ["lf5"],
    9: ["lf5"],
    10: ["lf5"],
  };
  DATA.zoom.forEach((z) => (z.lf = z.lf || ZOOM_LF[z.id] || []));
}
window.Vorlesen = (function () {
  if (!("speechSynthesis" in window)) return null;
  let aktiverBtn = null,
    stuecke = [],
    index = 0,
    pausiert = false,
    player = null,
    gen = 0,
    markiertes = null;
  const TEMPOS = [1, 1.25, 1.5, 0.8];
  let tempo = TEMPOS.includes(+Store.get("ttsTempo", 1)) ? +Store.get("ttsTempo", 1) : 1;
  function deutscheStimme() {
    const v = speechSynthesis.getVoices();
    return (
      v.find((x) => x.lang === "de-DE" && x.localService) ||
      v.find((x) => (x.lang || "").startsWith("de")) ||
      null
    );
  }
  function btnZuruecksetzen() {
    if (aktiverBtn) {
      aktiverBtn.textContent = aktiverBtn.dataset.ttsLabel || "▶";
      aktiverBtn.setAttribute("aria-pressed", "false");
      aktiverBtn = null;
    }
  }
  function baueGgfPlayer() {
    if (player) return;
    player = document.createElement("div");
    player.className = "tts-player";
    player.hidden = true;
    player.setAttribute("aria-label", "Vorlese-Steuerung");
    player.innerHTML =
      '<span class="tts-stand" aria-live="polite">Liest vor</span>' +
      '<button type="button" class="tool-btn tts-tempo" aria-label="Vorlese-Tempo umschalten" title="Tempo: 1× → 1,25× → 1,5× → 0,8×">1×</button>' +
      '<button type="button" class="tool-btn tts-pause" aria-label="Vorlesen anhalten oder fortsetzen">❚❚ Pause</button>' +
      '<button type="button" class="tool-btn tts-ende" aria-label="Vorlesen beenden">■ Beenden</button>';
    document.body.appendChild(player);
    player.querySelector(".tts-tempo").addEventListener("click", tempoWechsel);
    player.querySelector(".tts-pause").addEventListener("click", pauseWeiter);
    player.querySelector(".tts-ende").addEventListener("click", stopp);
  }
  function syncPlayer() {
    if (!player) return;
    const stand = stuecke.length
      ? " · " + Math.min(Math.max(index, 1), stuecke.length) + "/" + stuecke.length
      : "";
    player.querySelector(".tts-stand").textContent =
      (pausiert ? "Angehalten" : "Liest vor") + stand;
    player.querySelector(".tts-tempo").textContent = String(tempo).replace(".", ",") + "×";
    player.querySelector(".tts-pause").textContent = pausiert ? "▶ Weiter" : "❚❚ Pause";
    player.classList.toggle("pausiert", pausiert);
  }
  let startOrt = null;
  function zeigePlayer() {
    baueGgfPlayer();
    const warVersteckt = player.hidden;
    player.hidden = false;
    syncPlayer();
    const o = startOrt;
    startOrt = null;
    if (!warVersteckt) return;
    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!o) return;
    const r = player.getBoundingClientRect();
    const sx = Math.min(Math.max(o.left + o.width / 2, 40), window.innerWidth - 40);
    const sy = Math.min(Math.max(o.top + o.height / 2, 40), window.innerHeight - 40);
    const dx = sx - (r.left + r.width / 2);
    const dy = sy - (r.top + r.height / 2);
    player.style.transition = "none";
    player.style.transform = "translate(" + dx + "px," + dy + "px) scale(.9)";
    player.classList.add("auftritt");
    clearTimeout(player._t);
    player._t = setTimeout(() => {
      player.style.transition = "transform .55s cubic-bezier(.2,.7,.3,1)";
      player.style.transform = "translate(0,0) scale(1)";
      player._t = setTimeout(() => player.classList.remove("auftritt"), 600);
    }, 30);
  }
  function versteckePlayer() {
    if (!player) return;
    player.hidden = true;
    player.classList.remove("auftritt");
    player.style.transition = "none";
    player.style.transform = "";
    clearTimeout(player._t);
  }
  function markiere(el) {
    if (markiertes) markiertes.classList.remove("tts-aktiv");
    markiertes = el && el.isConnected ? el : null;
    if (!markiertes) return;
    markiertes.classList.add("tts-aktiv");
    const r = markiertes.getBoundingClientRect();
    if (r.top < 90 || r.bottom > window.innerHeight - 90)
      markiertes.scrollIntoView({ block: "center", behavior: "smooth" });
  }
  function stopp() {
    gen++;
    pausiert = false;
    stuecke = [];
    index = 0;
    speechSynthesis.cancel();
    btnZuruecksetzen();
    markiere(null);
    versteckePlayer();
  }
  function pauseWeiter() {
    if (!stuecke.length) return;
    if (!pausiert) {
      pausiert = true;
      index = Math.max(0, index - 1);
      gen++;
      speechSynthesis.cancel();
    } else {
      pausiert = false;
      naechstes();
    }
    syncPlayer();
  }
  function tempoWechsel() {
    tempo = TEMPOS[(TEMPOS.indexOf(tempo) + 1) % TEMPOS.length];
    Store.set("ttsTempo", tempo);
    if (stuecke.length && !pausiert) {
      index = Math.max(0, index - 1);
      gen++;
      speechSynthesis.cancel();
      naechstes();
    }
    syncPlayer();
  }
  function naechstes() {
    if (pausiert || !stuecke.length) return;
    if (index >= stuecke.length) {
      stopp();
      return;
    }
    const s = stuecke[index++],
      g = gen;
    markiere(s.el || null);
    syncPlayer();
    const u = new SpeechSynthesisUtterance(s.t);
    const st = deutscheStimme();
    if (st) u.voice = st;
    u.lang = "de-DE";
    u.rate = 1.02 * tempo;
    u.onend = () => {
      if (g === gen) naechstes();
    };
    u.onerror = () => {
      if (g === gen && !pausiert && stuecke.length) stopp();
    };
    speechSynthesis.speak(u);
  }
  function zerteile(text, el) {
    const teile = [];
    let rest = String(text).replace(/\s+/g, " ").trim();
    while (rest.length > 240) {
      let schnitt = rest.lastIndexOf(". ", 240);
      if (schnitt < 80) schnitt = rest.lastIndexOf(" ", 240);
      if (schnitt < 1) schnitt = 240;
      teile.push({ t: rest.slice(0, schnitt + 1), el: el || null });
      rest = rest.slice(schnitt + 1);
    }
    if (rest) teile.push({ t: rest, el: el || null });
    return teile;
  }
  function starte(neu, btn) {
    const nochmalDerselbe = !!btn && btn === aktiverBtn;
    stopp();
    if (nochmalDerselbe || !neu.length) return;
    stuecke = neu;
    index = 0;
    aktiverBtn = btn || null;
    if (aktiverBtn) {
      if (!aktiverBtn.dataset.ttsLabel) aktiverBtn.dataset.ttsLabel = aktiverBtn.textContent;
      aktiverBtn.textContent = "■";
      aktiverBtn.setAttribute("aria-pressed", "true");
    }
    zeigePlayer();
    naechstes();
  }
  function sprich(text, btn) {
    starte(zerteile(text, null), btn);
  }
  const AUSLASSEN =
    "script,style,svg,nav,button,input,select,textarea,.tts-btn,.search-results,.jump-nav,[aria-hidden='true'],[hidden]";
  function blockVon(n, wurzel) {
    let e = n.parentElement,
      fallback = null;
    while (e && e !== wurzel) {
      if (e.matches("p,li,h1,h2,h3,h4,h5,h6,tr,dt,dd,summary,figcaption,blockquote,pre")) return e;
      if (!fallback && !/^inline/.test(getComputedStyle(e).display)) fallback = e;
      e = e.parentElement;
    }
    return fallback || wurzel;
  }
  function segmente(wurzel) {
    const seg = [];
    (function geh(el) {
      el.childNodes.forEach((k) => {
        if (k.nodeType === 3) {
          const t = k.textContent.replace(/\s+/g, " ").trim();
          if (t) seg.push({ t, el: blockVon(k, wurzel) });
          return;
        }
        if (k.nodeType !== 1 || k.matches(AUSLASSEN)) return;
        if (k.tagName === "DETAILS" && !k.open) {
          const s = k.querySelector("summary");
          if (s) geh(s);
          return;
        }
        const cs = getComputedStyle(k);
        if (cs.display === "none" || cs.visibility === "hidden") return;
        geh(k);
      });
    })(wurzel);
    return seg;
  }
  function baueStuecke(wurzel) {
    const roh = segmente(wurzel),
      bloecke = [];
    let akt = null;
    roh.forEach((s) => {
      if (akt && akt.el === s.el) {
        akt.t += " " + s.t;
        return;
      }
      if (akt) bloecke.push(akt);
      akt = { t: s.t, el: s.el };
    });
    if (akt) bloecke.push(akt);
    const fertig = [];
    bloecke.forEach((c) => zerteile(c.t, c.el).forEach((x) => fertig.push(x)));
    return fertig;
  }
  function ecken() {
    document.querySelectorAll("#main .card > .tts-ecke").forEach((b) => {
      const c = b.parentElement;
      if (
        c.querySelector(".lf-lesson-body, .lesson-detail") ||
        c.matches(".link-card, .lf-card") ||
        c.querySelector(":scope > .lfnr")
      )
        b.remove();
    });
    const plan = [];
    document
      .querySelectorAll("#main .card, #main .lf-lesson-body, #main .lesson-detail")
      .forEach((c) => {
        if (c.matches(".link-card, .lf-card") || c.querySelector(":scope > .lfnr")) return;
        const istLektion = c.matches(".lf-lesson-body, .lesson-detail");
        if (!istLektion && c.querySelector(".lf-lesson-body, .lesson-detail")) return;
        if (!istLektion && c.closest(".lf-lesson-body, .lesson-detail")) return;
        const hat = !!c.querySelector(":scope > .tts-btn");
        const kerntext = istLektion || !!c.querySelector(".callout");
        const will =
          kerntext ||
          hat ||
          [...c.querySelectorAll("p,li,dd,td,summary,blockquote")].some(
            (x) => x.textContent.replace(/\s+/g, " ").trim().length >= 80
          ) ||
          c.textContent.replace(/\s+/g, " ").trim().length >= 300;
        plan.push({ c, will, hat, istLektion: istLektion || kerntext });
      });
    const gruppen = new Map();
    plan.forEach((e) => {
      if (e.istLektion) return;
      const k = e.c.parentElement;
      if (!gruppen.has(k)) gruppen.set(k, []);
      gruppen.get(k).push(e);
    });
    gruppen.forEach((list) => {
      if (list.length < 3) return;
      const anteil = list.filter((e) => e.will).length / list.length;
      list.forEach((e) => {
        e.will = anteil >= 0.6;
      });
    });
    plan.forEach((e) => {
      if (!e.will && e.hat && !e.istLektion) {
        const alt = e.c.querySelector(":scope > .tts-ecke");
        if (alt) alt.remove();
        return;
      }
      if (!e.will || e.hat) return;
      const b = document.createElement("button");
      b.type = "button";
      b.className = "tts-btn tts-ecke";
      b.textContent = "▶";
      b.setAttribute("aria-pressed", "false");
      b.setAttribute("aria-label", "Diesen Abschnitt mit der Browser-Stimme vorlesen lassen");
      b.title = "Abschnitt vorlesen (nochmal klicken = Stopp)";
      e.c.classList.add("hat-tts");
      e.c.appendChild(b);
    });
  }
  let selBtn = null;
  function baueGgfSelBtn() {
    if (selBtn) return;
    selBtn = document.createElement("button");
    selBtn.type = "button";
    selBtn.className = "tts-sel-btn";
    selBtn.hidden = true;
    selBtn.textContent = "▶ Vorlesen";
    selBtn.setAttribute("aria-label", "Markierten Text vorlesen lassen");
    selBtn.title = "Nur den markierten Text vorlesen";
    document.body.appendChild(selBtn);
    selBtn.addEventListener("mousedown", (e) => e.preventDefault());
    selBtn.addEventListener("click", (e) => {
      const s = window.getSelection ? String(window.getSelection()) : "";
      startOrt =
        e.clientX || e.clientY
          ? { left: e.clientX, top: e.clientY, width: 0, height: 0 }
          : selBtn.getBoundingClientRect();
      selBtn.hidden = true;
      if (s.trim()) sprich(s, null);
    });
  }
  function pruefeAuswahl() {
    const s = window.getSelection && window.getSelection();
    const m = document.getElementById("main");
    if (
      !s ||
      s.isCollapsed ||
      !s.rangeCount ||
      String(s).trim().length < 3 ||
      !m ||
      !m.contains(s.getRangeAt(0).commonAncestorContainer)
    ) {
      if (selBtn) selBtn.hidden = true;
      return;
    }
    baueGgfSelBtn();
    const r = s.getRangeAt(0).getBoundingClientRect();
    selBtn.style.top = window.scrollY + r.bottom + 8 + "px";
    selBtn.style.left =
      Math.max(
        8,
        Math.min(
          window.scrollX + r.left + r.width / 2 - 45,
          window.scrollX + window.innerWidth - 110
        )
      ) + "px";
    selBtn.hidden = false;
  }
  document.addEventListener("mouseup", () => setTimeout(pruefeAuswahl, 10));
  document.addEventListener("touchend", () => setTimeout(pruefeAuswahl, 100));
  document.addEventListener("selectionchange", () => {
    const s = window.getSelection && window.getSelection();
    if ((!s || s.isCollapsed) && selBtn) selBtn.hidden = true;
  });
  window.addEventListener("pagehide", () => speechSynthesis.cancel());
  document.addEventListener("click", (e) => {
    const b = e.target.closest(".tts-btn");
    if (!b) return;
    const ziel = b.closest(".lf-lesson-body, .lesson-detail, .card, article, main");
    startOrt =
      e.clientX || e.clientY
        ? { left: e.clientX, top: e.clientY, width: 0, height: 0 }
        : b.getBoundingClientRect();
    starte(ziel ? baueStuecke(ziel) : [], b);
  });
  return { sprich, stopp, ecken };
})();
document.addEventListener("keydown", (e) => {
  if (!/^[1-4]$/.test(e.key) || e.ctrlKey || e.altKey || e.metaKey) return;
  const a = document.activeElement;
  if (
    a &&
    (a.tagName === "INPUT" ||
      a.tagName === "TEXTAREA" ||
      a.tagName === "SELECT" ||
      a.isContentEditable)
  )
    return;
  const offen = [...document.querySelectorAll(".q-body")].filter((b) => {
    if (!b.querySelector("button.q-opt")) return false;
    if (b.parentNode.querySelector(":scope > .q-feedback")) return false;
    const r = b.getBoundingClientRect();
    return r.bottom > 80 && r.top < window.innerHeight - 40;
  })[0];
  if (!offen) return;
  const opt = offen.querySelectorAll("button.q-opt")[+e.key - 1];
  if (opt) {
    e.preventDefault();
    opt.click();
  }
});
const autoGlossar = (function () {
  let rx = null,
    map = null;
  function baue() {
    if (rx !== null) return rx;
    try {
      map = {};
      const alts = [];
      const sperr = (window.GLOSS_BLACKLIST || []).map((x) => String(x).toLowerCase());
      ((window.DATA && DATA.glossary) || []).forEach((g) => {
        if (sperr.indexOf(g.term.toLowerCase()) >= 0) return;
        const v = [g.term];
        const m = g.term.match(/^(.+?) \((.+)\)$/);
        if (m) {
          v.push(m[1]);
          if (/^[A-Za-z0-9./+-]{3,12}$/.test(m[2])) v.push(m[2]);
        }
        v.forEach((x) => {
          x = x.trim();
          if (x.length >= 4 && !map[x.toLowerCase()]) {
            map[x.toLowerCase()] = g.term;
            alts.push(x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
          }
        });
      });
      alts.sort((a, b) => b.length - a.length);
      rx = new RegExp(
        "(?<![A-Za-zÄÖÜäöüß0-9_-])(" + alts.join("|") + ")(?![A-Za-zÄÖÜäöüß0-9_-])",
        "i"
      );
    } catch (e) {
      rx = false;
    }
    return rx;
  }
  return function () {
    if (/glossar\.html|firma\.html/.test(location.pathname)) return;
    const r = baue();
    if (!r) return;
    document.querySelectorAll(".lesson-detail, .lf-lesson-body").forEach((box) => {
      if (box.dataset.gloss) return;
      box.dataset.gloss = "1";
      const gesehen = {};
      let budget = 25;
      const tw = document.createTreeWalker(box, NodeFilter.SHOW_TEXT, {
        acceptNode(n) {
          if (!n.nodeValue || n.nodeValue.length < 4) return NodeFilter.FILTER_REJECT;
          return n.parentNode &&
            n.parentNode.closest &&
            !n.parentNode.closest(
              "a,code,pre,button,summary,h1,h2,h3,h4,h5,label,textarea,.tts-btn"
            )
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT;
        },
      });
      const knoten = [];
      let n;
      while ((n = tw.nextNode())) knoten.push(n);
      for (const node of knoten) {
        if (budget <= 0) break;
        let rest = node,
          m;
        while (budget > 0 && rest.nodeValue && (m = rest.nodeValue.match(r))) {
          const term = map[m[1].toLowerCase()];
          if (gesehen[term]) {
            rest = rest.splitText(m.index + m[1].length);
            continue;
          }
          gesehen[term] = true;
          budget--;
          const treffer = rest.splitText(m.index);
          rest = treffer.splitText(m[1].length);
          const a = document.createElement("a");
          a.className = "gloss-link";
          a.href = "glossar.html?q=" + encodeURIComponent(term);
          a.title = "Im Glossar nachschlagen: " + term;
          a.textContent = treffer.nodeValue;
          treffer.parentNode.replaceChild(a, treffer);
        }
      }
    });
  };
})();
function verwandteLektionen() {
  const L = (window.LF_INDEX && LF_INDEX.lessonsIdx) || [];
  if (!L.length) return;
  const stop =
    /^(grundlagen|einführung|verstehen|szenariotraining|vertiefung|richtig|lernen|praxis|profi|deutschland)$/;
  const woerter = (t) =>
    (t || "")
      .toLowerCase()
      .replace(/[^a-zäöüß0-9 -]/g, " ")
      .split(/[\s-]+/)
      .filter((w) => (w.length >= 6 || (w.length >= 4 && /\d/.test(w))) && !stop.test(w));
  const pool = L.map((x) => ({
    id: x.id,
    t: x.t,
    lf: x.lf,
    topic: x.id.replace(/-\d+$/, ""),
    schl: woerter(x.t),
    href: "lernfeld.html?id=" + encodeURIComponent(x.lf) + "#" + encodeURIComponent(x.id),
  }));
  ((window.DATA && DATA.lessons) || []).forEach((x) =>
    pool.push({
      id: x.id,
      t: x.title,
      lf: null,
      topic: null,
      schl: woerter(x.title + " " + (x.tags || []).join(" ")),
      href: "lektion.html?id=" + encodeURIComponent(x.id),
    })
  );
  const boxen = document.querySelectorAll(
    ".lf-lesson-body:not([data-verwandt]), .lesson-detail:not([data-verwandt])"
  );
  boxen.forEach((box) => {
    box.dataset.verwandt = "1";
    const det = box.closest("details.lf-lesson");
    if (!det && box !== boxen[boxen.length - 1]) return;
    const id = det ? det.id : new URLSearchParams(location.search).get("id") || "";
    const ich = pool.find((x) => x.id === id);
    if (!ich) return;
    const kuratiert = ((window.VERWANDT_KURATIERT || {})[id] || [])
      .map((kid) => pool.find((x) => x.id === kid))
      .filter(Boolean);
    const kand = [];
    for (const e of pool) {
      if (e.id === id || kuratiert.some((x) => x.id === e.id)) continue;
      let s = 0;
      if (ich.lf && e.lf === ich.lf) s += 1;
      if (ich.topic && e.topic === ich.topic) s += 3;
      for (const w of ich.schl) if (e.schl.includes(w)) s += 2;
      if (s >= 3) kand.push({ e, s });
    }
    const top = kuratiert
      .map((e) => ({ e }))
      .concat(kand.sort((a, b) => b.s - a.s))
      .slice(0, 3);
    if (!top.length) return;
    const div = document.createElement("div");
    div.className = "verwandt";
    div.innerHTML =
      "Verwandte Lektionen: " +
      top.map((x) => '<a href="' + x.e.href + '">' + escHtml(x.e.t) + "</a>").join(" · ");
    div.addEventListener("click", (ev) => {
      const a = ev.target.closest("a");
      if (!a) return;
      const u = new URL(a.getAttribute("href"), location.href);
      if (
        location.pathname.endsWith("lernfeld.html") &&
        u.searchParams.get("id") === new URLSearchParams(location.search).get("id")
      ) {
        const el = document.getElementById(decodeURIComponent(u.hash.slice(1)));
        if (el) {
          ev.preventDefault();
          if (el.tagName === "DETAILS") el.open = true;
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
    box.appendChild(div);
  });
}
window.SR = {
  key(t) {
    let h = 0x811c9dc5;
    const s = String(t);
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = (h * 0x01000193) >>> 0;
    }
    return h.toString(36);
  },
  naechstesIntervall(iv) {
    return iv >= 60
      ? 120
      : iv >= 30
        ? 60
        : iv >= 14
          ? 30
          : iv >= 7
            ? 14
            : iv >= 3
              ? 7
              : iv >= 1
                ? 3
                : 1;
  },
  heute() {
    return new Date().toISOString().slice(0, 10);
  },
  faellige(karten) {
    const m = Store.get("srKarten", {}) || {};
    const h = this.heute();
    return karten.filter((c) => {
      const e = m[this.key(c.f)];
      return !e || e.d <= h;
    });
  },
};
const AutoBackup = (window.AutoBackup = (function () {
  const OK = typeof window.showSaveFilePicker === "function";
  const idb = () =>
    new Promise((res, rej) => {
      if (!window.indexedDB) return rej(new Error("kein idb"));
      const r = indexedDB.open("fisi-backup", 1);
      r.onupgradeneeded = () => r.result.createObjectStore("h");
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
  const hGet = async () => {
    try {
      const db = await idb();
      return await new Promise((res, rej) => {
        const t = db.transaction("h").objectStore("h").get("handle");
        t.onsuccess = () => res(t.result || null);
        t.onerror = () => rej(t.error);
      });
    } catch (e) {
      return null;
    }
  };
  const hSet = async (v) => {
    try {
      const db = await idb();
      await new Promise((res, rej) => {
        const tx = db.transaction("h", "readwrite");
        const st = tx.objectStore("h");
        v ? st.put(v, "handle") : st.delete("handle");
        tx.oncomplete = res;
        tx.onerror = rej;
      });
    } catch (e) {}
  };
  let handle = null,
    timer = null,
    status = OK ? "aus" : "nicht-unterstuetzt";
  const melde = () => document.dispatchEvent(new CustomEvent("autobackup", { detail: status }));
  async function schreiben() {
    if (!handle) return;
    try {
      const t = Date.now();
      const w = await handle.createWritable();
      await w.write(JSON.stringify({ app: "fisi-hq", v: 1, t: t, daten: Store.dump() }));
      await w.close();
      try {
        localStorage.setItem("fisi._abT", String(t));
      } catch (e) {}
      status = "aktiv";
      melde();
    } catch (e) {
      status = "fehler";
      melde();
    }
  }
  function bannerNeuererStand(j) {
    const h = document.getElementById("site-header");
    if (!h || document.getElementById("ab-banner")) return;
    const b = document.createElement("div");
    b.className = "export-hinweis";
    b.id = "ab-banner";
    b.setAttribute("role", "region");
    b.setAttribute("aria-label", "Neuere Sicherung gefunden");
    b.innerHTML =
      '<span>Deine Sicherungsdatei enthält einen neueren Stand (anderes Gerät?). </span><button type="button" class="btn small" id="ab-uebernehmen">Übernehmen</button><button type="button" class="eh-zu" aria-label="Ignorieren" title="Ignorieren">✗</button>';
    h.after(b);
    b.querySelector(".eh-zu").addEventListener("click", () => b.remove());
    b.querySelector("#ab-uebernehmen").addEventListener("click", () => {
      Store.load(j.daten);
      try {
        localStorage.setItem("fisi._abT", String(j.t));
      } catch (e) {}
      location.reload();
    });
  }
  return {
    unterstuetzt: OK,
    status: () => status,
    geplant() {
      if (!OK || !handle) return;
      clearTimeout(timer);
      timer = setTimeout(schreiben, 1500);
    },
    async einrichten() {
      try {
        handle = await showSaveFilePicker({
          suggestedName: "fisi-hq-fortschritt.json",
          types: [{ description: "FISI-HQ Sicherung", accept: { "application/json": [".json"] } }],
        });
        await hSet(handle);
        await schreiben();
        toast("Automatische Sicherung eingerichtet – wird bei jeder Änderung aktualisiert.");
      } catch (e) {}
    },
    async beenden() {
      handle = null;
      await hSet(null);
      status = "aus";
      melde();
      toast("Automatische Sicherung beendet – die Datei bleibt erhalten.");
    },
    async bestaetigen() {
      if (!handle) return;
      try {
        if ((await handle.requestPermission({ mode: "readwrite" })) === "granted")
          await this.start();
      } catch (e) {}
    },
    async start() {
      if (!OK) return;
      if (!handle) handle = await hGet();
      if (!handle) return;
      let p = "prompt";
      try {
        p = await handle.queryPermission({ mode: "readwrite" });
      } catch (e) {}
      if (p !== "granted") {
        status = "bestaetigen";
        melde();
        return;
      }
      status = "aktiv";
      melde();
      try {
        const f = await handle.getFile();
        const j = JSON.parse(await f.text());
        let eigenT = 0;
        try {
          eigenT = +localStorage.getItem("fisi._abT") || 0;
        } catch (e) {}
        if (j && j.app === "fisi-hq" && j.daten && j.t > eigenT + 2000) bannerNeuererStand(j);
      } catch (e) {}
    },
  };
})());
const Tour = (window.Tour = (function () {
  const SCHRITTE = [
    {
      sel: ".main-nav",
      t: "Navigation",
      x: "Hier erreichst du alles: Lernfelder mit dem kompletten Stoff, Prüfungen, Training und Nachschlagewerke. Auf dem Handy steckt das Menü hinter dem ☰-Knopf.",
    },
    {
      sel: ".search-wrap input",
      t: "Suche",
      x: "Findet Lektionen, Glossarbegriffe, Musterprüfungen und Werkzeuge. Tipp: Die Taste „/“ springt von überall in die Suche – Tippfehler verzeiht sie auch.",
    },
    {
      sel: ".view-menu>button",
      t: "Ansicht",
      x: "Hell/Dunkel, Textgröße, Lesbarkeits- und Kontrastmodus – und hier kannst du FISI-HQ als App installieren.",
    },
    {
      sel: '.main-nav a[href="lernfelder.html"]',
      t: "Lernfelder",
      x: "Das Herzstück: alle Lernfelder deiner Ausbildung mit Lektionen, Quizfragen und Fortschritt.",
    },
    {
      sel: '.main-nav a[href="training.html"]',
      t: "Training",
      x: "Quiz, Lernkarten, Generatoren, Terminal und mehr. Wiederholungen kommen nach System wieder – Fälliges siehst du hier und auf dem Dashboard.",
    },
    {
      sel: '.main-nav a[href="formeln.html"]',
      t: "Formelsammlung",
      x: "Alle Rechenformeln der Prüfung mit Beispielen und Umrechnungstabellen – über Strg+P auch als Papierversion.",
    },
    {
      sel: null,
      t: "Dein Fortschritt bleibt bei dir",
      x: "Alles wird nur in deinem Browser gespeichert. Unter Fortschritt → „Lernstand & Datensicherung“ kannst du exportieren oder die automatische Sicherung in eine Datei einrichten. Viel Erfolg – und denk an die Lernaufgabe des Tages!",
    },
  ];
  let i = 0,
    aktiv = false;
  function el(id) {
    return document.getElementById(id);
  }
  function aufraeumen() {
    document.querySelectorAll(".tour-ziel").forEach((z) => z.classList.remove("tour-ziel"));
    ["tour-backdrop", "tour-pop"].forEach((x) => {
      const n = el(x);
      if (n) n.remove();
    });
    document.removeEventListener("keydown", tasten);
  }
  function tasten(e) {
    if (e.key === "Escape") ende(false);
  }
  function ende(fertig) {
    aktiv = false;
    aufraeumen();
    Store.set("tourStatus", fertig ? "fertig" : "beendet");
    if (fertig)
      toast("Das war die Tour – leg einfach los. Neustart jederzeit über Ansicht → Einführung.");
  }
  function zeige() {
    aufraeumen();
    document.addEventListener("keydown", tasten);
    const layout = document.body && document.body.offsetWidth > 0;
    while (i < SCHRITTE.length && SCHRITTE[i].sel) {
      const z = document.querySelector(SCHRITTE[i].sel);
      if (z && (!layout || z.offsetParent)) break;
      i++;
    }
    if (i >= SCHRITTE.length) return ende(true);
    const s = SCHRITTE[i];
    const back = document.createElement("div");
    back.id = "tour-backdrop";
    document.body.appendChild(back);
    let r = null;
    if (s.sel) {
      const z = document.querySelector(s.sel);
      z.classList.add("tour-ziel");
      r = z.getBoundingClientRect();
    }
    const pop = document.createElement("div");
    pop.id = "tour-pop";
    pop.setAttribute("role", "dialog");
    pop.setAttribute("aria-label", "Einführung: " + s.t);
    pop.innerHTML = `<h3>${s.t}</h3><p>${s.x}</p>
      <div class="tour-leiste"><span>${i + 1}/${SCHRITTE.length}</span>
      <span class="tour-knoepfe">${i ? '<button class="btn small ghost" id="tour-zurueck">Zurück</button>' : ""}
      <button class="btn small ghost" id="tour-ende">Beenden</button>
      <button class="btn small" id="tour-weiter">${i === SCHRITTE.length - 1 ? "Fertig" : "Weiter"}</button></span></div>`;
    document.body.appendChild(pop);
    if (r) {
      const top = Math.min(r.bottom + 12, innerHeight - pop.offsetHeight - 12);
      const left = Math.min(Math.max(r.left, 12), innerWidth - pop.offsetWidth - 12);
      pop.style.top = Math.max(top, 12) + "px";
      pop.style.left = left + "px";
    } else {
      pop.classList.add("tour-mitte");
    }
    el("tour-weiter").addEventListener("click", () => {
      if (i >= SCHRITTE.length - 1) ende(true);
      else {
        i++;
        zeige();
      }
    });
    if (el("tour-zurueck"))
      el("tour-zurueck").addEventListener("click", () => {
        i = Math.max(0, i - 1);
        zeige();
      });
    el("tour-ende").addEventListener("click", () => ende(false));
    el("tour-weiter").focus();
  }
  return {
    start() {
      if (!/index\.html$|\/$|\/hq$/.test(location.pathname)) {
        location.href = "index.html?tour=1";
        return;
      }
      i = 0;
      aktiv = true;
      zeige();
    },
    angebot() {
      if (Store.get("tourStatus", null)) return;
      if (!document.getElementById("fx-bg") || !/index\.html$|\/$|\/hq$/.test(location.pathname))
        return;
      if (document.querySelector(".ds-hinweis")) return;
      const b = document.createElement("div");
      b.id = "tour-pop";
      b.classList.add("tour-angebot");
      b.setAttribute("role", "dialog");
      b.setAttribute("aria-labelledby", "tour-angebot-h");
      b.innerHTML = `<h3 id="tour-angebot-h">Neu hier?</h3><p>Eine kurze Tour (7 Schritte, unter einer Minute) zeigt dir, wo alles liegt. Komplett freiwillig – jederzeit mit Esc oder „Beenden“ abbrechbar, Neustart über Ansicht → Einführung.</p>
        <div class="tour-leiste"><span></span><span class="tour-knoepfe"><button class="btn small ghost" id="tour-nein">Nein, danke</button><button class="btn small" id="tour-ja">Tour starten</button></span></div>`;
      document.body.appendChild(b);
      const zu = () => {
        Store.set("tourStatus", "abgelehnt");
        b.remove();
        document.removeEventListener("keydown", escZu);
      };
      const escZu = (e) => {
        if (e.key === "Escape") zu();
      };
      document.addEventListener("keydown", escZu);
      b.querySelector("#tour-nein").addEventListener("click", zu);
      b.querySelector("#tour-ja").addEventListener("click", () => {
        document.removeEventListener("keydown", escZu);
        b.remove();
        Tour.start();
      });
    },
  };
})());
function aeInArbeit() {
  const ae = document.documentElement.dataset.track === "ae";
  let o = document.getElementById("ae-inarbeit");
  if (ae && !o) {
    o = document.createElement("div");
    o.id = "ae-inarbeit";
    o.setAttribute("role", "region");
    o.setAttribute("aria-label", "Hinweis: AE-Modus in Arbeit");
    o.innerHTML =
      '<div class="aei-box"><strong>IN ARBEIT</strong><p>Der AE-Modus (Anwendungsentwicklung) wird gerade noch ausgebaut und geprüft.</p><button type="button" class="btn small ghost" id="aei-zurueck">Zurück zum FISI-Modus</button></div>';
    document.body.appendChild(o);
    o.querySelector("#aei-zurueck").addEventListener("click", () => {
      Store.set("track", "fisi");
      document.documentElement.dataset.track = "fisi";
      location.reload();
    });
  }
  if (!ae && o) o.remove();
}
function dsHinweis() {
  try {
    if (localStorage.getItem("fisi._dsHinweis")) return;
  } catch (e) {
    return;
  }
  if (/datenschutz\.html/.test(location.pathname)) return;
  const b = document.createElement("div");
  b.className = "ds-hinweis";
  b.setAttribute("role", "region");
  b.setAttribute("aria-label", "Datenschutz-Hinweis");
  b.innerHTML =
    '<span><span aria-hidden="true">🍪</span> Diese Website backt keine eigenen Cookies. Höchstens Cloudflare legt eins zur Bot-Abwehr hin – amtlich notwendig, garantiert kalorienfrei, kein Tracking. Kleingedrucktes: <a href="datenschutz.html">Datenschutzerklärung</a>.</span><span class="ds-knoepfe"><button type="button" class="btn small" id="ds-ok">Zur Kenntnis genommen</button><button type="button" class="btn small ghost" id="ds-ok2">Ebenfalls zur Kenntnis genommen</button></span>';
  document.body.appendChild(b);
  const pad = () => {
    document.documentElement.style.scrollPaddingBottom =
      (b.isConnected ? b.offsetHeight + 8 : 0) + "px";
  };
  pad();
  addEventListener("resize", pad);
  const dsZu = () => {
    try {
      localStorage.setItem("fisi._dsHinweis", "1");
    } catch (e) {}
    b.remove();
    pad();
    removeEventListener("resize", pad);
    if (typeof Tour !== "undefined") Tour.angebot();
  };
  b.querySelector("#ds-ok").addEventListener("click", dsZu);
  b.querySelector("#ds-ok2").addEventListener("click", dsZu);
}
applyTheme();
document.addEventListener("DOMContentLoaded", () => {
  enrichData();
  buildHeader();
  buildFooter();
  if (window.pageInit) window.pageInit();
  autoJumpNav();
  autoGlossar();
  verwandteLektionen();
  AutoBackup.start();
  dsHinweis();
  aeInArbeit();
  new MutationObserver(aeInArbeit).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-track"],
  });
  if (/[?&]tour=1/.test(location.search)) Tour.start();
  else Tour.angebot();
  const mVerw = document.getElementById("main");
  if (mVerw && window.MutationObserver) {
    let tVerw = null;
    new MutationObserver(() => {
      clearTimeout(tVerw);
      tVerw = setTimeout(() => {
        autoGlossar();
        verwandteLektionen();
      }, 300);
    }).observe(mVerw, { childList: true, subtree: true });
  }
  requestAnimationFrame(() =>
    requestAnimationFrame(() => document.documentElement.classList.add("bereit"))
  );
  setTimeout(() => document.documentElement.classList.add("bereit"), 400);
  if (window.Vorlesen) {
    Vorlesen.ecken();
    const m = document.getElementById("main");
    if (m && window.MutationObserver) {
      let t = null;
      new MutationObserver((muts) => {
        if (
          muts.every((x) =>
            [...x.addedNodes].every(
              (n) => n.nodeType === 1 && n.classList && n.classList.contains("tts-ecke")
            )
          )
        )
          return;
        clearTimeout(t);
        t = setTimeout(Vorlesen.ecken, 250);
      }).observe(m, { childList: true, subtree: true });
    }
  }
});
window.THEMA_LINKS = {
  "Grundlagen der Informationstechnik": "lektion.html?id=l101",
  Computerkomponenten: "lektion.html?id=l101",
  "EVA-Prinzip": "lektion.html?id=l101",
  "Zahlensysteme (binär/dezimal/hex)": "lektion.html?id=l102",
  Hardwaregrundlagen: "lernfeld.html?id=lf2",
  Betriebssystemgrundlagen: "lernfeld.html?id=lf5",
  "Dateien & Dateisysteme": "lernfeld.html?id=lf5",
  "Benutzer & Berechtigungen": "lernfeld.html?id=lf5",
  Netzwerkgrundlagen: "lernfeld.html?id=lf3",
  "OSI-Modell": "lektion.html?id=l103",
  "TCP/IP-Modell": "lektion.html?id=l103",
  "IPv4-Grundlagen": "lektion.html?id=l104",
  "einfache Subnetze": "netztrainer.html",
  "LAN, WAN & WLAN": "glossar.html?q=LAN",
  "Datenschutz (DSGVO)": "lernfeld.html?id=lf4",
  "IT-Sicherheit": "lernfeld.html?id=lf4",
  "Programmier- & Skriptgrundlagen": "lernfeld.html?id=lf5",
  "wirtschaftliche Grundlagen": "lernfeld.html?id=wiso",
  "IPv4- & IPv6-Adressierung": "lektion.html?id=l104",
  Subnetting: "netztrainer.html",
  Routing: "lektion.html?id=l203",
  Switching: "lektion.html?id=l203",
  VLAN: "lektion.html?id=l203",
  DHCP: "lektion.html?id=l202",
  DNS: "lektion.html?id=l202",
  NAT: "glossar.html?q=NAT",
  Firewalls: "lernfeld.html?id=lf9",
  VPN: "glossar.html?q=VPN",
  "Windows- & Linux-Administration": "lernfeld.html?id=lf9",
  "Active Directory": "lernfeld.html?id=lf9",
  Gruppenrichtlinien: "lernfeld.html?id=lf9",
  "Benutzer- & Rechteverwaltung": "lernfeld.html?id=lf9",
  Virtualisierung: "lernfeld.html?id=lf9",
  "Container-Grundlagen": "lernfeld.html?id=lf10a",
  Datensicherung: "lektion.html?id=l204",
  Monitoring: "lernfeld.html?id=lf10a",
  "Storage & RAID": "lektion.html?id=l204",
  "IT-Serviceprozesse": "lernfeld.html?id=lf6",
  Fehleranalyse: "quiz.html?tab=fehlersuche",
  Dokumentation: "lernfeld.html?id=allgemein",
  Kundenkommunikation: "lernfeld.html?id=lf6",
  "komplexe Netzwerkinfrastrukturen": "lernfeld.html?id=lf9",
  Hochverfügbarkeit: "lektion.html?id=l301",
  Redundanz: "lektion.html?id=l301",
  "Cloud-Computing": "lektion.html?id=l302",
  "hybride Infrastrukturen": "lektion.html?id=l302",
  Automatisierung: "lektion.html?id=l303",
  PowerShell: "quiz.html?tab=terminal",
  Bash: "quiz.html?tab=terminal",
  "Infrastructure as Code": "lektion.html?id=l303",
  Deployment: "lernfeld.html?id=lf10a",
  Patchmanagement: "glossar.html?q=Patchmanagement",
  "Monitoring & Logging": "lernfeld.html?id=lf11a",
  "Incident Management": "quiz.html?tab=fehlersuche",
  Informationssicherheit: "lernfeld.html?id=lf11a",
  Risikoanalyse: "lernfeld.html?id=lf4",
  "Backup- & Recovery-Konzepte": "lektion.html?id=l204",
  Projektplanung: "lektion.html?id=l304",
  "Zeit- & Kostenplanung": "lektion.html?id=l304",
  Qualitätssicherung: "lektion.html?id=l304",
  "technische Dokumentation": "lernfeld.html?id=allgemein",
  "Präsentation & Fachgespräch": "ap2.html",
  Hardware: "lernfeld.html?id=lf2",
  Grundlagen: "jahr1.html",
  Netzwerk: "lernfeld.html?id=lf3",
  IPv4: "netztrainer.html",
  Rechnen: "netztrainer.html",
  Serverdienste: "lernfeld.html?id=lf10a",
  Storage: "lektion.html?id=l204",
  Infrastruktur: "lernfeld.html?id=lf11a",
  HA: "lektion.html?id=l301",
  Cloud: "lektion.html?id=l302",
  Scripting: "quiz.html?tab=terminal",
  Projekt: "lernfeld.html?id=lf12a",
  WISO: "lernfeld.html?id=wiso",
};
window.linkifyThemen = function (rootSel) {
  document.querySelectorAll(rootSel + " span.badge").forEach((b) => {
    const href = THEMA_LINKS[b.textContent.trim()];
    if (!href) return;
    const a = document.createElement("a");
    a.href = href;
    a.className = b.className;
    a.textContent = b.textContent;
    a.title = "Zum passenden Modul";
    b.replaceWith(a);
  });
};
