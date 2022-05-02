const router = require("express").Router();
const User = require("../models/User");
const uploadedImg = require("../utils/singleImgUpload")
const handleError = require("../utils/UserErrors");
const createToken = require("../utils/createJwtToken")
const validate = require("validator")


//registering a new user
router.post("/register", async (req,res)=>{
    
    const {fName, lName, password, email, avatar, username} = req.body.data;
    let uploadedImage
    try{   
         if(avatar){
         uploadedImage = await uploadedImg(avatar, username, res)
         }
     
        //creating a new user to save in the mongodb
        const newUser = new User({
            username: username,
            avatar :  uploadedImage? uploadedImage.public_id : "",
            fName: fName,
            lName: lName,
            email: email,
            password: password
        })

           //handlePassword
           if(!password){
            const invalidPassword = {
                password: "Please Enter your Password"
            }  
            handleError(invalidPassword, res)
            return;
          }
          if(password){
            
            const validPassword =  validate.isStrongPassword(password, {minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1})
            if(validPassword){
  
            }else{
              
              const invalidPassword = {
                  password: "Password must be 8 charts min length, 1 symbols, 1 uppercase, lowercase and 1 numbers"
              }
              handleError(invalidPassword, res)
              return
            }
          }

        


        // Call setPassword function to hash password 
        newUser.setPassword(password); 


        //save the user to the mongodb
        const savedUser = await newUser.save((err, user)=>{
            if(err){
                handleError(err, res, password)
            }else{

                const accessToken = createToken(user._id, user.isAdmin)
                return  res.status(200).json({
                    user :{
                        avatar :user.avatar,
                        username: user.username,
                        _id: user._id,
                    },
                    accessToken,
                    successfulRegister: `Congratulations. You are now Logged In as ${user.username}`
                })
            }
            });
        
        
    }catch(err){
            // handleError(err, res)
            console.log(err)

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
                const accessToken = createToken(user._id, user.isAdmin)
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


