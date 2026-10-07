#!/usr/bin/env python3
"""src.html (fuente de verdad) -> public/finanzas/{index.html,estilo.css,app.js} + full.html (artifact).
La semilla vive en tools/semilla.json. Reemplazo por coincidencia exacta, nunca por indices."""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'src.html')
SEM = os.path.join(ROOT, 'tools', 'semilla.json')
OUT = os.path.join(ROOT, 'public', 'finanzas')
LINK = '<link rel="stylesheet" href="/finanzas/estilo.css">'
SCRIPT = '<script src="/finanzas/app.js"></script>'

src = open(SRC, encoding='utf-8').read()
semilla = json.load(open(SEM, encoding='utf-8'))
sem_line = 'var SEMILLA = ' + json.dumps(semilla, ensure_ascii=False) + ';'

m = re.search(r'<style>\n(.*?)\n</style>', src, re.S)
if not m: sys.exit('no encontre el <style> en src.html')
css = m.group(1)
s = re.search(r'<script>\n(.*?)\n</script>\n</body>', src, re.S)
if not s: sys.exit('no encontre el <script> final en src.html')
js = s.group(1)

index = src.replace(m.group(0), LINK).replace(s.group(0), SCRIPT + '\n</body>')

os.makedirs(OUT, exist_ok=True)
open(os.path.join(OUT, 'index.html'), 'w', encoding='utf-8').write(index)
open(os.path.join(OUT, 'estilo.css'), 'w', encoding='utf-8').write(css)
open(os.path.join(OUT, 'app.js'), 'w', encoding='utf-8').write(sem_line + '\n\n' + js)

# La semilla va justo antes del <script> principal, como esta publicado el artifact.
full = src.replace('<script>\n' + js + '\n</script>',
                   '<script>' + sem_line + '</script>\n<script>\n' + js + '\n</script>', 1)
open(os.path.join(ROOT, 'full.html'), 'w', encoding='utf-8').write(full)

nf = len(re.findall(r'function\s+[A-Za-z_$]', js))
print('ok  funciones=%d  css=%dB  js=%dB  tareas=%d  plan=%d'
      % (nf, len(css), len(js), len(semilla.get('tareas', [])), len(semilla.get('plan', []))))
