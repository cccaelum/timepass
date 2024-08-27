const validarHora = (req, res, next) => {
    const hora = req.horaActual.getHours();
  
    if (hora >= 12 && hora <= 24) {
      next();
    } else {
      res.locals.mensaje = 'Aún no es la hora';
      return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje)); //*
    }
  }
  
  module.exports = validarHora;
  
  //* con res.redirect estás pasando el mensaje como un parámetro en la URL.
  // res.locals se usa para almacenar datos temporales específicos de una solicitud, pero no persisten en redirecciones