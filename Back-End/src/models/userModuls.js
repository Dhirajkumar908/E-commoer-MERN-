const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["Customer", "Admin"], default: "Customer" },
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  category: { type: String },
  image: { type: String, required: true },
});

const orderSchema = new mongoose.Schema({
  user_id: {type: mongoose.Schema.Types.ObjectId,ref: "User",required: true},
  product_id: {type: mongoose.Schema.Types.ObjectId,ref: "Product",required: true},
  product_quantity: { type: Number, required: true },
  total_amount: { type: Number, required: true },
  shipping_address: { type: String, required: true },
  order_date: { type: Date, required: true },
});

const User = mongoose.model("User", userSchema);
const Product = mongoose.model("Product", productSchema);
const Order = mongoose.model("Order", orderSchema);

module.exports = {User, Product, Order};
