const user = require('../models/user.model');

module.exports = {
    find: async () => {
        return await user.model.find();
    },
    findByLogin: async (login) => {
        return await user.model.find({login: new RegExp(login,'i')});
    },
    create: async (u) => {
        return await user.model.create(u);
    }
}