# Glossari de conceptes de programació

Conceptes que van apareixent durant el projecte, ordenats per tecnologia.

---

# HTML

## `<!DOCTYPE html>`
**Definició:** declaració que indica al navegador que el document és HTML5.
**Explicació:** Es posa al principi de qualsevol pàgina HTML per activar el mode estàndard del navegador. Sense això, el navegador podria interpretar el codi en mode quirks (compatible amb versions antigues) i mostrar la pàgina incorrectament.
**Exemple:**
```html
<!DOCTYPE html>
<html lang="ca">
...
</html>
```

## `<a>` (enllaç)
**Definició:** etiqueta que crea un enllaç a una altra pàgina o secció.
**Explicació:** L'atribut `href` indica la destinació. Es pot enllaçar a URLs externes, fitxers o seccions internes amb `#id`.
**Exemple:**
```html
<a href="#variables">Anar a variables</a>
<a href="https://google.com">Google</a>
```

## `<button>`
**Definició:** etiqueta que crea un botó clicable.
**Explicació:** S'usa per a accions controlades amb JavaScript (obrir menús, enviar formularis, etc.). Es pot estilitzar amb CSS.
**Exemple:**
```html
<button id="menu-btn" aria-label="Menú">
  &#9776;
</button>
```

## `<code>`
**Definició:** etiqueta que marca text com a codi font amb font monoespaiada.
**Explicació:** S'usa dins de paràgrafs per a fragments de codi en línia o dins de `<pre>` per a blocs sencers.
**Exemple:**
```html
<p>Usa <code>let</code> per declarar variables.</p>
```

## `<div>`
**Definició:** contenidor genèric sense significat semàntic.
**Explicació:** S'usa per agrupar elements i aplicar-los estils o layout amb CSS. És el bloc de construcció bàsic del disseny web.
**Exemple:**
```html
<div class="card">
  <p>Contingut de la targeta</p>
</div>
```

## `<footer>`
**Definició:** etiqueta semàntica per al peu de pàgina.
**Explicació:** Conté informació secundària com copyright, enllaços legals o crèdits. Millora l'accessibilitat i l'SEO.
**Exemple:**
```html
<footer>
  <p>&copy; 2026 — Material d'estudi</p>
</footer>
```

## `<h1>` – `<h6>`
**Definició:** etiquetes de capçalera amb jerarquia (1 és la més important, 6 la menys).
**Explicació:** Estructuren el contingut per títols i subtítols. Només hi ha d'haver un `<h1>` per pàgina.
**Exemple:**
```html
<h1>Fonaments de Programació</h1>
<h2>Variables</h2>
<h3>Tipus de dades</h3>
```

## `<head>`
**Definició:** secció de metadades d'un document HTML (no visible).
**Explicació:** Conté el títol, codificació, enllaços a CSS, scripts i configuracions. Tot el que va al `<head>` no es veu directament a la pàgina.
**Exemple:**
```html
<head>
  <meta charset="UTF-8">
  <title>El meu web</title>
  <link rel="stylesheet" href="style.css">
</head>
```

## `<header>`
**Definició:** etiqueta semàntica per a la capçalera d'una pàgina o secció.
**Explicació:** Acostuma a contenir el logotip, el menú de navegació i elements introductoris. No s'ha de confondre amb `<head>` (metadades).
**Exemple:**
```html
<header>
  <nav>...</nav>
</header>
```

## `<link>`
**Definició:** etiqueta que connecta el document HTML amb un fitxer extern.
**Explicació:** S'usa principalment per enllaçar fulls d'estil CSS (`rel="stylesheet"`), icones de pestanya (`rel="icon"`) o fonts.
**Exemple:**
```html
<link rel="stylesheet" href="style.css">
```

