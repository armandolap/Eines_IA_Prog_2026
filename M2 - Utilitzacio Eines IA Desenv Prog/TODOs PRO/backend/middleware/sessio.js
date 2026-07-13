/**
 * Guàrdies de sessió reutilitzables.
 *
 * - requereixSessio:    per a rutes API → respon 401 JSON si no hi ha sessió.
 * - requereixSessioPagina: per a pàgines HTML → redirigeix 302 a /login si no hi ha sessió.
 */

function requereixSessio(req, res, next) {
  if (req.session && req.session.userId) {
    return next();
  }
  return res.status(401).json({ error: 'No autenticat' });
}

function requereixSessioPagina(req, res, next) {
  if (req.session && req.session.userId) {
    return next();
  }
  return res.redirect('/login');
}

module.exports = { requereixSessio, requereixSessioPagina };
