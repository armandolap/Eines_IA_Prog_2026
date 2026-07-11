---
name: disseny-web
description: Guia de disseny visual basada en el Design System de LottieFiles. S'ha d'utilitzar sempre que es creï o modifiqui HTML/CSS, s'apliquin estils amb Tailwind o es defineixin colors, tipografia, layout o components visuals.
---

# Guia de disseny — Basada en LottieFiles Design System

Aquesta és la guia visual del projecte. Segueix-la sempre que generis o modifiquis HTML, CSS o classes de Tailwind. No inventis colors, mides o estils fora d'aquesta guia.

---

# Filosofia de disseny

El projecte segueix un estil **Modern SaaS**, inspirat en LottieFiles.

Principis principals:

- Disseny molt net i minimalista.
- Molt espai en blanc.
- Components simples i elegants.
- Cantonades arrodonides.
- Ombres molt suaus.
- Elevat contrast.
- Targetes com a element principal.
- Layout modular basat en blocs.
- Interaccions subtils.
- Mobile-first.
- Accessibilitat prioritària.

---

# Tipografia

## Família

Utilitza sempre:

```css
Inter, ui-sans-serif, system-ui, sans-serif
```

## Pesos

- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- ExtraBold: 800

## Escala

### Hero

- 64px
- Bold
- Line-height: 110%
- Letter-spacing: -2px

### H1

48px

### H2

36px

### H3

30px

### H4

24px

### Subtítol

20px

### Cos

16px

Line-height:

```css
170%
```

Text secundari:

14px

Caption:

12px

---

# Paleta de colors

Registra aquests colors a la configuració de Tailwind (si es fa servir el CDN, mitjançant `tailwind.config` inline) perquè es puguin utilitzar com a classes (`bg-primary`, `text-primary`, `bg-background`, etc.).

**No utilitzis valors hexadecimal directament dins les classes (`bg-[#...]`) ni colors predeterminats de Tailwind fora d'aquesta paleta.**

## Primari

| Token | Hex |
|-------|------|
| `primary` | `#1D4ED8` |
| `primary-hover` | `#2563EB` |
| `primary-active` | `#1E40AF` |

## Accents

| Token | Hex |
|-------|------|
| `accent-purple` | `#7C3AED` |
| `accent-pink` | `#EC4899` |
| `accent-green` | `#10B981` |
| `accent-orange` | `#F59E0B` |

## Neutres

| Token | Hex |
|-------|------|
| `white` | `#FFFFFF` |
| `background` | `#FAFAFB` |
| `section` | `#F5F7FA` |
| `border` | `#E5E7EB` |
| `divider` | `#ECECEC` |

## Text

| Token | Hex |
|-------|------|
| `text` | `#111827` |
| `text-secondary` | `#4B5563` |
| `text-muted` | `#6B7280` |
| `text-disabled` | `#9CA3AF` |

---

# Layout

## Amplada

Contingut:

```
1280px
```

Gran:

```
1440px
```

Padding:

- Desktop: 80px
- Tablet: 48px
- Mobile: 24px

---

# Grid

Desktop

- 12 columnes
- Gap de 24px

Tablet

- 8 columnes

Mòbil

- 4 columnes

Sempre mobile-first.

---

# Espaiat

Unitat base:

```
8px
```

Escala:

```
4
8
12
16
20
24
32
40
48
56
64
80
96
120
160
```

Separacions recomanades:

- Entre seccions: 120px
- Entre blocs: 80px
- Entre components: 32px

---

# Cards

Les targetes són el component principal.

Propietats:

- Fons blanc (`white`)
- Radi: 20px
- Padding: 24px
- Vora:
  ```
  1px solid #ECECEC
  ```
- Ombra molt lleugera

Hover:

- TranslateY(-4px)
- Ombra més pronunciada

---

# Botons

## Primari

- Fons: `primary-hover`
- Text blanc
- Radius: 999px
- Padding:

```
14px 24px
```

Hover:

- Blau més fosc
- Lleugera elevació

## Secundari

- Blanc
- Vora `border`

Hover:

```
#F8FAFC
```

## Ghost

Sense fons.

Text blau.

Hover:

```
rgba(37,99,235,.08)
```

---

# Inputs

- Alçada: 48px
- Radius: 12px
- Border: `border`
- Focus: anell blau
- Placeholder:

```
#9CA3AF
```

---

# Hero

Quan existeixi una portada o secció principal:

- Títol molt gran.
- CTA principal blau.
- CTA secundari blanc.
- Molt espai vertical.
- L'element visual principal (imatge o animació) és el protagonista.

---

# Navbar

- Alçada: 80px
- Blanca
- Sticky
- Border inferior:

```
#F1F5F9
```

---

# Footer

Fons:

```
#111827
```

Text:

```
#D1D5DB
```

Enllaços:

Blanc.

---

# Badges

Success

- Fons: `#DCFCE7`
- Text: `#166534`

Warning

- Fons: `#FEF3C7`
- Text: `#92400E`

Danger

- Fons: `#FEE2E2`
- Text: `#991B1B`

Info

- Fons: `#DBEAFE`
- Text: `#1E40AF`

---

# Chips

- Radius: 999px
- Padding:

```
8px 14px
```

Fons:

```
#F3F4F6
```

Hover:

```
#E5E7EB
```

---

# Motion

Les animacions han de ser subtils.

Duracions:

- Hover: 150ms
- General: 200ms
- Entrada: 300ms

Corba:

```css
cubic-bezier(.2,.8,.2,1)
```

Evita animacions exagerades.

---

# Ombres

Card

```
0 2px 8px rgba(0,0,0,.04)
```

Hover

```
0 12px 40px rgba(0,0,0,.08)
```

Modal

```
0 20px 60px rgba(0,0,0,.15)
```

---

# Regles generals

- Tot el contingut ha d'estar en català.
- Prioritza l'accessibilitat i el contrast.
- Mantén una estètica neta i moderna.
- Evita sobrecarregar la interfície.
- Utilitza sempre HTML + Tailwind CSS (CDN) i `estils.css` només quan Tailwind no sigui suficient.
- Mantén coherència en espais, tipografia, colors i components.
- No introdueixis estils que s'allunyin del Design System definit en aquesta guia.
- Contingut sempre en **català**.

- Contrast suficient: mai text `text-suau` sobre `fons-alt` per a contingut important.

- Mobile-first: primer que es vegi bé en mòbil, després amplia amb breakpoints.

- Mantén la simplicitat: només HTML + Tailwind (CDN) + `estils.css` per a allò que Tailwind no cobreixi bé.

# Guia de disseny

Segueix-la sempre que generis o modifiquis codi visual (HTML, CSS, classes de Tailwind). No inventis colors ni estils fora d'aquesta guia.