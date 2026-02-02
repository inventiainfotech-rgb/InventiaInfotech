import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Book, Code, Terminal, Search, ChevronRight, Shield, Network, Server, Scan } from 'lucide-react';

const Documentation = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      title: 'Cybersecurity',
      icon: Shield,
      color: '#0066cc',
      docs: [
        'Zero Trust Implementation Guide',
        'Firewall Configuration',
        'SIEM Setup & Integration',
        'Incident Response Procedures',
        'Security Audit Checklist'
      ]
    },
    {
      title: 'RFID & Barcode',
      icon: Scan,
      color: '#e91e63',
      docs: [
        'RFID Reader Setup',
        'Barcode Scanner Configuration',
        'Inventory System Integration',
        'Asset Tracking API Reference',
        'Mobile App SDK'
      ]
    },
    {
      title: 'Networking',
      icon: Network,
      color: '#00a86b',
      docs: [
        'SD-WAN Deployment Guide',
        'Network Architecture Best Practices',
        'WiFi 6 Configuration',
        'VPN Setup & Management',
        'QoS Policy Configuration'
      ]
    },
    {
      title: 'IT Infrastructure',
      icon: Server,
      color: '#8b5cf6',
      docs: [
        'Cloud Migration Playbook',
        'Kubernetes Deployment',
        'CI/CD Pipeline Setup',
        'Database Administration',
        'Monitoring & Alerting'
      ]
    }
  ];

  const quickLinks = [
    { title: 'Getting Started', description: 'New to Inventia? Start here.' },
    { title: 'API Reference', description: 'Complete API documentation.' },
    { title: 'Integration Guides', description: 'Connect with third-party tools.' },
    { title: 'Troubleshooting', description: 'Common issues and solutions.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8faff] via-[#bed3ff]/30 to-[#e8f0ff]">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 pt-12">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.button
              className="flex items-center gap-2 text-[#004aad] hover:text-[#0066cc] transition-colors"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </motion.button>
          </Link>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_security-portfolio-4/artifacts/yeywo8ds_INVeNTi.png" 
              alt="Inventia Logo" 
              className="h-16 w-16 object-cover rounded-full shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[1400px] mx-auto px-8 lg:px-16 py-16"
      >
        <div className="flex items-center gap-4 mb-6">
          <Book className="w-10 h-10 text-[#004aad]" />
          <span className="px-4 py-2 bg-[#004aad]/10 text-[#004aad] rounded-full text-sm font-bold uppercase tracking-wider">
            Developer Resources
          </span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-bold text-[#1a1a2e] mb-6">
          Docu{' '}
          <span className="bg-gradient-to-r from-[#004aad] to-[#0066cc] bg-clip-text text-transparent">
            mentation
          </span>
        </h1>
        <p className="text-xl text-[#4a5568] max-w-3xl mb-8">
          Comprehensive guides, API references, and tutorials to help you get the most out of our solutions.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-2xl">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#718096]" />
          <input
            type="text"
            placeholder="Search documentation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-4 rounded-xl bg-white/80 backdrop-blur-sm border border-[#bed3ff]/30 focus:border-[#004aad] outline-none text-[#1a1a2e] shadow-lg"
          />
        </div>
      </motion.div>

      {/* Quick Links */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#bed3ff]/30 hover:border-[#004aad]/50 cursor-pointer transition-all"
            >
              <h3 className="font-bold text-[#1a1a2e] mb-1">{link.title}</h3>
              <p className="text-sm text-[#4a5568]">{link.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Documentation Categories */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 pb-20">
        <h2 className="text-2xl font-bold text-[#1a1a2e] mb-8">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#bed3ff]/30"
            >
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <category.icon className="w-8 h-8" style={{ color: category.color }} />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e]">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.docs.map((doc, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-[#4a5568] hover:text-[#004aad] cursor-pointer transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                    <span>{doc}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* API Reference Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-[#1a1a2e] to-[#2d3748] rounded-3xl p-12 text-white"
        >
          <div className="flex items-center gap-4 mb-6">
            <Terminal className="w-10 h-10" />
            <h2 className="text-3xl font-bold">API Reference</h2>
          </div>
          <p className="text-white/70 mb-8 max-w-2xl">
            Integrate Inventia solutions into your applications with our comprehensive REST API.
          </p>
          <div className="bg-black/30 rounded-xl p-6 font-mono text-sm overflow-x-auto">
            <code className="text-green-400"># Example API Request</code><br />
            <code className="text-white">curl -X GET "https://api.inventia.tech/v1/assets" \</code><br />
            <code className="text-white">  -H "Authorization: Bearer YOUR_API_KEY" \</code><br />
            <code className="text-white">  -H "Content-Type: application/json"</code>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-4 bg-white text-[#1a1a2e] font-bold rounded-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
          >
            <Code className="w-5 h-5" />
            View Full API Docs
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Documentation;
