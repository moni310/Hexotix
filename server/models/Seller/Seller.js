const { Sequelize, sequelize } = require("../../config/config");

const Seller = sequelize.define(
  "Seller",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: Sequelize.STRING, allowNull: true },
    email: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false },
   
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);
module.exports = Seller;
