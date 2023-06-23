const { Sequelize, sequelize } = require("../../config/config");

const Seller = require('../Seller/Seller');

const Shop = sequelize.define(
  "Shop",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    shopName: { type: Sequelize.STRING, allowNull: false },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

Shop.belongsTo(Seller, { foreignKey: 'SellerId' }); 
module.exports = Shop;

