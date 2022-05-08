
const Brand = require("../models/Brand");
const Product = require("../models/Product");
const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../utils/verifyToken");

//CREATE
router.post("/", verifyTokenAndAdmin,async (req, res) => {
  const newBrand = new Brand({brandName: req.body.brandName});
  try {
    const savedBrand = await newBrand.save();
    res.status(200).json(savedBrand);
  } catch (err) {
    res.status(500).json(err);
  }
});

// add products to a brand
// brandId is required
router.put("/:brandId", verifyTokenAndAdmin,async (req, res) => {
  try {
    const newProductList = req.body.products;
    const currentBrand = await Brand.findOne({_id:req.params.brandId}).exec();
    const currentBrandProducts = currentBrand.products; 
    
    // get only disjoint elements of newProductList and current brand's product list
    let disjointList = await newProductList
    .filter(x => currentBrandProducts.indexOf(x) === -1);
    //.concat(currentBrandProducts.filter(x => !newProductList.indexOf(x) === -1));
    
    await disjointList.forEach(productId => {
      // check if it's a valid object id
      if(mongoose.Types.ObjectId.isValid(productId))
      {
        Brand.findOneAndUpdate(
            {_id: req.params.brandId},
            {$push: {categoriesRef: productId } }
          );

      }
    });
    
   /*  await Brand.findOneAndUpdate(
      {_id: req.params.brandId}, 
      { $push: { products:  disjointList} }
    ); */
      
      const myBrand = await Brand.findOne({ _id: req.params.brandId });
      
      res.status(200).json(myBrand);
    } catch (err) {
      res.status(500).json(err);
    }
});

// delete a brand
router.delete("/:brandId", verifyTokenAndAdmin,async (req, res) => {
  try
  {
    await Brand.findOneAndRemove({_id: req.params.brandId});
    res.status(200).json(`brand with id= ${req.params.brandId} deleted`);
  }catch(err)
  {
    res.status(500).json(err);
  }

});

// delete a product (or list of products) from brand
router.delete("/:brandId/deleteProduct", verifyTokenAndAdmin,async (req, res) => {
  const selectedProducts = req.body.products;
  
  try{
    await Brand.updateOne(
      {_id: req.params.brandId},
      {$pull:{products: {$in:selectedProducts}}},
    );
  
    res.status(200).json(`product id= ${req.body.products} deleted`)
  }catch(err){
    res.status(500).json('error in deleting product');
  }


});

module.exports = router;