//Tenemos que generar diferentes estructras/esquemas/modelos que representen a cada uno de los documentos o las colecciones con las que vamos a trabajar en la base de datos

//Traemos de la libreria mongoose:
//El metodo model que va a permitir enlazar los modelos con la coleccion la base de datos
//La clase schema que va a permitir generar la estrctura de las canciones
const {model, Schema} = require('mongoose');

//Esta variable va a representar los diferentes campos que van a tener cada uno de los documentos de la coleccion
const songSchema = new Schema({
    title: String,
    artist: String,
    genre: String,
    album: String,
    duration: Number,
    year: Number,
    trackNumber: Number,
    isExplicit: Boolean
});

//Exportamos el Schema para poder trabajar fuera con este schema
//Pero en lugar de exportar directamente, vamos a llamar al metodo model
//Que es el encargado de asociar la coleccion que tenemos en la db con el schema que tenemos acá
//Como primer parametro se la pasa el nombre de la coleccion en singular y como segundo el nombre del Schema
module.exports = model('song', songSchema);