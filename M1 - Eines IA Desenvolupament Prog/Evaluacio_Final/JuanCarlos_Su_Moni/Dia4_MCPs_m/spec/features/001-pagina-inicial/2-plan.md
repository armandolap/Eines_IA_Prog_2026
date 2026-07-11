# Pla d'implementació — 001 Pàgina inicial (NutriVida)

Com construir el que descriu `1-spec.md`.

## Fitxers

- **`index.html`** — tota la pàgina: `<head>` amb CDN de Tailwind v4 + `@theme` inline, `<header>` amb nav, `<main>` amb hero + seccions, `<footer>`, i `<script>` per al menú hamburguesa i mode fosc/clar.
- **`style.css`** — estils que Tailwind no cobreix: rebost de la revista (doble border, números grans, gradients decoratius, tabs amb radio inputs, hover amb color-mix, dark mode overrides específics).

## Configuració de Tailwind

Registrar els tokens de color de la skill `disseny-web` dins `@theme` perquè es puguin usar com a classes (`bg-fons`, `text-text`, `text-primari`…). No fer servir hex solts ni colors per defecte de Tailwind fora de la paleta.

## Estructura HTML

```
<body>
  <div class="page">
    <header class="header-revista">
      <span class="header-data">    → "Nº 12 — Juliol 2026"
      <h1 class="logo-revista">     → "NutriVida" (Playfair, 4rem)
      <p class="tagline-revista">   → tagline en cursiva
      <button id="theme-toggle">    → botó sol/lluna
      <button id="menu-btn">        → hamburguesa (només mòbil)
      <nav id="main-nav">           → 4 enllaços: #consells, #propietats, #receptes, #rutines
    <main>
      <section class="hero-section">       → portada amb hero-card
      <section id="consells">              → 3 targetes numerades
      <section id="propietats">            → 3 targetes d'aliments (fons accent a pantalla completa)
      <section id="receptes">              → 2 targetes amb placeholder gradient
      <section id="rutines">               → tabs amb radio inputs
    <footer class="footer-revista">        → crèdit
```

## Tabs de rutines (CSS pur, sense JS)

- Dos `<input type="radio">` invisibles (`#tab-vegana`, `#tab-vegetariana`) amb `name="rutines-group"`.
- `<label>` per a cada radio actuen com a botons de pestanya (estil pills arrodonides).
- Selectors CSS: `#tab-vegana:checked ~ .tab-panels .panel-vegana`, etc.
- Panell actiu: `display: block`; inactius: `display: none`.
- Animació `fadeIn` (opacity + translateY) en entrar al panell.

## Placeholders de receptes

- Div `.recepta-img-placeholder` amb alçada fixa (240px).
- Gradient com a fons (verd clar per quinoa, taronja clar per carbassa).
- Emoji gran i semitransparent via `::before`.
- Dark mode: overrides dels gradients a versions fosques.

## Mode fosc (JS + localStorage)

- `:root` defineix colors del mode clar.
- `[data-theme="dark"]` sobreescriu les variables als colors foscos.
- Botó `#theme-toggle` alterna l'atribut `data-theme` al `<html>`.
- `localStorage` guarda la preferència. Per defecte: mode clar.
- Transicions CSS suaus (0.3s) a tots els elements amb color/canvi de fons.

## Menú responsiu (JS mínim)

- El `<nav>` s'amaga al mòbil amb `display: none` i es mostra en fer clic a l'hamburguesa (toggle classe `.nav-open`).
- En pantalla gran (>600px): `display: flex` horitzontal.
- En triar un enllaç al mòbil, es tanca el menú.

## Decisions

- **Single-page amb àncores:** els 4 `id` (consells, propietats, receptes, rutines) són el contracte entre menú i seccions.
- **Targetes en grid responsive:** 1 columna (<480px) → 2 columnes (481-768px) → 3 columnes (>768px) segons la secció.
- **Capçalera no sticky:** a diferència d'una app, una revista es llegeix de dalt a baix. El menú és fix al flux.
- **Zero imatges:** tot el visual és text, emojis, gradients i decoracions CSS.

## Verificació

Obrir `index.html` al navegador i comprovar, un per un, els criteris d'acceptació de la spec (navegació, menú mòbil, contingut complert, placeholders, tabs, dark mode, graella responsiva, colors de la paleta).
