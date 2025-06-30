import { link } from "fs";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { FaTruck } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { PiFacebookLogoLight } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
import { SiVeed } from "react-icons/si";
import { FaPinterestP } from "react-icons/fa6";
import { BsDisplay } from "react-icons/bs";
import image from "./image/Fk1.avif"
import image1 from "./image/Fk2.jpg"
import image2 from "./image/Fk3.avif"
import image3 from "./image/Foodking3.svg"
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";
import image4 from "./image/grilledchicken1.png"
import image5 from "./image/grilledchicken2.png"
import { PiListDashesLight } from "react-icons/pi";
import image6 from "./image/Foodkingss.jpg"
import chicken from "./image/chiken.png";

import shop from "./image/Shopimage.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core styles
import 'swiper/css/navigation'; // optional modules
import { Navigation } from 'swiper/modules';

import { BsCurrencyDollar } from "react-icons/bs";
import fooditems from "../welcome/fooditem"
import Amala from "../welcome/image/Amala.jpg"
import Egusi from "../welcome/image/Egusi.jpg"
import Plaintain from "../welcome/image/Plantain.jpg"
import Pap from "../welcome/image/Pap and Akara.jpg"
import spaghetti from "../welcome/image/Spaghetti.jpg"
import jollof from "../welcome/image/Jollof.jpg"




