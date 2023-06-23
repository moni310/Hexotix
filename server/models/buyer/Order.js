const { Sequelize, sequelize } = require('../../config/config');

const Order = sequelize.define(
  'Order',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    buyerId: { type: Sequelize.INTEGER, allowNull: false },
    sellerId: { type: Sequelize.INTEGER, allowNull: false },
    shopId: { type: Sequelize.INTEGER, allowNull: false }, 
    bookIds: { type: Sequelize.ARRAY(Sequelize.INTEGER), allowNull: false },
    // Other necessary order attributes
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = Order;
