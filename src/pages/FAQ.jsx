import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What services does Inventia provide?',
          a: 'We provide comprehensive IT infrastructure and security solutions including Barcode/RFID systems, Automation, Cyber Security Solutions, Networking Solutions, and Full Stack IT Infrastructure management.'
        },
        {
          q: 'Do you work with small businesses or only enterprises?',
          a: 'While we specialize in enterprise solutions, we work with organizations of all sizes. Our scalable approach ensures that whether you\'re a growing startup or a Fortune 500 company, we can tailor our services to your needs.'
        },
        {
          q: 'What industries do you serve?',
          a: 'We serve a wide range of industries including finance, healthcare, retail, manufacturing, logistics, and technology. Our solutions are adaptable to any sector requiring robust IT infrastructure and security.'
        }
      ]
    },
    {
      category: 'Services & Solutions',
      questions: [
        {
          q: 'What is included in your Cyber Security Solution?',
          a: 'Our cybersecurity services include threat assessment, vulnerability scanning, penetration testing, security audits, incident response, compliance management, and 24/7 security monitoring.'
        },
        {
          q: 'How do RFID and Barcode solutions improve business operations?',
          a: 'RFID and Barcode solutions automate inventory tracking, reduce manual errors, improve supply chain visibility, enable real-time asset management, and significantly increase operational efficiency.'
        },
        {
          q: 'Can you integrate with our existing systems?',
          a: 'Yes, we specialize in seamless integration with existing systems. Our team conducts thorough assessments and develops custom integration strategies to ensure minimal disruption to your operations.'
        }
      ]
    },
    {
      category: 'Pricing & Contracts',
      questions: [
        {
          q: 'How is pricing structured?',
          a: 'Our pricing is customized based on your specific requirements, scope of work, and scale of deployment. We offer flexible pricing models including project-based, subscription, and managed services arrangements.'
        },
        {
          q: 'Do you offer long-term support contracts?',
          a: 'Yes, we provide comprehensive support contracts with 24/7 monitoring, regular maintenance, updates, and dedicated account management. Our SLA guarantees 99.9% uptime for critical services.'
        },
        {
          q: 'Is there a minimum contract period?',
          a: 'Contract periods vary by service type. While some projects are one-time implementations, managed services typically have 12-month minimum terms with flexible renewal options.'
        }
      ]
    },
    {
      category: 'Implementation & Support',
      questions: [
        {
          q: 'How long does implementation take?',
          a: 'Implementation timelines vary based on project scope. Simple solutions can be deployed in 2-4 weeks, while complex enterprise infrastructure projects may take 3-6 months. We provide detailed timelines during planning.'
        },
        {
          q: 'What kind of support do you provide post-implementation?',
          a: 'We offer 24/7 technical support, regular system monitoring, proactive maintenance, security updates, performance optimization, and dedicated account managers for all enterprise clients.'
        },
        {
          q: 'Do you provide training for our team?',
          a: 'Yes, comprehensive training is included in all implementations. We offer onsite training, online workshops, documentation, and ongoing education programs to ensure your team can effectively use our solutions.'
        }
      ]
    },
    {
      category: 'Security & Compliance',
      questions: [
        {
          q: 'What security certifications do you hold?',
          a: 'Our team holds industry-leading certifications including CISSP, CEH, CISM, CompTIA Security+, and we maintain ISO 27001 compliance for information security management.'
        },
        {
          q: 'How do you ensure data privacy?',
          a: 'We follow strict data privacy protocols compliant with GDPR, CCPA, and industry-specific regulations. All data is encrypted in transit and at rest, with access controls and regular security audits.'
        },
        {
          q: 'Can you help with compliance requirements?',
          a: 'Yes, we assist with compliance for various standards including PCI DSS, HIPAA, SOC 2, and industry-specific regulations. Our team provides gap analysis, implementation, and ongoing compliance monitoring.'
        }
      ]
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8faff] via-[#bed3ff]/30 to-[#e8f0ff]">
      {/* Back Button and Logo */}
      <div className="max-w-[1200px] mx-auto px-8 lg:px-16 pt-12">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.button
              className="flex items-center gap-2 text-[#004aad] hover:text-[#0066cc] transition-colors font-semibold"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </motion.button>
          </Link>
          
          {/* Circular Logo */}
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

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[1200px] mx-auto px-8 lg:px-16 py-20"
      >
        <div className="flex items-center gap-4 mb-6">
          <HelpCircle className="w-12 h-12 text-[#004aad]" />
          <h1 className="text-5xl font-bold text-[#1a1a2e]">Frequently Asked Questions</h1>
        </div>
        <p className="text-xl text-[#4a5568]">
          Find answers to common questions about our services, pricing, and support.
        </p>
      </motion.div>

      {/* FAQ Content */}
      <div className="max-w-[1200px] mx-auto px-8 lg:px-16 pb-20">
        {faqs.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + sectionIndex * 0.1 }}
            className="mb-12"
          >
            {/* Category Header */}
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-[#004aad] to-[#bed3ff] rounded-full" />
              {section.category}
            </h2>

            {/* Questions */}
            <div className="space-y-4">
              {section.questions.map((faq, faqIndex) => {
                const globalIndex = sectionIndex * 100 + faqIndex;
                const isOpen = openIndex === globalIndex;

                return (
                  <motion.div
                    key={faqIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + faqIndex * 0.05 }}
                    className="bg-white rounded-2xl shadow-lg border border-[#bed3ff]/30 overflow-hidden"
                  >
                    {/* Question */}
                    <button
                      onClick={() => toggleFAQ(globalIndex)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-[#f8faff] transition-colors"
                    >
                      <span className="text-lg font-semibold text-[#1a1a2e] pr-4">
                        {faq.q}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        {isOpen ? (
                          <Minus className="w-6 h-6 text-[#004aad]" />
                        ) : (
                          <Plus className="w-6 h-6 text-[#004aad]" />
                        )}
                      </motion.div>
                    </button>

                    {/* Answer */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-[#4a5568] leading-relaxed border-t border-[#bed3ff]/20 pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 bg-gradient-to-r from-[#004aad] to-[#0066cc] rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-xl mb-8 opacity-90">
            Our team is here to help. Get in touch with us for personalized assistance.
          </p>
          <Link to="/#contact">
            <button className="bg-white text-[#004aad] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;