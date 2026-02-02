import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Building, Shield, Network, Server } from 'lucide-react';

const CaseStudies = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const caseStudies = [
    {
      id: 1,
      title: 'Financial Sector Security Overhaul',
      client: 'GlobalTech Financial',
      category: 'Cybersecurity',
      icon: Shield,
      color: '#0066cc',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800',
      challenge: 'Legacy security systems with multiple vulnerabilities threatening customer data.',
      solution: 'Implemented zero-trust architecture with 24/7 SOC monitoring.',
      results: [
        { metric: '87%', label: 'Security Incidents Reduced' },
        { metric: '99.9%', label: 'System Uptime' },
        { metric: '< 5min', label: 'Threat Response Time' }
      ]
    },
    {
      id: 2,
      title: 'Smart Warehouse RFID Integration',
      client: 'LogisticsPro Inc.',
      category: 'RFID Solutions',
      icon: Building,
      color: '#e91e63',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800',
      challenge: 'Manual inventory tracking causing errors and delays across 5 distribution centers.',
      solution: 'Deployed intelligent RFID tracking with real-time analytics dashboard.',
      results: [
        { metric: '99.8%', label: 'Inventory Accuracy' },
        { metric: '70%', label: 'Manual Audits Reduced' },
        { metric: '3 months', label: 'ROI Achievement' }
      ]
    },
    {
      id: 3,
      title: 'Enterprise Network Transformation',
      client: 'MegaCorp International',
      category: 'Networking',
      icon: Network,
      color: '#00a86b',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800',
      challenge: 'Connecting 45 global offices with reliable, low-latency network infrastructure.',
      solution: 'Architected SD-WAN infrastructure with integrated security.',
      results: [
        { metric: '40%', label: 'Cost Reduction' },
        { metric: '+120%', label: 'Performance Gain' },
        { metric: '12', label: 'Countries Connected' }
      ]
    },
    {
      id: 4,
      title: 'Cloud-Native Infrastructure Migration',
      client: 'InnovateTech Solutions',
      category: 'IT Infrastructure',
      icon: Server,
      color: '#8b5cf6',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800',
      challenge: 'Legacy on-premise systems hindering scalability and increasing operational costs.',
      solution: 'Orchestrated seamless migration to containerized cloud architecture.',
      results: [
        { metric: '5x', label: 'Deployment Velocity' },
        { metric: '60%', label: 'Cost Savings' },
        { metric: '99.99%', label: 'Availability' }
      ]
    }
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
        className="max-w-[1400px] mx-auto px-8 lg:px-16 py-20"
      >
        <h1 className="text-5xl lg:text-6xl font-bold text-[#1a1a2e] mb-6">
          Case{' '}
          <span className="bg-gradient-to-r from-[#004aad] to-[#0066cc] bg-clip-text text-transparent">
            Studies
          </span>
        </h1>
        <p className="text-xl text-[#4a5568] max-w-3xl">
          Real-world success stories showcasing how we've helped enterprises transform their 
          security and infrastructure.
        </p>
      </motion.div>

      {/* Case Studies */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 pb-20 space-y-16">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-[#bed3ff]/30"
          >
            <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image */}
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span 
                    className="px-4 py-2 rounded-full text-white text-sm font-bold"
                    style={{ backgroundColor: study.color }}
                  >
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <study.icon className="w-8 h-8" style={{ color: study.color }} />
                  <span className="text-[#4a5568] font-medium">{study.client}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#1a1a2e] mb-6">{study.title}</h2>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-bold text-[#1a1a2e] mb-1">Challenge</h4>
                    <p className="text-[#4a5568]">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1a2e] mb-1">Solution</h4>
                    <p className="text-[#4a5568]">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center p-4 bg-[#f8faff] rounded-xl">
                      <div className="text-2xl font-bold" style={{ color: study.color }}>
                        {result.metric}
                      </div>
                      <div className="text-xs text-[#4a5568] mt-1">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-[#004aad] to-[#0066cc] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can transform your infrastructure and security.
          </p>
          <Link to="/#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-[#004aad] font-bold rounded-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudies;
