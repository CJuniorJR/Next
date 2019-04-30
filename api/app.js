const hapi = require('hapi');
const userRoute = require('./routes/user.routes');
const database = require('./infra/database');

const server = hapi.server({
    host: 'localhost',
    port: 8000,
    routes: {
        cors: true
    }
});

server.route(userRoute);

const start = async function (){
    try {
        await server.start();
        await database();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
    console.log("Servidor rodando em: ",server.info.uri);
};

start();