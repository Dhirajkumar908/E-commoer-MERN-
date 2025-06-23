import { NavLink } from "react-router-dom";

function AdminSidemenu() {
  return (
    <>
      <div className="mt-5">
        <div className="p-5 hover:bg-amber-200">
          <NavLink
            to="/Admin/Dashbord/addProduct"
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "hover:text-blue-400"
            }
          >
           <span className="text-lg font-bold text-yellow-700">Product</span>
          </NavLink>
        </div>
        <div className="p-5 hover:bg-amber-200">
          <NavLink
            to="/Admin/Dashbord/ManageOrder"
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "hover:text-blue-400"
            }
          >
           <span className="text-lg font-bold text-yellow-700">ManageOrder</span>
          </NavLink>
        </div>
        <div className="p-5 hover:bg-amber-200">
          <NavLink
            to="/Admin/Dashbord/inquary"
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "hover:text-blue-400"
            }
          >
           <span className="text-lg font-bold text-yellow-700">Inquary</span>
          </NavLink>
        </div> 
      </div>
    </>
  );
}

export default AdminSidemenu;
