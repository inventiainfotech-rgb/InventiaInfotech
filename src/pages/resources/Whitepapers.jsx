import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Download, Shield, Network, Server, Scan } from 'lucide-react';

const Whitepapers = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whitepapers = [
    {
      id: 1,
      title: 'The Complete Guide to Zero Trust Security',
      description: 'A comprehensive framework for implementing zero trust architecture in enterprise environments.',
      category: 'Cybersecurity',
      icon: Shield,
      color: '#0066cc',
      pages: 45,
      downloadCount: '2,500+'
    },
    {
      id: 2,
      title: 'RFID Technology in Modern Supply Chain',
      description: 'How RFID is transforming inventory management and logistics operations.',
      category: 'RFID Solutions',
      icon: Scan,
      color: '#e91e63',
      pages: 32,
      downloadCount: '1,800+'
    },
    {
      id: 3,
      title: 'SD-WAN Implementation Best Practices',
      description: 'Strategic guide to deploying SD-WAN for global enterprise connectivity.',
      category: 'Networking',
      icon: Network,
      color: '#00a86b',
      pages: 38,
      downloadCount: '1,200+'
    },
    {
      id: 4,
      title: 'Cloud Migration Roadmap 2026',
      description: 'Step-by-step guide to migrating legacy systems to cloud-native architecture.',
      category: 'IT Infrastructure',
      icon: Server,
      color: '#8b5cf6',
      pages: 52,
      downloadCount: '3,100+'
    },
    {
      id: 5,
      title: 'Ransomware Defense Strategies',
      description: 'Proactive measures and response protocols for ransomware protection.',
      category: 'Cybersecurity',
      icon: Shield,
      color: '#0066cc',
      pages: 28,
      downloadCount: '2,200+'
    },
    {
      id: 6,
      title: 'DevOps Security Integration Guide',
      description: 'Integrating security practices into CI/CD pipelines for secure deployments.',
      category: 'IT Infrastructure',
      icon: Server,
      color: '#8b5cf6',
      pages: 35,
      downloadCount: '1,500+'
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
        <div className="flex items-center gap-4 mb-6">
          <FileText className="w-10 h-10 text-[#004aad]" />
          <span className="px-4 py-2 bg-[#004aad]/10 text-[#004aad] rounded-full text-sm font-bold uppercase tracking-wider">
            Knowledge Center
          </span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-bold text-[#1a1a2e] mb-6">
          White{' '}
          <span className="bg-gradient-to-r from-[#004aad] to-[#0066cc] bg-clip-text text-transparent">
            Papers
          </span>
        </h1>
        <p className="text-xl text-[#4a5568] max-w-3xl">
          In-depth research and guides on security, infrastructure, and emerging technologies. 
          Download our expert resources to stay ahead.
        </p>
      </motion.div>

      {/* Whitepapers Grid */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whitepapers.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#bed3ff]/30 hover:border-[#004aad]/50 transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <div 
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: `${paper.color}15` }}
                >
                  <paper.icon className="w-8 h-8" style={{ color: paper.color }} />
                </div>
                <span 
                  className="px-3 py-1 rounded-full text-xs font-bold"
                  style={{ backgroundColor: `${paper.color}15`, color: paper.color }}
                >
                  {paper.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">{paper.title}</h3>
              <p className="text-[#4a5568] mb-6 text-sm leading-relaxed">{paper.description}</p>
              
              <div className="flex items-center justify-between text-sm text-[#718096] mb-6">
                <span>{paper.pages} pages</span>
                <span>{paper.downloadCount} downloads</span>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-[#004aad] to-[#0066cc] text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-gradient-to-br from-white/90 to-[#f0f5ff]/90 rounded-3xl p-12 text-center shadow-xl"
        >
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Need Custom Research?</h2>
          <p className="text-[#4a5568] mb-8 max-w-2xl mx-auto">
            Our experts can provide tailored research and analysis for your specific industry challenges.
          </p>
          <Link to="/#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#004aad] to-[#0066cc] text-white font-bold rounded-xl hover:shadow-2xl transition-all"
            >
              Request Custom Report
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Whitepapers;
