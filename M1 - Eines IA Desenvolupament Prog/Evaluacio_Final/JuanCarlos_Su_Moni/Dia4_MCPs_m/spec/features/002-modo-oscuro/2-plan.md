# Pla d'implementació — 002 Mode fosc / Mode clar

Com construir el que descriu `1-spec.md`.

## Estratègia

Usar **CSS custom properties (variables CSS)** definides a `:root` i a `[data-theme="light"]`. Això permet canviar tots els colors d'un cop sense reescriure classes Tailwind. Les classes de Tailwind (`bg-fons`, `text-text`, etc.) es mapegen a les variables.

## Fitxers implicats

- **`style.css`** — definir les variables CSS per a cada token, tant en mode fosc (`:root` o `@media prefers-color-scheme: dark`) com en mode clar (`.light` / `[data-theme="light"]`).
- **`index.html`** — afegir el botó a la capçalera i el script de toggle + localStorage.
- **`tailwind.config` (inline)** — si cal ajustar la configuració perquè les classes de Tailwind facin referència a les variables CSS (p. ex. `colors: { fons: 'var(--color-fons)' }`).

## Variables CSS

Definir a `style.css`:

```css
:root {
  --color-fons: #0F172A;
  --color-fons-alt: #1E293B;
  --color-text: #E2E8F0;
  --color-text-suau: #94A3B8;
  --color-primari: #22D3EE;
  --color-accent: #A78BFA;
}

[data-theme="light"] {
  --color-fons: #F8FAFC;
  --color-fons-alt: #E2E8F0;
  --color-text: #1E293B;
  --color-text-suau: #64748B;
  --color-primari: #0891B2;
  --color-accent: #7C3AED;
}
```

Actualitzar `tailwind.config` perquè use `var(--color-*)`.

## Botó a la capçalera

Icona SVG senzilla (sol/lluna) dins d'un `<button>`. Canviar la icona segons el mode actual.

## Script (JS mínim)

- En carregar: llegir `localStorage.getItem('theme')`. Si "light", afegir `data-theme="light"` a `<html>`.
- En clicar: alternar `data-theme`, guardar a localStorage.
- Assegurar que la transició no provoque flickering (aplicar tema sincrònicament al `<head>` o amb un `<script>` bloquejant abans del `</head>`).

## Transicions

Afegir `transition: background-color 0.3s, color 0.3s;` al `body` o als elements principals via Tailwind (`transition-colors duration-300`).

## Verificació

Obrir `index.html` al navegador, alternar entre modes, recarregar la pàgina i comprovar que la preferència es manté.
