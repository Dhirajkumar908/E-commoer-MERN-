import { useEffect, useState } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import API from "../api/api";

function RagistarUser() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/create_user", user);
      setResponse(res.data);
      console.log(res.data);
    } catch (e) {
      console.error("error:", e.message);
      setError(
        e.response?.data?.message || "failed to create user, Please try again."
      );
    }
    setTimeout(()=>{
        setError(null)
        setResponse(null)
        navigate("/login")
    
    },2000)
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
          <h1 className="text-center font-semibold text-amber-600">
            Create Account
          </h1>
          <div>
            <label htmlFor="email" className="">
              User
            </label>
            <input
              className="w-full mt-3 p-2 rounded-lg outline-none"
              type="email"
              placeholder="Enter email or phone or name"
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
            Sign up
          </button>
          <div className="flex gap-2 justify-center">
            <p>have already account </p>{" "}
            <NavLink to="/login">
              <span className="text-blue-700">Login here</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default RagistarUser;
