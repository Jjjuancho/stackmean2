//Librerias que requerimos
const express = require('express');
const cors = require('cors');

//Cargar las variables de .env dentro de procces.env
require('dotenv').config();

//Cargar-ejecutar la configuración de la db
require('./config/db');

//Si creamos una variable, tendriamos generada una instancia de express
const app = express();

//Configuración
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// GET /api/songs
// GET /api/songs/SONGID
// Delegamos todas las routas con /api a api.js
app.use('/api', require('./routes/api/api.js'));

//Definimos el puerto
const PORT = process.env.PORT || 3000;

//Ponemos la app a escuchar, es decir la app se pone a escuchar a traves del metodo listen
app.listen(PORT, () => {
    //Esto se ejecuta cuando el servidor arranca
    console.log(`Servidor escuchando en puerto ${PORT}`);
});