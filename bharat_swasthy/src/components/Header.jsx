// Header Component
import { Mail, Phone, MapPin, Clock, Menu, X, Calendar, User, MessageSquare } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const Header = ({ onNavigate, isMenuOpen, setIsMenuOpen }) => {
    const navLinks = [
        { id: 'home', title: 'Home' },
        { id: 'about', title: 'About' },
        { id: 'services', title: 'Services' },
        { id: 'testimonials', title: 'Testimonials' },
        { id: 'contact', title: 'Contact' },
    ];

    return (
        <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
            {/* Top Bar */}
            <div className="bg-yellow-400 text-gray-800 py-2 px-4 md:px-8">
                <div className="container mx-auto flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                            <Clock size={16} />
                            <span>24x7 Available for Emergency</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                         <div className="hidden md:flex items-center space-x-1">
                            <Phone size={16} />
                            <span>+91-7322097828</span>
                        </div>
                        <div className="flex space-x-3">
                            {/* Add social media icons here if needed */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
                <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="text-2xl font-bold text-red-600">
                    Bharat Swasthy
                </a>
                <div className="hidden lg:flex items-center space-x-6">
                    {navLinks.map(link => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => { e.preventDefault(); onNavigate(link.id); }}
                            className="text-gray-600 hover:text-red-600 font-medium transition-colors duration-300"
                        >
                            {link.title}
                        </a>
                    ))}
                </div>
                <button
                    onClick={() => onNavigate('contact')}
                    className="hidden lg:inline-block bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-transform duration-300 hover:scale-105"
                >
                    Book Appointment
                </button>
                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800">
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 w-full">
                    <div className="container mx-auto px-8 py-4 flex flex-col space-y-4">
                        {navLinks.map(link => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={(e) => { e.preventDefault(); onNavigate(link.id); }}
                                className="text-gray-600 hover:text-red-600 font-medium text-center py-2"
                            >
                                {link.title}
                            </a>
                        ))}
                        <button
                            onClick={() => onNavigate('contact')}
                            className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-transform duration-300"
                        >
                            Book Appointment
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};
export default Header;
