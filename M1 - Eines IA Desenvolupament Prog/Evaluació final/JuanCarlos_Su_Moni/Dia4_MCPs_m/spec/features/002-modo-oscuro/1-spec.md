# 002 — Mode fosc / Mode clar
- Objectiu
Afegir un botó a la capçalera que permeta a l'usuari alternar entre mode fosc (l'actual per defecte) i mode clar, i recordar la preferència entre visites.

- Requisits funcionals
Botó d'alternança (icona sol/lluna) a la capçalera, visible a tota hora.
En fer clic, canviar tota la interfície al mode contrari (colors de fons, text, targetes, blocs de codi).
En carregar la pàgina, aplicar la preferència guardada (localStorage). Si no n'hi ha, usar mode fosc.
L'animació entre modes ha de ser suau (transició CSS de ~0.3 s).

- Contingut
Paleta de mode clar complementària a la fosc existent:

| Token      | Mode fosc | Mode clar | Ús |
|------------|-----------|-----------|-----|
| `fons`     | `#0F172A` | `#F8FAFC` | Fons general |
| `fons-alt` | `#1E293B` | `#E2E8F0` | Targetes i blocs de codi |
| `text`     | `#E2E8F0` | `#1E293B` | Text principal |
| `text-suau`| `#94A3B8` | `#64748B` | Text secundari |
| `primari`  | `#22D3EE` | `#0891B2` | Títols i enllaços |
| `accent`   | `#A78BFA` | `#7C3AED` | Èmfasi i hover |

- Requisits no funcionals
JavaScript mínim: només el necessari per al toggle i localStorage, sense llibreries.
Transició amb `transition-colors` i `duration-300`.
Accessibilitat: botó amb `aria-label` que canvie segons l'estat ("Canviar a mode clar" / "Canviar a mode fosc").
L'elecció de l'usuari persisteix entre sessions.

- Fora d'abast
Més de dos temes (fosc/clar). Temes personalitzats per l'usuari.

- Criteris d'acceptació
[ ] El botó d'alternança es veu a la capçalera i té icona coherent (sol/lluna).
[ ] En fer clic, tots els colors canvien al mode corresponent.
[ ] En recarregar la pàgina, es manté l'últim mode triat.
[ ] La transició no és brusca.
[ ] El botó té `aria-label` descriptiu que canvia amb l'estat.
