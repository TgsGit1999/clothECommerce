const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = function (req, res, next) {
  // Agarro al token desde los headers
  const token = req.header('token');

  // checkeo si existe un token
  if (!token) {
    return res.status(401).json({ msg: 'no token, authorization denied' });
  }

  // verifico el token usando el secret
  try {
    const decoded = jwt.verify(token, process.env.JWTSECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
