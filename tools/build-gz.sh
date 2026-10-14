#!/usr/bin/env sh
# Erzeugt vorkomprimierte .gz-Dateien fuer nginx "gzip_static on;"
set -e
cd "$(dirname "$0")/.."
find . -type f \( -name '*.html' -o -name '*.js' -o -name '*.css' -o -name '*.xml' -o -name '*.webmanifest' -o -name '*.svg' \) \
  -not -path './.git/*' -exec gzip -9 -k -f -n {} \;
echo "fertig: $(find . -name '*.gz' -not -path './.git/*' | wc -l) Dateien"
