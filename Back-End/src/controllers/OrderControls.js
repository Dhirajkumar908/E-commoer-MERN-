const { Order } = require("../models/OrdersModels.js");

exports.SubmitOrder = async (req, res) => {
  try {
    const { userId, items, shippingAddress } = req.body;

    if (!userId || !items || !shippingAddress) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    // console.log(JSON.stringify(req.body));

   
    const totalAmount = items.reduce((total, item) => {
      const quantity = Number(item.quantity);
      const price = Number(item.priceAtPurchase);

      if (isNaN(quantity) || isNaN(price)) {
        throw new Error(`Invalid item data: ${JSON.stringify(item)}`);
      }

      return total + price * quantity;
    }, 0);

    // console.log(totalAmount);

    const order = new Order({
      userId,
      items,
      totalAmount,
      shippingAddress,
      orderStatus: "pending",
    });

    // console.log(order);

    await order.save();

    return res
      .status(201)
      .json({ message: "Order created successfully", order });
  } catch (e) {
    return res.status(500).json({
      message: "Server error, please try again later",
      error: e,
    });
  }
};

exports.ListOrders = async (req, res) => {
  // console.log("Function called"); 
  
  try {
    const { id } = req.params;
    // console.log(id);
    const order = await Order.find({ userId: id });
    return res.status(200).json(order);
  } catch (e) {
    return res.status(500).json({
      message: "Server error, please try again later",
      error: e,
    });
  }
};



exports.ListOrdersAll=async(req,res)=>{
  try{
    const allOrders=await Order.find();
    if(!allOrders){
      return res.json({message:"There is no Order yet"})
    }
    return res.status(200).json(allOrders)
  }catch(error){
    return res.status(500).json(error)
  }
}

exports.updateOrder=async(req, res)=>{
  const {id}=req.params;
  const {status}=req.body;  
  try{
    await Order.findByIdAndUpdate(id, {orderStatus:status})
    res.status(200).json({message:"Order status updated successfull!"})
  }catch(error){
    res.status(500).json({message:"server error"})
  }
}