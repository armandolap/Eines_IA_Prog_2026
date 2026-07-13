/* ———————————————— FUNCIONS DE DADES (contracte API — fetch real) ———————————————— */

async function getTodos() {
  const res = await fetch('/api/tasques', { credentials: 'same-origin' })
  if (res.status === 401) { window.location.href = '/login'; return [] }
  if (!res.ok) throw new Error('Error carregant tasques')
  return res.json()
}

async function createTodo(title) {
  const res = await fetch('/api/tasques', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin',
    body: JSON.stringify({ title })
  })
  if (res.status === 401) { window.location.href = '/login'; return null }
  if (!res.ok) throw new Error('Error creant tasca')
  return res.json()
}

async function toggleTodo(id, done) {
  const res = await fetch(`/api/tasques/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin',
    body: JSON.stringify({ done })
  })
  if (res.status === 401) { window.location.href = '/login'; return null }
  if (!res.ok) throw new Error('Error actualitzant tasca')
  return res.json()
}

async function deleteTodo(id) {
  const res = await fetch(`/api/tasques/${id}`, {
    method: 'DELETE',
    credentials: 'same-origin'
  })
  if (res.status === 401) { window.location.href = '/login'; return }
  if (!res.ok) throw new Error('Error eliminant tasca')
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

let tasques = []

async function carrega() {
  mostraEstat('estat-carregant')
  try {
    const dades = await getTodos()
    if (dades === null) return
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
    formLogin.addEventListener('submit', async (e) => {
      e.preventDefault()
      netejaErrors()
      const emailOk = validarEmail('email')
      const passOk = validarContrasenya('contrasenya')
      if (!emailOk || !passOk) return

      const email = document.getElementById('camp-email').value.trim()
      const contrasenya = document.getElementById('camp-contrasenya').value.trim()

      try {
        const res = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'same-origin',
          body: JSON.stringify({ email, contrasenya })
        })
        const dades = await res.json()
        if (res.ok) {
          window.location.href = '/todos'
        } else {
          mostraErrorLogin(dades.error || 'Error desconegut')
        }
      } catch {
        mostraErrorLogin('Error de connexió')
      }
    })
  }

  if (formRegistre) {
    formRegistre.addEventListener('submit', async (e) => {
      e.preventDefault()
      netejaErrors()
      const nomOk = validarCamp('nom', 'Aquest camp és obligatori')
      const emailOk = validarEmail('email')
      const passOk = validarContrasenya('contrasenya')
      const coincideixen = passOk ? validarCoincideixen() : false
      if (!nomOk || !emailOk || !passOk || !coincideixen) return

      const nom = document.getElementById('camp-nom').value.trim()
      const email = document.getElementById('camp-email').value.trim()
      const contrasenya = document.getElementById('camp-contrasenya').value.trim()

      try {
        const res = await fetch('/api/registre', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'same-origin',
          body: JSON.stringify({ nom, email, contrasenya })
        })
        const dades = await res.json()
        if (res.ok) {
          window.location.href = '/todos'
        } else {
          mostraErrorRegistre(dades.error || 'Error desconegut')
        }
      } catch {
        mostraErrorRegistre('Error de connexió')
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
        const nova = await createTodo(title)
        if (nova === null) return
        input.value = ''
        tasques.unshift(nova)
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
          await toggleTodo(id, e.target.checked)
          const t = tasques.find(t => t.id === id)
          if (t) t.done = e.target.checked
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
          tasques = tasques.filter(t => t.id !== id)
          pintaLlista()
          actualitzaComptador()
          if (tasques.length === 0) mostraEstat('estat-buit')
        } catch {
          mostraEstat('estat-error')
        }
      }
    })
  }

  /* —— Surt (logout) —— */
  const botoSurt = document.getElementById('boto-surt')
  if (botoSurt) {
    botoSurt.addEventListener('click', async (e) => {
      e.preventDefault()
      await fetch('/api/logout', { method: 'POST', credentials: 'same-origin' })
      window.location.href = '/login'
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

function mostraErrorLogin(missatge) {
  const el = document.getElementById('error-login')
  if (el) {
    el.textContent = missatge
    el.classList.remove('hidden')
  }
}

function mostraErrorRegistre(missatge) {
  const el = document.getElementById('error-registre')
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
