const express = require("express");
const app = express();
const handlebars = require('express-handlebars')


app.use(express.urlencoded())
app.use(express.json());


// configurando a template engine

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


// ROTAS

    app.get('/cad', function(req,res){
        res.render('formularios')
    })
 
    app.post('/add', function(req,res){
                res.send('Texto: '+req.body.titulo+' Conteudo: '+req.body.conteudo)
    })

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
}); 

