import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, Sparkles } from 'lucide-react';

const chooseUsPoints = [
  'One-stop Enterprise Technology Solutions Provider',
  'Deep expertise across IT, networking, cloud, security, automation & identification technologies',
  'Scalable architectures for growing enterprises',
  'Proven project delivery frameworks',
  'Long-term support and managed services'
];

const approachSteps = [
  {
    title: 'Assess & Design',
    description: 'We analyze business requirements and design the optimal technology architecture.'
  },
  {
    title: 'Deploy & Integrate',
    description: 'We implement and integrate solutions with minimal disruption.'
  },
  {
    title: 'Secure & Optimize',
    description: 'We apply cybersecurity best practices and performance optimization.'
  },
  {
    title: 'Manage & Support',
    description: 'We provide continuous monitoring, proactive maintenance, and support.'
  }
];

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="why-choose-us" className="relative py-12 sm:py-14 bg-gradient-to-b from-[#bed3ff]/25 to-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#004aad]" />
            <span className="text-xs sm:text-sm text-[#718096] uppercase tracking-widest">Why Choose Us</span>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[#004aad]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4">
            One-Stop Enterprise Technology Solutions
          </h2>
          <p className="text-base sm:text-lg text-[#4a5568] max-w-3xl mx-auto">
            End-to-end capabilities that align technology strategy with operational growth and resilience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 bg-white rounded-2xl shadow-lg border border-[#004aad]/10 p-6 sm:p-8"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1a1a2e] mb-5">
              Built for Performance at Enterprise Scale
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {chooseUsPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className={`flex items-start gap-3 bg-[#f8faff] border border-[#004aad]/10 rounded-xl p-3.5 sm:p-4 ${
                    chooseUsPoints.length % 2 !== 0 && index === chooseUsPoints.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5 text-[#004aad] mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                  <p className="text-sm sm:text-[1.03rem] text-[#1a1a2e] font-medium leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="h-full rounded-2xl border border-[#004aad]/10 bg-gradient-to-br from-[#004aad] to-[#0a4fb6] p-6 sm:p-8 text-white relative overflow-hidden">
              <div className="absolute -top-14 -right-10 w-44 h-44 rounded-full bg-white/15 blur-2xl" />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" strokeWidth={1.8} />
                </div>

                <h3 className="text-2xl font-bold mb-4">Solution-Led Approach</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  {approachSteps.map((step, index) => (
                    <div key={step.title} className="bg-white/10 border border-white/20 rounded-xl p-3.5 sm:p-4">
                      <div className="flex items-start gap-3">
                        <span className="w-7 h-7 flex-shrink-0 rounded-full bg-white text-[#004aad] text-sm font-bold flex items-center justify-center">
                          {index + 1}
                        </span>
                        <div>
                          <h4 className="text-base sm:text-[1.15rem] font-semibold text-white leading-tight mb-1">
                            {step.title}
                          </h4>
                          <p className="text-sm text-white/90 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
