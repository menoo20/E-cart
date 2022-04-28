const router = require("express").Router();
const User = require("../models/User");
var jwt = require('jsonwebtoken');
const Cloudinary = require("../utils/cloudinary");


router.get("/register", (req,res)=>{
    res.send("i am here")
})


router.post("/register", async (req,res)=>{
    
    const {fName, lName, password, email, avatar} = req.body.data;
    let uploadedImg;
    
    try{   
         if(avatar){
             uploadedImg = await Cloudinary.uploader.upload(avatar,{
                        upload_preset: 'unsigned_upload',
                        public_id: `${fName}${lName}avatar`
                    }),function(error, result) {console.log(result, error)
        }
        
        
        //creating a new user to save in the mongodb
        const defaultAvatar = "https://img.icons8.com/color/40/000000/add-shopping-cart--v1.png"
        const newUser = new User({
            username: `${fName} ${lName}`,
            avatar: uploadedImg? uploadedImg.public_id: defaultAvatar, 
            fName,
            lName,
            email,
            salt: password
        });


        // Call setPassword function to hash password 
        newUser.setPassword(password); 


        //save the user to the mongodb
        const savedUser = await newUser.save((err, user)=>{
            if(err){
                return res.status(500).send({
                    message: "Failed to add user"
                })
            }else{
                const accessToken = jwt.sign({
                    id: user._id,
                    isAdmin: user.isAdmin
                }, 
                process.env.USER_TOKEN_SECRET,
                {expiresIn: "3d"}
                )
                return  res.status(200).json({
                    user,
                    accessToken,
                    successfulRegister: `Congratulations. You are now Logged In as ${user.fName}`
                })
            }
            });
        
        }
    }catch(err){
        console.log(err)
        return res.status(500).json("something is wrong")
    }}
        )

// User login api 
router.post('/login', async(req, res) => { 

    // Find user with requested email 
    await User.findOne({ email : req.body.email }, function(err, user) { 
        if (user === null) { 
            return res.status(400).send({ 
                message : "No user is registerd with this email."
            }); 
        } 
        else { 
            if (user.validPassword(req.body.password)) { 
                const accessToken = jwt.sign({
                    id: user._id,
                    isAdmin: user.isAdmin
                }, 
                process.env.USER_TOKEN_SECRET,
                {expiresIn: "3d"}
                )
                const {hash, salt, ...others} = user._doc;
                return res.status(201).send({ 
                    ...others,
                    accessToken
                }) 
            } 
            else { 
                return res.status(400).send({ 
                    message : "Wrong Password or email. please try again"
                }); 
            } 
        } 
    }).clone(); 
}); 


module.exports = router;