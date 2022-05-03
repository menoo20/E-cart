
const User = require("../models/User");
const Product = require("../models/Product");
const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");


//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    console.log("password changed")
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all users
router.get("/", verifyTokenAndAdmin, async(req, res) => {
  User.find({}, (err, result) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(result);
      }
  });
});


// add review to a product
router.post("/:userId/addReview/:productId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const review = req.body.reviewDescription;

    // use these variables in validation
    //const user = await User.findById(req.params.userId);
    //const product = await Product.findById(req.params.productId);

    const reviewObj = {userId: req.params.userId, reviewDescription: req.body.reviewDescription};

    await Product.findOneAndUpdate(
      {_id: req.params.productId}, 
      { $push: { reviews:  reviewObj} }
    );

    res.status(200).json("New review added to this product");
  } catch (err) {
    res.status(500).json(err);
  }

});


/* // reset password
router.put("/resetPassword", async (req, res) => {
  

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
}); */

module.exports = router;
