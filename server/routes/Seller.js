
const router=require("express").Router()

const {createSeller,createShop,createBook,viewBooks,
    getSellerOrders,searchSellers}=require("../controllers/Seller")

// createSeller
router.post("/create-seller", createSeller)

//createShop
router.post("/create-shop",createShop)

//createBook
router.post("/create-book",createBook)

//veiwBooks
router.get("/veiwBooks",viewBooks)

//getSellerOrders
router.get("/getSeller-Orders",getSellerOrders)

//searchSellers
router.get("/search-Sellers",searchSellers)

module.exports=router