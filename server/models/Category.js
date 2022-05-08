const mongoose = require("mongoose");
const Product = require("../models/Product");

const CategorySchema = new mongoose.Schema(
  {
    categoryName: { type: String, required: true, unique: true },
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


/* CategorySchema.pre('remove', async (next)=>{
    try {
        await Product.remove(
            {categoriesRef: {$in: this._id}}
        );
        next();
    } catch (err) {
        next(err);
    }
}); */

module.exports = mongoose.model("Category", CategorySchema);