const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,

  {
    port: 5432,
    host: "localhost",
    dialect: "postgres",
  }
);


module.exports = { sequelize, Sequelize};
