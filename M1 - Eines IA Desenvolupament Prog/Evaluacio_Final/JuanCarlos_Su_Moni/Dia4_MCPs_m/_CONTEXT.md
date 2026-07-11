# CONTEXT — NutriVida (01 Web div 3_07_2026)

> Reproducció de la web de `JuanCarlos_Su_Moni\01 Web div 3_07_2026`.

## Projecte
Pàgina web estàtica — revista digital d'alimentació saludable i benestar.

## Stack
- HTML5 semàntic + CSS3 pur
- **Res de JavaScript, frameworks ni llibreries**
- **Res d'imatges** (placeholders decoratius amb CSS: gradients + emojis via `::before`)

## Tipografia
- **Playfair Display** (serif) — títols i logo
- **Plus Jakarta Sans** (sans-serif) — textos i navegació
Importades des de Google Fonts.

## Paleta de colors (mode clar)
| Rol            | Color       |
|----------------|-------------|
| Fons           | `#f9f8f3`   |
| Text principal | `#1f2e1f`   |
| Text muted     | `#536453`   |
| Primary        | `#2b4c2d`   |
| Primary light  | `#446f46`   |
| Secondary      | `#e59360`   |
| Card bg        | `#ffffff`   |
| Accent bg      | `#f1ebd9`   |
| Border         | `#e0dad0`   |

## Mode fosc (2 mecanismes CSS purs)
1. **Automàtic:** `@media (prefers-color-scheme: dark)` redefineix variables CSS a `:root`.
2. **Manual:** Checkbox ocult `<input type="checkbox" id="dark-mode-toggle">` al body + combinador `:checked ~ .page` per sobreescriure variables. Botó circular Sol/Lluna al header.

## Estructura de fitxers
- `index.html` — Tota la pàgina
- `style.css` — Tots els estils
- `PRD.md` — Requisit del producte (1 línia)
- `AGENTS.md` — Regles per a l'agent
- `SKILL.md` — Skill `grill-me`
- `skills-lock.json` — Lock de skills
- `.agents/skills/grill-me/` — Skill instal·lat

## Contingut de la pàgina (en català)

### Header
- Data: "Nº 12 — Juliol 2026"
- Logo: "NutriVida" (Playfair Display, 4rem, color primary)
- Tagline: "La teva guia diària d'alimentació conscient i saludable"
- Nav: Consells, Propietats, Receptes, Rutines de Temporada
- Interruptor dark mode (cercle amb icona lluna/sol)

### Hero — Article Destacat
- Títol: "L'art de menjar conscient: Com transformar la teva salut amb petits canvis diaris"
- Excerpt + meta (Per Clara Soler • 5 min de lectura)

### Consells del dia a dia (3 targetes)
1. **Hidratació intel·ligent** — No esperis a tenir set, aigua + infusió
2. **Mètode del plat d'Harvard** — 50% verdures, 25% proteïna, 25% cereals
3. **Greixos saludables** — Fruits secs, alvocat, OOVE

### Superaliments de proximitat (3 targetes)
1. **Espinacs frescs** — Ferro, àcid fòlic, antioxidants (luteïna/zeaxantina)
2. **Llavors de xia** — Omega-3, fibra soluble, calci vegetal
3. **All lila** — Al·licina, protector del cor, desintoxicant

### Receptes del mes (2 targetes amb placeholder gradient + emoji)
1. **Amanida de quinoa, edamame i alvocat** — 20 min, fàcil (tag: "Snapejar i Guanyar")
2. **Crema de carbassa amb curri i llavors** — 35 min, molt fàcil (tag: "Conconfort d'Hivern")

### Rutines de Temporada (CSS Tabs amb input radio)
- **Rutina Vegana** (4 àpats): Smoothie verd → Bol cigrons → Fruits secs/poma → Tofu wok
- **Rutina Vegetariana** (4 àpats): Torrada alvocat/ou → Amanida llenties → Iogurt/llavors → Truita espinacs

### Footer
- Logo NutriVida, text descriptiu, copyright 2026

## Interactivitat sense JS
- **Tabs de rutines:** 2 `<input type="radio">` amb `name="rutines-group"` + selectors CSS `:checked ~ .tab-panels .panel-*`
- **Dark mode toggle:** 1 `<input type="checkbox">` amb `:checked ~ .page`
- **Hover effects:** translateY, scale, box-shadow, color transitions (0.3s ease)

## Estil editorial de revista
- Classes CSS en **kebab-case**
- Gradients com a fons de placeholder de receptes (verd clar per quinoa, taronja clar per carbassa)
- Targetes amb border, border-radius 4px, ombres subtils
- Layout responsive amb `grid` (`auto-fit`, `minmax`)
- Animació `fadeIn` als panells de pestanyes

## Notes per a la reproducció
- El PRD original diu: "Web que de consejos prácticos del día a día, recetas, propiedades de los alimentos y 2 rutinas: 1 para veganos y otra para vegetarianos."
- No hi ha cap imatge real; tot és text + emojis + gradients CSS
- No hi ha JS, només CSS pur
- Contingut en català
- L'ordre de les seccions al navegador: Header → Hero → Consells → Propietats → Receptes → Rutines → Footer
