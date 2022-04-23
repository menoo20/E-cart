const mongoose = require("mongoose");
const StatusEnum = Object.freeze({"PENDING":1, "INREVIEW":2, "INPROGRESS":3, "CANCELED":4, "ON_THE_WAY":5, "DELIVERED":6});

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
    address: { type: Object, required: true },
    status: { type: Number, default: StatusEnum.PENDING },
  },
  { timestamps: true }
);

module.exports = [mongoose.model("Order", OrderSchema), StatusEnum];