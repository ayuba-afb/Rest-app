import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";
import image from "./welcome/image/Fk1.avif";
import image1 from "./welcome/image/Fk2.jpg";
import image2 from "./welcome/image/Fk3.avif";
import image3 from "./welcome/image/Foodking3.svg";
import { PiListDashesLight } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { PiFacebookLogoLight } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
import { SiVeed } from "react-icons/si";
import { FaPinterestP } from "react-icons/fa6";
import { BsDisplay } from "react-icons/bs";
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
import logo from "./welcome/image/Foodking3.svg"; // Update with your logo path
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import logo1 from "./welcome/image/logo.jpg"
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

export  function Layout({ children }: { children: React.ReactNode }) {
   const navigate = useNavigate();
    const contactorder:(e:React.MouseEvent<HTMLButtonElement>)=>void=(e)=>{
    e.preventDefault()
    navigate("/contact")
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        
      </head>
      <body>
        <div>
        <div className="top-nav-wrapper">
      <nav className="top-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <FaTruck className="icon" />
            100% Secure delivery without contact the courier
          </li>
          <li className="nav-item">
            <span className="divider">|</span>
            Track your order
          </li>
          <li className="nav-item">
            <IoIosSearch className="icon" />
            Search
          </li>
        </ul>
        <div className="socials">
          <PiFacebookLogoLight className="social-icon" />
          <CiTwitter className="social-icon" />
          <SiVeed className="social-icon" />
          <FaPinterestP className="social-icon" />
        </div>
      </nav>
    </div>
  
          <nav>
            <article
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 20px",
                backgroundColor: "#f8f8f8",
                borderBottom: "1px solid #ccc",
              }}
            >
              <div style={{ marginTop: "5px",height:"25px", width:"55px" }}>
                <img src={logo1} alt="" />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "15px",
                }}
              >
                <ul>
                  <li className="dropdown">
                    <Link
                      to={"/"}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      HOME
                      <RiArrowDropDownLine size={22} />
                    </Link>
                    <ul className="fathia">
                      {/* <span
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(3,1fr)",
                          gap: "10px,",
                          padding: "5px",
                          borderRadius: "5px",
                          backgroundColor: "blue",
                          border: "1px",
                        }}
                      >
                        <li>
                          <img src={image} alt="" />
                        </li>
                        <li>
                          <img src={image1} alt="" />
                        </li>
                        <li>
                          <img src={image2} alt="" />
                        </li>
                      </span> */}
                    </ul>
                  </li>
                </ul>
                <ul>
                  <div className="riri" style={{ position: "relative" }}>
                    <Link
                      to="/Menu"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        alignItems: "center",
                        display: "flex",
                        gap: "3px",
                      }}
                    >
                      MENU
                      <RiArrowDropDownLine size={22} />
                    </Link>

                    <ul className="lol">
                      <li>
                        MENU GRID
                        <div
                          style={{
                            width: "100%",
                            height: "1px",
                            background: "grey",
                          }}
                        ></div>
                      </li>
                      <li>
                        MENU LIST
                        <div
                          style={{
                            width: "100%",
                            height: "1px",
                            background: "grey",
                          }}
                        ></div>
                      </li>
                      <li>
                        MENU LEFT SIDE-BAR
                        <div
                          style={{
                            width: "100%",
                            height: "1px",
                            background: "grey",
                          }}
                        ></div>
                      </li>
                      <li>
                        MENU RIGHT SIDE-BAR
                        <div
                          style={{
                            width: "100%",
                            height: "1px",
                            background: "grey",
                          }}
                        ></div>
                      </li>
                      <li>
                        MENU SINGLE
                        <div
                          style={{
                            width: "100%",
                            height: "1px",
                            background: "grey",
                          }}
                        ></div>
                      </li>
                      <li>
                        MENU CART
                        <div
                          style={{
                            width: "100%",
                            height: "1px",
                            background: "grey",
                          }}
                        ></div>
                      </li>
                      <li>
                        CHECKOUT
                        <div
                          style={{
                            width: "100%",
                            height: "1px",
                            background: "grey",
                          }}
                        ></div>
                      </li>
                    </ul>
                  </div>
                </ul>

                <ul
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    margin: 0,
                    position: "relative",
                  }}
                >
                  <li style={{ position: "relative" }} className="blog-parent">
                    <Link to="/reservation"
                      
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      RESERVATION
                      <RiArrowDropDownLine size={22} />
                    </Link>
                    <ul className="blog-dropdown">
                      <li>
                        RESERVATION DETIALS
                        <div
                          style={{
                            width: "100%",
                            height: "1px",
                            background: "grey",
                            marginTop: "5px",
                          }}
                        ></div>
                      </li>
                      <li>
                        RESERVATION FORM
                        <div
                          style={{
                            width: "100%",
                            height: "1px",
                            background: "grey",
                          }}
                        ></div>
                      </li>
                    </ul>
                  </li>
                </ul>

                <ul
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    margin: 0,
                    position: "relative",
                    top: "-8px",
                  }}
                >
                  <li className="menu-parent" style={{ position: "relative" }}>
                    <Link to="/about"
                      
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        padding: "10px",
                      }}
                    >
                      ABOUT <RiArrowDropDownLine />
                    </Link>

                    <ul className="menu-list">
                      <li>
                        <a href="#">ABOUT US</a>
                      </li>

                      <li className="submenu-parent">
                        <a href="#">
                          CHEF PAGE <RiArrowDropDownLine />
                        </a>
                        <ul className="submenu-list">
                          <li>
                            <a href="#">CHEF PAGE</a>
                          </li>
                          <li>
                            <a href="#">CHEF DETAILS</a>
                          </li>
                        </ul>
                      </li>

                      <li className="submenu-parent">
                        <a href="#">
                          FOOD MENU <RiArrowDropDownLine />
                        </a>
                        <ul className="submenu-list">
                          <li>
                            <a href="#">FOOD MENU 1</a>
                          </li>
                          <li>
                            <a href="#">FOOD MENU 2</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="#">GALLERY</a>
                      </li>
                      <li>
                        <a href="#">TESTIMONIAL</a>
                      </li>
                      <li>
                        <a href="#">RESERVATION</a>
                      </li>
                      <li>
                        <a href="#">FAQ'S</a>
                      </li>
                      <li>
                        <a href="#">404 PAGE</a>
                      </li>
                    </ul>
                  </li>
                </ul>

                <ul
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    margin: 0,
                    position: "relative",
                  }}
                >
                  <li style={{ position: "relative" }} className="blog-parent">
                    <Link to="/contact"
                      
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      CONTACT
                      <RiArrowDropDownLine size={22} />
                    </Link>
                    <ul className="blog-dropdown">
                      <li>
                        CONTACT DETAILS
                        <div
                          style={{
                            width: "100%",
                            height: "1px",
                            background: "grey",
                            marginTop: "5px",
                          }}
                        ></div>
                      </li>
                      <li>
                        CONTACT FORM
                        <div
                          style={{
                            width: "100%",
                            height: "1px",
                            background: "grey",
                          }}
                        ></div>
                      </li>
                    </ul>
                  </li>
                </ul>

                <ul
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    margin: 0,
                    position: "relative",
                  }}
                >
                  <li style={{ position: "relative" }} className="blog-parent">
                    <Link to="/cart"
                      
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      CART
                      <RiArrowDropDownLine size={22} />
                    </Link>
                    <ul className="blog-dropdown">
                      <li>
                        BLOG DETAILS
                        <div
                          style={{
                            width: "100%",
                            height: "1px",
                            background: "grey",
                            marginTop: "5px",
                          }}
                        ></div>
                      </li>
                      <li>
                        BLOG
                        <div
                          style={{
                            width: "100%",
                            height: "1px",
                            background: "grey",
                          }}
                        ></div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span style={{ fontSize: "16px" }}>
                  <CiShoppingCart />
                </span>
                <button onClick={contactorder}
                  style={{
                    padding: "6px 12px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  CONTACT US
                </button>
                <PiListDashesLight size={24} style={{ cursor: "pointer" }} />
              </div>
            </article>
          </nav>
          <Link to="/product">Product</Link>
        
          <Outlet />
        </div>
        
         {/* {children}  */}
      
        
        <div className="flex bg-white flex-col">

     

      
      <footer className="bg-black px-6 py-12 text-sm lg:text-base text-gray-400">
        <div className="max-w-7xl mx-auto space-y-12">
          
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
                {[
                  { icon: FaHome, label: "Home" },
                  { icon: FaUtensils, label: "Menu" },
                  { icon: FaInfoCircle, label: "About Us" },
                  { icon: FaPhone, label: "Contact" },
                ].map((item, index) => {
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
                })}
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

            {/* Newsletter Signup */}
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

          {/* Bottom Section */}
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
    </div> 



        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
