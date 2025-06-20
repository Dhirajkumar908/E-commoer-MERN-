import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const navigate=useNavigate()

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item._id === product._id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    toast.success("Product added to the cart")
  };


const addToCartAndredirect = (product) => {
    const exists = cart.find((item) => item._id === product._id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    toast.success("Product added to the cart")
    navigate("/cart") 
  };


  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };


  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <CartContext.Provider
        value={{ cart, addToCart, removeFromCart, clearCart,  setCart, addToCartAndredirect }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}
