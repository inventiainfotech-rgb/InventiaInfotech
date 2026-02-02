import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Shield, Scan, Network, Server } from 'lucide-react';

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.services-dropdown')) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Handle logo click - scroll to top
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const services = [
    { 
      name: 'Cybersecurity', 
      path: '/services/cybersecurity',
      icon: Shield,
      description: 'Multi-layered defense systems'
    },
    { 
      name: 'RFID & Barcode', 
      path: '/services/rfid-barcode',
      icon: Scan,
      description: 'Smart tracking solutions'
    },
    { 
      name: 'Networking', 
      path: '/services/networking',
      icon: Network,
      description: 'Enterprise connectivity'
    },
    { 
      name: 'IT Infrastructure', 
      path: '/services/it-infrastructure',
      icon: Server,
      description: 'Cloud & server solutions'
    }
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Support', path: '/support' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-[#bed3ff]/30' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Logo - Aligned Left - Clickable to scroll to top */}
            <button 
              onClick={handleLogoClick}
              className="flex items-center focus:outline-none"
            >
              <motion.img
                src="https://customer-assets.emergentagent.com/job_security-portfolio-4/artifacts/yeywo8ds_INVeNTi.png"
                alt="Inventia Logo"
                className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 object-cover rounded-full shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span 
                className="ml-2 sm:ml-3 font-bold text-base sm:text-lg lg:text-xl text-[#004aad]"
              >
                INVENTIA
              </motion.span>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              {navLinks.slice(0, 2).map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`text-sm font-semibold transition-colors hover:text-[#004aad] ${
                    location.pathname === link.path
                      ? 'text-[#004aad]' 
                      : 'text-[#4a5568]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div className="relative services-dropdown">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setServicesDropdownOpen(!servicesDropdownOpen);
                  }}
                  className={`flex items-center gap-1 text-sm font-semibold transition-colors hover:text-[#004aad] ${
                    location.pathname.includes('/services')
                      ? 'text-[#004aad]' 
                      : 'text-[#4a5568]'
                  }`}
                >
                  Services
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesDropdownOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-[#bed3ff]/30 overflow-hidden z-50"
                    >
                      <div className="p-2">
                        {services.map((service, index) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className={`flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-[#bed3ff]/20 ${
                              location.pathname === service.path
                                ? 'bg-[#004aad]/10'
                                : ''
                            }`}
                          >
                            <div className="p-2 bg-[#004aad]/10 rounded-lg">
                              <service.icon className="w-5 h-5 text-[#004aad]" />
                            </div>
                            <div>
                              <div className="font-semibold text-[#1a1a2e] text-sm">
                                {service.name}
                              </div>
                              <div className="text-xs text-[#4a5568]">
                                {service.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                to="/support" 
                className={`text-sm font-semibold transition-colors hover:text-[#004aad] ${
                  location.pathname === '/support' ? 'text-[#004aad]' : 'text-[#4a5568]'
                }`}
              >
                Support
              </Link>
            </nav>

            {/* Right Side - CTA Button & Mobile Menu */}
            <div className="flex items-center gap-3">
              {/* CTA Button - Hidden on very small screens */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigate('/');
                    setTimeout(() => {
                      const contact = document.getElementById('contact');
                      if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                  }
                  setMobileMenuOpen(false);
                }}
                className="hidden sm:block px-3 sm:px-5 py-2 bg-gradient-to-r from-[#004aad] to-[#0066cc] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Contact Us
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#004aad] focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#bed3ff]/30 max-h-[80vh] overflow-y-auto"
            >
              <nav className="flex flex-col px-4 py-4 space-y-2">
                {/* Home Link */}
                <Link 
                  to="/" 
                  className={`text-base font-semibold py-3 px-4 rounded-lg transition-colors ${
                    location.pathname === '/'
                      ? 'text-[#004aad] bg-[#004aad]/10' 
                      : 'text-[#4a5568] hover:bg-[#bed3ff]/20'
                  }`}
                >
                  Home
                </Link>

                {/* About Link */}
                <Link 
                  to="/about" 
                  className={`text-base font-semibold py-3 px-4 rounded-lg transition-colors ${
                    location.pathname === '/about'
                      ? 'text-[#004aad] bg-[#004aad]/10' 
                      : 'text-[#4a5568] hover:bg-[#bed3ff]/20'
                  }`}
                >
                  About
                </Link>

                {/* Mobile Services Accordion */}
                <div className="rounded-lg overflow-hidden">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`w-full flex items-center justify-between text-base font-semibold py-3 px-4 rounded-lg transition-colors ${
                      location.pathname.includes('/services')
                        ? 'text-[#004aad] bg-[#004aad]/10' 
                        : 'text-[#4a5568] hover:bg-[#bed3ff]/20'
                    }`}
                  >
                    <span>Services</span>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform duration-200 ${
                        mobileServicesOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-[#f8faff] rounded-lg mt-1 overflow-hidden"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className={`flex items-center gap-3 py-3 px-4 transition-colors hover:bg-[#bed3ff]/30 ${
                              location.pathname === service.path
                                ? 'bg-[#004aad]/10'
                                : ''
                            }`}
                          >
                            <div className="p-2 bg-white rounded-lg shadow-sm">
                              <service.icon className="w-4 h-4 text-[#004aad]" />
                            </div>
                            <div>
                              <div className="font-semibold text-[#1a1a2e] text-sm">
                                {service.name}
                              </div>
                              <div className="text-xs text-[#4a5568]">
                                {service.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Support Link */}
                <Link 
                  to="/support" 
                  className={`text-base font-semibold py-3 px-4 rounded-lg transition-colors ${
                    location.pathname === '/support'
                      ? 'text-[#004aad] bg-[#004aad]/10' 
                      : 'text-[#4a5568] hover:bg-[#bed3ff]/20'
                  }`}
                >
                  Support
                </Link>

                {/* Mobile Contact Button */}
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      navigate('/');
                      setTimeout(() => {
                        const contact = document.getElementById('contact');
                        if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                      }, 300);
                    }
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3 mt-2 bg-gradient-to-r from-[#004aad] to-[#0066cc] text-white text-base font-semibold rounded-lg shadow-md"
                >
                  Contact Us
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default StickyHeader;