export function Welcome() {
  return (

    <section style={{background:"white", height:"500%",width:"100%"}}> 
{/* <nav style={{backgroundColor:"white",color:"black", display:"flex", textAlign:"center",height:32, justifyContent:"space-between",padding:"10px 15px",}}>
  <ul style={{listStyle:"none",display:"flex",margin:"0",gap:"15px",}}> 
    <li style={{marginLeft:"125px"}}>100% Secure delivery without contact the courier</li>
    <FaTruck style={{marginLeft:"25px"}}/>
    <li>Track your order</li>
    {<div style={{width:"1px", height:"23px",background:"black", marginLeft:"800px"}}></div> }
      <IoIosSearch style={{marginLeft:"3px",marginTop:"2px"}}/>
      <li style={{marginBottom:"15px"}}>search</li>
     
    </ul>
    
     <div style={{display:"flex", marginRight:"155px",gap:"5px"}}>
     <PiFacebookLogoLight/>
     <CiTwitter />
    <SiVeed/>
    <FaPinterestP />
    </div> 
</nav>  */}
<div style={{width:"100%",height:"1px",background:"black"}}></div>
  {/* <nav>
<article  style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#f8f8f8",
      borderBottom: "1px solid #ccc",
    }}>
  <div style={{marginTop:"15px"}}>
    <img src={image3} alt="" />
  
  </div>
  
  <div style={{display:"flex",justifyContent:"center",gap:"15px"}}> 
    <ul>
    <li className="dropdown"><a href="" style={{ display: "flex", alignItems: "center", gap: "5px", textDecoration: "none", color: "black" }}>
      <span>HOME</span>
      <RiArrowDropDownLine size={22}/>
    </a>
     <ul  className="fathia">  
      <span style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)",gap:"10px,", padding:"5px",borderRadius:"5px",backgroundColor:"blue", border:"1px"}} 
       >
    <li><img src={image} alt="" /></li>
    <li><img src={image1}alt="" /></li>
    <li><img src={image2} alt="" /></li>
    </span>
   </ul>
    </li>
    </ul>
    <ul>
   
      <div className="riri" style={{ position: "relative" }}>
  <a href="#" style={{ textDecoration: "none", color: "black", alignItems:"center",display:"flex",gap:"3px" }}>SHOP
  <RiArrowDropDownLine  size={22}/>
  </a>

  <ul className="lol">
    <li>SHOP GRID<div style={{ width: "100%", height: "1px", background: "grey" }}></div></li>
    <li>SHOP LIST<div style={{ width: "100%", height: "1px", background: "grey" }}></div></li>
    <li>SHOP LEFT SIDE-BAR<div style={{ width: "100%", height: "1px", background: "grey" }}></div></li>
    <li>SHOP RIGHT SIDE-BAR<div style={{ width: "100%", height: "1px", background: "grey" }}></div></li>
    <li>SHOP SINGLE<div style={{ width: "100%", height: "1px", background: "grey" }}></div></li>
    <li>SHOP CART<div style={{ width: "100%", height: "1px", background: "grey" }}></div></li>
    <li>CHECKOUT<div style={{ width: "100%", height: "1px", background: "grey" }}></div></li>
  </ul>
</div>

       
      </ul>
    
<ul style={{ listStyleType: "none", padding: 0, margin: 0, position: "relative" }}>
  <li  style={{ position: "relative" }} className="blog-parent">
      <a href=""     style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            textDecoration: "none",
            color: "black",
          }}>BLOG 
      <RiArrowDropDownLine size={22} />
      </a>
      <ul className="blog-dropdown"
>
      
        <li>BLOG DETAILS
<div style={{width:"100%",height:"1px",background:"grey",marginTop:"5px"}}></div>
</li>
        <li>BLOG
        <div style={{width:"100%",height:"1px",background:"grey"}}></div> 
        </li>

      </ul>
      </li>
      </ul>
      

      <ul style={{listStyleType: "none", padding: 0, margin: 0, position: "relative",top:"-8px" }}>
        <li className="menu-parent" style={{ position: "relative",  }}>
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              padding: "10px",
            }}
          >
            PAGES <RiArrowDropDownLine />
          </a>

          <ul className="menu-list">
            <li><a href="#">ABOUT US</a></li>

            <li className="submenu-parent">
              <a href="#">
                CHEF PAGE <RiArrowDropDownLine />
              </a>
              <ul className="submenu-list">
                <li><a href="#">CHEF PAGE</a></li>
                <li><a href="#">CHEF DETAILS</a></li>
              </ul>
            </li>

            <li className="submenu-parent">
              <a href="#">
                FOOD MENU <RiArrowDropDownLine />
              </a>
              <ul className="submenu-list">
                <li><a href="#">FOOD MENU 1</a></li>
                <li><a href="#">FOOD MENU 2</a></li>
              </ul>
            </li>

            <li><a href="#">GALLERY</a></li>
            <li><a href="#">TESTIMONIAL</a></li>
            <li><a href="#">RESERVATION</a></li>
            <li><a href="#">FAQ'S</a></li>
            <li><a href="#">404 PAGE</a></li>
          </ul>
        </li>
      </ul>



    <ul>
  <li>CONTACT</li>
  </ul>
    
  </div>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}>
        <span style={{ fontSize: "16px" }}><CiShoppingCart /></span>
        <button style={{
          padding: "6px 12px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}>
          CONTACT US
        </button>
        <PiListDashesLight size={24} style={{ cursor: "pointer" }} />
      </div>
    

</article>
</nav>   */}
<nav>
<div></div>
  
</nav>

 <main style={{ position: "relative" }}>
      <div style={{ position: "relative" }}>
        <img
          style={{ width: "100%", height: "655px", objectFit: "cover" }}
          src={image6}
          alt="background"
        />

        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            alignItems: "flex-start",
            zIndex: 2,
          }}
        >
          <img
            src={chicken}
            alt="chicken"
            style={{ width: "120px", height: "auto" }}
          />

          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ fontSize: "54px", fontWeight: "bold" }}>
              CRISPY, EVERY BITE TASTE
            </li>
            <li style={{ fontSize: "40px", fontWeight: "500" }}>
              DELICIOUS FRIED CHICKEN
            </li>
          </ul>

          <button className="button-order"
            style={{
          
            }}
          >
            <FaTruck />
            <a
              href="#"
              style={{ color: "white", textDecoration: "none" }}
            >
              ORDER NOW
            </a>
          </button>
        </div>
      </div>
    </main> 
  

    <Swiper
  slidesPerView="auto"
  spaceBetween={20}
  style={{
    padding: '20px',
    backgroundColor: '#fafafa',
    borderTop: '1px solid #e5e7eb',
    borderBottom: '1px solid #e5e7eb',
  }}
>
  {fooditems.map((item) => (
    <SwiperSlide key={item.id} style={{ width: '240px' }}>
      <div
        style={{
          height: '320px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <img
          src={item.img}
          alt={item.name}
          style={{
            width: '100%',
            height: '160px',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />
        <div>
          <h3 style={{ fontSize: '17px', fontWeight: '600' }}>{item.name}</h3>
          <p style={{ fontSize: '13px', color: '#6b7280' }}>{item.desc}</p>
          <p style={{ marginTop: '6px', fontWeight: '600', color: '#b91c1c' }}>
            <BsCurrencyDollar style={{ marginRight: '4px' }} />
            {item.price}
          </p>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper> 






 </section> 


);
}




