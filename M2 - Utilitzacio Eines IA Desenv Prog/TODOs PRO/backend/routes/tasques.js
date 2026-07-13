const express = require('express');
const pool    = require('../db');
const { requereixSessio } = require('../middleware/sessio');

const router = express.Router();

router.use(requereixSessio);

/* ── GET /api/tasques ── */
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT id, title, done, created_at FROM todos WHERE user_id = ? ORDER BY created_at DESC',
      [req.session.userId]
    );

    const tasques = rows.map(t => ({ ...t, done: !!t.done }));
    return res.json(tasques);
  } catch (err) {
    console.error('Error GET /api/tasques:', err);
    return res.status(500).json({ error: 'Error intern del servidor' });
  }
});

/* ── POST /api/tasques ── */
router.post('/', async (req, res) => {
  const { title } = req.body || {};

  if (!title || !String(title).trim()) {
    return res.status(400).json({ error: 'El títol no pot ser buit' });
  }

  try {
    const [result] = await pool.execute(
      'INSERT INTO todos (title, done, user_id) VALUES (?, 0, ?)',
      [String(title).trim(), req.session.userId]
    );

    const [rows] = await pool.execute(
      'SELECT id, title, done, created_at FROM todos WHERE id = ?',
      [result.insertId]
    );

    const tasca = { ...rows[0], done: !!rows[0].done };
    return res.status(201).json(tasca);
  } catch (err) {
    console.error('Error POST /api/tasques:', err);
    return res.status(500).json({ error: 'Error intern del servidor' });
  }
});

/* ── PATCH /api/tasques/:id ── */
router.patch('/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(404).json({ error: 'Tasca no trobada' });
  }

  const { done } = req.body || {};
  if (typeof done === 'undefined') {
    return res.status(400).json({ error: 'Falta el camp done' });
  }

  try {
    const [result] = await pool.execute(
      'UPDATE todos SET done = ? WHERE id = ? AND user_id = ?',
      [done ? 1 : 0, id, req.session.userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Tasca no trobada' });
    }

    const [rows] = await pool.execute(
      'SELECT id, title, done, created_at FROM todos WHERE id = ? AND user_id = ?',
      [id, req.session.userId]
    );

    const tasca = { ...rows[0], done: !!rows[0].done };
    return res.json(tasca);
  } catch (err) {
    console.error('Error PATCH /api/tasques/:id:', err);
    return res.status(500).json({ error: 'Error intern del servidor' });
  }
});

/* ── DELETE /api/tasques/:id ── */
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(404).json({ error: 'Tasca no trobada' });
  }

  try {
    const [result] = await pool.execute(
      'DELETE FROM todos WHERE id = ? AND user_id = ?',
      [id, req.session.userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Tasca no trobada' });
    }

    return res.status(204).send();
  } catch (err) {
    console.error('Error DELETE /api/tasques/:id:', err);
    return res.status(500).json({ error: 'Error intern del servidor' });
  }
});

module.exports = router;
