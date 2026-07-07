# Tasques — 002 Mode fosc / Mode clar
Ordre d'execució. Marca cada tasca en completar-la.

[ ] T1 — Variables CSS. Definir `:root` (mode fosc) i `[data-theme="light"]` a `style.css` amb els 6 tokens de color.
[ ] T2 — Tailwind config. Actualitzar `tailwind.config` inline perquè les classes de color referencien `var(--color-*)` en lloc de valors fixes.
[ ] T3 — Botó a la capçalera. Afegir `<button>` amb SVG sol/lluna a `<header>`, amb `aria-label` dinàmic.
[ ] T4 — Script de toggle. Llegir tema de localStorage a l'inici, alternar `data-theme` al `<html>` en clicar, guardar a localStorage.
[ ] T5 — Prevenció de flickering. Moure el script de lectura de tema al `<head>` (abans que es pinte res) o usar un `<script>` bloquejant.
[ ] T6 — Transicions. Aplicar `transition-colors duration-300` al body i elements clau per a un canvi suau.
[ ] T7 — Verificació. Obrir al navegador, alternar modes, recarregar, i validar tots els criteris d'acceptació de `1-spec.md`.
