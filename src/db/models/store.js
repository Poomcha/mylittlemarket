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
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      tas: DataTypes.TEXT,
      img: DataTypes.STRING,
      location: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Store',
    }
  );
  return Store;
};
