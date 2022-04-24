

const router = require("express").Router();
//const {verifyTokenAndAuthorize, verifyTokenAndAdmin} = require("../middlewares/authorizeToken");
const cloud = require ("cloudinary").v2;

router.get("/", async(req, res)=>{
    try{
        const timestamp=Math.round((new Date).getTime()/1000);
       // console.log("timestampsssssss" ,timestamp)
       // console.log("process.env.API_SECRETttttt" ,process.env.API_SECRET)
        const signature =cloud.utils.api_sign_request(
            {timestamp:timestamp,},
            process.env.API_SECRET);
        res.statusCode=200;
        res.json({signature,timestamp});
    }catch(err){
        res.status(500).json("something wrond happend")
    }
});

module.exports = router