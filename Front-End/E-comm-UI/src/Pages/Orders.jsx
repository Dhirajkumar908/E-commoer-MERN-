import API from "../api/api";
import { useEffect, useState } from "react";

function FetchOrders() {
  const [message, setMessage] = useState(null);
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user || !token) {
        alert("You must login to see your orders");
        return;
      }

      try {
        const res = await API.get(`/orders/user/${user._id}`, {
          headers: { Authorization: token },
        });
        setOrders(res.data);
        console.log(res.data);
      } catch (e) {
        setMessage(e.message || "Failed to fetch orders");
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="mt-4 sm:mt-6 md:mt-8">
      <h1 className="text-2xl sm:text-3xl md:text-3xl text-center sm:text-left">Order History</h1>
      <p className="text-center sm:text-left text-sm sm:text-base">{message}</p>
      {orders.length > 0 && (
        <div className="border my-4 sm:my-8 p-4 sm:p-8 bg-amber-50">
          {orders.map((order) => (
            <div key={order._id} className=" border mb-5 pt-2 rounded bg-amber-100">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 mb-2 sm:mb-3 justify-between px-1 sm:px-2 border-b py-2">
                <p className="text-sm sm:text-base">Order Id: {order._id}</p>
                <p className="text-sm sm:text-base">Order Status: {order.orderStatus}</p>
                <p className="text-sm sm:text-base">Order Date: {order.createdAt}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4  p-2 sm:p-3 ">
                <div className="w-full sm:w-[50%]">
                  {order.items.map((product, i) => (
                    <div key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-2 sm:mb-4">
                      <img
                        className="w-24 sm:w-32 h-24 sm:h-32 rounded-lg border object-cover"
                        src={`http://localhost:3000/${product.productImage}`}
                        alt={product.name}
                      />
                      <div>
                        <p className="text-sm sm:text-base">{product.productName}</p>
                        <p className="text-xs sm:text-sm">{product.productDescription}</p>
                        <p className="text-xs sm:text-sm">Price: {product.priceAtPurchase}</p>
                        <p className="text-xs sm:text-sm">Quantity: {product.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full sm:w-[50%] text-start sm:text-end">
                  <p className="text-sm sm:text-base">Shipping Address</p>
                  <p className="text-xs sm:text-sm">
                    Street: {order.shippingAddress.street}, City: {order.shippingAddress.city}, State: {order.shippingAddress.state}, Country: {order.shippingAddress.country}
                  </p>
                  <p className="text-xs sm:text-sm">Postal code: {order.shippingAddress.postalcode}</p>
                  <p className="font-semibold py-1 sm:py-2 text-sm sm:text-base">Total Amount To Pay: {order.totalAmount}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FetchOrders;