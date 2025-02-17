import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";  
import logo from "../assets/logo.svg";

function Contact() {
  const { t } = useTranslation();  

  return (
    <motion.div
      className="bg-pink-50 text-gray-900 py-12 px-6 md:px-20 mt-11" id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-500 mb-4">{t("contact")}</h1>
        <p className="text-lg text-gray-700 mb-8">
          {t("contact_desc")}
        </p>
      </div>

      <div className="md:absolute md:left-20">

  <img src={logo} alt="Company Logo" className="w-40 mx-auto mb-6 " />
</div>

      <div className="grid md:grid-cols-2 gap-12 items-center md:mt-3">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
        
          <h2 className="text-3xl font-semibold text-green-500 mb-4 md:mt-14">{t("our_details")}</h2>
          <p className="text-gray-700 mb-2">📧 {t("email")}: contact@glowessence.com</p>
          <p className="text-gray-700 mb-2">📞 {t("phone")}: +123 456 7890</p>
          <p className="text-gray-700 mb-2">📍 {t("location")}: 123 Beauty Street, Glam City</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.95592501531774!3d-37.81720997975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d452f1f54fb%3A0x1fc42c77e1e2930b!2sCosmetic%20Shop!5e0!3m2!1sen!2sus!4v1633073473453!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;
