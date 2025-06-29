import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import API from "../../api/api";
import { toast } from "react-toastify";

function ManageOrder() {
  const token = localStorage.getItem("token");
  const [allOrders, setAllOrders] = useState([]);
  const [modelOpen, setModelOpen] = useState(false);

  const handleOpen = () => setModelOpen(!modelOpen);
  const [orderId, setOrderId]=useState(null)
  const [orderStatus, setOrdreStatus]=useState("")

  const UpdateOrderStatus= async(e)=>{
    if(!orderStatus){
      toast.warn("Please select Order status")
      return
    }
    try{
      const res=await API.put(`/order/update/${orderId}`, {status:orderStatus}, {headers:{Authorization:token}})
    if(res.status===200){
      toast.success("Order status updated successful")
    }
    console.log(orderStatus);
    handleOpen()
    }catch(error){
      if(error.status===401){
        return toast.error("You are unauthorized, Please login as Admin!")
      }
      toast.error(error.response?.data?.message || "Something went wrong")
    }
  }

  useEffect(() => {
    const orders = async () => {
      try {
        const res = await API.get("/order/all", {
          headers: { Authorization: token },
        });
        console.log(res.data);
        setAllOrders(res.data);
      } catch (error) {
        if (error.response?.status === 401) {
          toast.error("You are unAuthorized, Please login as Admin");
          return;
        }
        toast.error(error.response?.data?.message || "Something went wrong");
      }
    };

    orders();
  }, [token]); // Only runs once unless the token changes

  return (
    <>
      <div className="relative ">
        <div>
          {allOrders.length > 0 && (
            <div className="border my-4 sm:my-8 p-4 sm:p-8 bg-amber-50">
              {allOrders.map((order) => (
                <div
                  key={order._id}
                  className=" border mb-5 pt-2 rounded bg-amber-100"
                >
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 mb-2 sm:mb-3 justify-between items-center px-1 sm:px-2 border-b py-2">
                    <p className="text-sm sm:text-base">
                      Order Id: {order._id}
                    </p>
                    <p className="text-sm sm:text-base flex justify-center items-center ">
                      Order Status:
                      <Button
                        onClick={()=>{setOrderId(order._id),handleOpen()}}
                        className="text-gray-600 shadow-none p-0 ml-2 flex items-center"
                      > <span className="font-normal text-lg">{order.orderStatus}</span>
                        <span className="material-symbols-outlined">edit</span>
                      </Button>
                    </p>
                    <p className="text-sm sm:text-base">
                      Order Date: {order.createdAt}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4  p-2 sm:p-3 ">
                    <div className="w-full sm:w-[50%]">
                      {order.items.map((product, i) => (
                        <div
                          key={i}
                          className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-2 sm:mb-4"
                        >
                          <img
                            className="w-24 sm:w-32 h-24 sm:h-32 rounded-lg border object-cover"
                            src={`http://localhost:3000/${product.productImage}`}
                            alt={product.name}
                          />
                          <div>
                            <p className="text-sm sm:text-base">
                              {product.productName}
                            </p>
                            <p className="text-xs sm:text-sm">
                              {product.productDescription}
                            </p>
                            <p className="text-xs sm:text-sm">
                              Price: {product.priceAtPurchase}
                            </p>
                            <p className="text-xs sm:text-sm">
                              Quantity: {product.quantity}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="w-full sm:w-[50%] text-start sm:text-end">
                      <p className="text-sm sm:text-base">Shipping Address</p>
                      <p className="text-xs sm:text-sm">
                        Street: {order.shippingAddress.street}, City:{" "}
                        {order.shippingAddress.city}, State:{" "}
                        {order.shippingAddress.state}, Country:{" "}
                        {order.shippingAddress.country}
                      </p>
                      <p className="text-xs sm:text-sm">
                        Postal code: {order.shippingAddress.postalcode}
                      </p>
                      <p className="font-semibold py-1 sm:py-2 text-sm sm:text-base">
                        Total Amount To Pay: {order.totalAmount}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <Dialog
          open={modelOpen}
          handler={handleOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
          className="z-[999] max-w-[20rem] left-[40%] top-[50%]"
        >
          <DialogHeader>
            <h1>Update order status</h1>
          </DialogHeader>
          <DialogBody>
            <select name="status" id="status" 
            value={orderStatus}
            onChange={(e)=>setOrdreStatus(e.target.value)}
            className="w-full outline-none bg-gray-50"
            >
              <option value="">--Select the Status--</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>cancel</span>
            </Button>
            <Button color="green" onClick={UpdateOrderStatus}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </>
  );
}

export default ManageOrder;
