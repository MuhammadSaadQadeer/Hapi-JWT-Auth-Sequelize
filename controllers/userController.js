const userService = require('../services/userService');

module.exports = {
    async getAllUsers(){
        return await userService.getAllUsers();
    },
    async createUser(req, res){
        return await userService.createUser(req, res);
    },
    async deleteUser(req, res){
        return await userService.deleteUser(req, res);
    },
    async updateUser(req, res){
        return await userService.updateUser(req, res);
    }
}