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

  const cyberchallenges = [
    'Data breaches and ransomware attacks',
    'Insecure endpoints and user devices',
    'Cloud security misconfigurations',
    'Compliance and audit failures',
    'Lack of real-time threat visibility'
  ];

  const cybersolutions = [
    'VAPT (Vulnerability Assessment & Penetration Testing)',
    'Network Security Solution',
    'SOC Services provider support',
    'Cloud security services',
    'IT Security Audit',
    'Regulatory Audit Readiness',
    'ISO Implementation & Certification Support',
    'DPDP & Data Privacy Services',
    'Incident Response & Cyber Resilience',
    'Security Awareness & Training',
    'Hardware & Software Licensing'
  ];

  const cybercapabilities = [
    'CData Breach Prevention strategies',
    'Enterprise cyber protection frameworks',
    'Continuous monitoring and threat detection',
    'Compliance security solutions'
  ];

  const cyberwhyChooseUs = [
    'Defense-in-depth security architecture',
    'Compliance-aligned security controls',
    'Enterprise SOC capabilities',
    'Proactive risk management'
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
          Enterprise Cyber{' '}
          <span className="bg-gradient-to-r from-[#0066cc] to-[#004aad] bg-clip-text text-transparent">
           security Services
          </span>
        </h1>
        <p className="text-xl text-[#4a5568] max-w-3xl">
          Our Enterprise Cybersecurity Services Protect organizations against evolving cyber threats across networks, endpoints, and cloud environments. We deliver comprehensive cybersecurity services designed for risk reduction, compliance, and business continuity.

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

        {/* Cybersecurity Challenges We Address */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-20 bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-[#bed3ff]/30"
                >
                  <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8">Cybersecurity Challenges We Address</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {cyberchallenges.map((problem, index) => (
                      <motion.div
                        key={problem}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45, delay: index * 0.08 }}
                        whileHover={{ y: -4 }}
                        className="flex items-start gap-3 p-5 rounded-2xl bg-gradient-to-r from-white to-[#e6f2ff] border border-[#e6f2ff]"
                      >
                        <span className="mt-0.5 h-3 w-3 rounded-full bg-[#004aad] shrink-0" />
                        <p className="text-[#2d3748] font-semibold">{problem}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
        
                {/* Our Cybersecurity Solutions */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-20 bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-[#004aad]/30"
                >
                  <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8">Our Cybersecurity Solutions</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {cybersolutions.map((problem, index) => (
                      <motion.div
                        key={problem}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45, delay: index * 0.08 }}
                        whileHover={{ y: -4 }}
                        className="flex items-start gap-3 p-5 rounded-2xl bg-gradient-to-r from-white to-[#e6f2ff] border border-[#e6f2ff]"
                      >
                        <span className="mt-0.5 h-3 w-3 rounded-full bg-[#004aad] shrink-0" />
                        <p className="text-[#2d3748] font-semibold">{problem}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
        
                {/* Security Capabilities */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-20 bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-[#bed3ff]/30"
                >
                  <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8">Security Capabilities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {cybercapabilities.map((problem, index) => (
                      <motion.div
                        key={problem}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45, delay: index * 0.08 }}
                        whileHover={{ y: -4 }}
                        className="flex items-start gap-3 p-5 rounded-2xl bg-gradient-to-r from-white to-[#e6f2ff] border border-[#e6f2ff]"
                      >
                        <span className="mt-0.5 h-3 w-3 rounded-full bg-[#004aad] shrink-0" />
                        <p className="text-[#2d3748] font-semibold">{problem}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
        
                {/* Why Choose Our Cybersecurity Services */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.55 }}
                  className="mt-12 rounded-3xl p-8 md:p-10 bg-gradient-to-r from-[#1a1a2e] to-[#2b2b48] text-white shadow-xl"
                >
                  <h2 className="text-3xl font-bold mb-8">Why Choose Our Cybersecurity &amp; Solutions</h2>
                  <div className="space-y-4">
                    {cyberwhyChooseUs.map((point, index) => (
                      <motion.div
                        key={point}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45, delay: index * 0.08 }}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-4 rounded-2xl bg-white/10 border border-white/15 px-5 py-4"
                      >
                        <span className="h-8 w-8 rounded-full bg-[#004aad] text-white text-sm font-bold flex items-center justify-center shrink-0">
                          {index + 1}
                        </span>
                        <p className="text-white/90 font-medium">{point}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

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
