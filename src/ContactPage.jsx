import React from "react";
import "./ContactPage.css";
import { FaEnvelope, FaPhone, FaWhatsapp, FaGlobe } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="contact-info-container">
      <div className="contact-info-card">
        <h1 className="contact-info-title">İletişim Bilgileri</h1>
        <ul className="contact-list">
          <li>
            <FaEnvelope className="icon" />
            <a href="mailto:stilecucinaa@gmail.com">stilecucinaa@gmail.com</a>
          </li>
          <li>
            <FaPhone className="icon" />
            <a href="tel:+90 541 343 06 26">+90 541 343 06 26</a>
          </li>
          <li>
            <FaWhatsapp className="icon" />
            <a
              href="https://wa.me/905413430626"
              target="_blank"
              rel="noopener noreferrer"
            >
              +90 541 343 06 26
            </a>
          </li>
          <li>
            <FaGlobe className="icon" />
  <li><a href="https://www.stilecucina.com.tr" target="_blank" rel="noopener noreferrer">https://www.stilecucina.com.tr</a></li>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
