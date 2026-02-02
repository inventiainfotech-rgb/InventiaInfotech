import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Scale, AlertCircle } from 'lucide-react';

const TermsOfService = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8faff] via-[#bed3ff]/30 to-[#e8f0ff]">
      {/* Back Button */}
      <div className="max-w-[1200px] mx-auto px-8 lg:px-16 pt-12">
        <Link to="/">
          <motion.button
            className="flex items-center gap-2 text-[#004aad] hover:text-[#0066cc] transition-colors"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Home</span>
          </motion.button>
        </Link>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[1200px] mx-auto px-8 lg:px-16 py-20"
      >
        <div className="flex items-center gap-4 mb-6">
          <FileText className="w-12 h-12 text-[#004aad]" />
          <h1 className="text-5xl font-bold text-[#1a1a2e]">Terms of Service</h1>
        </div>
        <p className="text-xl text-[#4a5568]">
          Last Updated: January 15, 2026
        </p>
      </motion.div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-8 lg:px-16 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-white to-[#f8faff] rounded-2xl p-12 shadow-xl border border-[#004aad]/10 space-y-8"
        >
          
          {/* Acceptance */}
          <div>
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">1. Acceptance of Terms</h2>
            <p className="text-[#4a5568] leading-relaxed">
              By accessing and using Inventia's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
            </p>
          </div>

          {/* Services */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-[#004aad]" />
              <h2 className="text-3xl font-bold text-[#1a1a2e]">2. Services Description</h2>
            </div>
            <div className="ml-9 space-y-4">
              <p className="text-[#4a5568]">
                Inventia provides enterprise-grade cybersecurity, IT infrastructure, networking solutions, and RFID/barcode systems. Our services include but are not limited to:
              </p>
              <ul className="list-disc list-inside text-[#4a5568] space-y-2 ml-4">
                <li>Security assessments and implementations</li>
                <li>Network architecture and deployment</li>
                <li>Infrastructure consulting and management</li>
                <li>RFID and barcode solution integration</li>
                <li>24/7 monitoring and support services</li>
              </ul>
            </div>
          </div>

          {/* User Obligations */}
          <div>
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">3. User Obligations</h2>
            <div className="ml-9">
              <p className="text-[#4a5568] mb-3">You agree to:</p>
              <ul className="list-disc list-inside text-[#4a5568] space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use our services for any unlawful purpose</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
              </ul>
            </div>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">4. Intellectual Property</h2>
            <p className="text-[#4a5568] leading-relaxed">
              All content, features, and functionality of our services are owned by Inventia and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">5. Limitation of Liability</h2>
            <p className="text-[#4a5568] leading-relaxed">
              To the maximum extent permitted by law, Inventia shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
            </p>
          </div>

          {/* Service Level Agreement */}
          <div>
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">6. Service Level Agreement</h2>
            <div className="ml-9">
              <p className="text-[#4a5568] mb-3">We commit to:</p>
              <ul className="list-disc list-inside text-[#4a5568] space-y-2 ml-4">
                <li>99.9% uptime guarantee for critical services</li>
                <li>Response time under 2 hours for enterprise inquiries</li>
                <li>24/7 technical support availability</li>
                <li>Regular security updates and patches</li>
              </ul>
            </div>
          </div>

          {/* Termination */}
          <div>
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">7. Termination</h2>
            <p className="text-[#4a5568] leading-relaxed">
              We reserve the right to terminate or suspend your access to our services immediately, without prior notice, for any breach of these Terms of Service.
            </p>
          </div>

          {/* Changes to Terms */}
          <div>
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">8. Changes to Terms</h2>
            <p className="text-[#4a5568] leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website. Continued use of our services after such modifications constitutes acceptance of the updated terms.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">9. Governing Law</h2>
            <p className="text-[#4a5568] leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Inventia operates, without regard to its conflict of law provisions.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-[#004aad]/10 to-[#bed3ff]/10 rounded-xl p-8 mt-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-[#004aad]" />
              <h2 className="text-2xl font-bold text-[#1a1a2e]">Questions About Our Terms?</h2>
            </div>
            <p className="text-[#4a5568] mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <p className="text-[#004aad] font-semibold">legal@inventia.tech</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;