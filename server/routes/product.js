const router = require("express").Router();
const {verifyTokenAndAuthorize, verifyTokenAndAdmin} = require("../middlewares/authorizeToken");
const Product = require("../models/Product");
const uploadedImgs = require("../utils/multipleImageUpload");
const handleProductError = require("../utils/productErrors");

router.post("/", verifyTokenAndAdmin, async(req, res)=>{
    const {images, title, ...others} = req.body
    // uploading the images to cloudinary
    const publicIds = await uploadedImgs(images, title, res);

    
    // constructing the body with all the needed data for making a product in the db
    if(publicIds){
        const body = {
            images: publicIds,
            title,
            ...others
        } 
        // // add the new product to the db
        const newProduct = await new Product(body)
     
        try{
           await newProduct.save((err, product)=>{
                if(err){
                    handleProductError(err, res)
                }else{
                    res.status(200).json(product)
                }
            })
        }catch(err){
            handleProductError(err, res)
        }
    }
})



router.put("/:id", verifyTokenAndAdmin, async (req, res)=>{
  Product.findByIdAndUpdate(req.params.id,
        {
        $set: req.body,
    }
    , {new: true}).then((docs)=>{
        if(docs){
            res.status(200).json(docs)
        }else{
            res.status(500).json("something went wrong")
        }
    })
})

router.delete("/:id", verifyTokenAndAdmin, async(req, res)=>{
    const id = req.params.id;
    try{
        await Product.findByIdAndRemove(id)
        res.status(200).json("product has been deleted");
    }catch(err){
        res.json("something wrond happend")
    }

})

router.get("/find/:id", async(req, res)=>{
    const id = req.params.id;
    try{
        const product = await Product.findById(id)
        return res.status(201).json(product) 
    }catch(err){
        res.json("something wrond happend")
    }
})

router.get("/", async(req, res)=>{
    try{
        const recentProducts = req.query.new
        const qCategory = req.query.category;
        const featured = req.query.isFeatured;
        let products;
        if(recentProducts){
             products = await Product.find().sort({createdAt: -1}).limit(5)
        }else if(qCategory){
             products = await Product.find({categories: {$in: [qCategory]}})
        }else if(featured){
             products = await Product.find({isFeatured: true}).limit(8)
        }else{
          products = await Product.find().populate('categories');
        }
        res.status(200).json(products)
    }catch(err){
        res.json("something wrond happend")
    }

});





module.exports = router