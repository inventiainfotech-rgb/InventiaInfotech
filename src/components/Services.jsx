import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, ScanBarcode, Network, Server } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  shield: Shield,
  scan: ScanBarcode,
  network: Network,
  server: Server
};

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="relative py-16 sm:py-20 bg-gradient-to-b from-[#f8faff] to-[#bed3ff]/30">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#004aad]" />
            <span className="text-xs sm:text-sm text-[#718096] uppercase tracking-widest">OUR TECHNOLOGY SERVICE SOLUTIONS</span>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[#004aad]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4">
            Complete Infrastructure Solutions for Modern Enterprises
          </h2>
          <p className="text-base sm:text-lg text-[#4a5568] max-w-3xl mx-auto">
            Four pillars of technology excellence designed to secure, track, connect, and scale enterprise operations.
          </p>
        </motion.div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockData.services.map((service, index) => {
            const Icon = iconMap[service.icon];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flip-card"
              >
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front">
                    {/* Icon with Gradient Background */}
                    <div className="mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#004aad] to-[#0066cc] flex items-center justify-center rounded-xl shadow-lg">
                        <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#4a5568] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Hover Hint */}
                    <div className="absolute bottom-6 right-6 text-[#004aad] text-sm font-medium flex items-center gap-2">
                      <span>Hover to explore</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back">
                    <div className="flex items-center justify-center mb-6">
                      
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">
                      Key Features
                    </h3>

                    <div className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-[#bed3ff] rounded-full flex-shrink-0" />
                          <span className="text-white font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <button className="mt-8 w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-3 px-6 rounded-lg transition-all border border-white/30">
                      Learn More →
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-[#bed3ff]/30 to-[#004aad]/10 backdrop-blur-sm border border-[#004aad]/20 px-8 py-4 rounded-full">
            <span className="text-sm text-[#1a1a2e] uppercase tracking-widest font-semibold">
              Powered by Enterprise-Grade Technology
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
