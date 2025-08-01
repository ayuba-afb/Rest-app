import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface CheckoutItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CheckoutState {
  items: CheckoutItem[];
  total: number;
  deliveryMethod: string;
  vatIncluded: boolean;
  appliedCoupon: string | null;
}

const formatNaira = (n: number): string =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(Math.round(n));

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as CheckoutState | undefined;

  if (!state || !state.items?.length) {
    return (
      <div className="max-w-md mx-auto p-6 text-center">
        <p className="mb-4">No order found. Please return to your cart.</p>
        <button
          onClick={() => navigate("/cart")}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Go to Cart
        </button>
      </div>
    );
  }

  const { items, total, deliveryMethod, vatIncluded, appliedCoupon } = state;

  const [placing, setPlacing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    payment: "card",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setPlacing(true);

    setTimeout(() => {
      setPlacing(false);
      alert("✅ Order placed successfully!");
      navigate("/");
    }, 2000);
  };

  const lineSubtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto p-6 bg-black">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Checkout</h2>

      <form onSubmit={placeOrder} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
            className="w-full border rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-500 text-black"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-500 text-black"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full border rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-500 text-black"
            required
          />

          <textarea
            name="address"
            placeholder="Shipping Address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full border rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-500 text-black"
            rows={4}
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

          <div className="border-b pb-4 mb-4 space-y-2 max-h-72 overflow-y-auto pr-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-2 text-sm"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded object-cover border"
                  />
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                </div>
                <span>{formatNaira(item.price * item.quantity)}</span>
              </div>
            ))}

            <div className="flex justify-between font-semibold pt-2">
              <span>Items Subtotal</span>
              <span>{formatNaira(lineSubtotal)}</span>
            </div>
          </div>

          <div className="text-sm mb-4 space-y-1">
            <p>Delivery Method: {deliveryMethod}</p>
            {vatIncluded && <p>VAT Included.</p>}
            {appliedCoupon && <p>Coupon: {appliedCoupon}</p>}
          </div>

          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Total</span>
            <span>{formatNaira(total)}</span>
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
