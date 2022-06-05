const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

// Model basics: https://sequelize.org/docs/v6/core-concepts/model-basics/
class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
