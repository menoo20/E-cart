const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const Product = require("../models/Product");


router.post("/payment", async (req, res) => {
  try {
    // fetch projects using there id
    let productsList = [];
    
    for(let element of req.body.items)
    {
      let product = await Product.findOne({_id: element.id});
      productsList.push({obj: product, quantity:element.quantity})
    }
    

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: productsList.map(item => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.obj.title,
            },
            unit_amount: (parseInt(item.obj.price) *100),
          },
          quantity: parseInt(item.quantity),
        }
      }),
      success_url: `${process.env.BASE_URL}/`,
      cancel_url: `${process.env.BASE_URL}/cancel`,
    })
    res.json({ url: session.url })
  } catch (e) {
    //console.error(e);
    res.status(500).json({ error: e.message })
  }
})

module.exports = router;