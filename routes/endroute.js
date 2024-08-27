const express = require('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware');
const validarHora = require('../middlewares/validarHora');

router.get('/', horaMiddleware, validarHora, (req, res) => {
  res.send(`
    <h1>Ruta final</h1>
    <p>Bienvenido a la ruta final.</p>
  `);
});

module.exports = router;
