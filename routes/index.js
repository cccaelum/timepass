const express = require('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware');

router.get('/', horaMiddleware, (req, res) => {
  const mensaje = req.query.mensaje; //* 

  const horaActual = req.horaActual.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
  });

  res.send(`
    <h1>Bienvenido</h1>
    <p>La hora actual es: ${horaActual}</p>
    ${mensaje ? `<p>${mensaje}</p>` : ''}
    <a href="/endroute">Entrar</a>
  `);
});

module.exports = router;

//* req.query: parámetros de consulta en la URL (query parameters), aparecen en la URL después del signo ? y se usan para pasar información en las rutas. 
// En este caso, el parámetro mensaje se puede acceder desde req.query.mensaje.
