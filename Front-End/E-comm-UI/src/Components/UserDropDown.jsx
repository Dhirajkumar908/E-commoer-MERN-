import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function UserDropDown() {
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(()=>{
    
  })
  const logout = () => {
    localStorage.clear("token");
    localStorage.clear("user");
  };

  
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center items-center  rounded-md   text-sm font-semibold text-gray-900 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
          <span className="material-symbols-outlined text-3xl">Person</span>
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-full sm:w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <NavLink
              to="/Admin/Dashbord"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Admin
            </NavLink>
          </MenuItem>

          <MenuItem>
            <NavLink
              to="/order/history"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              my order
            </NavLink>
          </MenuItem>

          {user ? (
            <MenuItem>
              <button
                onClick={logout}
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                Sign out
              </button>
            </MenuItem>
          ) : (
            <MenuItem>
              <NavLink
                to="/login"
                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                login
              </NavLink>
            </MenuItem>
          )}
        </div>
      </MenuItems>
    </Menu>
  );
}
