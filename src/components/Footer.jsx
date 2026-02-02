import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github, Instagram } from 'lucide-react';
import { mockData } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Service links with routes
  const serviceLinks = [
    { name: 'Cybersecurity', path: '/services/cybersecurity' },
    { name: 'RFID & Barcode', path: '/services/rfid-barcode' },
    { name: 'Networking', path: '/services/networking' },
    { name: 'IT Infrastructure', path: '/services/it-infrastructure' }
  ];

  // Company links with routes
  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Partners', path: '/partners' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'FAQ', path: '/faq' }
  ];

  // Resource links with routes
  const resourceLinks = [
    { name: 'Blog', path: '/blog' },
    { name: 'Whitepapers', path: '/whitepapers' },
    { name: 'Documentation', path: '/documentation' },
    { name: 'Support', path: '/support' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#f8faff] to-[#bed3ff]/40 border-t-2 border-[#004aad]/20">
      
      {/* Main Footer Content */}
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <img 
              src="https://customer-assets.emergentagent.com/job_security-portfolio-4/artifacts/yeywo8ds_INVeNTi.png" 
              alt="Inventia Logo" 
              className="h-14 w-14 object-cover rounded-full mb-6 drop-shadow-md"
            />
            <p className="text-[#4a5568] leading-relaxed mb-6 max-w-md">
              {mockData.footer.tagline}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                href={mockData.footer.social.linkedin}
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-12 h-12 bg-gradient-to-br from-[#004aad] to-[#0066cc] flex items-center justify-center rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a
                href={mockData.footer.social.twitter}
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-12 h-12 bg-gradient-to-br from-[#004aad] to-[#0066cc] flex items-center justify-center rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                <Twitter className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-12 h-12 bg-gradient-to-br from-[#004aad] to-[#0066cc] flex items-center justify-center rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                <Instagram className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a
                href={mockData.footer.social.github}
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-12 h-12 bg-gradient-to-br from-[#004aad] to-[#0066cc] flex items-center justify-center rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                <Github className="w-6 h-6 text-white" />
              </motion.a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-[#1a1a2e] font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-[#4a5568] hover:text-[#004aad] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#004aad] transition-all" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-[#1a1a2e] font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-[#4a5568] hover:text-[#004aad] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#004aad] transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-[#1a1a2e] font-bold mb-6 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((resource, index) => (
                <li key={index}>
                  <Link 
                    to={resource.path} 
                    className="text-[#4a5568] hover:text-[#004aad] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#004aad] transition-all" />
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-12 border-t-2 border-[#004aad]/20">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-[#1a1a2e] font-bold mb-4 text-xl">Stay Updated on Security Trends</h4>
            <p className="text-[#4a5568] mb-6 text-sm">
              Subscribe to receive insights on cybersecurity, infrastructure optimization, and emerging technologies.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your.email@company.com"
                className="terminal-input flex-1"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-2 border-[#004aad]/20 bg-gradient-to-r from-[#bed3ff]/30 to-[#e8f0ff]/30 backdrop-blur-sm">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-[#4a5568] font-medium">
              © {currentYear} Inventia. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-sm text-[#4a5568] hover:text-[#004aad] transition-colors font-medium"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-[#4a5568] hover:text-[#004aad] transition-colors font-medium"
              >
                Terms of Service
              </Link>
              <Link
                to="/support"
                className="text-sm text-[#4a5568] hover:text-[#004aad] transition-colors font-medium"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
