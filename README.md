# Sample App For Hapi with JWT Auth & Sequelize ORM
Requirements:
1. Postgres
2. Node
3. Sequelize

## Installation Instructions

1. In the root folder run `npm install`.
2. Go to file `sequelize/config/config.json` and change your db credentials.
3. `cd sequelize` & run `sequelize db:migrate` this command will create your tables in the db.
4. While in sequelize folder run `sequelize db:seed:all` this will command will create a sample user.
5. `cd` to root folder & run `npm start`.
6. Navigate to `localhost:8000/documentation` (swaggerized ui will open).
