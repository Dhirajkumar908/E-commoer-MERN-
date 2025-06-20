import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=search"
/>;
import { BrowserRouter } from "react-router-dom";

import { CartProvider } from "./context/CartContext";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    
      <CartProvider>
        <App />
      </CartProvider>
      
    </BrowserRouter>
  </StrictMode>
);
