'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Store.belongsTo(models.Seller, {
        foreignKey: { name: 'sellerId', allowNull: false },
      });
      Store.hasMany(models.Product, {
        foreignKey: 'storeId',
      });
    }
  }
  Store.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(40),
        allowNull: false,
        unique: true,
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
        validate: {
          isUrl: true,
        },
      },
      location: {
        type: DataTypes.STRING(80),
        allowNull: true,
        validate: {
          len: [0, 80],
        },
      },
    },
    {
      sequelize,
      modelName: 'Store',
      timestamps: true,
    }
  );
  return Store;
};
