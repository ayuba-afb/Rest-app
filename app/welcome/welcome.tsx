import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { FaTruck } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { PiFacebookLogoLight } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
import { SiVeed } from "react-icons/si";
import { FaPinterestP } from "react-icons/fa6";
import { BsDisplay } from "react-icons/bs";
import image from "./image/Fk1.avif";
import image1 from "./image/Fk2.jpg";
import image2 from "./image/Fk3.avif";
import image3 from "./image/Foodking3.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";
import image4 from "./image/grilledchicken1.png";
import image5 from "./image/grilledchicken2.png";
import { PiListDashesLight } from "react-icons/pi";
import image6 from "./image/Foodkingss.jpg";
import chicken from "./image/chiken.png";
import shop from "./image/Shopimage.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../app.css";
import { BsCurrencyDollar } from "react-icons/bs";
import fooditems from "../welcome/fooditem";
import Amala from "../welcome/image/Amala.jpg";
import Egusi from "../welcome/image/Egusi.jpg";
import Plaintain from "../welcome/image/Plantain.jpg";
import Pap from "../welcome/image/Pap and Akara.jpg";
import spaghetti from "../welcome/image/Spaghetti.jpg";
import jollof from "../welcome/image/Jollof.jpg";
import backg from "../welcome/image/backg.jpg";
import product from "../routes/Product";
import { useNavigate } from 'react-router-dom';
import fried from "../welcome/image/friedchicken.png"
import os1 from "../welcome/image/os1.jpg";
import burger from "../welcome/image/Burgerr.png";
import app1 from "../welcome/image/Appetizer.png"
import app2 from "../welcome/image/Appetizer2.png"
import app3 from "../welcome/image/Appetizer3.png"
import chef from "../welcome/image/cheff.png"

