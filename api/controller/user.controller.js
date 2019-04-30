const service = require('../services/user.services');

module.exports = {
    find: async (request, h) => {
        if(request.query){
            return await service.findByLogin(request.query.login);
        }else{
            return await service.findAll();
        }
    },
    create: async (request, h) => {
        return await service.create(request.payload);
    }
}

