import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function UserDropDown() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const checkIsAdmin = () => {
    const role = localStorage.getItem("role");
    return role === "Admin";
  };

  const checkLoginStatus = () => {
    const token = localStorage.getItem("token");
    setIsLogin(!!token);
  };

  const logout = () => {
    localStorage.clear();
    setIsLogin(false);
    toast.success("Logout successful");
    navigate("/login");
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center items-center rounded-md text-sm font-semibold text-gray-900 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
          <span className="material-symbols-outlined text-3xl">Person</span>
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-full sm:w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none"
      >
        <div className="py-1">
          {checkIsAdmin() && (
            <MenuItem>
              <NavLink
                to="/Admin/Dashbord"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Admin
              </NavLink>
            </MenuItem>
          )}

          <MenuItem>
            <NavLink
              to="/order/history"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              My Orders
            </NavLink>
          </MenuItem>

          {isLogin ? (
            <MenuItem>
              <button
                onClick={logout}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign out
              </button>
            </MenuItem>
          ) : (
            <MenuItem>
              <NavLink
                to="/login"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Login
              </NavLink>
            </MenuItem>
          )}
        </div>
      </MenuItems>
    </Menu>
  );
}
