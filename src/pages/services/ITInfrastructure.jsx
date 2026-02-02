import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Server, Cloud, Database, GitBranch, Monitor, Cpu } from 'lucide-react';

const ITInfrastructure = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const features = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Move workloads to secure cloud infrastructure with a migration strategy built for reliability, cost control, and business continuity.'
    },
    {
      icon: Server,
      title: 'Server Architecture',
      description: 'Design and deploy high-availability server environments that support critical applications, virtualization, and enterprise performance requirements.'
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Build resilient databases designed for uptime, speed, and data protection—backed by automated backups and recovery planning.'
    },
    {
      icon: GitBranch,
      title: 'DevOps Automation',
      description: 'Accelerate delivery with CI/CD pipelines, infrastructure as code, and standardized deployment workflows across environments.'
    },
    {
      icon: Monitor,
      title: 'Infrastructure Monitoring',
      description: 'Improve stability with comprehensive monitoring across systems, applications, and cloud environments using metrics, logs, and tracing.'
    },
    {
      icon: Cpu,
      title: 'System Integration',
      description: 'Connect legacy systems with modern applications to enable automation, data flow, and seamless enterprise operations.'
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
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-4 bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] rounded-2xl shadow-lg"
          >
            <Server className="w-10 h-10 text-white" />
          </motion.div>
          <span className="px-4 py-2 bg-[#8b5cf6]/10 text-[#8b5cf6] rounded-full text-sm font-bold uppercase tracking-wider">
            Infrastructure Solutions
          </span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-bold text-[#1a1a2e] mb-6">
          IT Infrastructure{' '}
          <span className="bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] bg-clip-text text-transparent">
            Solutions
          </span>
        </h1>
        <p className="text-xl text-[#4a5568] max-w-3xl">
          End-to-end IT infrastructure solutions built for performance, security, and scale.
        </p>
        <p className="text-xl text-[#4a5568] max-w-3xl">Inventia delivers enterprise-grade IT infrastructure solutions that modernize your technology ecosystem—from server architecture and cloud infrastructure to DevOps automation and full observability. We help organizations reduce downtime, cut operational costs, and accelerate deployment speed with resilient, future-ready platforms.</p>
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
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#bed3ff]/30 hover:border-[#8b5cf6]/50 transition-all"
            >
              <feature.icon className="w-12 h-12 text-[#8b5cf6] mb-4" />
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">{feature.title}</h3>
              <p className="text-[#4a5568] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '5x', label: 'Deployment Speed' },
            { value: '60%', label: 'Cost Savings' },
            { value: '99.9%', label: 'Uptime' },
            { value: '500+', label: 'Migrations' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-white/60 rounded-2xl shadow-lg"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] bg-clip-text text-transparent mb-2">
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
          className="mt-20 bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Modernize Your Infrastructure</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Transform your IT landscape with cloud-native solutions and automated workflows.
          </p>
          <Link to="/#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-[#8b5cf6] font-bold rounded-xl hover:shadow-2xl transition-all"
            >
              Start Transformation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ITInfrastructure;
