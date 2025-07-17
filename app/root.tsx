import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";
import { PiListDashesLight } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { PiFacebookLogoLight } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
import { SiVeed } from "react-icons/si";
import { FaPinterestP } from "react-icons/fa6";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaCcVisa,
  FaCcMastercard,
  FaMapMarkerAlt,
  FaHome,
  FaUtensils,
  FaInfoCircle,
  FaPhone,
} from "react-icons/fa";
import type { Route } from "./+types/root";
import "./app.css";
import { useState } from "react";
import { motion } from "framer-motion";
import logo1 from "./welcome/image/logo.jpg";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (menu: string) =>
    setOpenDropdown(openDropdown === menu ? null : menu);

  const contactorder = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/contact");
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
 <div className="bg-gray-100 border-b border-gray-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2 text-sm">
      
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <FaTruck className="text-gray-600" />
            <span className="hidden sm:inline text-black">100% Secure delivery without contact</span>
            <span className="hidden md:inline mx-2 text-black">|</span>
            <span className="hidden md:inline text-black">Track your order</span>
            <span className="hidden md:inline mx-2 text-black">|</span>
            <IoIosSearch className="text-gray-600 " />
            <span className="hidden md:inline text-black">Search</span>
          </div>

          <div className="flex items-center gap-3 text-gray-600 text-lg">
            <PiFacebookLogoLight className="hover:text-blue-600 cursor-pointer" />
            <CiTwitter className="hover:text-blue-400 cursor-pointer" />
            <SiVeed className="hover:text-purple-500 cursor-pointer" />
            <FaPinterestP className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>

      
      <nav className="bg-white shadow-md relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
           
            <div>
              <img src={logo1} alt="Logo" className="h-10 w-auto" />
            </div>

      
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-blue-600 flex items-center gap-1">
                HOME <RiArrowDropDownLine />
              </Link>
              <Link to="/menu" className="hover:text-blue-600 flex items-center gap-1">
                MENU <RiArrowDropDownLine />
              </Link>
              <Link to="/reservation" className="hover:text-blue-600">RESERVATION</Link>
              <Link to="/about" className="hover:text-blue-600">ABOUT</Link>
              <Link to="/contact" className="hover:text-blue-600">CONTACT</Link>
              <Link to="/cart" className="hover:text-blue-600">CART</Link>
            </div>

            <div className="flex items-center gap-4">
              <CiShoppingCart className="text-xl cursor-pointer text-black" />
              <button
                className="hidden md:inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                CONTACT US
              </button>

      
              <button
                onClick={toggleMenu}
                className="md:hidden text-2xl focus:outline-none text-black"
              >
                <PiListDashesLight />
              </button>
            </div>
          </div>
        </div>

     
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="flex flex-col space-y-3 px-4 py-3">
              <Link to="/" onClick={toggleMenu}>HOME</Link>
              <Link to="/menu" onClick={toggleMenu}>MENU</Link>
              <Link to="/reservation" onClick={toggleMenu}>RESERVATION</Link>
              <Link to="/about" onClick={toggleMenu}>ABOUT</Link>
              <Link to="/contact" onClick={toggleMenu}>CONTACT</Link>
              <Link to="/cart" onClick={toggleMenu}>CART</Link>
              <Link to="/checkout" onClick={toggleMenu}>CHECKOUT</Link>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                CONTACT US
              </button>
            </div>
          </div>
        )}
      </nav>



   
        <Outlet />

      
        <footer className="bg-black px-6 py-12 text-sm lg:text-base text-gray-400">
          <div className="max-w-full mx-auto space-y-12 mt-4">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-5 gap-6 border-b border-gray-700 pb-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div>
                <motion.h2
                  className="text-2xl font-bold mb-2 hover:text-white transition"
                  whileHover={{ scale: 1.05 }}
                >
                  MyRestaurant
                </motion.h2>
                <p>
                  Serving fresh, authentic meals made with love. Come hungry,
                  leave happy!
                </p>
                <div className="mt-4">
                  <p className="font-semibold">Hours:</p>
                  <p>Mon - Sat: 10am - 10pm</p>
                  <p>Sun: 12pm - 8pm</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 hover:text-white transition">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  {[{ icon: FaHome, label: "Home" }, { icon: FaUtensils, label: "Menu" }, { icon: FaInfoCircle, label: "About Us" }, { icon: FaPhone, label: "Contact" }].map(
                    (item, index) => {
                      const Icon = item.icon;
                      return (
                        <li key={index}>
                          <a
                            href="#"
                            className="flex items-center space-x-2 hover:text-white transition"
                          >
                            <Icon />
                            <span>{item.label}</span>
                          </a>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 hover:text-white transition">
                  Contact
                </h3>
                <p>Email: contact@myrestaurant.com</p>
                <p>Phone: +234 000 0000</p>
                <p>123 Lagos Street, Nigeria</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-2 hover:text-white transition"
                >
                  <FaMapMarkerAlt className="mr-2" /> Find us on Google Maps
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 hover:text-white transition">
                  Follow Us
                </h3>
                <div className="flex space-x-4 mt-2">
                  {[FaFacebook, FaTwitter, FaInstagram].map((Icon, idx) => (
                    <motion.a
                      key={idx}
                      href="#"
                      whileHover={{ scale: 1.2 }}
                      className="transition"
                    >
                      <Icon className="text-2xl" />
                    </motion.a>
                  ))}
                </div>
                <div className="mt-6">
                  <h4 className="text-sm font-semibold mb-1 hover:text-white transition">
                    We accept:
                  </h4>
                  <div className="flex space-x-2">
                    <FaCcVisa className="text-2xl hover:text-white transition" />
                    <FaCcMastercard className="text-2xl hover:text-white transition" />
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold mb-3 hover:text-white transition">
                  Join Our Newsletter
                </h3>
                <form className="flex flex-col space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-2 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white"
                  >
                    Subscribe
                  </button>
                </form>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm border-t border-gray-700 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="flex space-x-4 mb-2 sm:mb-0">
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </div>
              <p>© {new Date().getFullYear()} MyRestaurant. All rights reserved.</p>
            </motion.div>
          </div>
        </footer>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
