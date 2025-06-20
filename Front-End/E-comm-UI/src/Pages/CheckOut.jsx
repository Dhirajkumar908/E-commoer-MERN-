import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

import API from "../api/api";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [shipping, setShipping] = useState({
    street: "",
    city: "",
    state: "",
    postalcode: "",
    country: "",
  });

  const handleChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handleOrder = async () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const role = localStorage.getItem("role");
    
    
    console.log(token);
    console.log(userId);
    console.log(role);
    
    if (!token || !userId || !role) {
      toast.warning("You must be logged in to place the order")
      return;
    }

    const items = cart.map((item) => ({
      productId: item._id,
      productName:item.name,
      productDescription:item.description,
      productImage:item.image,
      quantity: item.quantity,
      priceAtPurchase: item.price,
    }));

    const orderData = {
      userId:userId,
      items:items,
      shippingAddress: shipping,
    };
    console.log(shipping)
    try {
        console.log(orderData);
        
      const res= await API.post("/order", orderData, {
        headers: { Authorization: token },
      });
      clearCart();
      toast.success(" Order placed successfully!")
      navigate("/");
    
      
    } catch (err) {
    
      toast.error("Failed to place order.")
    }
  };

  return (<>
   <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <div className="space-y-4">
        {["street", "city", "state", "postalcode", "country"].map((field) => (
          <input
            key={field}
            name={field}
            value={shipping[field]}
            onChange={handleChange}
            placeholder={field[0].toUpperCase() + field.slice(1)}
            className="w-full border px-4 py-2 rounded"
            required
          />
        ))}

        <button
          onClick={handleOrder}
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          Place Order
        </button>
      </div>
    </div>
  </>);
}

export default Checkout;
