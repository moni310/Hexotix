const router=require("express").Router()

const {createBuyer,viewShops,viewBooks,createOrder}= require("../controllers/Buyer")

//createBuyer
router.post("/createBuyer",createBuyer)


//viewShops
router.get("/viewShops",viewShops)

//viewBooks
router.get("/viewBooks",viewBooks)

//createOrder
router.post("/create-Order",createOrder)

module.exports = router