import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, ShieldCheck } from 'lucide-react';

const trustPoints = [
  'Certified engineers & solution architects',
  'Proven implementation methodologies',
  'Vendor-neutral consulting approach',
  'End-to-end design, deployment & support'
];

const Trust = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-[#bed3ff]/20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#004aad]" />
            <span className="text-xs sm:text-sm text-[#718096] uppercase tracking-widest">Trust & Credibility</span>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[#004aad]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4">
            Enterprise-Grade Technology Solutions
          </h2>
          <p className="text-base sm:text-lg text-[#4a5568] max-w-3xl mx-auto">
            Built on certified expertise, rigorous delivery standards, and a commitment to long-term outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 bg-white rounded-2xl shadow-lg border border-[#004aad]/10 p-8 sm:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#004aad] to-[#0066cc] flex items-center justify-center shadow-md">
                <ShieldCheck className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-[#718096]">Core Assurance</div>
                <h3 className="text-2xl font-bold text-[#1a1a2e]">Why Enterprises Trust Us</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3 bg-[#f8faff] border border-[#004aad]/10 rounded-xl p-4"
                >
                  <CheckCircle className="w-5 h-5 text-[#004aad] mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                  <span className="text-sm sm:text-base text-[#1a1a2e] font-medium">{point}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 bg-gradient-to-r from-[#004aad]/10 to-[#bed3ff]/20 border border-[#004aad]/20 rounded-xl p-5">
              <p className="text-sm sm:text-base text-[#1a1a2e] font-semibold">
                We are Partner with Leading Technology OEM to Deliver Reliable, Scalable, and Future-Ready Solutions to Our Esteemed Clients.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="h-full relative overflow-hidden rounded-2xl border border-[#004aad]/10 bg-gradient-to-br from-[#004aad] via-[#0a4fb6] to-[#002e6b] p-8 sm:p-10 text-white">
              <div className="absolute -top-20 -right-16 w-56 h-56 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-16 -left-10 w-48 h-48 rounded-full bg-white/10 blur-2xl" />

              <div className="relative">
                <div className="text-xs uppercase tracking-widest text-white/70 mb-3">
                  Trust Signal
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Enterprise-Grade Delivery Promise
                </h3>
                <p className="text-white/85 leading-relaxed">
                  Our teams combine certified expertise with disciplined project governance to deliver secure,
                  compliant, and scalable outcomes across the full technology lifecycle.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/10 border border-white/20 rounded-xl p-4">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-xs uppercase tracking-widest text-white/70">Delivery Focus</div>
                  </div>
                  <div className="bg-white/10 border border-white/20 rounded-xl p-4">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-xs uppercase tracking-widest text-white/70">Support Coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
