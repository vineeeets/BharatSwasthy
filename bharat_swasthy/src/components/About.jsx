// About Section
import React, { useState, useEffect } from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src="https://placehold.co/600x700/dc2626/ffffff?text=Our+Clinic"
                            alt="Doctor with a patient"
                            className="rounded-3xl shadow-xl w-full h-auto object-cover"
                        />
                    </div>
                    <div>
                        <span className="text-red-600 font-semibold">ABOUT US</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">A Dedicated Medical Professional</h2>
                        <p className="text-gray-600 mb-4">
                            With over 15 years of experience in delivering high-quality patient care, Dr. Gaurav Garg is a board-certified physician specializing in internal medicine. She is passionate about developing and implementing personalized treatment plans and collaborating with healthcare teams to ensure the best outcomes.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Our mission is to empower our patients through education and preventive care. We believe in building lasting relationships based on trust and mutual respect.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-yellow-400">
                                <h3 className="font-bold text-xl mb-2">Subscription Plans</h3>
                                <p className="text-sm text-gray-600">Affordable monthly plans for individuals and families. Starting from ₹30/month.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-red-500">
                                <h3 className="font-bold text-xl mb-2">Our Vision</h3>
                                <p className="text-sm text-gray-600">To be a leading healthcare provider known for clinical excellence and compassionate care.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;