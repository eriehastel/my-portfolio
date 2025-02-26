import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

function Contact({ isOpen }) {
  // Contact Form handling
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_fk1701q", // EmailJS Service ID
        "template_cutflbw", // EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "eR3O-kbgmZ7JJHILO" // EmailJS Public Key
      )
      .then(
        () => {
          setSuccessMessage("Message sent successfully! 🎉");
          setIsSubmitting(false);
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("Email sending failed:", error);
          setSuccessMessage("Something went wrong, please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div
      className="p-10 flex flex-col items-center justify-center text-center transition-all duration-500 bg-gray-100 rounded-lg shadow-md"
      style={{ paddingTop: isOpen ? "20rem" : "7rem" }}
    >
      {/* Contact Heading */}
      <motion.h1
        className="text-4xl font-extrabold text-blue-700"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h1>
      <p className="text-gray-600 text-lg mt-2">
        Let's work together! Reach out through any of the channels below.
      </p>

      {/* Contact Info */}
      <motion.div
        className="mt-8 w-full max-w-lg grid gap-6 sm:grid-cols-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="flex items-center space-x-4 p-4 border rounded-xl shadow-md bg-white hover:shadow-lg transition">
          <Mail className="text-blue-700" />
          <a
            href="mailto:mugendieric13@gmail.com"
            className="text-gray-800 hover:text-blue-600 font-medium"
          >
            mugendieric13@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-4 p-4 border rounded-xl shadow-md bg-white hover:shadow-lg transition">
          <Phone className="text-blue-700" />
          <a
            href="tel:+254703668825"
            className="text-gray-800 hover:text-blue-600 font-medium"
          >
            +254 703 668 825
          </a>
        </div>
        <div className="flex items-center space-x-4 p-4 border rounded-xl shadow-md bg-white hover:shadow-lg transition sm:col-span-2">
          <MapPin className="text-blue-700" />
          <span className="text-gray-800 font-medium">Nairobi, Kenya</span>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="mt-8 w-full max-w-lg bg-white p-6 rounded-xl shadow-lg border"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Send a Message</h3>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Your Message"
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <motion.button
            type="submit"
            className={`w-full p-3 font-semibold rounded-lg transition ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-700 text-white hover:bg-blue-800"
            }`}
            whileHover={!isSubmitting ? { scale: 1.05 } : {}}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </form>

        {/* Success Message */}
        {successMessage && (
          <motion.p
            className="mt-4 text-green-600 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {successMessage}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}

export default Contact;
