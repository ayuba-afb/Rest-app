import React, { useState } from "react";
import { motion } from "framer-motion";

const CheckoutPage = () => {
  const [placing, setPlacing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    payment: "card",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const placeOrder = (e: any) => {
    e.preventDefault();
    setPlacing(true);

  
    setTimeout(() => {
      setPlacing(false);
      alert("✅ Order placed successfully!");
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Checkout</h2>

      <form
        onSubmit={placeOrder}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
      
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold mb-4">Billing Details</h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full border rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            name="address"
            placeholder="Shipping Address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full border rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-500"
            rows={4}
            required
          ></textarea>
        </motion.div>

    
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

         
          <div className="border-b pb-4 mb-4">
            <div className="flex justify-between mb-2">
              <span>Item 1</span>
              <span>$20</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Item 2</span>
              <span>$15</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>$35</span>
            </div>
          </div>

      
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Payment Method</h4>
            <label className="flex items-center gap-2 mb-2">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={formData.payment === "card"}
                onChange={handleInputChange}
              />
              Credit/Debit Card
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={formData.payment === "cash"}
                onChange={handleInputChange}
              />
              Cash on Delivery
            </label>
          </div>

      
          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            disabled={placing}
          >
            {placing ? "Placing Order..." : "Place Order"}
          </motion.button>
        </motion.div>
      </form>
    </div>
  );
};

export default CheckoutPage;
