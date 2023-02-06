
const { DataTypes } = require("sequelize");
const { sequelize } = require("../models");

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "User",
    {
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        isEmail: true, //checks for email format
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cart: {
        type: DataTypes.STRING,
       
      },
    },
    { timestamps: true }
  );
  return Users;
};

