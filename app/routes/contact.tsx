import React from 'react';
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import dine from "../welcome/dining.jpg";

export default function ContactUs() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
   {/* Hero Section */}
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
      CONTACT US
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-white mt-4 text-lg md:text-xl max-w-2xl"
    >
      Have questions, feedback, or just want to say hi? We're happy to hear from you!
    </motion.p>
  </div>
</div>


      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-10 px-6 md:px-12 py-12">
        {/* Contact Form */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 shadow-lg rounded-xl"
        >
          <h3 className="text-2xl font-semibold mb-4 text-black">Send Us a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-all"
            >
              Submit
            </button>
          </form>
        </motion.div>

        {/* Map + Info */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          {/* Google Map */}
          <div className="aspect-video rounded-lg overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.172772252194!2d-122.08385158468522!3d37.42206597982517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb73556e03a0b%3A0xf0a1cb700d379b89!2sGoogleplex!5e0!3m2!1sen!2sus!4v1617187671413!5m2!1sen!2sus"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          {/* Info + Hours */}
          <div className="grid md:grid-cols-2 gap-6 text-sm md:text-base">
            {/* Contact Info */}
            <div className="space-y-2 text-gray-700">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-black" /> 123 Food Street, Lagos, Nigeria
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-black" /> +234 900 123 4567
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-black" /> hello@deliciousbites.com
              </p>
              <div className="flex gap-4 text-xl pt-2">
                <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
                <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
                <a href="#" className="hover:text-sky-500"><FaTwitter /></a>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-2 text-black">Opening Hours</h4>
              <ul className="text-gray-700">
                <li>Mon - Fri: 10:00 AM – 10:00 PM</li>
                <li>Saturday: 11:00 AM – 11:00 PM</li>
                <li>Sunday: 12:00 PM – 8:00 PM</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/2349001234567"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 hover:bg-green-600 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Media Query for iframe height */}
      <style>
        {`
          @media (max-width: 768px) {
            iframe {
              height: 250px !important;
            }
          }
        `}
      </style>
    </div>
  );
}
