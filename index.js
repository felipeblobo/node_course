const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Post = require("./models/Post");

app.use(express.urlencoded());
app.use(express.json());

// configurando a template engine

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ROTAS

app.get("/", (req, res) => {
  Post.findAll().then((posts) => {
    console.log(posts);
    res.render("home", {posts: posts})
  })
})

app.get("/cad", (req, res) => {
  res.render("formularios");
});

app.post("/add", (req, res) => {
  Post.create({
    titulo: req.body.titulo,
    mensagem: req.body.mensagem,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((erro) => {
      res.send(`Houve um erro: ${erro}`);
    });
});

app.listen(8081, () => {
  console.log("Servidor rodando na url http://localhost:8081");
});
