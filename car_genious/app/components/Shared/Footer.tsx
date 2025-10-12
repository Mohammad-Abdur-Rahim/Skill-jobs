import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import f_logo from "app/assets/f_logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-gray-300 py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-10 text-sm">
        {/* Logo & Description */}
        <div className="text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-4">
            <img src={f_logo} alt="Car Doctor Logo" className="w-20 h-20" />
          </div>
          <p className="mb-6 text-gray-400">
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-start items-center gap-4">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-500 transition"
            >
              <FaGoogle className="text-lg" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-500 transition"
            >
              <FaTwitter className="text-lg" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-500 transition"
            >
              <FaInstagram className="text-lg" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-500 transition"
            >
              <FaLinkedin className="text-lg" />
            </a>
          </div>
        </div>

        {/* About */}
        <div className="text-center sm:text-left">
          <h3 className="text-white font-semibold mb-4 text-lg">About</h3>
          <ul className="space-y-2">
            <li className="hover:text-orange-500 cursor-pointer">Home</li>
            <li className="hover:text-orange-500 cursor-pointer">Service</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Company */}
        <div className="text-center sm:text-left">
          <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
          <ul className="space-y-2">
            <li className="hover:text-orange-500 cursor-pointer">
              Why Car Doctor
            </li>
            <li className="hover:text-orange-500 cursor-pointer">About</li>
            <li className="hover:text-orange-500 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="text-center sm:text-left">
          <h3 className="text-white font-semibold mb-4 text-lg">Support</h3>
          <ul className="space-y-2">
            <li className="hover:text-orange-500 cursor-pointer">
              Support Center
            </li>
            <li className="hover:text-orange-500 cursor-pointer">Feedback</li>
            <li className="hover:text-orange-500 cursor-pointer">
              Accessibility
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs sm:text-sm text-gray-300 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Car Doctor. All rights reserved.
      </div>
    </footer>
  );
}
