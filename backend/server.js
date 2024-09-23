var express = require('express');
var server = express();
var routes = require('./routes/routes');
var mongoose = require('mongoose');
const cors = require('cors');


mongoose.set('strictQuery', false);  // ou true, se quiser o comportamento estrito

// Conexão com o MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/est", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, function checkDB(error) {
    if (error) {
        console.log("Ocorreu um erro de conexão no banco de dados", error);
    } else {
        console.log("Banco de dados conectado!");
    }
});

server.use(cors());
server.use(express.json());
server.use(routes);


server.listen(8000,function check(error)
{
    if(error)
    {
        console.log("Error ao realizar check")
    }
    else
    {
        console.log("Iniciado")
    }
});