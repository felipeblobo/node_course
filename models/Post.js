const db = require('./db');

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },

    mensagem: {
        type: db.Sequelize.TEXT
    }

});

// Post.sync({force:true}) (somente executa uma vez para criação da tabela.)

module.exports = Post