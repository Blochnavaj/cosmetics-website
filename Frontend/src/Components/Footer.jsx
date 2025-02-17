import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation (React Router)
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social icons
import logo from '../assets/logo.svg'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Information */}
          <div>
            <img
              src={logo} // Replace with your logo
              alt="Company Logo"
              className="h-16 mb-4"
            />
            <p className="text-sm">
              Address: 5171 W Campbell Ave, Kent, Utah 53127, United States
            </p>
            <p className="text-sm">Call Us: (+91) - 540-025-124553</p>
            <p className="text-sm">Email: sale@Nest.com</p>
            <p className="text-sm">Hours: 10:00 - 18:00, Mon - Sat</p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/delivery-info">Delivery Information</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/support-center">Support Center</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Popular Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/delivery-info">Delivery Information</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mt-8 space-x-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-blue-600 transition-colors" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400 transition-colors" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-600 transition-colors" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-700 transition-colors" />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 py-4 mt-12">
        <div className="text-center text-sm text-gray-400">
          <p>&copy; 2025 Nest Cosmetics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
