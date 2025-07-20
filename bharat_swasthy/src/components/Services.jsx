// Services Section
import { Mail, Phone, MapPin, Clock, Menu, X, Calendar, User, MessageSquare } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const Services = () => {
    const[isServices, setIsServices] = useState(false);
    const services = [
        { title: 'Real-Time Doctor Availability', description: 'No more waiting for hours. Get live updates on doctor availability, exact appointment times, and estimated wait times.', icon: <Clock className="text-red-600" /> },
        { title: 'Smart Follow-Up Management', description: 'Our intelligent system ensures you never miss a follow-up. Get timely reminders and easily schedule your next visit.', icon: <Calendar className="text-red-600" /> },
        { title: 'Medicine & Home Care Support', description: 'Comprehensive support for your medication needs and options for quality home care services for a comfortable recovery.', icon: <User className="text-red-600" /> },
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <span className="text-red-600 font-semibold">OUR SERVICES</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">How Can We Help You?</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-yellow-400">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Services;