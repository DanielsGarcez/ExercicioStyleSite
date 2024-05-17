// Requisição do Express e Handlebars
const express = require("express")
const app = express()
const exphbs = require('express-handlebars')

// Configuração do Handlenbars
const hbs = exphbs.create({ 
    extname: '.handlebars', 
    defaultLayout: 'main',
    partialsDir: __dirname + '/views/partials/'
})
app.engine('handlebars',hbs.engine)
app.set('view engine', 'handlebars')

// Servir arquivos estáticos
app.use(express.static('public')); 

// Rotas
app.get('/', function(req, res){
    res.render('home')
})
app.get('/home', function(req, res){
    res.render('home', { title: "home"})
})
app.get('/produtos', function(req, res){
    res.render('produtos', { title: "produtos"})
})

app.get('/contato', function(req, res){
    res.render('contato', { title: "contato"})
})

// Servidor Online
app.listen(8081, function(){
    console.log("Servidor Online 👍")
})