export function Welcome() {
   const navigate = useNavigate();
  const handleorder:(e:React.MouseEvent<HTMLButtonElement>)=>void=(e)=>{
    e.preventDefault()
    navigate("/product")
  }
  const cartorder:(e:React.MouseEvent<HTMLButtonElement>)=>void=(e)=>{
    e.preventDefault()
    navigate("/cart")
  }


  
// FoodGrid.jsx
const foodItems = [
  {
    id: 1,
    name: "Spaghetti",
    price: "₦1500",
    description: "Pasta in rich tomato sauce with spices and meat.",
    image: spaghetti,
  },
  {
    id: 2,
    name: "Jollof",
    price: "₦1200",
    description: "Spicy tomato rice served with chicken or plantains.",
    image: jollof,
  },
  {
    id: 3,
    name: "Salad",
    price: "₦2500",
    description:"A refreshing bowl of garden-fresh goodness.",
    image: app3,
  },
  {
    id: 4,
    name: "Egusi",
    price: "₦1800",
    description: "Melon seed soup with leafy greens and meat.",
    image: Egusi,
  },
];


  return (
    <section    style={{
      background:"white",
      
    }}
>
    
      <div style={{ width: "100%", height: "1px", background: "black" }}></div>

     

      <main className="hero-section">
      <div className="hero-wrapper">
        <img className="hero-bg" src={backg} alt="background" />
        <div className="overlay"></div>

        <div className="hero-content">
          <ul className="hero-text">
            <li className="line-one">CRISPY, EVERY BITE TASTE</li>
            <li className="line-two">DELICIOUS FRIED CHICKEN</li>
            {/* <img className="moving-image" src={fried} alt="fried" /> */}
          </ul>

          <button onClick={handleorder} className="button-order">
            <FaTruck />
            <a href="#" className="order-link">ORDER NOW</a>
          </button>
        </div>
      </div>
    </main>


<nav style={{color:"black", fontSize:"28px",textAlign:"center", fontWeight:"bolder", paddingTop:"50px",paddingBottom:"25px"}}>POPULAR FOODITEMS
      <div className="swiper-container">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView="auto"
          spaceBetween={20}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }} 
          loop={true}
          speed={500}
          style={{
            padding: "20px",
            backgroundColor: "#fafafa",
            borderTop: "1px solid #e5e7eb",
            borderBottom: "1px solid #e5e7eb",
            width: "100%",
            overflow: "hidden",
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 1.5, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {fooditems.map((item) => (
            <SwiperSlide
              key={item.id}
              style={{
                width: "auto", 
                maxWidth: "1040px",
                flex: "1 0 auto", 
              }}
            >
              <div
                style={{
                  height: "320px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "160px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <div>
                  <h3 style={{ fontSize: "17px", fontWeight: "600" }}>
                    {item.name}
                  </h3>
                  <p style={{ fontSize: "13px", color: "#6b7280" }}>
                    {item.desc}
                  </p>
                  <p
                    style={{
                      marginTop: "6px",
                      fontWeight: "600",
                      color: "#b91c1c",
                    }}
                  >
                    <BsCurrencyDollar style={{ marginRight: "4px" }} />
                    {item.price}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </nav>
      <main>
  <div className="image-grid">
    {[os1, os1, os1].map((src, index) => (
      <div className="image-card" key={index}>
        <img src={src} alt="background" className="card-bg" />
        <div className="card-overlay"></div>
        <ul className="card-content">
          <img src={fried} alt="side item" className="side-img" />
          <li className="desc-line1">
            A grilled meat patty stacked in a bun with fresh toppings <br /> and savory sauces
          </li>
          <li className="desc-line2">
            comfort food at its best.
          </li>
          <button onClick={handleorder} className="button-order" aria-label="Order Fried Chicken Now">
            <FaTruck />
            <a href="#" className="order-link">ORDER NOW</a>
          </button>
        </ul>
      </div>
    ))}
  </div>

</main>


<div>
<div className="marquee-wrapper">
  <div className="marquee-track">
    <span className="marquee-item">GRILLED</span>
    <span className="marquee-item">CHICKEN</span>
    <span className="marquee-item">SHAWARMA</span>
    <span className="marquee-item">PIZZA</span>
    <span className="marquee-item">BURGER</span>
    <span className="marquee-item">FRESH FOOD</span>
    <span className="marquee-item">SHAWARMA</span>

  </div>
</div>

</div> 



<div className="flex flex-col lg:flex-row w-full justify-center items-start">
      {/* Main Nav */}
      <nav
        style={{
          width: "60%",
          background: "white",
          border: "2px solid #000",
          borderRadius: "20px",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        <div className="p-6">
          <h3 style={{ color: "black", textAlign: "center", fontSize: "25px" }}>
            OUR MENU
          </h3>
          <h2 className="text-2xl font-bold mb-4 text-black">Popular Picks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {foodItems.map((item) => (
              <div
                key={item.id}
                className="border rounded-2xl p-2 shadow hover:bg-blue-100 transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-24 sm:h-28 md:h-32 lg:h-36 object-cover rounded-lg mb-3"
                />
                <h3 className="text-sm font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="font-bold mt-2">{item.price}</p>
                <button className="cart-order" onClick={cartorder}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Repeatable Sections */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-black">Appetizers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {foodItems.map((item) => (
              <div
                key={item.id}
                className="border rounded-2xl p-2 shadow hover:bg-blue-100 transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-24 sm:h-28 md:h-32 lg:h-36 object-cover rounded-lg mb-3"
                />
                <h3 className="text-sm font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="font-bold mt-2">{item.price}</p>
                <button className="cart-order" onClick={cartorder}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-black">Salads</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {foodItems.map((item) => (
              <div
                key={item.id}
                className="border rounded-2xl p-2 shadow hover:bg-blue-100 transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-24 sm:h-28 md:h-32 lg:h-36 object-cover rounded-lg mb-3"
                />
                <h3 className="text-sm font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="font-bold mt-2">{item.price}</p>
                <button className="cart-order" onClick={cartorder}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className="hidden lg:block w-[20%] ml-4 border border-gray-300 rounded-xl p-4 bg-gray-50">
        <h3 className="text-lg font-bold mb-3 text-gray-700">POPULAR PICKS</h3>
        <h5 className="text-black mb-3 text-sm">
          Pick from some of our popular menu choices <br />
          and find out what the buzz is all about!
        </h5>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
          <li>Jollof Rice</li>
          <li>Shawarma</li>
          <li>Amala & Ewedu</li>
          <li>Meat Pie</li>
          <li>Spaghetti Combo</li>
        </ul>
      </aside>
    </div>


    <section className="why-choose-us">
  <div className="why-container">
    <h2 className="why-title">Why Choose Us</h2>
    <p className="why-subtitle">
      Serving excellence in every dish — here’s what sets us apart
    </p>

    <div className="features">
      <div className="feature-box">
        <span className="icon">👨‍🍳</span>
        <h3>Master Chefs</h3>
        <p>
          Our award-winning chefs craft dishes with passion, precision, and perfection.
        </p>
      </div>

      <div className="feature-box">
        <span className="icon">🍽️</span>
        <h3>Gourmet Experience</h3>
        <p>
          We blend traditional recipes with modern culinary techniques to create unforgettable meals.
        </p>
      </div>

      <div className="feature-box">
        <span className="icon">🌿</span>
        <h3>Fresh Ingredients</h3>
        <p>
          We source local and organic ingredients to ensure every bite is nutritious and flavorful.
        </p>
      </div>
    </div>
  </div>
</section>


    <section className="testimonial-page">
  <div className="testimonial-container">
    <h2 className="review-title">Our Customer Reviews</h2>

    <img src={chef} alt="Chef" className="chef-img" />

    <div className="customer-reviews">
      <div className="review">
        <h4>Chidi A.</h4>
        <p>The richness of flavor in every dish left me speechless. It was like a love letter to my taste buds.</p>
      </div>
      <div className="review">
        <h4>Amina K.</h4>
        <p>The atmosphere, service, and food were world-class. Chef Amara’s attention to detail truly stands out.</p>
      </div>
      <div className="review">
        <h4>David O.</h4>
        <p>I’ve dined in top restaurants across cities—but this experience was unforgettable. A culinary revelation.</p>
      </div>
    </div>
  </div>
</section>


    </section>
    

  )
  }
