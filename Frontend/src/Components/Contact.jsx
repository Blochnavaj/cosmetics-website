 
 import React from "react";
 import logo from "../assets/logo.svg";


 function Contact() {
   return (
     <div className="bg-pink-50 text-gray-900 py-12 px-6 md:px-20" id="contact">
       <div className="max-w-5xl mx-auto text-center">
         <h1 className="text-4xl font-bold text-green-500 mb-4">Contact Us</h1>
         <p className="text-lg text-gray-700 mb-8">
           Get in touch with us for any queries, support, or business inquiries.
         </p>
       </div>
       
       <div className="grid md:grid-cols-2 gap-12 items-center">
         <div>
           <img 
             src={logo} 
             alt="Company Logo" 
             className="w-40 mx-auto mb-6"
           />
           <h2 className="text-3xl font-semibold text-green-500 mb-4">Our Details</h2>
           <p className="text-gray-700 mb-2">📧 Email: contact@glowessence.com</p>
           <p className="text-gray-700 mb-2">📞 Phone: +123 456 7890</p>
           <p className="text-gray-700 mb-2">📍 Location: 123 Beauty Street, Glam City</p>
         </div>
         
         <div>
           <iframe 
             className="w-full h-64 rounded-lg shadow-lg" 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.95592501531774!3d-37.81720997975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d452f1f54fb%3A0x1fc42c77e1e2930b!2sCosmetic%20Shop!5e0!3m2!1sen!2sus!4v1633073473453!5m2!1sen!2sus" 
             allowFullScreen="" 
             loading="lazy"
           ></iframe>
         </div>
       </div>
     </div>
   );
 }
 
 export default Contact;
 