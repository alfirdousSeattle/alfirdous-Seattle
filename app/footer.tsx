"use client";
import React from 'react';
import { FaTiktok, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="py-20 bg-emerald-700">
            <div className="container mx-auto px-6">
                
                {/* Company Name and Quote */}
                <div className="text-center mb-10">
                <h2 className="text-5xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-6">
            Have questions or want to join our next adventure? Reach out to us!
          </p>
                </div>

              
          

                {/* Social Links */}
                <div className="flex justify-center space-x-10 mb-10">
                    <a
                        href="https://www.tiktok.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 hover:text-gray-100 transition duration-300"
                    >
                        <FaTiktok className="text-3xl" />
                        <span className="hidden sm:inline">TikTok</span>
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 hover:text-gray-100 transition duration-300"
                    >
                        <FaInstagram className="text-3xl" />
                        <span className="hidden sm:inline">Instagram</span>
                    </a>
                </div>

                {/* Contact Info */}
                <div className="text-center text-gray-400 space-y-3">
                    <p className="flex justify-center items-center space-x-2">
                        <FaPhoneAlt />
                        <span>Phone: (123) 456-7890</span>
                    </p>
                    <p className="flex justify-center items-center space-x-2">
                        <FaEnvelope />
                        <span>Email: info@alfirdousseattle.com</span>
                    </p>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm text-gray-500 mt-12">
                    © {new Date().getFullYear()} Alfirdous Seattle. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
