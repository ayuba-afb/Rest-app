import { motion } from "framer-motion";
import { RiArrowDropRightLine } from "react-icons/ri";
import shop from "../welcome/image/Shopimage.jpg";
import dine from "../welcome/dining.jpg"
import chef from "../welcome/image/cheff.png"
import React, { useState, useEffect } from "react";
import chef2 from "../welcome/image/chef2.jpg"

type ReservationFormFields = "name" | "email" | "phone" | "dateTime" | "guests";

type FormData = {
  [key in ReservationFormFields]: string;
};

type ErrorFields = {
  [key in ReservationFormFields]?: string;
};

export default function ReservationPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    dateTime: "",
    guests: "",
  });

  const [errors, setErrors] = useState<ErrorFields>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("reservationTheme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("reservationTheme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const validate = (): ErrorFields => {
    const newErrors: ErrorFields = {};
    if (!formData.name) newErrors.name = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.dateTime) newErrors.dateTime = "Date and time are required";
    if (!formData.guests) newErrors.guests = "Number of guests is required";
    else if (parseInt(formData.guests) <= 0)
      newErrors.guests = "Guests must be at least 1";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    localStorage.setItem("reservationData", JSON.stringify(formData));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        dateTime: "",
        guests: "",
      });
    }, 2000);
  };

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="flex justify-end p-4">
        <button
          onClick={toggleTheme}
          className="px-3 py-1 border rounded text-sm"
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      <div className="relative w-full h-[400px] md:h-[500px]">
        <img
          src={dine}
          alt="Dine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-white text-4xl md:text-6xl font-bold drop-shadow"
          >
            RESERVATIONS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white mt-4 text-lg md:text-xl max-w-2xl"
          >
            Book a table or send us a message — we're always happy to hear from you!
          </motion.p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-center px-4 py-10 gap-8">
        <motion.div
          className={`p-6 rounded-2xl shadow-xl max-w-md w-full ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-red-600">
            Reserve Your Table
          </h2>

          {submitted ? (
            <div className="text-green-600 text-center font-medium">
              ✅ Your reservation has been received. Thank you!
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-4">
                {["name", "email", "phone", "dateTime", "guests"].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block font-medium">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type={field === "email" ? "email" : field === "dateTime" ? "datetime-local" : field === "guests" ? "number" : "text"}
                      id={field}
                      name={field}
                      value={formData[field as ReservationFormFields]}
                      onChange={handleChange}
                      className="mt-1 w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                    {errors[field as ReservationFormFields] && (
                      <p className="text-sm text-red-500">
                        {errors[field as ReservationFormFields]}
                      </p>
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                >
                  {loading ? "Submitting..." : "Book Reservation"}
                </button>
              </form>

              <div className={`mt-6 p-4 border rounded-lg text-sm ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}`}>
                <h3 className="font-semibold text-lg mb-2">Live Input Preview</h3>
                <p><strong>Full Name:</strong> {formData.name || "N/A"}</p>
                <p><strong>Email:</strong> {formData.email || "N/A"}</p>
                <p><strong>Phone:</strong> {formData.phone || "N/A"}</p>
                <p><strong>Date & Time:</strong> {formData.dateTime || "N/A"}</p>
                <p><strong>Guests:</strong> {formData.guests || "N/A"}</p>
              </div>
            </>
          )}
        </motion.div>
      </div>

      <div>
        <div className="md:flex justify-center max-h-[650px] overflow-hidden">
          <div className="md:w-1/2 w-full max-h-[650px] transform translate-x-96">
            <img
              src={chef2}
              alt="Chef"
              className="w-96 h-full object-cover"
            />
          </div>

          <motion.div
            className="md:w-1/2 w-full p-2 md:p-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxHeight: '650px' }}
          >
            <div className="pt-9">
              <p className="mb-4 text-base">
                Explore these curated notes and insights from our master chef. Scroll through for tips, recipes, and more culinary inspiration.
              </p>

              <div className="space-y-4 text-sm md:text-base">
                <p>🍳 Always preheat your pan before adding ingredients.</p>
                <p>🌿 Fresh herbs can transform a dish. Add them at the end.</p>
                <p>🧂 Season throughout the cooking process, not just at the end.</p>
                <p>🔥 Don’t overcrowd the pan—give ingredients room to sear.</p>
              </div>
            </div>

            <div className="mt-6">
              <button className="px-5 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition text-sm">
                Read More Tips
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
