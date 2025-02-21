import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center p-6 mt-14">
      <div className="max-w-5xl bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
        {/* Left Side - Contact Details */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-lg mb-6">
            We’d love to hear from you! Whether you have questions about our products or need assistance, feel free to reach out.
          </p>
          <ul className="text-gray-600 text-md leading-relaxed list-none mb-6">
            <li><strong>📍 Address:</strong> 123 Beauty Lane, Fashion City, 45678</li>
            <li><strong>✉ Email:</strong> support@cosmeticbrand.com</li>
            <li><strong>📞 Phone:</strong> +1 234 567 890</li>
            <li><strong>🕒 Business Hours:</strong> Mon-Fri, 9 AM - 6 PM</li>
          </ul>
          <div className="flex justify-center md:justify-start space-x-4 text-gray-800 text-2xl">
            <a href="#" className="hover:text-blue-600"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-700"><FaLinkedin /></a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="https://aiesec.or.id/wp-content/uploads/2021/11/pasted-image-0.png" 
            alt="Contact Us" 
            className="rounded-lg shadow-lg w-full md:w-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;