"use strict"
const Users = require('../sequelize/models').Users;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

module.exports = {
    async createUser(req, res) {
        let user;
        let hash = await bcrypt.hash(req.payload.password, SALT_ROUNDS);
        user = await Users.create({
            fullname: req.payload.fullname,
            email: req.payload.email,
            phone: req.payload.phone,
            password: hash
        });
        return res.response(user).code(200);
    },

    async getAllUsers(req, res) {
        let result = await Users.all()
        return result;
    },
    async deleteUser(req, res) {
        return await Users.destroy({
            where: {
                id: req.params.id
            }
        }).then((affectedRows) => {
            console.log(affectedRows + "rows affected");
            return Users.findAll();

        })

    },
    async updateUser(req, res) {
        req.payload = JSON.parse(JSON.stringify(req.payload)); //converting payload to json
        return await Users.update(
            {
                fullname: req.payload.fullname,
                email: req.payload.email,
                password: req.payload.password,
                phone: req.payload.phone
            }, /* set attributes' value */
            {
                where:
                    { id: req.params.id }
            } /* where criteria */
        ).then((affectedRows) => {
            console.log(affectedRows + "rows affected");
            return Users.findAll();

        }).error((error)=>{console.log(error)})

    },
    async findUserByEmail(req, res) {
        let result = await Users.findAll({
            where: {
                email: req.payload.email
            }
        })
        return result;
    }
};