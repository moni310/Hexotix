
const Book = require("../models/Seller/Book");
const Seller = require("../models/Seller/Seller")
const Shop = require("../models/Seller/Shop");
const Order = require("../models/buyer/Order");

const {Op } = require('sequelize');

// create Seller
const createSeller = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!email || !password || !name)
            return res.status(400).json({
                success: false,
                message: "Please Fill all the fields ",

            });
        const seller = await Seller.create({ name, email, password });

        return res.status(200).json({
            status: 200,
            success: true,
            message: 'Seller has been created successfully',
            data: seller,
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            success: false,
            message: 'Something went wrong',
            error: error.message,
        });
    }
};


// create Shop
const createShop = async (req, res) => {
    try {
        const { SellerId, shopName } = req.body;
        if (!SellerId || !shopName)
        return res.status(400).json({
            success: false,
            message: "All feilds are required ",

        });
        const shop = await Shop.create({ SellerId, shopName });

        return res.status(200).json({
            status: 200,
            success: true,
            message: "Shop has been created successfully",
            data: shop,
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            success: false,
            message: " something went wrong",
            error: error.message
        });
    }
}

//create Book
const createBook = async (req, res) => {
    try {
        const { ShopId, bookName, bookImage } = req.body;
        const bookCount = req.body.bookCount?req.body.bookCount:1;
        
        if (!ShopId || !bookName)
        return res.status(400).json({
            success: false,
            message: "ShopID and bookName are required ",

        });
        const book = await Book.create({ ShopId, bookName, bookCount, bookImage });
        return res.status(200).json({
            status: 200,
            success: true,
            message: "Book has been created successfully",
            data: book,
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            success: false,
            message: " something went wrong",
            error: error.message
        });
    }
}


//veiw books by Seller ID 
const viewBooks = async (req, res) => {
    try {
        const { ShopId } = req.query;
        
        if (!ShopId)
        return res.status(400).json({
            success: fasle,
            message: "Please fill the ShopID",
        });
        const books = await Book.findAll({
            where: {
                ShopId: ShopId,
            },
        });

        return res.status(200).json({
            status: 200,
            success: true,
            message: 'Books has been find successfully',
            data: books,
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            success: false,
            message: 'Something went wrong',
            error: error.message,
        });
    }
};


const getSellerOrders = async (req, res) => {
    try {
      const { sellerId, shopId } = req.query;
     
  
      if (!sellerId || !shopId) {
        return res.status(400).json({ message: 'Please provide both sellerId and shopId' });
      }
  
      const orders = await Order.findAll({
        where: {
          sellerId: sellerId,
          shopId: shopId,
        },
        // Include any necessary associations or attributes
      });
  
      return res.status(200).json({
        status: 200,
        success: true,
        message: 'Seller orders retrieved successfully',
        data: orders,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        success: false,
        message: 'Something went wrong',
        error: error.message,
      });
    }
  };
  

    // Perform the search query
const searchSellers = async (req, res) => {
    try {
      const { search } = req.query;

  if(search ==" " || search ===undefined){

 const sellers = await Seller.findAll();
  
      return res.status(200).json({
        status: 200,
        success: true,
        message: ' All Sellers retrieved successfully',
        data: sellers,
      });
  }
     else {
        const sellers = await Seller.findAll({
        where: {
          [Op.or]: {
            name: { [Op.iLike]: `%${search}%` }, 
            email: { [Op.iLike]: `%${search}%` },
          },
        },
        attributes: ['id', 'name', 'email'],
      });
  
      return res.status(200).json({
        status: 200,
        success: true,
        message: 'Sellers retrieved successfully',
        data: sellers,
      });}
    } catch (error) {
      return res.status(500).json({
        status: 500,
        success: false,
        message: 'Something went wrong',
        error: error.message,
      });
    }
  };
  

  
  

  
module.exports = { createSeller, createShop, createBook, viewBooks ,getSellerOrders,searchSellers}