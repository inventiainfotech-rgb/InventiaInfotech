import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Network, Wifi, Globe, Router, Shield, Zap } from 'lucide-react';

const Networking = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const features = [
    {
      icon: Network,
      title: 'SD-WAN Solutions',
      description: 'Deploy intelligent SD-WAN services that optimize traffic routing, improve application performance, and reduce WAN costs across multi-site enterprises.'
    },
    {
      icon: Wifi,
      title: 'Wireless Infrastructure',
      description: 'Build reliable wireless networks for offices, warehouses, and high-device environments with secure Wi-Fi architecture and seamless roaming.'
    },
    {
      icon: Globe,
      title: 'Global Connectivity',
      description: 'Enable global operations with resilient connectivity across regions—designed for reliability, performance, and business continuity.'
    },
    {
      icon: Router,
      title: 'Network Architecture',
      description: 'Design and implement scalable topologies that support expansion, cloud integration, and high availability across enterprise infrastructure.'
    },
    {
      icon: Shield,
      title: 'Network Security',
      description: 'Strengthen your network security posture with integrated controls that reduce risk, protect data, and enforce secure access across users and devices.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Improve speed and reliability with proactive performance tuning, bandwidth optimization, and analytics-driven network operations.'
    }
  ];

  const networkchallenges = [
    'Poor network performance',
    'Unreliable connectivity',
    'Scalability limitations',
    'Security vulnerabilities'
  ];

  const networkservices = [
    'LAN WAN network solutions',
    'Structured cabling solutions',
    'Wireless networking solutions',
    'Data center networking'
  ];

  const networkCapabilities = [
    'Enterprise network design',
    'Network performance optimization',
    'Scalable business networks'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8faff] via-[#bed3ff]/30 to-[#e8f0ff]">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 pt-15">
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
        className="max-w-[1400px] mx-auto px-8 lg:px-16 py-20 pt-10"
      >
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="p-4 bg-gradient-to-br from-[#00a86b] to-[#008855] rounded-2xl shadow-lg"
          >
            <Network className="w-10 h-10 text-white" />
          </motion.div>
          <span className="px-4 py-2 bg-[#00a86b]/10 text-[#00a86b] rounded-full text-sm font-bold uppercase tracking-wider">
            Network Solutions
          </span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-bold text-[#1a1a2e] mb-6">
          Enterprise Networking{' '}
          <span className="bg-gradient-to-r from-[#00a86b] to-[#008855] bg-clip-text text-transparent">
            Infrastructure Solutions
          </span>
        </h1>
        <p className="text-xl text-[#4a5568] max-w-3xl">
          Our networking infrastructure solutions deliver secure, high-performance, and scalable connectivity for enterprises across offices, campuses, warehouses, and data centers.
        </p>
        
      </motion.div>

      {/* Features Grid */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#bed3ff]/30 hover:border-[#00a86b]/50 transition-all"
            >
              <feature.icon className="w-12 h-12 text-[#00a86b] mb-4" />
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">{feature.title}</h3>
              <p className="text-[#4a5568] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Networking Challenges We Solve */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-20 bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-[#bed3ff]/30"
                >
                  <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8">Networking Challenges We Solve</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {networkchallenges.map((problem, index) => (
                      <motion.div
                        key={problem}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45, delay: index * 0.08 }}
                        whileHover={{ y: -4 }}
                        className="flex items-start gap-3 p-5 rounded-2xl bg-gradient-to-r from-white to-[#ffe8f1] border border-[#f5bfd3]"
                      >
                        <span className="mt-0.5 h-3 w-3 rounded-full bg-[#e91e63] shrink-0" />
                        <p className="text-[#2d3748] font-semibold">{problem}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
        
                {/* Our Networking Services */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-20 bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-[#bed3ff]/30"
                >
                  <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8">Our Networking Services</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {networkservices.map((problem, index) => (
                      <motion.div
                        key={problem}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45, delay: index * 0.08 }}
                        whileHover={{ y: -4 }}
                        className="flex items-start gap-3 p-5 rounded-2xl bg-gradient-to-r from-white to-[#ffe8f1] border border-[#f5bfd3]"
                      >
                        <span className="mt-0.5 h-3 w-3 rounded-full bg-[#e91e63] shrink-0" />
                        <p className="text-[#2d3748] font-semibold">{problem}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
        
                {/* Network Capabilities */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-20 bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-[#bed3ff]/30"
                >
                  <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8">Network Capabilities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {networkCapabilities.map((problem, index) => (
                      <motion.div
                        key={problem}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45, delay: index * 0.08 }}
                        whileHover={{ y: -4 }}
                        className="flex items-start gap-3 p-5 rounded-2xl bg-gradient-to-r from-white to-[#ffe8f1] border border-[#f5bfd3]"
                      >
                        <span className="mt-0.5 h-3 w-3 rounded-full bg-[#e91e63] shrink-0" />
                        <p className="text-[#2d3748] font-semibold">{problem}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
        
               

        {/* Network Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '99.99%', label: 'Uptime SLA' },
            { value: '40%', label: 'Cost Reduction' },
            { value: '45+', label: 'Countries' },
            { value: '<10ms', label: 'Latency' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-white/60 rounded-2xl shadow-lg"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-[#00a86b] to-[#008855] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-[#4a5568] font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-[#00a86b] to-[#008855] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Build Your Global Network</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let our networking experts design a secure, scalable solution that connects your business to the world with enterprise-grade performance.
          </p>
          <Link to="/#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-[#00a86b] font-bold rounded-xl hover:shadow-2xl transition-all"
            >
              Get Network Assessment
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Networking;
