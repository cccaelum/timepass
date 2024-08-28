const express = require('express');
const app = express();

// definimos las rutas y las asociamos sus respectivos routers
const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');

//app.use(horaMiddleware) para que cualquier ruta tenga acceso a la hora, por lo tanto no hace falta pasarlo individualmente en las rutas
app.use('/', indexRouter);
app.use('/endroute', endrouteRouter);


app.use((req, res) => {
    res.status(404).send('<h1>Página no encontrada</h1><a href="/">Inicio</a>');
  });

app.listen(3000, () => {
  console.log('Aplicación ejecutándose en http://localhost:3000');
});