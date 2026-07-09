/* ———————————————— CONSTANTS ———————————————— */
let SIMULA_ERROR = false
const MOCK_LATENCIA = 300

/* ———————————————— MOCK DE DADES ———————————————— */
let nextId = 4
const tasquesInicials = [
  { id: 1, title: 'Estudiar CSS', done: true, created_at: '2026-07-09T08:00:00Z' },
  { id: 2, title: 'Preparar la llista de la compra', done: false, created_at: '2026-07-09T08:30:00Z' },
  // { id: 3, title: 'Llegir el capítol 5', done: false, created_at: '2026-07-09T09:00:00Z' }
]

let tasques = tasquesInicials.map(t => ({ ...t }))

function copiarTasques() {
  return tasques.map(t => ({ ...t }))
}

/* ———————————————— FUNCIONS DE DADES (contracte API) ———————————————— */
async function getTodos() {
  if (SIMULA_ERROR) throw new Error('Error de xarxa simulat')
  await retard(MOCK_LATENCIA)
  return copiarTasques()
}

async function createTodo(title) {
  if (SIMULA_ERROR) throw new Error('Error de xarxa simulat')
  await retard(MOCK_LATENCIA)
  const nova = { id: nextId++, title, done: false, created_at: new Date().toISOString() }
  tasques.push(nova)
  return { ...nova }
}

async function toggleTodo(id, done) {
  if (SIMULA_ERROR) throw new Error('Error de xarxa simulat')
  await retard(MOCK_LATENCIA)
  const tasca = tasques.find(t => t.id === id)
  if (!tasca) throw new Error('Tasca no trobada')
  tasca.done = done
  return { ...tasca }
}

async function deleteTodo(id) {
  if (SIMULA_ERROR) throw new Error('Error de xarxa simulat')
  await retard(MOCK_LATENCIA)
  tasques = tasques.filter(t => t.id !== id)
}

function retard(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/* ———————————————— DOM ———————————————— */
function mostraEstat(visibleId) {
  const ids = ['estat-carregant', 'estat-buit', 'estat-error']
  ids.forEach(id => {
    document.getElementById(id).classList.toggle('hidden', id !== visibleId)
  })
}

function actualitzaComptador() {
  const pendents = tasques.filter(t => !t.done).length
  document.getElementById('comptador').textContent = `${pendents} pendents`
}

function pintaLlista() {
  const ul = document.getElementById('llista')
  ul.innerHTML = ''
  tasques.forEach(t => {
    const li = document.createElement('li')
    li.className = 'bg-targeta rounded-xl shadow-sm border border-vora p-4 flex items-center gap-3'
    li.dataset.id = t.id

    const cb = document.createElement('input')
    cb.type = 'checkbox'
    cb.checked = t.done
    cb.className = 'w-5 h-5 accent-fet rounded focus:outline-none focus:ring-2 focus:ring-primari'
    cb.setAttribute('aria-label', t.done ? 'Marca com a pendent' : 'Marca com a feta')

    const span = document.createElement('span')
    span.className = 'flex-1' + (t.done ? ' text-fet line-through opacity-60' : ' text-tinta')
    span.textContent = t.title

    const boto = document.createElement('button')
    boto.className = 'text-perill hover:text-perill/80 transition-colors focus:outline-none focus:ring-2 focus:ring-perill rounded p-1'
    boto.setAttribute('aria-label', 'Elimina tasca')
    boto.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>'

    li.append(cb, span, boto)
    ul.appendChild(li)
  })
}

async function carrega() {
  mostraEstat('estat-carregant')
  try {
    const dades = await getTodos()
    tasques = dades
    pintaLlista()
    actualitzaComptador()
    if (tasques.length === 0) {
      mostraEstat('estat-buit')
    } else {
      mostraEstat(null)
    }
  } catch {
    mostraEstat('estat-error')
  }
}

/* ———————————————— ESDEVENIMENTS ———————————————— */
document.addEventListener('DOMContentLoaded', () => {
  /* —— Auth —— */
  const formLogin = document.getElementById('form-login')
  const formRegistre = document.getElementById('form-registre')

  if (formLogin) {
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault()
      if (validarFormLogin()) {
        window.location.href = 'index.html'
      }
    })
  }

  if (formRegistre) {
    formRegistre.addEventListener('submit', (e) => {
      e.preventDefault()
      if (validarFormRegistre()) {
        window.location.href = 'login.html'
      }
    })
  }

  /* —— Tasques —— */
  if (document.getElementById('llista')) {
    carrega()

    document.getElementById('boto-afegir').addEventListener('click', async () => {
      const input = document.getElementById('camp-tasca')
      const error = document.getElementById('error-tasca')
      const title = input.value.trim()

      if (!title) {
        error.classList.remove('hidden')
        return
      }
      error.classList.add('hidden')

      try {
        await createTodo(title)
        input.value = ''
        pintaLlista()
        actualitzaComptador()
        document.getElementById('estat-buit').classList.add('hidden')
      } catch {
        mostraEstat('estat-error')
      }
    })

    document.getElementById('camp-tasca').addEventListener('input', () => {
      document.getElementById('error-tasca').classList.add('hidden')
    })

    document.getElementById('llista').addEventListener('click', async (e) => {
      const li = e.target.closest('li')
      if (!li) return
      const id = Number(li.dataset.id)

      if (e.target.type === 'checkbox') {
        try {
          const tasca = await toggleTodo(id, e.target.checked)
          pintaLlista()
          actualitzaComptador()
        } catch {
          mostraEstat('estat-error')
        }
      }

      if (e.target.closest('button')) {
        if (!confirm('Segur que vols eliminar aquesta tasca?')) return
        try {
          await deleteTodo(id)
          await carrega()
        } catch {
          mostraEstat('estat-error')
        }
      }
    })
  }
})

