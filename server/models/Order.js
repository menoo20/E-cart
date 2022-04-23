const mongoose = require("mongoose");
const StatusEnum = Object.freeze({"PENDING":"PENDING",
                                  "INREVIEW":"INREVIEW", 
                                  "INPROGRESS":"INPROGRESS",
                                  "CANCELED":"CANCELED",
                                  "ON_THE_WAY":"ON_THE_WAY",
                                  "DELIVERED":"DELIVERED"});

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: String, required: true },
    status: { type: String, default: StatusEnum.PENDING },
  },
  { timestamps: true }
);

//module.exports = [mongoose.model("Order", OrderSchema), StatusEnum];
module.exports = {order:mongoose.model("Order", OrderSchema), statusEnum: StatusEnum};