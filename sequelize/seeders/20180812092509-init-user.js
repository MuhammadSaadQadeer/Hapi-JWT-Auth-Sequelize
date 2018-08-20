//Seeders are used to populate the db, built in feature of sequelize
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Users', [
      {
        fullname: 'John Doe',
        email:'jd@gmail.com',
        phone:'123456789',
        password:'$2b$10$Jwkk0BOgVp6tjkaoN6sXOuWkM0J9bj6xAJwWapv92RvN4OGO8POb2', //hash of test@123
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