/* ———————————————— VALIDACIÓ ———————————————— */
function netejaErrors() {
  document.querySelectorAll('[id^="error-"]').forEach(el => el.classList.add('hidden'))
}

function mostraError(campId, missatge) {
  const el = document.getElementById('error-' + campId)
  if (el) {
    el.textContent = missatge
    el.classList.remove('hidden')
  }
}

function validarCamp(campId, missatgeBuit) {
  const input = document.getElementById('camp-' + campId)
  const valor = input.value.trim()
  if (!valor) {
    mostraError(campId, missatgeBuit)
    return false
  }
  return true
}

function validarEmail(campId) {
  const input = document.getElementById('camp-' + campId)
  const valor = input.value.trim()
  if (!valor) {
    mostraError(campId, 'Aquest camp és obligatori')
    return false
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
    mostraError(campId, 'Escriu un email vàlid')
    return false
  }
  return true
}

function validarContrasenya(campId) {
  const input = document.getElementById('camp-' + campId)
  const valor = input.value.trim()
  if (!valor) {
    mostraError(campId, 'Aquest camp és obligatori')
    return false
  }
  if (valor.length < 8) {
    mostraError(campId, 'Mínim 8 caràcters')
    return false
  }
  return true
}

function validarCoincideixen() {
  const c1 = document.getElementById('camp-contrasenya').value.trim()
  const c2 = document.getElementById('camp-contrasenya2').value.trim()
  if (c1 !== c2) {
    mostraError('contrasenya2', 'Les contrasenyes no coincideixen')
    return false
  }
  return true
}

function validarFormLogin() {
  netejaErrors()
  const emailOk = validarEmail('email')
  const passOk = validarContrasenya('contrasenya')
  return emailOk && passOk
}

function validarFormRegistre() {
  netejaErrors()
  const nomOk = validarCamp('nom', 'Aquest camp és obligatori')
  const emailOk = validarEmail('email')
  const passOk = validarContrasenya('contrasenya')
  const coincideixen = passOk ? validarCoincideixen() : false
  return nomOk && emailOk && passOk && coincideixen
}
