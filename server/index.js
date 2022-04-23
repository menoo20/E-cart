const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const imagesRoute = require("./routes/images")
//const paymentRoute = require("./routes/payment");
dotenv.config();
const cors = require("cors");


 
mongoose.connect(process.env.MONGO_URL)
.then(_=> console.log("connection successful"))
.catch(err=> console.log("database connection fail"))



app.use(express.json());
app.use(cors()) 
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/products", productRoute)
app.use("/api/cart", cartRoute)
app.use("/api/order", orderRoute)
app.use("/api/images", imagesRoute)
//app.use("/api/pay", paymentRoute)



app.listen(process.env.PORT||5000, _=> console.log("backend server is running"))