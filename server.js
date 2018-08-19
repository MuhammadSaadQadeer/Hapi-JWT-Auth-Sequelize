

const jwt = require('jsonwebtoken');
const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');
const HapiJWTAuth = require('hapi-auth-jwt2');


const verify = async function (decoded, request) {
    let token = request.headers.authorization;
    let isValid = false;
    if (token) {
        await jwt.verify(token, '9DhvalMbCZ9srYWe9DTaJZ', (err, decoded) => {
            if (!decoded) {
                isValid = false
            } else {
                isValid = true;
            }
        });
    }
    return { isValid, credentials: true };
};


(async () => {
    const server = await new Hapi.Server({
        host: 'localhost',
        port: 8000,
        routes: {
            cors: true
        }
    });

    const swaggerOptions = {
        info: {
            title: 'HAPI Sample App with JWT Authentication & Sequelize ORM with Postgres DB',
            version: Pack.version,
        },
    };

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        },
        HapiJWTAuth
    ]);


    await server.auth.strategy('jwt', 'jwt',
        {
            key: '9DhvalMbCZ9srYWe9DTaJZ',
            validate: verify
        });

    server.auth.default('jwt');
    try {
        await server.start();
        console.log('Server running at:', server.info.uri);
    } catch (err) {
        console.log(err);
    }
    server.route((require('./routes/index')));
})();