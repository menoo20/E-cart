const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    // Call setPassword function to hash password 
    newUser.setPassword(req.body.password); 
    try{
        const savedUser = await newUser.save((err, User)=>{
          if(err){
              return res.status(500).send({
                  message: "Failed to add user"
              })
          }else{
            return  res.status(201).send({
                  message: "User is added successfully"
              })
          }
        });
    }catch(err){
        res.status(500).json(err);
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
                return res.status(201).send({ 
                    message : "User Logged In Successfully", 
                }) 
            } 
            else { 
                return res.status(400).send({ 
                    message : "Wrong Password or email. please try again"
                }); 
            } 
        } 
    }); 
}); 


module.exports = router;