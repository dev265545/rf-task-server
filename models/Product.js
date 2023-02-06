const { DataTypes } = require("sequelize");
const { sequelize } = require("../models");

module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("Product", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    published: {
      type: DataTypes.BOOLEAN,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    rating: {
      type: DataTypes.FLOAT,
    },
  });

  return Products;
};
