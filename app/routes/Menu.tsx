import shop from "../welcome/image/Shopimage.jpg";
import { RiArrowDropRightLine } from "react-icons/ri";
import { MdFilterList } from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import a from "../welcome/image/cc1.jpg"
import b from "../welcome/image/cc2.jpg"
import c from "../welcome/image/cc3.jpg"
import d from "../welcome/image/cc4.jpg"
import e from "../welcome/image/cc5.jpg"
import f from "../welcome/image/cc6.jpg"
import g from "../welcome/image/cc7.jpg"
import h from "../welcome/image/cc8.jpg"
import i from "../welcome/image/cc9.jpg"
import j from "../welcome/image/cc10.jpg"
import k from "../welcome/image/cc11.jpg"
import l from "../welcome/image/cc12.jpg"
import { useNavigate } from 'react-router-dom';
import dine from "../welcome/dining.jpg"
import chef from "../welcome/image/cheff.png"
import { motion } from "framer-motion";
export default function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Price (Low to High)");

  const handleSortSelect = (option: string) => {
    setSelectedSort(option);
    setSortOpen(false);
  };
 
  const products = [
    {
      id: 1,
      name: "Spaghetti Delight",
      price: "12.99",
      image: a,
      rating: 4,
    },
    {
      id: 2,
      name: "Grilled Chicken",
      price: "18.50",
      image: b,
      rating: 5,
    },
    {
      id: 3,
      name: "Veggie Salad",
      price: "10.75",
      image: c,
      rating: 3,
    },
    {
      id: 4,
      name: "Beef Burger",
      price: "14.99",
      image: d,
      rating: 4,
    },
    {
      id: 5,
      name: "Tropical Juice",
      price: "7.50",
      image:e,
      rating: 5,
    },
    {
      id: 6,
      name: "Chocolate Cake",
      price: "9.25",
      image: f,
      rating: 5,
    },
    {
      id: 7,
      name: "Sushi Rolls",
      price: "16.30",
      image: g,
      rating: 4,
    },
    {
      id: 8,
      name: "Pancakes Stack",
      price: "11.20",
      image: h,
      rating: 4,
    },
    {
      id: 9,
      name: "BBQ Ribs",
      price: "19.90",
      image: j,
      rating: 5,
    },
    {
      id: 10,
      name: "Fruit Platter",
      price: "8.00",
      image: i,
      rating: 3,
    },
    {
      id: 11,
      name: "Ice Cream",
      price: "6.75",
      image: k,
      rating: 4,
    },
    {
      id: 12,
      name: "Pepperoni Pizza",
      price: "15.40",
      image: l,
      rating: 5,
    },
  ];
//   const filteredProducts = products.filter((product) =>
//   product.name.toLowerCase().includes(searchTerm.toLowerCase())
// );
const filteredProducts = searchTerm.trim() === ""
  ? products
  : products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );

  const navigate = useNavigate();
  const cartorder:(e:React.MouseEvent<HTMLButtonElement>)=>void=(e)=>{
    e.preventDefault()
    navigate("/cart")
  }
  return (
    <section style={{ width: "100%", height: "100%" }}>
    
<div className="relative w-full h-[400px] md:h-[500px]">
  <img
    src={dine}
    alt="Restaurant Menu"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
    <motion.h1
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-white text-4xl md:text-6xl font-bold drop-shadow"
    >
      OUR MENU
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-white mt-4 text-lg md:text-xl max-w-2xl"
    >
      Discover our delicious dishes made with the freshest ingredients, crafted to satisfy every craving.
    </motion.p>
  </div>
</div>


      
      <main className="p-5 md:p-10 bg-white w-full">
        <div className="w-full mb-4">
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-black w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-orange-500"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <ul className="flex items-center gap-4 text-sm text-gray-700">
            <li className="flex items-center gap-1">
              <MdFilterList className="text-xl text-orange-500" /> Filtering
            </li>
            <li>
              Showing results of{" "}
              <span className="font-semibold text-black">1–12</span> of{" "}
              <span className="font-semibold text-black">27</span> results
            </li>
          </ul>

          <div className="relative text-sm text-gray-700">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
            >
              SORT BY:{" "}
              <span className="text-black">{selectedSort}</span>{" "}
              <LuArrowUpDown className="text-orange-500" />
            </button>

            {sortOpen && (
              <ul className="absolute right-0 mt-2 bg-white border border-gray-200 rounded shadow-md w-48 z-10">
                {[
                  "Price (Low to High)",
                  "Price (High to Low)",
                  "Name A-Z",
                  "Name Z-A",
                ].map((option) => (
                  <li
                    key={option}
                    onClick={() => handleSortSelect(option)}
                    className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      

     <div className="flex justify-center items-center p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl w-full">
                  {filteredProducts.map((product) => (
  <div
  key={product.id}
  className="bg-white rounded-xl shadow-md overflow-hidden hover:bg-blue-100 transition duration-300"
>
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-48 object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-lg font-semibold mb- text-black">{product.name}</h3>
    <p className="text-orange-500 font-bold mb-2">${product.price}</p>

    <div className="flex justify-center items-center mb-2">
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar
          key={index}
          className={`text-yellow-400 ${
            index < product.rating ? "opacity-100" : "opacity-30"
          }`}
        />
      ))}
    </div>

    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition" onClick={cartorder}>
      Add to Cart
    </button>
  </div>
</div>


))}
{filteredProducts.length === 0 && (
  <p className="text-center text-gray-500 col-span-full">No products found.</p>
)}
                  </div>
     </div>
      {/* <div className="flex justify-center items-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl w-full">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:bg-blue-100 transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mb- text-black">{product.name}</h3>
              <p className="text-orange-500 font-bold mb-2">${product.price}</p>

              <div className="flex justify-center items-center mb-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar
                    key={index}
                    className={`text-yellow-400 ${
                      index < product.rating ? "opacity-100" : "opacity-30"
                    }`}
                  />
                ))}
              </div>

              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition" onClick={cartorder}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div> */}
    </main>
    </section>
  );
}
