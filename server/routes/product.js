const router = require("express").Router();
const {verifyTokenAndAuthorize, verifyTokenAndAdmin} = require("../middlewares/authorizeToken");
const Product = require("../models/Product");

router.post("/", verifyTokenAndAdmin, async(req, res)=>{
    const {title,desc,img,categories,size,color,price} = req.body;
    const newProduct = await new Product({
        title,
        desc,
        img,
        categories,
        size,
        color,
        price
    })
 
    try{
       await newProduct.save((err, product)=>{
            if(err){
                res.status(500).json(err);
            }else{
                res.status(200).json(product)
            }
        })
    }catch(err){
        res.status(500).json(err)
    }


})



router.put("/:id", verifyTokenAndAdmin, async (req, res)=>{
    const updatedProduct  = await Product.findByIdAndUpdate(req.params.id,{
        $set: req.body,
    }, {new: true})

    try{
        
                res.status(200).json(updatedProduct)
       }catch(err){

        res.status(500).json(err)
    }
})

router.delete("/:id", verifyTokenAndAuthorize, async(req, res)=>{
    const id = req.params.id;
    try{
        await User.findByIdAndRemove(id)
        res.status(200).json("user has been deleted");
    }catch(err){
        res.json("something wrond happend")
    }

})

router.get("/find/:id", verifyTokenAndAdmin, async(req, res)=>{
    const id = req.params.id;
    try{
        const user = await User.findById(id)
        const {hash, salt, ...others} = user._doc;
        return res.status(201).json({
            ...others,
        }) 
    }catch(err){
        res.json("something wrond happend")
    }
})

router.get("/", verifyTokenAndAdmin, async(req, res)=>{
    try{
        const recentUsers = req.query.new
        const users = recentUsers? await User.find().sort({_id: -1}).limit(2): await User.find()
        return res.status(201).json(users) 
    }catch(err){
        res.json("something wrond happend")
    }

});

router.get("/stats", verifyTokenAndAdmin, async(req, res)=>{
    const date = new Date;
    const lastYear = new Date(date.setFullYear(date.getFullYear() -1 )) ;
    try{
       const userStats = await User.aggregate([
           {$match: {createdAt: { $gte: lastYear}}},
           {
               $project: {
                   month: {$month: "$createdAt"},
                   year: {$year: "$createdAt"},
                   username : "$username"
               }
           },
           {
               $group: {
                   _id: "$month",
                   total: {$sum: 1},
                

               }
           }
       ])
       res.status(200).json(userStats);
    }catch(err){
        res.status(500).json(err);
    }
})


module.exports = router