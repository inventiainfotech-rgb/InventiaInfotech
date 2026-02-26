import React from 'react';
import { motion } from 'framer-motion';
import { mockData } from '../mock';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Services - 6 points, all in blue theme
  const servicesWithColors = [
    { name: 'Barcode Solution', color: '#004aad' },
    { name: 'Rfid Solution', color: '#004aad' },
    { name: 'Wireless Solutions', color: '#004aad' },
    { name: 'IT Infrastructure', color: '#004aad' },
    { name: 'Networking', color: '#004aad' },
    { name: 'Cyber Security', color: '#004aad' }
  ];

  const services = servicesWithColors.map(s => s.name);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8faff] via-[#bed3ff]/40 to-[#e8f0ff] pt-5 pb-24">


      
      {/* Animated Background Orbs - Blue theme */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0,74,173,0.15) 0%, transparent 60%)',
          filter: 'blur(60px)'
        }}
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0,102,204,0.1) 0%, transparent 60%)',
          filter: 'blur(50px)'
        }}
      />
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left: EPIC Circular Animation - NOW FIRST */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex items-center justify-center h-[300px] sm:h-[400px] lg:h-[550px] order-1 lg:order-1"
          >
            {/* Outer Glow Rings - Responsive sizes */}
            {[0, 1, 2].map((ring) => (
              <motion.div
                key={ring}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: ring * 0.5,
                  ease: "easeInOut"
                }}
                className="absolute rounded-full hidden sm:block"
                style={{
                  width: `${280 + ring * 50}px`,
                  height: `${280 + ring * 50}px`,
                  border: `2px solid rgba(0,74,173,${0.3 - ring * 0.08})`,
                  boxShadow: `0 0 ${30 + ring * 15}px rgba(0,74,173,${0.2 - ring * 0.05})`
                }}
              />
            ))}

            {/* Rotating Circle with Blue Text */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] lg:w-[420px] lg:h-[420px]"
            >
              <svg className="w-full h-full" viewBox="0 0 500 500">
                <defs>
                  <path
                    id="textPath"
                    d="M 250, 250 m -190, 0 a 190,190 0 1,1 380,0 a 190,190 0 1,1 -380,0"
                  />
                  <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#004aad" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#0066cc" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#bed3ff" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                
                {/* Blue Gradient Circle */}
                <circle
                  cx="250"
                  cy="250"
                  r="190"
                  fill="none"
                  stroke="url(#circleGradient)"
                  strokeWidth="3"
                  strokeDasharray="10 10"
                  opacity="0.8"
                />
                
                {/* Blue Text on Path - exactly 3 words with equal spacing */}
                <text className="text-[28px] lg:text-[32px] fill-[#000000] font-bold uppercase" letterSpacing="6">
                  <textPath href="#textPath" startOffset="5.5%">
                    BARCODE/RFID
                  </textPath>
                </text>
                <text className="text-[28px] lg:text-[32px] fill-[#000000] font-bold uppercase" letterSpacing="6">
                  <textPath href="#textPath" startOffset="38%">
                    CYBER SECURITY
                  </textPath>
                </text>
                <text className="text-[28px] lg:text-[32px] fill-[#000000] font-bold uppercase" letterSpacing="6">
                  <textPath href="#textPath" startOffset="75%">
                    NETWORKING
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Center Logo - ENLARGED with NO White Background */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 150 }}
              className="relative z-10"
            >
              {/* Pulsing Glow Effect - Blue theme */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 40px rgba(0,74,173,0.3), 0 0 80px rgba(0,102,204,0.2)',
                    '0 0 60px rgba(0,74,173,0.5), 0 0 120px rgba(0,102,204,0.4)',
                    '0 0 40px rgba(0,74,173,0.3), 0 0 80px rgba(0,102,204,0.2)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="rounded-full overflow-hidden"
              >
                <img 
                  src="https://customer-assets.emergentagent.com/job_security-portfolio-4/artifacts/yeywo8ds_INVeNTi.png" 
                  alt="Inventia" 
                  className="h-32 w-32 sm:h-40 sm:w-40 lg:h-56 lg:w-56 object-cover rounded-full"
                />
              </motion.div>
            </motion.div>

            
            

            {/* Floating Sparkles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut"
                }}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  boxShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(0,74,173,0.5)'
                }}
              />
            ))}
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 lg:space-y-8 order-2 lg:order-2 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-block"
            >
              <span className="px-5 py-2 bg-gradient-to-r from-[#004aad]/10 to-[#bed3ff]/20 text-[#004aad] rounded-full text-sm font-bold uppercase tracking-wider border border-[#004aad]/20">
                Tech Infrastructure & Security
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-[#1a1a2e]"
            >
              RFID, Barcode & IT{' '}
              <span className="bg-gradient-to-r from-[#004aad] to-[#0066cc] bg-clip-text text-transparent">
              Security — Simplified
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#4a5568] leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Enterprise-grade cybersecurity solutions, barcode systems, RFID solutions, networking, and IT infrastructure.
            </motion.p>

            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4"
            >
              {servicesWithColors.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="flex items-center gap-2 sm:gap-3 bg-white/90 backdrop-blur-sm px-2 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-md border border-[#bed3ff]/30 cursor-pointer hover:border-[#004aad]/50 transition-all"
                >
                  <div 
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: service.color }}
                  />
                  <span className="text-xs sm:text-sm lg:text-base font-semibold text-[#1a1a2e]">{service.name}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={scrollToContact}
                className="btn-primary px-8 py-4 text-base font-semibold"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(0,74,173,0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  Request Consultation
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.button>

              <motion.button
                onClick={scrollToServices}
                className="btn-secondary px-8 py-4 text-base font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  Explore Our Solutions
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="flex justify-center lg:justify-start gap-8 lg:gap-10 pt-8 border-t border-[#004aad]/20"
            >
              {[
                { value: '500+', label: 'Projects' },
                { value: '99.9%', label: 'Uptime' },
                { value: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="cursor-pointer text-center"
                >
                  <div className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#004aad] to-[#0066cc] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs lg:text-sm text-[#718096] uppercase tracking-wide font-medium mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
