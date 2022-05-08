
const Cart = require("../models/Cart");
const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../utils/verifyToken");

//CREATE
// userId is required
router.post("/", verifyToken,async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// add a products (and optional quantity) to cart of a specific user
router.post("/:userId", verifyTokenAndAuthorization, async (req, res) => {
  const newProductList = req.body.products;
  
  try {

    await Cart.findOneAndUpdate(
      {userId: req.params.userId}, 
      { $push: { products:  newProductList} }
    );
    
    const myCart = await Cart.findOne({ userId: req.params.userId });
    
    res.status(200).json(myCart);
  } catch (err) {
    res.status(500).json(err);
  }

});

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});



//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a product from cart products
router.delete("/:userId/:productId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    console.log(cart._id);
    await Cart.updateOne({ _id: cart._id }, {
      $pull: {
          products: {productId: req.params.productId},
      },
  });
    
    res.status(200).json(`product id= ${req.params.productId} deleted`);
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET USER CART
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});


// //GET ALL
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;


/*
const itemId = 2;
const query = {
  item._id: itemId 
};
Person.findOne(query).then(doc => {
  item = doc.items.id(itemId );
  item["name"] = "new name";
  item["value"] = "new value";
  doc.save();

  //sent respnse to client
}).catch(err => {
  console.log('Oh! Dark')
});
*/

