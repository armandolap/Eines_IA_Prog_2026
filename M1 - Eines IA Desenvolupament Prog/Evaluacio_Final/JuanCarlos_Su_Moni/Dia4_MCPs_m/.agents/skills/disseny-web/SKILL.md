---
name: disseny-web
description: Guia de disseny visual del projecte (paleta, tipografia, estil).
---

# Guia de disseny — NutriVida

## Paleta

Dos modes: **clar** (per defecte) i **fosc** (alternativa). El mode clar és el look & feel elegant de la revista NutriVida (verd, terracota, crema).

| Token          | Mode clar                  | Mode fosc                  | Ús |
|----------------|----------------------------|----------------------------|-----|
| `fons`         | `#f9f8f3`                  | `#0f1a0f`                  | Fons general |
| `fons-alt`     | `#ffffff`                  | `#1a281a`                  | Targetes i blocs de codi |
| `text`         | `#1f2e1f`                  | `#dce8dc`                  | Text principal |
| `text-suau`    | `#536453`                  | `#8faa8f`                  | Text secundari |
| `primari`      | `#2b4c2d`                  | `#7aaa7a`                  | Títols i enllaços |
| `primari-clar` | `#446f46`                  | `#9bc99b`                  | Hover enllaços |
| `accent`       | `#e59360`                  | `#d98a55`                  | Èmfasi i detalls rústics |
| `card-bg`      | `#ffffff`                  | `#1a281a`                  | Fons de targetes |
| `fons-accent`  | `#f1ebd9`                  | `#1f301f`                  | Fons alternatiu (hero, propietats) |
| `borde`        | `#e0dad0`                  | `#2d452d`                  | Vores i separadors |

Colors com a CSS custom properties (`:root` mode clar, `[data-theme="dark"]` mode fosc). `@theme` de Tailwind referencia `var(--color-*)`.

## Tipografia

- **Títols:** `Playfair Display` (serif), elegant.
- **Cos:** `Plus Jakarta Sans` (sans-serif), moderna.
- Google Fonts via `<link>` al `<head>`.

## Estil: targetes

- Fons `card-bg`, `border`, `rounded-lg` (4px).
- Grid responsiva (1 → 2 → 3 columnes).
- Hover subtil: `translateY(-3px)` + ombra amb `color-mix(in srgb, var(--color-primari) 10%, transparent)`.

## Estil: revista

- Capçalera amb doble border inferior, data, logo gran (4rem), tagline en cursiva.
- Nav enllaços en uppercase, letter-spacing ample.
- Hero amb fons accent, text centrat, tag en accent.
- Secció de propietats amb fons accent a pantalla completa (marges negatius).
- Receptes amb placeholders artístics (gradients + emoji via `::before`).
- Footer fons primari, text blanc.

## Mode fosc / Mode clar

- Botó sol/lluna a la capçalera, sempre visible.
- `localStorage` guarda la preferència. **Per defecte: mode clar.**
- Transició suau `0.3s`.
- `aria-label` al botó.
- Gradients de receptes canvien a versions fosques en mode fosc.
- Footer s'enfosqueix en mode fosc (`#132013`).
