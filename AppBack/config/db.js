//Acá vamos a especificar como se conecta la app a la bd de mongodb

//Vamos a hacerlo a traves de mongoose, por lo tanto, traemos mongoose
const mongoose = require('mongoose');

//Conectamos a la bd
mongoose.connect(process.env.MONGO_URI);