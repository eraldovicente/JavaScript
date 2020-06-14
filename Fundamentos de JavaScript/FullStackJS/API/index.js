const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');


// crear el servidor
const app = express();

// Habilitar Cors para um dominio especifico
const whitelist = ['http://localhost:3000'];
const corsOptions = {
     origin: (origin, callback) => {
          // console.log(origin);
          const existe = whitelist.some( dominio => dominio === origin);
          if ( existe ) {
               callback(null, true)
          } else {
               callback(new Error('No Permitido por CORS'))
          }
     }
}

// Habilitar Cors
// app.use(cors(corsOptions));
app.use(cors());

// conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false
});

// habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

// Habilitar routing
app.use('/', routes());

// puerto y arrancar el servidor
app.listen(4000, () => {
     console.log('Servidor funcionando');
});