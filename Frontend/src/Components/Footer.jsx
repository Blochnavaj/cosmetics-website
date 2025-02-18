import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

function Footer() {
  return (
    <div className="container mx-auto px-6 py-10 sm:mt-36 mt-32">
      <div className="grid gap-14 sm:grid-cols-1 md:flex md:justify-around text-sm">
        
        {/* Logo & Description */}
        <div className="md:w-1/3">
          <img src={assets.logo} className="w-32 mb-3" alt="Company Logo" />
          <p className="font-semibold text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae ratione saepe expedita quibusdam ad sapiente perferendis, iure molestias pariatur quo neque nam vel officia esse asperiores aspernatur iste sed nihil!
          </p>
        </div>

        {/* Links Section */}
        <div className="flex   gap-6 md:flex-row flex-col md:gap-12">
          
          {/* Company Info */}
          <div>
            <p className="font-semibold text-gray-800 mb-3">Company</p>
            <ul className="text-gray-600 space-y-2">
              <li><a href="/">About Us</a></li>
              <li><a href="/">Careers</a></li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <p className="font-semibold text-gray-800 mb-3">Support</p>
            <ul className="text-gray-600 space-y-2">
              <li><a href="/">Help Center</a></li>
              <li><a href="/">FAQ</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <p className="font-semibold text-gray-800 mb-3">Contact</p>
            <ul className="text-gray-600 space-y-1">
              <li>Email: <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="text-blue-500">+1 234 567 890</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Small Map Section */}
      <div className="mt-10">
        <p className="font-semibold text-gray-800 mb-2">Find Us</p>
        <iframe
          className="w-full h-40 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509371!2d144.95592331550414!3d-37.8172097420145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f4cf3b%3A0x4bdb9df0b1e57a1a!2sMelbourne%20CBD!5e0!3m2!1sen!2sau!4v1616813035377!5m2!1sen!2sau"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
     <div>
     <hr className='mt-2' />
     <p className=' text-sm text-center font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, at!</p>
     </div>
    </div>
  )
}

export default Footer
