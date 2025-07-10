import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaPhoneAlt, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import heroImage from "../welcome/image/cc1.jpg";
import chefImage from "../welcome/image/backg.jpg";
import dish1 from "../welcome/image/Egusi.jpg";
import dish2 from "../welcome/image/Amala.jpg";
import dish3 from "../welcome/image/Spaghetti.jpg";
import cheff from "../welcome/image/cheff.png"
import moment1 from "../welcome/image/moment 1.jpg"
import moment2 from "../welcome/image/moment 2.jpg"
import moment3 from "../welcome/image/moment 3.jpg"
import chef2 from "../welcome/image/chef2.jpg"
const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      
      {/* Hero Section */}
      <div className="relative h-[80vh]">
        <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-5xl font-bold text-center"
          >
            Discover Our Story
          </motion.h1>
        </div>
      </div>

      {/* Intro */}
      <section className="max-w-5xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">A Taste of Excellence</h2>
        <p className="text-lg leading-relaxed">
          From humble beginnings to a renowned culinary destination, our restaurant
          is a celebration of authentic recipes, heartfelt service, and culinary
          artistry. Join us for a meal and become a part of our story.
        </p>
      </section>

      {/* Chef Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4">
          <img src={chef2} alt="Chef" className="rounded-2xl shadow-lg w-full h-auto" />
          <div>
            <h2 className="text-3xl font-bold mb-4">Meet Chef Isabella</h2>
            <p className="text-lg mb-4">
              With over 25 years of global experience, Chef Isabella infuses each dish
              with passion, precision, and soul. Her dedication to sustainable
              ingredients and bold flavors has earned our kitchen its reputation.
            </p>
            <div className="flex text-yellow-400 text-xl">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">Signature Dishes</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[{ img: dish1, name: "Egusi" }, { img: dish2, name: "Amala" }, { img: dish3, name: "Spaghetti" }].map((dish, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.03 }} className="rounded-xl overflow-hidden shadow-lg">
              <img src={dish.img} alt={dish.name} className="w-full h-56 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-medium">{dish.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    
      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">Moments Captured</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[moment1, moment2, moment3].map((img, idx) => (
            <motion.img
              key={idx}
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </section>

      {/* Contact Strip */}
      <section className="bg-black text-white py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-6">We’d love to hear from you! Call or message us for reservations.</p>
        <div className="flex justify-center gap-6 flex-wrap text-lg">
          <div className="flex items-center gap-2"><FaPhoneAlt /> +234 800 123 4567</div>
          <div className="flex items-center gap-2"><FaInstagram /> @ourrestaurant</div>
          <div className="flex items-center gap-2"><FaFacebookF /> /ourrestaurant</div>
          <div className="flex items-center gap-2"><FaTwitter /> @ourrestaurant</div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
