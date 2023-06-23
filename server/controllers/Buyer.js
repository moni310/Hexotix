
const buyer = require("../models/buyer/users")

const Shop = require("../models/Seller/Shop")
const Seller = require("../models/Seller/Seller")
const Book = require("../models/Seller/Book")
const Orders = require("../models/buyer/Order")


//createBuyer
const createBuyer = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!email || !password || !name)
      return res.status(400).json({
        success: false,
        message: "Please Fill all the fields ",

      });

    const Buyer = await buyer.create({ name, email, password });
    if (buyer) {
      return res.status(200).json({
        status: 200,
        success: true,
        message: 'Buyer created successfully',
        data: Buyer,
      });
    } else {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "unable to create Buyer",
      });
    }

  } catch (error) {
    return res.status(500).json({
      status: 500,
      success: false,
      message: 'Something went wrong',
      error: error.message,
    });
  }
};

// veiw shops
const viewShops = async (req, res) => {
  try {
    const { SellerId } = req.query;

    // Fetch all shops with their associated sellers
    const shops = await Shop.findAll({
      where: {
        SellerId: SellerId,
      },
      include: [{ model: Seller, attributes: ['name'] }],
      attributes: ['shopName'],
    });

    // Extract the necessary data from the fetched shops
    const shopData = shops.map((shop) => {
      return {
        name: shop.shopName,
        sellerName: shop.Seller.name,
      };
    });
    if (shopData.length > 0) {
      return res.status(200).json({
        status: 200,
        success: true,
        message: 'Shops has find succcessful',
        data: shopData,
      });

    }
    else {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "unable to find shop of this Seller ",
      });
    }

  } catch (error) {
    return res.status(500).json({
      status: 500,
      success: false,
      message: 'Something went wrong',
      error: error.message,
    });
  }
};


//veiw books by Seller ID 
const viewBooks = async (req, res) => {
  try {
    const { ShopId } = req.query;
    const books = await Book.findAll({
      where: {
        ShopId: ShopId,
      },
    });
    if (books.length > 0) {
      return res.status(200).json({
        status: 200,
        success: true,
        message: 'Book has find successfully',
        data: books,
      });
    }
    else {
      return res.status(400).json({
        success: true,
        message: "No books in this shop",
        data: [],
      });
    }


  } catch (error) {
    return res.status(500).json({
      status: 500,
      success: false,
      message: 'Something went wrong',
      error: error.message,
    });
  }
};


// create Order 
const createOrder = async (req, res) => {

  try {

    const { buyerId, sellerId, shopId, bookIds } = req.body;

    if (!buyerId || !sellerId || !shopId || !bookIds)
      return res.status(400).json({
        success: false,
        message: "Please Fill all the fields ",
      });

    const Order = await Orders.create({ buyerId, sellerId, shopId, bookIds });

    if (Order) {
      return res.status(200).json({
        status: 200,
        success: true,
        message: 'Order has been created successfully',
        data: Order,
      });
    }
    else {
      return res.status(400).json({
        success: true,
        message: "Unable to create Order",
        data: [],
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      success: false,
      message: 'Something went wrong',
      error: error.message,
    });
  }
};

module.exports = { createBuyer, viewShops, viewBooks, createOrder }