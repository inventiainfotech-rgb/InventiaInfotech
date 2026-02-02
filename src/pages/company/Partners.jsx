import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Handshake, Globe, Award, Users } from 'lucide-react';

const Partners = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const partners = [
    {
      name: 'Microsoft',
      type: 'Gold Partner',
      description: 'Azure cloud solutions and enterprise software deployment.',
      logo: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=200&h=100&fit=crop&q=80'
    },
    {
      name: 'AWS',
      type: 'Advanced Partner',
      description: 'Cloud infrastructure and managed services.',
      logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&h=100&fit=crop&q=80'
    },
    {
      name: 'Cisco',
      type: 'Premier Partner',
      description: 'Networking hardware and security solutions.',
      logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&h=100&fit=crop&q=80'
    },
    {
      name: 'Palo Alto Networks',
      type: 'Platinum Partner',
      description: 'Next-generation firewall and security platform.',
      logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=200&h=100&fit=crop&q=80'
    },
    {
      name: 'Zebra Technologies',
      type: 'Premier Partner',
      description: 'RFID and barcode scanning solutions.',
      logo: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&h=100&fit=crop&q=80'
    },
    {
      name: 'VMware',
      type: 'Enterprise Partner',
      description: 'Virtualization and cloud infrastructure.',
      logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=100&fit=crop&q=80'
    }
  ];

  const benefits = [
    { icon: Globe, title: 'Global Reach', description: 'Access to worldwide partner network and resources' },
    { icon: Award, title: 'Certified Expertise', description: 'Industry-recognized certifications and training' },
    { icon: Users, title: 'Joint Solutions', description: 'Co-developed solutions for complex challenges' },
    { icon: Handshake, title: 'Priority Support', description: 'Direct access to partner technical teams' }
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
          <Handshake className="w-10 h-10 text-[#004aad]" />
          <span className="px-4 py-2 bg-[#004aad]/10 text-[#004aad] rounded-full text-sm font-bold uppercase tracking-wider">
            Strategic Alliances
          </span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-bold text-[#1a1a2e] mb-6">
          Our{' '}
          <span className="bg-gradient-to-r from-[#004aad] to-[#0066cc] bg-clip-text text-transparent">
            Partners
          </span>
        </h1>
        <p className="text-xl text-[#4a5568] max-w-3xl">
          We collaborate with industry leaders to deliver best-in-class solutions. 
          Our strategic partnerships ensure you get the latest technology and expert support.
        </p>
      </motion.div>

      {/* Partners Grid */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#bed3ff]/30 hover:border-[#004aad]/50 transition-all"
            >
              <div className="h-20 mb-6 flex items-center justify-center">
                <img src={partner.logo} alt={partner.name} className="max-h-full object-contain filter grayscale hover:grayscale-0 transition-all" />
              </div>
              <span className="px-3 py-1 bg-[#004aad]/10 text-[#004aad] rounded-full text-xs font-bold uppercase">
                {partner.type}
              </span>
              <h3 className="text-xl font-bold text-[#1a1a2e] mt-4 mb-2">{partner.name}</h3>
              <p className="text-[#4a5568]">{partner.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-white/90 to-[#f0f5ff]/90 rounded-3xl p-12 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-[#1a1a2e] text-center mb-12">Partnership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <benefit.icon className="w-12 h-12 text-[#004aad] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">{benefit.title}</h3>
                <p className="text-[#4a5568] text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Become a Partner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-[#004aad] to-[#0066cc] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join our ecosystem and grow your business with Inventia's partnership program.
          </p>
          <Link to="/#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-[#004aad] font-bold rounded-xl hover:shadow-2xl transition-all"
            >
              Apply Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;
