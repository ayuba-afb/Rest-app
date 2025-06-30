import shop from "../welcome/image/Shopimage.jpg"
import { RiArrowDropRightLine } from "react-icons/ri";
import { MdFilterList } from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";
export default function Shop(){

    return(
        <section style={{ width:"100%",height:"100%"}}>
        <div style={{ position: "relative", width: "100%", height: "365px" }}>
        <img
          src={shop}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "60%",
            color: "white",
            fontSize: "5rem",
            fontWeight: "bold",
          
          }}
        >
          SHOP PAGE 
        </div>
        <div className="nav-container">
      <span className="nav-link home-link">Home page</span>
      <a href="#" className="nav-icon">
        <RiArrowDropRightLine />
      </a>
      <span className="nav-link">Shop page</span>
    </div>
      </div>
      <main>
        <input type="text" />
        <ul>
            <li><a href=""><MdFilterList /></a>Filtering</li>
            <li>Showing results of <h3>1-12</h3>of 27 Results</li> 
        </ul>
        <span>
            <p>SORT BY:
                <a href=""><LuArrowUpDown /></a>
            </p>
            <ul>
                <div>Price
                <li>Price</li>
                <li>price</li>
                <li>Price</li>
                <li>Price</li>
                </div>
            </ul>
        </span>
 
      </main>
</section>
      
    )
}