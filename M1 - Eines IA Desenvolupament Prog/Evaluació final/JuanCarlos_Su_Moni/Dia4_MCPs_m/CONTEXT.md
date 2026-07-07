# CONTEXT — NutriVida (Dia4_SDD)

## Projecte
Revista digital d'alimentació saludable (NutriVida). Una sola pàgina HTML estàtica amb capçalera de revista, seccions de contingut i mode fosc.

## Stack
- **HTML5** semàntic
- **Tailwind CSS v4** via CDN (`https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4`)
- **CSS propi** (`style.css`) per a estils que Tailwind no cobreix
- **JavaScript mínim** (IIFE autoejecutada): menú hamburguesa mòbil + mode fosc/clar amb `localStorage`
- **Zero imatges**: text, emojis, gradients CSS (`::before`) i decoracions
- **Zero frameworks JS**, zero llibreries

## Font de veritat (jerarquia SDD)
1. `spec/constitution/` — missió, tech stack, roadmap
2. `spec/features/001-pagina-inicial/` — especificació, pla, tasques
3. `.agents/skills/disseny-web/SKILL.md` — paleta, tipografia, estil visual
4. `AGENTS.md` — regles de treball per a l'agent
5. `CONTEXT.md` — aquest fitxer, resum executiu per a l'agent

Si un canvi és necessari, actualitzar primer el `.md` corresponent, després el codi.

## Estructura de la carpeta
```
Dia4_MCPs_m/
├── .agents/
│   └── skills/
│       ├── disseny-web/SKILL.md        ← guia de disseny (paleta, tokens, estil revista)
│       └── frontend-design/SKILL.md    ← guia genèrica de disseny UI
├── spec/
│   ├── constitution/
│   │   ├── 1-mission.md                ← missió del producte
│   │   ├── 2-tech-stack.md             ← stack tecnològic
│   │   └── 3-roadmap.md                ← roadmap de features
│   └── features/
│       └── 001-pagina-inicial/
│           ├── 1-spec.md               ← especificació funcional
│           ├── 2-plan.md               ← pla d'implementació
│           └── 3-tasks.md              ← tasques executades ([x])
├── index.html                          ← tota la pàgina
├── style.css                           ← estils extra
├── AGENTS.md                           ← regles per a l'agent
├── CONTEXT.md                          ← aquest fitxer
└── opencode.jsonc                      ← configuració de MCP
```

## Fitxers de codi

### `index.html` (~358 línies)
- `<head>`: Tailwind v4 CDN, `@theme` inline amb 10 tokens de color, CSS custom properties (`:root` + `[data-theme="dark"]`), Google Fonts, enllaç a `style.css`
- `<body>`: `<div class="page">` contenidor principal
- `<header class="header-revista">`: data, logo, tagline, botó sol/lluna, botó hamburguesa, `<nav>` amb 4 enllaços
- `<main class="main-content">`: hero + 4 seccions de contingut
- `<footer class="footer-revista">`: logo, text, copyright
- `<script>`: menú hamburguesa i mode fosc

### `style.css` (~767 línies)
Tot el que Tailwind no cobreix: estructura de la revista (doble border, logo gran, números grans), navegació, dark mode switch, hero, targetes (consells, aliments), placeholders de receptes amb gradients, tabs amb radio inputs, footer, scroll, focus-visible, hover amb `color-mix()`, animació `fadeIn`, transicions 0.3s, responsive.

## Paleta de colors (skill disseny-web)

| Token          | Mode clar     | Mode fosc     | Ús |
|----------------|---------------|---------------|-----|
| `fons`         | `#f9f8f3`     | `#0f1a0f`     | Fons general |
| `fons-alt`     | `#ffffff`     | `#1a281a`     | Targetes i blocs |
| `text`         | `#1f2e1f`     | `#dce8dc`     | Text principal |
| `text-suau`    | `#536453`     | `#8faa8f`     | Text secundari |
| `primari`      | `#2b4c2d`     | `#7aaa7a`     | Títols i enllaços |
| `primari-clar` | `#446f46`     | `#9bc99b`     | Hover enllaços |
| `accent`       | `#e59360`     | `#d98a55`     | Èmfasi terracota |
| `card-bg`      | `#ffffff`     | `#1a281a`     | Fons targetes |
| `fons-accent`  | `#f1ebd9`     | `#1f301f`     | Hero, propietats |
| `borde`        | `#e0dad0`     | `#2d452d`     | Vores i separadors |

Implementació: `:root` = mode clar, `[data-theme="dark"]` = mode fosc. `@theme` de Tailwind crea utility classes (`bg-fons`, `text-text`, `text-primari`, etc.).

## Tipografia
- **Títols:** `Playfair Display` (serif), elegant, 4rem el logo
- **Cos:** `Plus Jakarta Sans` (sans-serif), moderna
- Google Fonts via `<link>` al `<head>`

