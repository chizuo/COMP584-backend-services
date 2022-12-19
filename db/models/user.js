"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Bicycle, { foreignKey: "owner" });
    }
  }
  User.init(
    {
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      zipCode: DataTypes.INTEGER(5),
      password: DataTypes.STRING,
      admin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
