const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const userRoute = require("./routes/user");


dotenv.config();
 
mongoose.connect(process.env.MONGO_URL)
.then(_=> console.log("connection successful"))
.catch(err=> console.log("database connection fail"))


app.use(express.json()); 
app.use("/api/users", userRoute)


app.get("/api", (req,res)=>{
    res.send("test is working")
 })



app.listen(process.env.PORT||5000, _=> console.log("backend server is running"))