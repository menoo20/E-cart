const router = require("express").Router();
const User = require("../models/User");
var jwt = require('jsonwebtoken');
const Cloudinary = require("../utils/cloudinary");
const { append } = require("express/lib/response");



router.post("/register", async (req,res)=>{
    const {fName, lName,email,avatar, password} = req.body
    try{
        const uploadedImg = await Cloudinary.uploader.upload(avatar,{
            upload_preset: 'unsigned_upload',
            public_id: `${fName} ${lName} avatar`
        })

        if(!uploadedImg){
            res.status(500).json("image couldn't be loaded sorry for that")
            return;
        }
        console.log(uploadedImg)
        //creating a new user to save in the mongodb
        const newUser = new User({
            username: `${fName} ${lName}`,
            avatar: uploadedImg.public_id,
            fName,
            lName,
            email,
            salt: password
        });


        // Call setPassword function to hash password 
        newUser.setPassword(req.body.password); 


        //save the user to the mongodb
        const savedUser = await newUser.save((err, User)=>{
            if(err){
                return res.status(500).send({
                    message: "Failed to add user"
                })
            }else{
                return  res.status(201).send({
                    message: "User is added successfully",
                    user: savedUser
                })
            }
            });
    }catch(err){
        console.log(err);
        res.status(500).send('connections abort')
    }

})

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