const { Sequelize, sequelize } = require("../../config/config");

const Book = sequelize.define(
  "Book",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    
ShopId: { // name of foreign key using naming convention
    type: Sequelize.DataTypes.INTEGER,
    references: {
      model: { tableName: 'Shop' }, // provide table name
      key: 'id' // PK of the User Model
    },
    allowNull: false,
    onUpdate: 'cascade',
    onDelete: 'cascade',
},
    bookName: { type: Sequelize.STRING, allowNull: false },
    bookCount: { type: Sequelize.INTEGER, allowNull: false },

    bookImage: { type: Sequelize.STRING, allowNull: true },

    
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);
module.exports = Book;





