const userController = require('../controller/user.controller');

let routes = [{
    method: 'GET',
    path: '/usuario',
    handler: userController.find
},
{
    method: 'POST',
    path: '/usuario',
    handler: userController.create
}]

module.exports = routes;