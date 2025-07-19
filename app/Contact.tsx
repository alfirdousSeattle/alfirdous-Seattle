import React, { useState } from "react";
import { FaUsers, FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const handleSendEmail = () => {
    const subject = "Contact from Al-Firdous Seattle Website";
    const body = "Hello,\n\nI would like to get in touch with Al-Firdous Seattle.\n\nBest regards,\n[Your name]";
    
    const mailtoLink = `mailto:admin@alfirdousseattle.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or want to get involved? Reach out to us!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-100 p-3 rounded-full cursor-pointer hover:bg-emerald-200 transition-colors" onClick={() => window.open('tel:+12067452070')}>
                <FaPhone className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">Phone Number</h3>
                <a href="tel:+12067452070" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  +1 (206) 745-2070
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-emerald-100 p-3 rounded-full cursor-pointer hover:bg-emerald-200 transition-colors" onClick={() => window.open('mailto:admin@alfirdousseattle.org')}>
                <FaEnvelope className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">Email</h3>
                <a href="mailto:admin@alfirdousseattle.org" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  admin@alfirdousseattle.org
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-emerald-100 p-3 rounded-full cursor-pointer hover:bg-emerald-200 transition-colors" onClick={() => window.open('https://chat.whatsapp.com/FBazUU56JRDAwmUbGl0dZn', '_blank')}>
                <FaUsers className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">WhatsApp Group</h3>
                <a href="https://chat.whatsapp.com/FBazUU56JRDAwmUbGl0dZn" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Join our WhatsApp Group
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-emerald-100 p-3 rounded-full cursor-pointer hover:bg-emerald-200 transition-colors" onClick={() => window.open('https://www.instagram.com/alfirdousseattle', '_blank')}>
                <FaInstagram className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">Instagram</h3>
                <a href="https://www.instagram.com/alfirdousseattle" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  @alfirdousseattle
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-6">
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaEnvelope className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Send us a Message</h3>
                              <p className="text-gray-600 leading-relaxed">
                  Click below to compose an email using your default mail app.
                </p>
            </div>
            
            <div className="text-center">
              <button
                onClick={handleSendEmail}
                className="group bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg w-full"
              >
                <div className="flex items-center justify-center gap-3">
                  <FaEnvelope className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Send Email</span>
                </div>
              </button>
              
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}