
const loginController = require('../controllers/loginController')
const userController = require('../controllers/userController')
const userService = require('../services/userService')
const Joi = require('joi');

//All the routes of the api will be defined here 
module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: loginController.greetings,
        config: {
            description: 'Welcome Route',
            tags: ['api']
        }
    },
    {
        method: 'POST',
        path: '/login',
        handler: loginController.authenticate,
        config: {
            description: 'Authenticate User',
            notes: 'Get jwt by providing email(jd@gmail.com) & password(test@123)',
            tags: ['api'],
            auth: false,
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form'
                }
            },
            validate: {
                payload: Joi.object({
                    email: Joi.string(),
                    password: Joi.string()
                })
            }
        }
    },
    {
        method: 'GET',
        path: '/api/users',
        handler: userController.getAllUsers,
        config: {
            tags: ['api'],
            auth: 'jwt',
            description: 'Get All Users',
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).options({ allowUnknown: true }),
            }
        }
    },
    {
        method: 'POST',
        path: '/api/user',
        handler: userController.createUser,
        config: {
            description: 'Create User',
            notes: 'Create user by sending in the data along the token in headers',
            tags: ['api'],
            auth: 'jwt',
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form'
                }
            },
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).options({ allowUnknown: true }),
                payload: Joi.object({
                    fullname: Joi.string(),
                    email: Joi.string(),
                    password: Joi.string(),
                    phone: Joi.number(),
                })
            }
        }
    },
    {
        method: 'DELETE',
        path: '/api/user/{id}',
        handler: userController.deleteUser,
        config: {
            description: 'Delete User',
            notes: 'Delete user by sending in the user id along the token in headers',
            tags: ['api'],
            auth: 'jwt',
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form'
                }
            },
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).options({ allowUnknown: true }),
                params: Joi.object({
                    id: Joi.number(),
                })
            }
        }
    },
    {
        method: 'PUT',
        path: '/api/user/{id}',
        handler: userController.updateUser,
        config: {
            tags: ['api'],
            description: 'Update user',
            notes: ['Update user in our database'],
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).options({ allowUnknown: true }),
                params: {
                    id: Joi.string()
                        .required()
                        .description('ID of the user')
                },
                payload: {
                    fullname: Joi.string()
                        .required(),
                    password: Joi.string()
                        .required(),
                    email: Joi.string()
                        .required(),
                    phone: Joi.string().required()
                }
            }
        },
    }


]


// module.exports = [
//     {
//         method: 'GET',
//         path: '/api/users',
//         handler: userController.listAll,
//         config: {
//             description: 'Get Project Data',
//             notes: 'Get project data from blockchain',
//             tags: ['api'],
//             auth: 'jwt',
//             validate: {
//                 headers: Joi.object({
//                     'authorization': Joi.string().required()
//                 }).options({ allowUnknown: true }),
//             }
//         }
//     },