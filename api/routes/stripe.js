const stripeRouter = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

stripeRouter.route("/payment").post(async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      success_url: "https://example.com/success",
      cancel_url: "https://example.com/cancel",
      line_items: [{ price: "price_H5ggYwtDq4fbrJ", quantity: 2 }],
      mode: "payment",
      payment_method_types: ["card"],
    });
    res.status(200).json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = stripeRouter;
