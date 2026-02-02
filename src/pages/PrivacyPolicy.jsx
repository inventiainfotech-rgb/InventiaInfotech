import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Key, FileCheck } from 'lucide-react';

const PrivacyPolicy = () => {
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
          <Shield className="w-12 h-12 text-[#004aad]" />
          <h1 className="text-5xl font-bold text-[#1a1a2e]">Privacy Policy</h1>
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
          
          {/* Introduction */}
          <div>
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Introduction</h2>
            <p className="text-[#4a5568] leading-relaxed">
              At Inventia, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FileCheck className="w-6 h-6 text-[#004aad]" />
              <h2 className="text-3xl font-bold text-[#1a1a2e]">Information We Collect</h2>
            </div>
            <div className="space-y-4 ml-9">
              <div>
                <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">Personal Information</h3>
                <p className="text-[#4a5568]">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-[#4a5568] mt-2 space-y-1 ml-4">
                  <li>Contact us through our website</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Request our services</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">Automatically Collected Information</h3>
                <p className="text-[#4a5568]">
                  When you visit our website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device.
                </p>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Key className="w-6 h-6 text-[#004aad]" />
              <h2 className="text-3xl font-bold text-[#1a1a2e]">How We Use Your Information</h2>
            </div>
            <div className="ml-9">
              <p className="text-[#4a5568] mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-[#4a5568] space-y-2 ml-4">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Understand and analyze how you use our services</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you for customer service and support</li>
                <li>Send you marketing and promotional communications</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
            </div>
          </div>

          {/* Data Security */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-[#004aad]" />
              <h2 className="text-3xl font-bold text-[#1a1a2e]">Data Security</h2>
            </div>
            <div className="ml-9">
              <p className="text-[#4a5568] leading-relaxed">
                We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please note that no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Your Privacy Rights</h2>
            <div className="ml-9">
              <p className="text-[#4a5568] mb-3">You have the right to:</p>
              <ul className="list-disc list-inside text-[#4a5568] space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Cookies and Tracking</h2>
            <p className="text-[#4a5568] leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our service and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-[#004aad]/10 to-[#bed3ff]/10 rounded-xl p-8 mt-8">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Questions About Privacy?</h2>
            <p className="text-[#4a5568] mb-4">
              If you have questions or concerns about our privacy practices, please contact us at:
            </p>
            <p className="text-[#004aad] font-semibold">privacy@inventia.tech</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;