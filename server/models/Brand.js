const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema(
  {
    brandName: { type: String, required: true, unique: true },
    products: [
      {
        unique:true,
        //type:  mongoose.Schema.Types.ObjectId,
        type:  String,
        ref:'Product'
      },
    ],
  },
  { timestamps: true }
);


module.exports = mongoose.model("Brand", BrandSchema);