# Tech Stack
- Llenguatges i eines
HTML5 semàntic.
Tailwind CSS via CDN (<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>), configurat amb un bloc @theme inline dins de l'index.html.
CSS propi a style.css només per al que Tailwind no cobreix còmodament (tabs amb radio inputs, placeholders artístics amb ::before, gradients de receptes, hover complexes, dark mode overrides específics).
JavaScript mínim i sense llibreries, només per al menú hamburguesa mòbil i l'alternança de mode fosc/clar amb localStorage.

Estructura de fitxers
Dia4_SDD/
├── index.html      ← tota la pàgina
└── style.css       ← estils extra

- Disseny visual
La font de veritat és la skill disseny-web (.agents/skills/disseny-web/SKILL.md): paleta en mode clar per defecte (verd, terracota, crema), tokens de color, targetes, grid responsiu i tipografia. Cal seguir-la al peu de la lletra.

- Documentació de referència
Quan calgui la sintaxi o exemples actualitzats de Tailwind (config inline via CDN, breakpoints, classes d'utilitat), consulta el MCP context7 abans de respondre, en lloc de confiar en la memòria.

- Convencions de codi
Contingut en català.
Codi net i indentat de manera consistent.
Mobile-first: classes base per a mòbil, s'amplia amb breakpoints (md:, lg:).
Classes CSS en kebab-case.
