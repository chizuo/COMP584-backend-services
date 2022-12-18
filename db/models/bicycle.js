"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bicycle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bicycle.belongsTo(models.User, {
        foreignKey: {
          name: "owner",
          allowNull: false,
        },
      });
      Bicycle.hasMany(models.Photo, { foreignKey: "bike_id" });
    }
  }
  Bicycle.init(
    {
      title: DataTypes.STRING,
      summary: DataTypes.STRING,
      frame: DataTypes.STRING,
      fork: DataTypes.STRING,
      headset: DataTypes.STRING,
      handlebars: DataTypes.STRING,
      stem: DataTypes.STRING,
      crankset: DataTypes.STRING,
      bottom_bracket: DataTypes.STRING,
      shifters: DataTypes.STRING,
      brakes: DataTypes.STRING,
      brake_levers: DataTypes.STRING,
      pedals: DataTypes.STRING,
      saddle: DataTypes.STRING,
      seatpost: DataTypes.STRING,
      tires: DataTypes.STRING,
      wheels: DataTypes.STRING,
      accessories: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Bicycle",
    }
  );
  return Bicycle;
};
