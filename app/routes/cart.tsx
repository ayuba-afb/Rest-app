import React, { useState } from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Plaintain from "../welcome/image/Plantain.jpg";
import Pap from "../welcome/image/Pap and Akara.jpg";
import spaghetti from "../welcome/image/Spaghetti.jpg";
import jollof from "../welcome/image/Jollof.jpg";
type CartItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Spaghetti Bolognese",
      image: "https://source.unsplash.com/100x100/?spaghetti",
      price: 2000,
      quantity: 1,
    },
    {
      id: 2,
      name: "Chicken Shawarma",
      image:spaghetti,
      price: 1500,
      quantity: 2,
    },
    {
      id: 2,
      name: "Chicken Shawarma",
      image: "https://source.unsplash.com/100x100/?shawarma",
      price: 1500,
      quantity: 2,
    },
    {
      id: 2,
      name: "Chicken Shawarma",
      image: "https://source.unsplash.com/100x100/?shawarma",
      price: 1500,
      quantity: 2,
    },
    {
      id: 2,
      name: "Chicken Shawarma",
      image: "https://source.unsplash.com/100x100/?shawarma",
      price: 1500,
      quantity: 2,
    },
  ]);

  const handleRemove = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantity = (id: number, type: "inc" | "dec") => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
        Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty.</div>
      ) : (
        <>
          <div className="space-y-4">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col sm:flex-row items-center justify-between bg-white shadow rounded-lg p-4"
                >
                  <div className="flex items-center space-x-4 w-full sm:w-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-gray-500">₦{item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                    <button
                      onClick={() => handleQuantity(item.id, "dec")}
                      className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      <FaMinus />
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantity(item.id, "inc")}
                      className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      <FaPlus />
                    </button>
                  </div>

                  <div className="text-right mt-4 sm:mt-0">
                    <p className="font-bold">
                      ₦{item.price * item.quantity}
                    </p>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 text-sm mt-1 hover:underline flex items-center gap-1"
                    >
                      <FaTrash className="text-sm" /> Remove
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 bg-gray-100 p-5 rounded-md shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Order Summary
            </h3>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700">Subtotal:</span>
              <span className="font-bold">₦{total}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700">Delivery Fee:</span>
              <span className="font-bold">₦500</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between items-center text-lg">
              <span>Total:</span>
              <span className="font-bold">₦{total + 500}</span>
            </div>
            <button
              className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold transition"
              onClick={() => alert("Proceeding to checkout...")}
            >
              Proceed to Checkout
            </button>
          </motion.div>
        </>
      )}
    </div>
  );
}
