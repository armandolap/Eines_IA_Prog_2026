const express = require('express');
const bcrypt  = require('bcrypt');
const pool    = require('../db');
const { requereixSessio } = require('../middleware/sessio');

const router = express.Router();
const SALT_ROUNDS = 10;

/* ── POST /api/registre ── */
router.post('/registre', async (req, res) => {
  const { nom, email, contrasenya } = req.body || {};

  if (!nom || !email || !contrasenya) {
    return res.status(400).json({ error: 'Falten camps obligatoris (nom, email, contrasenya)' });
  }

  const emailNormalitzat = String(email).trim().toLowerCase();
  const contrasenyaStr  = String(contrasenya);

  if (contrasenyaStr.length < 6) {
    return res.status(400).json({ error: 'La contrasenya ha de tenir com a mínim 6 caràcters' });
  }

  try {
    const hash = await bcrypt.hash(contrasenyaStr, SALT_ROUNDS);

    const [result] = await pool.execute(
      'INSERT INTO users (nom, email, password_hash) VALUES (?, ?, ?)',
      [nom, emailNormalitzat, hash]
    );

    req.session.userId = result.insertId;

    return res.status(201).json({ id: result.insertId, nom, email: emailNormalitzat });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ error: 'Aquest email ja està registrat' });
    }
    console.error('Error al registre:', err);
    return res.status(500).json({ error: 'Error intern del servidor' });
  }
});

/* ── POST /api/login ── */
router.post('/login', async (req, res) => {
  const { email, contrasenya } = req.body || {};

  if (!email || !contrasenya) {
    return res.status(400).json({ error: 'Falten camps obligatoris (email, contrasenya)' });
  }

  const emailNormalitzat = String(email).trim().toLowerCase();
  const contrasenyaStr  = String(contrasenya);

  try {
    const [rows] = await pool.execute(
      'SELECT id, nom, email, password_hash FROM users WHERE email = ?',
      [emailNormalitzat]
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Email o contrasenya incorrectes' });
    }

    const usuari = rows[0];
    const coincideix = await bcrypt.compare(contrasenyaStr, usuari.password_hash);

    if (!coincideix) {
      return res.status(401).json({ error: 'Email o contrasenya incorrectes' });
    }

    req.session.userId = usuari.id;

    return res.json({ id: usuari.id, nom: usuari.nom, email: usuari.email });
  } catch (err) {
    console.error('Error al login:', err);
    return res.status(500).json({ error: 'Error intern del servidor' });
  }
});

/* ── POST /api/logout ── */
router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    return res.json({ estat: 'ok' });
  });
});

/* ── GET /api/jo ── */
router.get('/jo', requereixSessio, async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT id, nom, email FROM users WHERE id = ?',
      [req.session.userId]
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: 'No autenticat' });
    }

    return res.json(rows[0]);
  } catch (err) {
    console.error('Error a /api/jo:', err);
    return res.status(500).json({ error: 'Error intern del servidor' });
  }
});

module.exports = router;
