const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { sequelize } = require("./config/config");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended:false }));



const Seller = require("./routes/Seller")
const Buyer = require("./routes/Buyer")

app.use("/Seller",Seller)
app.use("/Buyer",Buyer)

app.use(express.json());
app.use(cors());
const port = 4040 || process.env.PORT;
sequelize.sync();
sequelize
  .authenticate()
  .then(() => {
    app.listen(port, () => {
      console.log(`server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });