
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <>
  <footer className="bg-[#1c1c1c] text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="Car Doctor Logo" className="w-10 h-10" />
            <h2 className="text-lg font-semibold text-white">Car Doctor</h2>
          </div>
          <p className="mb-6 leading-relaxed">
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-500 transition"
            >
              <FaGoogle />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-500 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">About</h3>
          <ul className="space-y-2">
            <li className="hover:text-orange-500 cursor-pointer">Home</li>
            <li className="hover:text-orange-500 cursor-pointer">Service</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
          <ul className="space-y-2">
            <li className="hover:text-orange-500 cursor-pointer">
              Why Car Doctor
            </li>
            <li className="hover:text-orange-500 cursor-pointer">About</li>
          </ul>
        </div>

        {/* Support */}
        <div>
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
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Car Doctor. All rights reserved.
      </div>
    </footer>
    </>
  );
}