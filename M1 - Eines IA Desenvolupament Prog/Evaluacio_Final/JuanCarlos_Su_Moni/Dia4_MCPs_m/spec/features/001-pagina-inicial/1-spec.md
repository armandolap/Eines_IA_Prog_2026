# 001 — Pàgina inicial (NutriVida)

- Objectiu
Una pàgina única (index.html) amb capçalera de revista, navegació per àncores i seccions de contingut sobre alimentació saludable.

- Requisits funcionals
Capçalera amb data ("Nº 12 — Juliol 2026"), logo "NutriVida", tagline i menú de navegació amb enllaços a cada secció (#consells, #propietats, #receptes, #rutines). En pantalla gran, horitzontal i visible; al mòbil, darrere d'un botó hamburguesa que s'obre i es tanca en triar un enllaç.
Botó d'alternança mode fosc/clar (sol/lluna) a la capçalera, amb persistència via localStorage. Per defecte: mode clar.

- Contingut (en català)
Hero: article destacat sobre alimentació conscient, amb tag, títol, excerpt i meta.
Consells: 3 targetes numerades (hidratació, plat d'Harvard, greixos saludables).
Superaliments: 3 targetes amb icona, nom i llista de beneficis (espinacs, llavors de xia, all lila).
Receptes: 2 targetes amb placeholder artístic (gradient + emoji), tag, ingredients i temps (amanida de quinoa, crema de carbassa).
Rutines: 2 tabs (vegana / vegetariana) amb 4 àpats cadascuna, implementades amb inputs radio i CSS pur.

- Requisits no funcionals
Disseny: skill disseny-web (mode clar per defecte, paleta i tokens). Cap color fora d'aquesta guia.
Responsive: targetes en grid d'1 → 2 → 3 columnes (mòbil → tauleta → pantalla gran).
Accessibilitat: contrast suficient, focus visible, botons amb aria-label.
Zero imatges: tot el contingut visual és text, emojis o gradients CSS.

- Fora d'abast
Cerca, filtres, múltiples pàgines, backend, JavaScript重型.

- Criteris d'acceptació
[ ] Els enllaços del menú salten a la secció correcta.
[ ] Al mòbil, el menú s'obre i es tanca amb el botó hamburguesa.
[ ] Es veuen les 4 seccions de contingut amb el text complet de NutriVida.
[ ] Les receptes tenen placeholders artístics (gradient + emoji).
[ ] Les rutines funcionen amb tabs CSS (radio inputs).
[ ] El botó de mode fosc/clar canvia els colors i persisteix la preferència.
[ ] La graella passa d'1 a 2 a 3 columnes.
[ ] Els colors coincideixen amb els tokens de disseny-web.
