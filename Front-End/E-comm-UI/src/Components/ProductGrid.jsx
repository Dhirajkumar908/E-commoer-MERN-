import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import API from "../api/api";

function ProductGrid() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    API.get("/list_product")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 my-10 sm:my-12 px-3 sm:px-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="rounded-lg flex flex-col justify-between border border-amber-300 shadow-sm"
        >
          <img
            className="w-full h-40 sm:h-48 md:h-72 object-cover rounded-t-lg"
            src={`http://localhost:3000/${product.image}`}
            alt={product.name}
          />
          <div className="flex flex-col gap-1 p-2 sm:p-3 bg-amber-100 h-full rounded-b-lg">
            <p className="font-semibold text-xs sm:text-sm md:text-base">{product.name}</p>
            <p className="text-xs sm:text-sm">Price: Rs {product.price}</p>
            <p className="text-xs sm:text-sm text-gray-700 truncate">{product.description}</p>
            <div className="flex gap-2 sm:gap-3 mt-1 sm:mt-2">
              <button className="shadow-sm bg-amber-300 px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg text-xs hover:bg-amber-400">
                Buy
              </button>
              <button
                onClick={() => addToCart(product)}
                className="shadow-sm bg-amber-300 px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg text-xs hover:bg-amber-400"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;