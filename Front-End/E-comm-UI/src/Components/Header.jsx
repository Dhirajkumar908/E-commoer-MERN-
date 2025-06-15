import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center sticky top-0 px-6 py-4 bg-amber-100 shadow rounded-b-3xl text-black  z-40">
      {/* Logo */}
      <div className="text-2xl font-bold text-yellow-700 ">
        <NavLink to="/">Bagyyes</NavLink>
        <p className="text-sm font-light">A hand made bag for your life style</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-6 text-gray-700 font-medium text-black">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-gray-400 font-semibold" : "hover:text-gray-400"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-gray-400 font-semibold" : "hover:text-gray-400"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-gray-400 font-semibold" : "hover:text-gray-400"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "text-gray-400 font-semibold" : "hover:text-gray-400"
          }
        >
          Shop
        </NavLink>
      </nav>

      {/* Right Side (Cart + Profile) */}
      <div className="flex gap-4">
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "text-gray-400 font-semibold" : "hover:text-gray-400"
          }
        >
          <span className="material-symbols-outlined text-3xl">shopping_cart</span>
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "text-gray-400 font-semibold" : "hover:text-gray-400"
          }
        >
          <span className="material-symbols-outlined text-3xl">Person</span>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
