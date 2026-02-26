import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Headphones, MessageCircle, Mail, Phone, Clock, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';
import { sendFormEmail } from '../../lib/emailApi';

const Support = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [ticketForm, setTicketForm] = useState({
    name: '',
    email: '',
    subject: '',
    priority: 'medium',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: '24/7 emergency hotline for critical issues',
      action: '+91 86550 41234',
      color: '#0066cc'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Response within 4 business hours',
      action: 'sales@inventiainfotech.com',
      color: '#00a86b'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Real-time assistance from our team',
      action: 'Start Chat',
      color: '#8b5cf6'
    }
  ];

  const statusItems = [
    { service: 'Security Operations Center', status: 'operational', uptime: '99.99%' },
    { service: 'Cloud Infrastructure', status: 'operational', uptime: '99.95%' },
    { service: 'API Services', status: 'operational', uptime: '99.98%' },
    { service: 'Customer Portal', status: 'operational', uptime: '99.97%' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage(null);

    try {
      await sendFormEmail({
        formType: 'support_ticket',
        ...ticketForm
      });

      setIsSubmitting(false);
      setSubmitStatus('success');
      setTicketForm({
        name: '',
        email: '',
        subject: '',
        priority: 'medium',
        description: ''
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (err) {
      setIsSubmitting(false);
      setErrorMessage(err?.message || 'Failed to submit support ticket.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8faff] via-[#bed3ff]/30 to-[#e8f0ff]">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 pt-15">
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
        className="max-w-[1400px] mx-auto px-8 lg:px-16 py-20 pt-10"
      >
        <div className="flex items-center gap-4 mb-6">
          <Headphones className="w-10 h-10 text-[#004aad]" />
          <span className="px-4 py-2 bg-[#004aad]/10 text-[#004aad] rounded-full text-sm font-bold uppercase tracking-wider">
            Help Center
          </span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-bold text-[#1a1a2e] mb-6">
          Support{' '}
          <span className="bg-gradient-to-r from-[#004aad] to-[#0066cc] bg-clip-text text-transparent">
            Center
          </span>
        </h1>
        <p className="text-xl text-[#4a5568] max-w-3xl">
          We&apos;re here to help. Get in touch with our expert support team or browse our knowledge base.
        </p>
      </motion.div>

      {/* Support Channels */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportChannels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#bed3ff]/30 hover:border-[#004aad]/50 transition-all text-center"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: `${channel.color}15` }}
              >
                <channel.icon className="w-8 h-8" style={{ color: channel.color }} />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{channel.title}</h3>
              <p className="text-[#4a5568] mb-6 text-sm">{channel.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="font-semibold"
                style={{ color: channel.color }}
              >
                {channel.action}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Submit Ticket Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#bed3ff]/30"
          >
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6 flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-[#004aad]" />
              Submit a Ticket
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={ticketForm.name}
                  onChange={(e) => setTicketForm({...ticketForm, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-[#bed3ff]/50 focus:border-[#004aad] outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={ticketForm.email}
                  onChange={(e) => setTicketForm({...ticketForm, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-[#bed3ff]/50 focus:border-[#004aad] outline-none"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={ticketForm.subject}
                onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-[#bed3ff]/50 focus:border-[#004aad] outline-none"
                required
              />
              <select
                value={ticketForm.priority}
                onChange={(e) => setTicketForm({...ticketForm, priority: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-[#bed3ff]/50 focus:border-[#004aad] outline-none bg-white"
              >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
                <option value="critical">Critical - System Down</option>
              </select>
              <textarea
                placeholder="Describe your issue..."
                rows={4}
                value={ticketForm.description}
                onChange={(e) => setTicketForm({...ticketForm, description: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-[#bed3ff]/50 focus:border-[#004aad] outline-none resize-none"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-[#004aad] to-[#0066cc] text-white font-bold rounded-xl hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Ticket'}
              </motion.button>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">
                  Support ticket submitted. Our team will contact you shortly.
                </div>
              )}

              {errorMessage && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                  {errorMessage}
                </div>
              )}
            </form>
          </motion.div>

          {/* System Status */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Status Panel */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#bed3ff]/30">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#1a1a2e] flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-[#00a86b]" />
                  System Status
                </h2>
                <span className="px-4 py-2 bg-[#00a86b]/10 text-[#00a86b] rounded-full text-sm font-bold">
                  All Systems Operational
                </span>
              </div>
              <div className="space-y-4">
                {statusItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-[#bed3ff]/30 last:border-0">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00a86b]" />
                      <span className="text-[#1a1a2e] font-medium">{item.service}</span>
                    </div>
                    <span className="text-sm text-[#4a5568]">{item.uptime} uptime</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Hours */}
            <div className="bg-gradient-to-br from-[#004aad] to-[#0066cc] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <Clock className="w-6 h-6" />
                Support Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/80">Technical Support</span>
                  <span className="font-semibold">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Sales Inquiries</span>
                  <span className="font-semibold">Mon-Fri, 9AM-6PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Emergency Response</span>
                  <span className="font-semibold">Under 15 minutes</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Support;
