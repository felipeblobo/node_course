
// Postagem - Model 

const postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING},
    conteudo: {
        type: Sequelize.TEXT
    }
})

const usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING},
    sobrenome: {
        type: Sequelize.STRING},
    idade: {
        type: Sequelize.INTEGER},
    email: {
        type: Sequelize.STRING}
    })


// usuario.sync({force:true}) - CRIAÇÃO DA TABELA

