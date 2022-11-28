'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Store, {
        foreignKey: { name: 'storeId', allowNull: false },
      });
    }
  }
  Product.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(40),
        allowNull: false,
        unique: false,
        validate: {
          len: [3, 40],
        },
      },
      description: {
        type: DataTypes.STRING(80),
        allowNull: true,
        validate: {
          len: [0, 80],
        },
      },
      tags: {
        type: DataTypes.STRING(80),
        allowNull: true,
        validate: {
          len: [0, 80],
        },
      },
      img: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: { isUrl: true },
      },
      deliveryTime: {
        type: DataTypes.INTEGER,
        allowNUll: true,
        validate: {
          isNumeric: true,
          isInt: true,
          min: 0,
        },
      },
      deliveryMode: {
        type: DataTypes.ENUM('handToHand', 'delivery', 'digital'),
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNUll: false,
        validate: {
          isNumeric: true,
          min: 0,
        },
      },
      currency: { type: DataTypes.ENUM('Euro', 'Dollar'), allowNull: false },
    },
    {
      sequelize,
      modelName: 'Product',
      timestamps: true,
    }
  );
  return Product;
};
