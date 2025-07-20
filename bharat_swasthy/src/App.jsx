import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Menu, X, Calendar, User, MessageSquare } from 'lucide-react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import { Analytics } from "@vercel/analytics/react"

const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigateTo = (section) => {
        setActiveSection(section);
        setIsMenuOpen(false);
        // Smooth scroll to section
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    };

    // Component to render based on active section
    const renderSection = () => {
        // In a real multi-page app, you'd use a router.
        // For a single-page portfolio, we can show all sections.
        return (
            <>
                <Hero onNavigate={navigateTo} />
                <About />
                <Services />
                <Testimonials />
                <Contact />
            </>
        );
    };

    return (
        <div className="bg-gray-50 font-sans text-gray-800">
            <Header onNavigate={navigateTo} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <main>
                {renderSection()}
            </main>
            <Footer onNavigate={navigateTo} />
            <Analytics />
        </div>
    );
};

export default App;