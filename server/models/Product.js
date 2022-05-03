const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String},
    img: { type: String},
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
    reviews: [
      {
        userId: {
          type: String,
        },
        reviewDescription: {type: String},
      },
    ],
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
