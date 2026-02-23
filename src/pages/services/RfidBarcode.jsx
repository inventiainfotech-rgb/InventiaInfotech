import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scan, Package, Truck, BarChart, Radio, Boxes } from 'lucide-react';

const RfidBarcode = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const features = [
    {
      icon: Scan,
      title: 'Barcode Solutions',
      description: 'Implement a high-performance barcode system designed for real-world warehouse and retail environments. We configure scanners, workflows, and labeling standards for reliable, high-speed identification.'
    },
    {
      icon: Radio,
      title: 'RFID Technology',
      description: 'Modernize operations using RFID solutions built for real-time identification and automated movement tracking. Ideal for high-throughput environments where speed matters.'
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Achieve accurate stock levels with a smart warehouse tracking system powered by barcode and RFID data capture. Monitor stock movement, cycle counts, and replenishment automatically.'
    },
    {
      icon: Truck,
      title: 'Supply Chain Tracking',
      description: 'Track items across receiving, storage, dispatch, and delivery with reliable identification and traceability. Improve order accuracy and reduce delays using connected tracking workflows.'
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Turn tracking data into decision-making insights. Our dashboards show trends, exceptions, and performance metrics that improve forecasting and operational efficiency.'
    },
    {
      icon: Boxes,
      title: 'Asset Tracking',
      description: 'Protect tools, equipment, and critical assets using barcode or RFID tracking system deployments that maintain complete asset history and movement logs.'
    }
  ];

  const businessOfferings = [
    'End-to-End Barcode Rfid Solution',
    'Warehouse Management System',
    'Inventory Management and Tracking  Solutions',
    'Traceability solutions'
  ];

  const businessProblems = [
    'Inventory Inaccuracies',
    'Asset Misplacement',
    'Manual Warehouse Processes',
    'Poor Traceability and Compliance'
  ];

  const whyChooseUs = [
    'Certified engineers & solution architects',
    'Proven implementation methodologies',
    'Vendor-neutral consulting approach',
    'End-to-end design, deployment & Support',
    'Enterprise-grade technology solutions'
  ];

  const technologyComponents = [
    'Barcode/RFID Software Solutions',
    'Barcode Printer and Scanners',
    'RFID Printer and RFID Scanners',
    'Barcode Labels and Barcode Ribbons'
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
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-4 bg-gradient-to-br from-[#e91e63] to-[#c2185b] rounded-2xl shadow-lg"
          >
            <Scan className="w-10 h-10 text-white" />
          </motion.div>
          <span className="px-4 py-2 bg-[#e91e63]/10 text-[#e91e63] rounded-full text-sm font-bold uppercase tracking-wider">
            Tracking Solutions
          </span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-bold text-[#1a1a2e] mb-6">
          Barcode & RFID Solutions{' '}
          <span className="bg-gradient-to-r from-[#e91e63] to-[#c2185b] bg-clip-text text-transparent">
            for Enterprises
          </span>
        </h1>
        <p className="text-xl text-[#4a5568] max-w-3xl">
          We are a Full-Scale Barcode Solutions and RFID Solutions provider that delivers Tracking Systems for Inventory, Warehouse and Asset. It ensures Real Time  Visibility across Enterprises.
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
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#bed3ff]/30 hover:border-[#e91e63]/50 transition-all"
            >
              <feature.icon className="w-12 h-12 text-[#e91e63] mb-4" />
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">{feature.title}</h3>
              <p className="text-[#4a5568] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

          {/* Our Barcode & RFID Offerings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-[#bed3ff]/30"
        >
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8">Our Barcode & RFID Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {businessOfferings.map((problem, index) => (
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

        {/* Business Problems Solved */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-[#bed3ff]/30"
        >
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8">Business Problems Solved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {businessProblems.map((problem, index) => (
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

        {/* Technology Components */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-[#bed3ff]/30"
        >
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8">Technology Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {technologyComponents.map((problem, index) => (
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

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-12 rounded-3xl p-8 md:p-10 bg-gradient-to-r from-[#1a1a2e] to-[#2b2b48] text-white shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-8">Why Choose Our RFID &amp; Barcode Solutions</h2>
          <div className="space-y-4">
            {whyChooseUs.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 rounded-2xl bg-white/10 border border-white/15 px-5 py-4"
              >
                <span className="h-8 w-8 rounded-full bg-[#e91e63] text-white text-sm font-bold flex items-center justify-center shrink-0">
                  {index + 1}
                </span>
                <p className="text-white/90 font-medium">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '99.8%', label: 'Scan Accuracy' },
            { value: '70%', label: 'Time Saved' },
            { value: '50M+', label: 'Items Tracked' },
            { value: '24/7', label: 'Monitoring' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-white/60 rounded-2xl shadow-lg"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-[#e91e63] to-[#c2185b] bg-clip-text text-transparent mb-2">
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
          className="mt-20 bg-gradient-to-r from-[#e91e63] to-[#c2185b] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Transform Your Inventory Management</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Discover how our RFID solutions and barcode system deployments can streamline your operations, reduce costs, and deliver real-time visibility across your warehouse tracking system.
          </p>
          <Link to="/#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-[#e91e63] font-bold rounded-xl hover:shadow-2xl transition-all"
            >
              Request Demo
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default RfidBarcode;
