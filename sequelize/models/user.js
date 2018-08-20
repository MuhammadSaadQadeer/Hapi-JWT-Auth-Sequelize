//Declaring model for the user

'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    fullname: {type:DataTypes.STRING, allowNull:false},
    email: {type:DataTypes.STRING , allowNull:false, unique:true},
    phone: {type:DataTypes.STRING, allowNull:false},
    password: {type:DataTypes.STRING, allowNull:false}
  }, {});
 
  return Users;
};