import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center">
            <FaPhoneAlt className="text-3xl text-green-600 mr-4" />
            <span className="text-lg font-medium">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-3xl text-green-600 mr-4" />
            <span className="text-lg font-medium">contact@yourdomain.com</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-3xl text-green-600 mr-4" />
            <span className="text-lg font-medium">123 Main Street, City, Country</span>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
