const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    address: {type: Object, required: true},
    cost: {type: Number, required: true},
    status: {type: String,
             default: "pending",
             enum: ['pending', 'shipped', 'cancelled', 'finsihed']},
    products: [
        {
            productId:{
                type: String
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ],

}, {timestamps: true})



module.exports = mongoose.model("Order", OrderSchema);