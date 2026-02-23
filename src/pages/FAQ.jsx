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
      category: 'Managed IT Services – FAQ',
      questions: [
        {
          q: 'What are managed IT services for businesses?',
          a: ' Managed IT services involve proactive monitoring, maintenance, and support of business IT infrastructure under a structured service agreement to ensure uptime, security, and performance.'
        },
        {
          q: 'What is included in an IT AMC contract?',
          a: 'An IT AMC typically includes infrastructure maintenance, system monitoring, troubleshooting, helpdesk support, preventive maintenance, and SLA-based incident resolution.'
        },
        {
          q: 'Are managed IT services suitable for enterprises and multi-location businesses?',
          a: 'Yes. Managed IT services scale effectively for enterprises, branch offices, warehouses, and multi-location operations with centralized monitoring and governance.'
        },
        {
          q: 'How does proactive IT monitoring reduce downtime?',
          a: 'Proactive IT monitoring detects performance issues, hardware failures, and security threats before they impact business operations.'
        }
      ]
    },
    {
      category: 'Cybersecurity Services – FAQ',
      questions: [
        {
          q: 'What do enterprise cybersecurity services include?',
          a: 'Enterprise cybersecurity services include network security, endpoint protection, SOC monitoring, cloud security, compliance management, and threat response.'
        },
        {
          q: 'Do you provide SOC services for enterprises?',
          a: 'Yes. We provide SOC services including real-time threat monitoring, incident detection, and response aligned with enterprise security frameworks.'
        },
        {
          q: 'Can cybersecurity services help with regulatory compliance?',
          a: 'Yes. Our cybersecurity solutions support compliance requirements across data protection, industry regulations, and security audits.'
        },
        {
          q: 'How do you prevent data breaches?',
          a: 'We use layered security controls, continuous monitoring, endpoint protection, and network security solutions to reduce breach risks.'
        }
      ]
    },
    {
      category: 'Barcode & RFID Solutions – FAQ',
      questions: [
        {
          q: 'What industries benefit from barcode and RFID solutions?',
          a: ' Industries such as logistics, manufacturing, pharma, retail, and warehousing benefit significantly from barcode and RFID solutions.'
        },
        {
          q: 'What is the difference between barcode and RFID systems?',
          a: 'Barcode systems require line-of-sight scanning, while RFID enables automated, non-line-of-sight asset and inventory tracking.'
        },
        {
          q: 'Can RFID systems integrate with ERP or WMS platforms?',
          a: 'Yes. Our RFID solutions integrate seamlessly with ERP, WMS, and enterprise software platforms.'
        },
        {
          q: 'Do you provide RFID hardware and software together?',
          a: 'Yes. We deliver end-to-end RFID solutions including hardware, software, deployment, and support.'
        }
      ]
    },
    {
      category: 'Networking Infrastructure – FAQ',
      questions: [
        {
          q: 'What does enterprise networking infrastructure include?',
          a: 'Enterprise networking includes LAN, WAN, structured cabling, wireless networks, and data center connectivity.'
        },
        {
          q: 'Do you design scalable enterprise networks?',
          a: 'Yes. Our networking infrastructure solutions are designed for scalability, performance, and security.'
        },
        {
          q: 'Can you support multi-site network deployments?',
          a: 'Yes. We design and manage networks across corporate offices, factories, warehouses, and campuses.'
        }
      ]
    },
    {
      category: 'IT Infrastructure & Cloud – FAQ',
      questions: [
        {
          q: 'What are IT infrastructure services?',
          a: ' IT infrastructure services include servers, storage, virtualization, cloud platforms, and IT modernization.'
        },
        {
          q: 'Do you support hybrid cloud environments?',
          a: 'Yes. We design and manage hybrid cloud solutions aligned with enterprise requirements.'
        },
        {
          q: 'Can you help migrate legacy systems to the cloud?',
          a: 'Yes. Our cloud migration services ensure secure and minimal-downtime transitions.'
        }
      ]
    },
    {

      category: 'Automation & IoT – FAQ',
      questions: [
        {
          q: 'What are industrial automation solutions?',
          a: '  Industrial automation solutions use connected systems, sensors, and control platforms to optimize operations.'
        },
        {
          q: 'What is an IoT system integrator?',
          a: ' An IoT system integrator designs, deploys, and manages connected device ecosystems and data platforms.'
        },
        {
          q: 'Can automation improve operational efficiency?',
          a: 'Yes. Automation reduces manual effort, improves accuracy, and enables real-time decision-making.'
        }
      ]
    },
    {
      category: 'Surveillance & Access Control – FAQ',
      questions: [
        {
          q: 'What does an enterprise surveillance system include?',
          a: 'Enterprise surveillance includes CCTV cameras, access control systems, centralized monitoring, and analytics.'
        },
        {
          q: 'Can access control systems integrate with surveillance?',
          a: ' Yes. Integrated security solutions improve monitoring, access management, and incident response.'
        }
      ]
    },
    {
      category: 'Industry-Specific Solutions – FAQ',
      questions: [
        {
          q: 'Do you customize solutions for different industries?',
          a: 'Yes. We design industry-specific technology solutions based on operational, compliance, and scalability needs.'
        },
        {
          q: 'Which industries do you serve?',
          a: 'We serve logistics, manufacturing, pharma, healthcare, retail, and warehouse-driven industries.'
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