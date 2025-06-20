import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Cart() {
  const { cart, removeFromCart, setCart } = useContext(CartContext);
  const navigate=useNavigate()

 
  const changeQuantity = (id, delta) => {
    const updated = cart.map((item) =>
      item._id === id
        ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
        : item
    );
    setCart(updated);
  };

  
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex flex-col md:flex-row items-center justify-between border-b pb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={`http://localhost:3000/${item.image}`}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">₹{item.price}</p>
                  <div className="flex items-center mt-2 gap-2">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => changeQuantity(item._id, -1)}
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => changeQuantity(item._id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4 md:mt-0">
                <p className="font-semibold text-lg">
                  ₹{item.price * item.quantity}
                </p>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-6">
            <h2 className="text-xl font-bold">
              Total: ₹{totalPrice.toFixed(2)}
            </h2>
            <button
            onClick={()=>navigate('/order')}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
