const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize');


// configurando a template engine

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// conexão com banco de dados
const sequelize = new Sequelize('teste', 'root', 'pazeamor',{
    host: 'localhost',
    dialect: 'mysql'
})

// ROTAS

    app.get('/cad', function(req,res){
        res.render('formularios')
    })
 
    app.post('/add', function(rec,res){
        res.send('formulario recebido')
    })

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
}); 

