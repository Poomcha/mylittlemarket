'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Seller.hasMany(models.Store, { foreignKey: 'sellerId' });
    }
  }
  Seller.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      telegram: { type: DataTypes.JSON },
    },
    {
      sequelize,
      modelName: 'Seller',
    }
  );
  return Seller;
};
