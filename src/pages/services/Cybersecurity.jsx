import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, AlertTriangle, CheckCircle, Server } from 'lucide-react';

const Cybersecurity = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Threat Intelligence',
      description: 'Real-time monitoring and analysis of emerging cyber threats to protect your infrastructure.'
    },
    {
      icon: Lock,
      title: 'Penetration Testing',
      description: 'Comprehensive security assessments to identify vulnerabilities before attackers do.'
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: '24/7 SOC services with advanced SIEM solutions for continuous threat detection.'
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: 'Rapid response team ready to contain and remediate security breaches.'
    },
    {
      icon: CheckCircle,
      title: 'Compliance Management',
      description: 'Ensure adherence to GDPR, HIPAA, PCI-DSS, and other regulatory standards.'
    },
    {
      icon: Server,
      title: 'Zero Trust Architecture',
      description: 'Implement modern security frameworks that verify every access request.'
    }
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
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-4 bg-gradient-to-br from-[#0066cc] to-[#004aad] rounded-2xl shadow-lg"
          >
            <Shield className="w-10 h-10 text-white" />
          </motion.div>
          <span className="px-4 py-2 bg-[#0066cc]/10 text-[#0066cc] rounded-full text-sm font-bold uppercase tracking-wider">
            Security Solutions
          </span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-bold text-[#1a1a2e] mb-6">
          Cyber Security{' '}
          <span className="bg-gradient-to-r from-[#0066cc] to-[#004aad] bg-clip-text text-transparent">
            Solutions
          </span>
        </h1>
        <p className="text-xl text-[#4a5568] max-w-3xl">
          Multi-layered defense systems protecting your critical infrastructure. Real-time threat detection, 
          vulnerability assessment, and compliance management for enterprise-grade security.
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
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#bed3ff]/30 hover:border-[#0066cc]/50 transition-all"
            >
              <feature.icon className="w-12 h-12 text-[#0066cc] mb-4" />
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">{feature.title}</h3>
              <p className="text-[#4a5568] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-[#004aad] to-[#0066cc] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Infrastructure?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let our security experts assess your current posture and build a comprehensive defense strategy.
          </p>
          <Link to="/#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-[#004aad] font-bold rounded-xl hover:shadow-2xl transition-all"
            >
              Get Security Assessment
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Cybersecurity;
