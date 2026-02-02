import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { mockData } from '../mock';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-[#bed3ff]/20 overflow-hidden">
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
            <span className="text-xs sm:text-sm text-[#718096] uppercase tracking-widest">Client Feedback</span>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[#004aad]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4">
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        {/* Infinite Marquee */}
        <div className="marquee-container py-8">
          <motion.div
            className="marquee-content"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[...mockData.testimonials, ...mockData.testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[500px] mx-4 bg-gradient-to-br from-white to-[#f0f5ff] rounded-2xl p-8 shadow-lg border-2 border-[#bed3ff]/30 hover:border-[#004aad] hover:shadow-xl transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg className="w-10 h-10 text-[#004aad]/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Quote Text */}
                <p className="text-[#1a1a2e] leading-relaxed mb-6 font-medium">
                  {testimonial.quote}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t-2 border-[#bed3ff]/30">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#004aad] to-[#0066cc] flex items-center justify-center rounded-xl shadow-md">
                    <span className="text-white font-bold text-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-[#1a1a2e] font-bold">{testimonial.author}</div>
                    <div className="text-sm text-[#4a5568]">{testimonial.position}</div>
                    <div className="text-xs text-[#004aad] font-semibold mt-1">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '98%', label: 'Client Retention' },
            { value: '250+', label: 'Enterprise Clients' },
            { value: '15Y', label: 'Industry Experience' },
            { value: '24/7', label: 'Support Coverage' }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-gradient-to-br from-white to-[#f8faff] rounded-2xl p-6 shadow-md border border-[#004aad]/10">
              <div className="text-4xl font-bold text-[#004aad] mb-2">{stat.value}</div>
              <div className="text-sm text-[#718096] uppercase tracking-wider font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
