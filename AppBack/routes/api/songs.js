//Extrar el objeto router, el que permite ir delegando las peticiones
const router = require('express').Router();

//Traemos el modelo generado
const Song = require('../../models/song.model');

//Funcion que se encarga de ejecutarse cuando se recibe una peticion get sobre /api/songs
router.get('/', async (req, res) => {{

    //Como el proceso puede devolver alguna excepción, lo ponemos dentro de un try
    try{

    //Como estamos utilizando mongoose, con  solo interactuar con el modelo y llamar a la funcion find
    const songs = await Song.find();

    //Devolvemos en formato json toda la lista de canciones recuperadas
    res.json(songs);

    }catch(error){
        res.json({error: error.message});
    }

}});

//Funcion que se encarga de ejecutarse cuando se recibe una peticion get sobre /api/songs/songId
router.get('/:songId', async (req, res) => {

    //Extraemos el valor variable de la url
    const { songId } = req.params;

    //Con moongose, podemos usar findById
    const song = await Song.findById(songId);

    //Devolvemos en formato json la canción encontrada
    res.json(song);

});

//Funcion que se encarga de ejecutarse cuando se recibe una peticion post sobre /api/songs
router.post('/', async (req, res) => {

    try{

        //Con mongoose, podemos crear un documento en base al modelo que tenemos
        //Cuando utilizamos el metodo create de moongose, lo que devuelve es el nuevo documento
        //que hemos insertado en la base de datos
        const song = await Song.create(req.body);

        //Respondemos con la cancion(documento) que hemos creado
        res.json(song);
        
    }catch(error){
        res.json({ error: error.message });
    }
});

//Luego de configurar el objeto Router, lo exportamos
module.exports = router;