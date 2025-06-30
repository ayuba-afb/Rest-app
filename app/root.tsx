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

import type { Route } from "./+types/root";
import "./app.css";

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

export function Layout({ children }: { children: React.ReactNode }) {
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
          {/* <nav
            style={{
              backgroundColor: "white",
              color: "black",
              display: "flex",
              textAlign: "center",
              height: 32,
              justifyContent: "space-between",
              padding: "10px 15px",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                margin: "0",
                gap: "15px",
              }}
            >
              <li style={{ marginLeft: "125px" }}>
                100% Secure delivery without contact the courier
              </li>
              <FaTruck style={{ marginLeft: "25px" }} />
              <li>Track your order</li>
              {
                <div
                  style={{
                    width: "1px",
                    height: "23px",
                    background: "black",
                    marginLeft: "800px",
                  }}
                ></div>
              }
              <IoIosSearch style={{ marginLeft: "3px", marginTop: "2px" }} />
              <li style={{ marginBottom: "15px" }}>search</li>
            </ul>

            <div style={{ display: "flex", marginRight: "155px", gap: "5px" }}>
              <PiFacebookLogoLight />
              <CiTwitter />
              <SiVeed />
              <FaPinterestP />
            </div>
          </nav> */}
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
              <div style={{ marginTop: "15px" }}>
                <img src={image3} alt="" />
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
                      <span
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
                      </span>
                    </ul>
                  </li>
                </ul>
                <ul>
                  <div className="riri" style={{ position: "relative" }}>
                    <Link
                      to="/shop"
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
                        SHOP GRID
                        <div
                          style={{
                            width: "100%",
                            height: "1px",
                            background: "grey",
                          }}
                        ></div>
                      </li>
                      <li>
                        SHOP LIST
                        <div
                          style={{
                            width: "100%",
                            height: "1px",
                            background: "grey",
                          }}
                        ></div>
                      </li>
                      <li>
                        SHOP LEFT SIDE-BAR
                        <div
                          style={{
                            width: "100%",
                            height: "1px",
                            background: "grey",
                          }}
                        ></div>
                      </li>
                      <li>
                        SHOP RIGHT SIDE-BAR
                        <div
                          style={{
                            width: "100%",
                            height: "1px",
                            background: "grey",
                          }}
                        ></div>
                      </li>
                      <li>
                        SHOP SINGLE
                        <div
                          style={{
                            width: "100%",
                            height: "1px",
                            background: "grey",
                          }}
                        ></div>
                      </li>
                      <li>
                        SHOP CART
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
                    <a
                      href=""
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
                    </a>
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
                    <a
                      href="#"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        padding: "10px",
                      }}
                    >
                      ABOUT <RiArrowDropDownLine />
                    </a>

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
                    <a
                      href=""
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
                    </a>
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

                <ul
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    margin: 0,
                    position: "relative",
                  }}
                >
                  <li style={{ position: "relative" }} className="blog-parent">
                    <a
                      href=""
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
                    </a>
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
                <button
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
          <Outlet />
        </div>
        {/* {children} */}
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
