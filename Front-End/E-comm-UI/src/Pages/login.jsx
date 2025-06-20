import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import API from "../api/api";

import { toast } from "react-toastify";

function Loginuser() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    if(!user.email || !user.password){
        setError("Email and passwrod required")
            setTimeout(() => {
                setError(null)
            },3000);
            return;
    }
    try {
      const res = await API.post("/login", user);
      const userdata=res.data
      setResponse(userdata);
      
      if(userdata.token ){
        localStorage.setItem("token", userdata.token)
        if(res.data.user){
            localStorage.setItem("userId", userdata.user._id);
            localStorage.setItem("role", userdata.user.role);
        }
      }
      toast.success("Login success full")
      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (e) {
      console.error("Error:", e.message);
      setError(
        e.response?.data?.message || "Failed to login, Please try again."
      );

      setTimeout(() => {
        setError(null);
      }, 4000);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[600px]">
        <div>
          {response && response.message && (
            <p className="text-green-500 text-center">{response.message}</p>
          )}
          {error && <p className="text-red-500 text-center">{error}</p>}
        </div>
        <div className=" flex flex-col gap-5 bg-amber-200 pt-5 px-10 pb-10 rounded-lg shadow">
          <h1 className="text-center font-semibold text-amber-700">Login</h1>
          <div>
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              className="w-full mt-3 p-2 rounded-lg outline-none"
              type="email"
              placeholder="Enter email"
              value={user.email}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div>
            <label htmlFor="password" className="">
              Password
            </label>
            <input
              className="w-full mt-3 p-2 rounded-lg outline-none"
              type="password"
              placeholder="Enter password"
              value={user.password}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>
          <button
            className="shadow py-3 rounded-lg bg-amber-50"
            onClick={handleSubmit}
          >
            Login now
          </button>
          <div className="flex gap-2 justify-center">
            <p>Don't have account </p>{" "}
            <NavLink to="/signup">
              <span className="text-blue-700">Create here</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginuser;
