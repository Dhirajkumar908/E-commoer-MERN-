import { NavLink } from "react-router-dom";
import { useState } from "react"; 
import UserDropDown from "../Components/UserDropDown";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-amber-100 shadow rounded-b-3xl z-40">
      
      <div className="flex justify-between items-center px-4 py-3 md:px-6 md:py-4">
       
        <div className="text-2xl font-bold text-yellow-700">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-yellow-900" : "text-yellow-700")}>
            Bagyyes
          </NavLink>
          <p className="text-xs md:text-sm font-light">A hand made bag for your life style</p>
        </div>

        
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>

        
        <nav className="hidden md:flex gap-4 md:gap-6 text-gray-700 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-700 font-semibold underline" : "hover:text-gray-400 "
            }
          >
            <span className="text-xl">Home</span>
          </NavLink>
          <NavLink
            to="/aboutUs"
            className={({ isActive }) =>
              isActive ? "text-yellow-700 font-semibold underline" : "hover:text-gray-400"
            }
          >
            <span className="text-xl">About</span>
            
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-yellow-700 font-semibold underline" : "hover:text-gray-400"
            }
          >
            
            <span className="text-xl">Contact</span>
          </NavLink>
        </nav>

        
        <div className="hidden md:flex gap-4 items-center">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "text-gray-400 font-semibold" : "hover:text-gray-400"
            }
            aria-label="Shopping Cart"
          >
            <span className="material-symbols-outlined text-3xl text-gray-900 hover:bg-gray-50 focus:outline-none">
              shopping_cart
            </span>
          </NavLink>
          <UserDropDown />
        </div>
      </div>

     
      {isMenuOpen && (
        <div className="md:hidden bg-amber-100 px-4 pb-4">
          <nav className="flex flex-col gap-3 text-gray-700 font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-700 font-semibold underline" : "hover:text-gray-400"
              }
              onClick={() => setIsMenuOpen(false)} 
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutUs"
              className={({ isActive }) =>
                isActive ? "text-yellow-700 font-semibold underline" : "hover:text-gray-400"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-yellow-700 font-semibold underline" : "hover:text-gray-400"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
           
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "text-gray-400 font-semibold" : "hover:text-gray-400"
              }
              onClick={() => setIsMenuOpen(false)}
              aria-label="Shopping Cart"
            >
              Cart
            </NavLink>
            <UserDropDown />
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;