## Estil editorial de revista
- Capçalera centrada, doble border inferior (`2px double`)
- Nav en uppercase, letter-spacing ample (0.1em), border-top separator
- Hero: fons accent, text centrat, tag en accent, titol gran (2.75rem)
- Targetes: border 1px, border-radius 4px, fons card-bg
- Hover: translateY(-3px/-5px) + ombra amb `color-mix(in srgb, var(--color-primari) 10%, transparent)`
- Secció propietats: fons accent a pantalla completa (marges negatius `0 -1.5rem`)
- Footer: fons primari, text blanc, doble border superior

## Estructura de la pàgina (per seccions)

### Header
- `Nº 12 — Juliol 2026` (data, uppercase, muted)
- **NutriVida** (logo, Playfair 4rem, primari)
- Tagline en cursiva
- Botó dark mode (cercle 3rem, fons accent, sol/lluna)
- Botó hamburguesa (visible només mòbil <600px)
- Nav: Consells | Propietats | Receptes | Rutines de Temporada

### Hero (article destacat)
- Tag: "L'Article Destacat" (accent, uppercase)
- Títol: "L'art de menjar conscient: Com transformar la teva salut amb petits canvis diaris"
- Excerpt
- Meta: "Per Clara Soler • 5 min de lectura"

### Consells del dia a dia (section#consells)
- Títol: "Consells del dia a dia"
- 3 targetes numerades (01, 02, 03):
  1. **La regla d'or de la hidratació intel·ligent** — aigua + infusió
  2. **El mètode del plat d'Harvard** — 50% verdures, 25% proteïna, 25% cereals
  3. **La veritat sobre els greixos saludables** — fruits secs, alvocat, OOVE

### Superaliments de proximitat (section#propietats)
- Fons accent a pantalla completa
- 3 targetes amb icona + nom + llista de beneficis:
  1. 🥬 **Espinacs frescs** — ferro, àcid fòlic, antioxidants
  2. 🌱 **Llavors de xia** — omega-3, fibra soluble, calci
  3. 🧄 **All lila de l'hort** — al·licina, protector cor, desintoxicant

### Receptes del mes (section#receptes)
- 2 targetes amb placeholder artístic:
  1. **Amanida de quinoa, edamame i alvocat** — gradient verd (🌿), 20min, tag "Snapejar i Guanyar"
  2. **Crema de carbassa amb curri i llavors** — gradient taronja (🥣), 35min, tag "Conconfort d'Hivern"
- Cada targeta: títol, desc, temps+dificultat, llista d'ingredients

### Rutines de Nutrició de Temporada (section#rutines)
- Tabs CSS (radio inputs) sense JS
- **Rutina Vegana**: Smoothie verd → Bol cigrons → Fruits secs → Tofu wok
- **Rutina Vegetariana**: Torrada alvocat → Amanida llenties → Iogurt → Truita espinacs
- 4 àpats per rutina: esmorzar, dinar, berenar, sopar

### Footer
- **NutriVida** (logo, Playfair 2.25rem)
- Text descriptiu
- Copyright 2026

## Mode fosc / Mode clar
- **Per defecte: mode clar**
- Botó sol/lluna circular al header (cercle 3rem, fons accent)
- JS: click alterna `data-theme="dark"` al `<html>`
- `localStorage.setItem("theme", "dark"/"light")` per persistència
- Transicions CSS 0.3s a tots els elements amb color/fons/borde
- Overrides específics per a:
  - Gradients de receptes: verd fosc (`#1a3a1a-#1f4a1f`) i taronja fosc (`#3a2a1a-#4a351f`)
  - Footer: `#132013`
  - Tag de recepta: `#335533`

## CSS Tabs (Rutines)
- 2 `<input type="radio">` invisibles amb `name="rutines-group"`
- `<label>` per a cada radio, estil pills arrodonides (border-radius 30px)
- Selectors: `#tab-vegana:checked ~ .tabs-nav .label-vegana` per activar
- Panells: `display: none` per defecte; `display: block` quan `:checked`
- Animació `fadeIn`: opacity 0→1, translateY 10px→0, 0.4s

## Menú hamburguesa (JS)
- Botó `#menu-btn` visible només en mòbil (`<600px`, `display: none` per defecte)
- Click: toggle classe `.nav-open` al `<nav>`
- Nav oculta per defecte al mòbil: `display: none`
- Nav amb `.nav-open`: `display: flex` (columna)
- En triar enllaç al mòbil (`window.innerWidth < 601`): treure `.nav-open`
- Pantalla gran (>600px): `display: flex` horitzontal

## Responsive

| Breakpoint | Columnes | Canvis |
|------------|----------|--------|
| >768px (lg) | 3 columnes | Layout complet |
| 481-768px (md) | 2 columnes | — |
| ≤600px | — | Hamburguesa visible, nav vertical oculta, logo 2.5rem, hero padding reduït, tabs en columna |
| ≤480px | 1 columna | Consells, propietats, meals en 1 columna |

## Accés
Obrir `index.html` al navegador. Sense servidor ni build.

## Skills disponibles
- **disseny-web** — Guia de disseny visual (paleta, tipografia, estil revista)
- **frontend-design** — Guia genèrica de disseny UI
