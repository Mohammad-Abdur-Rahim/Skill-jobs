import { useState } from "react";
import { FaShoppingBag, FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Car Doctor Logo" className="w-10 h-10" />
          <h1 className="text-xl font-semibold text-gray-800">Car Doctor</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-800 font-semibold">
          <li className="cursor-pointer hover:text-orange-500">Home</li>
          <li className="cursor-pointer hover:text-orange-500">About</li>
          <li className="cursor-pointer hover:text-orange-500">Services</li>
          <li className="cursor-pointer hover:text-orange-500">Blog</li>
          <li className="cursor-pointer hover:text-orange-500">Contact</li>
        </ul>

        {/* Right Side Icons & Button */}
        <div className="hidden md:flex items-center gap-4">
          <FaShoppingBag className="text-gray-700 cursor-pointer hover:text-orange-500" />
          <FaSearch className="text-gray-700 cursor-pointer hover:text-orange-500" />
          <button className="border border-orange-500 text-orange-500 font-semibold px-5 py-2 rounded-md hover:bg-orange-500 hover:text-white transition">
            Appointment
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-800"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-50">
            <ul className="flex flex-col items-center py-4 space-y-4 font-semibold text-gray-800">
              <li className="hover:text-orange-500 cursor-pointer">Home</li>
              <li className="hover:text-orange-500 cursor-pointer">About</li>
              <li className="hover:text-orange-500 cursor-pointer">Services</li>
              <li className="hover:text-orange-500 cursor-pointer">Blog</li>
              <li className="hover:text-orange-500 cursor-pointer">Contact</li>
              <div className="flex gap-4 pt-2">
                <FaShoppingBag className="text-gray-700 text-xl cursor-pointer hover:text-orange-500" />
                <FaSearch className="text-gray-700 text-xl cursor-pointer hover:text-orange-500" />
              </div>
              <button className="border border-orange-500 text-orange-500 font-semibold px-5 py-2 rounded-md hover:bg-orange-500 hover:text-white transition">
                Appointment
              </button>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
