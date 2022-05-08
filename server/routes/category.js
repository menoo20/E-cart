
const { default: mongoose } = require("mongoose");
const Category = require("../models/Category");
const Product = require("../models/Product");
const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../utils/verifyToken");

//CREATE
router.post("/", verifyTokenAndAdmin,async (req, res) => {
  const newCategory = new Category({categoryName: req.body.categoryName});
  try {
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// add products to a Category
// CategoryId is required
router.put("/:CategoryId", verifyTokenAndAdmin,async (req, res) => {
  try {
    const newProductList = req.body.products;
    const currentCategory = await Category.findOne({_id:req.params.CategoryId}).exec();
    const currentCategoryProducts = currentCategory.products; 
    
    // get only disjoint elements of newProductList and current Category's product list
    let disjointList = await newProductList
    .filter(x => currentCategoryProducts.indexOf(x) === -1);

    // add this category for each product assigned to this category
    await disjointList.forEach(productId => {
      // check if it's a valid object id
      if(mongoose.Types.ObjectId.isValid(productId))
      {
        Product.findOneAndUpdate(
            {_id: productId},
            {$push: {categoriesRef: req.params.CategoryId } },
            (err, elem)=>{
                if(err)
                    console.error(err);
            }
          );

      }
    });

    await Category.findOneAndUpdate(
      {_id: req.params.CategoryId}, 
      { $push: { products:  disjointList} }      
    );
      
    const myCategory = await Category.findOne({ _id: req.params.CategoryId });
      
    res.status(200).json(myCategory);

    } catch (err) {
      res.status(500).json(err);
    }
});




// delete a Category
router.delete("/:categoryId", verifyTokenAndAdmin,async (req, res) => {
  try
  {
    const category = await Category.findOneAndRemove({_id:req.params.categoryId}).exec();

    if(category.products.length)
    {        
        await category.products.forEach(async productId =>{

            // check if input is valid objectId
            if(mongoose.Types.ObjectId.isValid(productId))
            {
              Product.findOneAndUpdate(
                  {_id:productId},
                  {$pull: {categoriesRef: {$in: [req.params.categoryId]} } },
                  (err, elem)=>{
                    if(err) res.status(500).json("product Id may be invalid");
                  });

            }
                
        });
    }
    else
    {
        await Category.findByIdAndRemove(req.params.categoryId);
    }
    

    res.status(200).json(`Category with id= ${req.params.categoryId} deleted`);
  }catch(err)
  {
    res.status(500).json(err);
  }

});

// delete a product (or list of products) from Category
router.delete("/:CategoryId/deleteProduct", verifyTokenAndAdmin,async (req, res) => {
  const selectedProducts = req.body.products;
  
  try{
    
    await Category.updateOne(
      {_id: req.params.CategoryId},
      {$pull:{products: {$in:selectedProducts}}},
    );
  
    res.status(200).json(`product id= ${req.body.products} deleted`)
  }catch(err){
    res.status(500).json('error in deleting product');
  }


});

module.exports = router;