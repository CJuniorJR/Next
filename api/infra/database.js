var mongo = require('mongoose');

module.exports = async () => {
    await mongo.connect('mongodb://localhost:27017/api',{ useNewUrlParser: true});

    var conn = mongo.connection;
    conn.on('error', console.error.bind(console,'Erro de Conexão: '));

    conn.once('open', () => {
        console.log('Conexão realizada com sucesso!');
    })
}