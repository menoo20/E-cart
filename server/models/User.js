const mongoose = require("mongoose");
var crypto = require('crypto');

const UserSchema = new mongoose.Schema({
    fName:{type: String, required: true},
    lName:{type: String},
    avatar: {type: String},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    hash : String, 
    salt : String ,
    isAdmin: {
        type: Boolean, 
        default: false
    }
}, {timestamps: true})



UserSchema.methods.setPassword = function(password) { 
     
    // Creating a unique salt for a particular user 
       this.salt = crypto.randomBytes(16).toString('hex'); 
     
       // Hashing user's salt and password with 1000 iterations, 
        
       this.hash = crypto.pbkdf2Sync(password, this.salt,  
       1000, 64, `sha512`).toString(`hex`); 
   }; 
     
   // Method to check the entered password is correct or not 
   UserSchema.methods.validPassword = function(password) { 
       var hash = crypto.pbkdf2Sync(password,  
       this.salt, 1000, 64, `sha512`).toString(`hex`); 
       return this.hash === hash; 
   }; 

module.exports = mongoose.model("User", UserSchema)