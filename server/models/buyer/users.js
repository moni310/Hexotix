const { Sequelize, sequelize } = require("../../config/config");

const Buyer = sequelize.define(
  "Buyer",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: Sequelize.STRING, allowNull: true },
    email: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: true },
   
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);
module.exports = Buyer;
