import { useEffect, useState } from "react";
import API from "../../api/api";
import { toast } from "react-toastify";

function Inquary() {
  const [querys, setQuerys] = useState([]);
  const token = localStorage.getItem("token");
  const fatechQuery = async () => {
    try {
      const res = await API.get("/query", {
        headers: { Authorization: token },
      });
      setQuerys(res.data);
      console.log(res.data);
    } catch (error) {
      toast.error(error?.response?.statusText);
      console.log(error);
    }
  };

  useEffect(() => {
    fatechQuery();
  },[token]);

  return (
    <>
      <div>
        <h1 className="text-2xl text-amber-800 py-4">Customer Inquray</h1>
        <div className="flex gap-5 px-2 border justify-between bg-amber-100">
          <div className=" w-[40%] border-r p-4">
            <p>Customer Details</p>
          </div>
          <div className=" w-[60%] p-4">
            <p>Customer Message</p>
          </div>
        </div>
        {querys.map((query) => (
          <div key={query._id} className="flex gap-5  px-2 border mb-3">
            <div className="border-r w-[40%] p-4 text-gray-600">
              <p>{query.name}</p>
              <p>{query.email}</p>
            </div>
            <div className=" w-[60%] p-4 text-gray-600">
              <p>{query.message}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Inquary;