## `<main>`
**Definició:** etiqueta semàntica que envolta el contingut principal de la pàgina.
**Explicació:** Ha de contenir el contingut únic i central del document (no s'hi repeteixen coses com la navegació o el footer). Millora l'accessibilitat.
**Exemple:**
```html
<main>
  <section>Contingut principal aquí</section>
</main>
```

## `<meta>`
**Definició:** etiqueta que defineix metadades sobre el document HTML.
**Explicació:** `charset="UTF-8"` assegura que es mostrin bé caràcters especials (à, ç, ñ). `name="viewport"` fa que la pàgina sigui responsive en mòbils.
**Exemple:**
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## `<nav>`
**Definició:** etiqueta semàntica per a blocs de navegació.
**Explicació:** Agrupa enllaços de navegació principal. Ajuda els lectors de pantalla a saltar directament al menú.
**Exemple:**
```html
<nav>
  <a href="#variables">Variables</a>
  <a href="#funcions">Funcions</a>
</nav>
```

## `<p>`
**Definició:** etiqueta que defineix un paràgraf de text.
**Explicació:** S'usa per a text normal. Cada `<p>` es separa automàticament amb un marge vertical.
**Exemple:**
```html
<p>Això és un paràgraf d'explicació.</p>
```

## `<pre>`
**Definició:** etiqueta que mostra text preformatat (respecta espais i salts de línia).
**Explicació:** Perfecta per a blocs de codi font, on la indentació i els espais són importants. Sovint combinada amb `<code>`.
**Exemple:**
```html
<pre><code>function hola() {
  console.log("Hola!");
}</code></pre>
```

## `<script>`
**Definició:** etiqueta que carrega o escriu codi JavaScript a la pàgina.
**Explicació:** Pot enllaçar un fitxer extern (`src`) o contenir codi inline. Es posa al final del `<body>` per no bloquejar la càrrega visual.
**Exemple:**
```html
<script src="app.js"></script>
<script>
  console.log("Hola!");
</script>
```

## `<section>`
**Definició:** etiqueta semàntica que agrupa contingut relacionat temàticament.
**Explicació:** Cada `<section>` sol tenir una capçalera (`<h1>`–`<h6>`). Serveix per estructurar la pàgina en blocs lògics.
**Exemple:**
```html
<section id="variables">
  <h2>Variables</h2>
  <p>Explicació de les variables...</p>
</section>
```

## `<span>`
**Definició:** contenidor en línia sense significat semàntic.
**Explicació:** S'usa per aplicar estils a fragments petits de text dins d'un paràgraf o element en línia.
**Exemple:**
```html
<p>Això és <span class="destacat">important</span>.</p>
```

## Atribut `class`
**Definició:** atribut que assigna una o més classes CSS a un element.
**Explicació:** Les classes permeten aplicar estils idèntics a múltiples elements i són la base de Tailwind CSS.
**Exemple:**
```html
<p class="text-primari font-bold">Text estilitzat</p>
```

## Atribut `id`
**Definició:** atribut que dona un identificador únic a un element HTML.
**Explicació:** Cada `id` ha de ser diferent a la pàgina. S'usa per a enllaços interns (`href="#seccio"`) i per seleccionar elements amb JavaScript.
**Exemple:**
```html
<section id="variables">
  ...
</section>
<a href="#variables">Anar a variables</a>
```

## Comentaris HTML
**Definició:** text ignorat pel navegador que serveix per a notes al codi font.
**Explicació:** Útil per documentar el codi, desactivar temporalment parts o deixar recordatoris.
**Exemple:**
```html
<!-- Això és un comentari i no es veurà a la pàgina -->
```

---

# CSS

## `@import`
**Definició:** directiva CSS que carrega un fitxer CSS extern o una font dins del full d'estil.
**Explicació:** Alternativa a `<link>` per a fonts o CSS extern. Es posa al principi del full.
**Exemple:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
```

## `@media` (media query)
**Definició:** regla CSS que aplica estils només si es compleix una condició (p. ex. amplada de pantalla).
**Explicació:** Essencial per al disseny responsive: canvia el layout segons si la pantalla és mòbil, tauleta o escriptori.
**Exemple:**
```css
@media (max-width: 768px) {
  body { font-size: 14px; }
}
```

## CDN (Content Delivery Network)
**Definició:** xarxa de servidors distribuïts que entreguen fitxers estàtics (llibreries, fonts) als usuaris des del servidor més proper.
**Explicació:** Carregar Tailwind des d'un CDN evita haver d'instal·lar-lo amb npm. Només cal afegir un `<script>` al HTML.
**Exemple:**
```html
<script src="https://cdn.tailwindcss.com"></script>
```

## Classe CSS
**Definició:** selector reutilitzable definit amb un punt (`.`) que aplica estils als elements que la porten.
**Explicació:** Permet aplicar el mateix conjunt d'estils a molts elements sense repetir codi. És el mètode principal d'estilització.
**Exemple:**
```css
.card {
  background-color: #1E293B;
  border-radius: 12px;
  padding: 24px;
}
```

## Custom properties (variables CSS)
**Definició:** valors reutilitzables definits amb `--nom` que es poden usar a tot el document.
**Explicació:** Centralitzen valors com colors o mides per evitar repetir-los. Es defineixen al `:root` i s'usen amb `var()`.
**Exemple:**
```css
:root {
  --color-primari: #22D3EE;
}
h1 { color: var(--color-primari); }
```

## Flexbox
**Definició:** model de layout CSS que distribueix elements en una dimensió (fila o columna).
**Explicació:** Ideal per centrar contingut, crear barres de navegació o distribuir elements equitativament. Es activa amb `display: flex`.
**Exemple:**
```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

## Grid CSS
**Definició:** model de layout CSS que distribueix elements en dues dimensions (files i columnes).
**Explicació:** Perfecte per a graelles de targetes, galeries o pàgines senceres. Tailwind ofereix classes com `grid-cols-3`.
**Exemple:**
```css
.grid-targetes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
```

## Selector CSS
**Definició:** patró que selecciona elements HTML per aplicar-los estils.
**Explicació:** Hi ha selectors d'etiqueta (`div`), de classe (`.card`), d'id (`#header`), de atribut (`[type="text"]`) i pseudo-classes (`:hover`).
**Exemple:**
```css
/* Selector d'etiqueta */
h1 { color: #22D3EE; }
/* Selector de classe */
.card { background: #1E293B; }
/* Selector d'id */
#menu { display: flex; }
```

## Tailwind CSS
**Definició:** framework CSS basat en classes utilitàries de baix nivell.
**Explicació:** En comptes d'escriure CSS personalitzat, combines classes predefinides com `text-center`, `bg-blue-500` o `p-4` directament al HTML. Accelera molt el desenvolupament.
**Exemple:**
```html
<div class="bg-fons-alt rounded-xl p-6 shadow-lg">
  <h2 class="text-primari font-bold">Títol</h2>
</div>
```

---

# JavaScript

## `===` (strict equality)
**Definició:** operador que compara dos valors sense fer conversió de tipus.
**Explicació:** Retorna `true` només si el valor i el tipus coincideixen. És la forma segura de comparar; evita sorpreses que dona `==`.
**Exemple:**
```javascript
5 === "5"   // false (number vs string)
5 === 5     // true
```

## Arrow function (`=>`)
**Definició:** sintaxi abreujada per escriure funcions en JavaScript modern.
**Explicació:** Més curta que `function` tradicional. Si només té una expressió, el `return` és implícit. Molt usada en callbacks i mètodes d'array.
**Exemple:**
```javascript
const doble = (x) => x * 2;
const suma = (a, b) => a + b;
```

## `boolean`
**Definició:** tipus de dada que només pot ser `true` (cert) o `false` (fals).
**Explicació:** S'usa en condicionals (`if`), operadors lògics i per controlar el flux del programa. JavaScript el dedueix automàticament en contexts booleans.
**Exemple:**
```javascript
const esMajor = true;
const tePermis = false;
```

## `console.log()`
**Definició:** funció que escriu un missatge a la consola del navegador.
**Explicació:** Eina fonamental per debuggar: mostra valors de variables, prova si el codi s'executa i ajuda a entendre què passa.
**Exemple:**
```javascript
const nom = "Anna";
console.log("Hola,", nom);
```

## `const`
**Definició:** paraula clau per declarar una variable que no es pot reasignar.
**Explicació:** S'usa per a valors que no han de canviar (com ara configuracions o càlculs fixes). Si s'intenta reasignar, JavaScript llança un error.
**Exemple:**
```javascript
const IVA = 0.21;
// IVA = 0.10; // error!
```

## `else`
**Definició:** bloc opcional d'un `if` que s'executa si la condició és falsa.
**Explicació:** Completa l'estructura condicional: si la condició no es compleix, va al `else`.
**Exemple:**
```javascript
if (edat >= 18) {
  console.log("Major d'edat");
} else {
  console.log("Menor d'edat");
}
```

## `else if`
**Definició:** encadenament de condicions després d'un `if` inicial.
**Explicació:** Permet comprovar múltiples condicions en seqüència. Quan una es compleix, s'executa el seu bloc i es salten les següents.
**Exemple:**
```javascript
if (nota >= 9) {
  console.log("Excel·lent");
} else if (nota >= 7) {
  console.log("Notable");
} else {
  console.log("Per sota");
}
```

## `for` (bucle)
**Definició:** estructura que repeteix codi un nombre determinat de vegades.
**Explicació:** Té tres parts: inicialització, condició i increment. Ideal per recórrer arrays o executar una acció N vegades.
**Exemple:**
```javascript
for (let i = 0; i < 5; i++) {
  console.log("Volta", i);
}
```

## `function`
**Definició:** paraula clau per declarar una funció reutilitzable.
**Explicació:** Una funció agrupa codi que fa una tasca concreta. Es pot cridar múltiples vegades i pot rebre paràmetres i retornar valors.
**Exemple:**
```javascript
function suma(a, b) {
  return a + b;
}
```

## `if`
**Definició:** estructura condicional que executa un bloc de codi si una condició és certa.
**Explicació:** Controla el flux del programa: "si passa això, fes allò". La condició ha de ser una expressió booleana.
**Exemple:**
```javascript
const temperatura = 30;
if (temperatura > 25) {
  console.log("Fa calor");
}
```

## `let`
**Definició:** paraula clau per declarar variables que poden canviar de valor.
**Explicació:** Moderna i segura. Té àmbit de bloc (`{}`), cosa que evita errors típics de `var`. S'usa quan el valor pot variar.
**Exemple:**
```javascript
let edat = 20;
edat = 21; // correcte
```

## `number`
**Definició:** tipus de dada numèrica (sencers i decimals).
**Explicació:** JavaScript no distingeix entre enters i decimals: tot és `number`. Es poden fer operacions aritmètiques directament.
**Exemple:**
```javascript
const preu = 19.99;
const total = preu * 3;
```

## `return`
**Definició:** paraula clau que fa que una funció done un valor com a resultat.
**Explicació:** El valor retornat es pot guardar en una variable o usar directament. Si una funció no té `return`, retorna `undefined`.
**Exemple:**
```javascript
function suma(a, b) {
  return a + b;
}
const resultat = suma(3, 4); // resultat = 7
```

## Scope (àmbit)
**Definició:** regió del codi on una variable és accessible.
**Explicació:** Les variables declarades amb `let` o `const` dins d'un bloc (`{}`) només existeixen dins d'ell. Fora del bloc no s'hi pot accedir.
**Exemple:**
```javascript
function prova() {
  const x = 10;
}
// console.log(x); // ReferenceError
```

## `string`
**Definició:** tipus de dada que representa text, entre cometes.
**Explicació:** Es pot escriure amb cometes simples, dobles o backticks (template literals). Les template literals permeten interpolació de variables amb `${}`.
**Exemple:**
```javascript
const nom = "Anna";
const salutacio = `Hola, ${nom}!`;
```

## Template literal (`` `string` ``)
**Definició:** cadena de text entre backticks que permet interpolació de variables i salts de línia.
**Explicació:** Més potent que les cometes normals: pots inserir variables amb `${}` i escriure textos multilínia sense concatenar.
**Exemple:**
```javascript
const nom = "Anna";
const edat = 25;
console.log(`Em dic ${nom} i tinc ${edat} anys.`);
```

## `while` (bucle)
**Definició:** estructura que repeteix codi mentre una condició sigui certa.
**Explicació:** No té un comptador fix com `for`. Cal assegurar-se que la condició es fa falsa en algun moment per evitar bucles infinits.
**Exemple:**
```javascript
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
```

## Array
**Definició:** estructura de dades que guarda múltiples valors en una sola variable, en ordre.
**Explicació:** Els arrays s'indexen des de 0. S'hi accedeix amb claudàtors (`array[0]`). Tenen la propietat `.length` que indica quants elements conté.
**Exemple:**
```javascript
const notes = [7, 8, 6, 9];
console.log(notes[0]);      // 7
console.log(notes.length);  // 4
```

## Comentaris JavaScript
**Definició:** text ignorat per l'intèrpret que serveix per explicar el codi.
**Explicació:** `//` per a una línia, `/* */` per a múltiples línies. Ajuden a documentar i a desactivar codi temporalment.
**Exemple:**
```javascript
// Això és un comentari d'una línia
/* Això és un
   comentari
   multilínia */
```

---

# General

## Algorisme
**Definició:** seqüència ordenada de passos per resoldre un problema.
**Explicació:** Abans d'escriure codi, cal dissenyar l'algorisme: què ha de fer el programa, en quin ordre i com tractar les dades.
**Exemple:**
```
1. Llegir la nota
2. Si la nota >= 5, mostrar "Aprovat"
3. Si no, mostrar "Susprès"
```

## Bucle
**Definició:** estructura que repeteix un bloc de codi múltiples vegades.
**Explicació:** Estalvia escriure el mateix codi una i altra vegada. Cada repetició s'anomena iteració. Cal una condició de sortida per evitar bucles infinits.
**Exemple:**
```
for → quan saps quantes repeticions vols
while → quan reps fins que es complisca una condició
```

## Condicional
**Definició:** estructura que pren decisions segons si una condició és certa o falsa.
**Explicació:** Permet que el programa faça coses diferents segons el context. La base de la lògica de programació.
**Exemple:**
```
if (plou) {
  portar paraigua
} else {
  no cal portar paraigua
}
```

## Funció
**Definició:** bloc de codi reutilitzable que fa una tasca concreta.
**Explicació:** Una funció es defineix un cop i es pot cridar (executar) tantes vegades com calga, possiblement amb valors diferents (paràmetres).
**Exemple:**
```
funció doble(x) → retorna x * 2
crida: doble(5) → 10
crida: doble(10) → 20
```

## Paràmetre
**Definició:** variable que una funció rep per treballar amb ella.
**Explicació:** Els paràmetres es defineixen entre parèntesis en crear la funció. Els valors concrets que se li passen s'anomenen arguments.
**Exemple:**
```javascript
function saluda(nom) {    // nom és el paràmetre
  console.log("Hola", nom);
}
saluda("Anna");           // "Anna" és l'argument
```

## Variable
**Definició:** contenidor que guarda un valor per usar-lo després al codi.
**Explicació:** Té un nom (identificador), un valor i un tipus (string, number, boolean...). Es declara amb `let` o `const`.
**Exemple:**
```javascript
let edat = 20;            // pot canviar
const NOM = "Anna";       // no pot canviar
```

## Valor de retorn
**Definició:** valor que una funció envia al lloc des d'on s'ha cridat.
**Explicació:** S'usa `return` dins la funció. Permet guardar el resultat en una variable o usar-lo directament en una expressió.
**Exemple:**
```javascript
function suma(a, b) {
  return a + b;           // valor de retorn
}
const total = suma(3, 4); // total val 7
```
