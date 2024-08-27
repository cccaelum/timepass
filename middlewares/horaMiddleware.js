const horaMiddleware = (req, res, next) => {
    const now = new Date();
    req.horaActual = now;
    next();
  }
  
  module.exports = horaMiddleware;
  