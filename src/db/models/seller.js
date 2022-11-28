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
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      telegram: {
        type: DataTypes.JSON,
        allowNull: false,
        unique: true,
        validate: {
          isTelegram(telegram) {
            const telegramSchema = [user, first_name, last_name, language_code];
            if (Object.keys(JSON.parse(telegram)) !== telegramSchema) {
              throw new Error('Invalid Telegram User.');
            }
            Object.values(JSON.parse(telegram)).forEach((item) => {
              if (typeof item !== 'string') {
                throw new Error('Invalid Telegram User.');
              }
            });
          },
        },
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
        validate: {
          len: [2, 80],
        },
      },
    },
    {
      sequelize,
      modelName: 'Seller',
      timestamps: true,
    }
  );
  return Seller;
};
