const userService = require('../services/userService');

module.exports = {
    async getAllUsers(){
        return await userService.getAllUsers(); //Return all users
    },
    async createUser(req, res){
        return await userService.createUser(req, res);  //Create a user
    },
    async deleteUser(req, res){
        return await userService.deleteUser(req, res);  //Delete a user
    },
    async updateUser(req, res){
        return await userService.updateUser(req, res);  //Update a user
    }
}