//Extrar el objeto router, el que permite ir delegando las peticiones
const router = require('express').Router();

//Delegamos las routas con url /api/songs a songs.js
router.use('/songs', require('./songs'));

//Luego de configurar el objeto Router, lo exportamos
module.exports = router;