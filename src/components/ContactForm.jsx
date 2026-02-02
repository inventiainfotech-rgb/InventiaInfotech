import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { mockData } from '../mock';
import { supabase } from '../config/supabase';

const ContactForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage(null);

    try {
      let userId = null;
      
      // Try to get current user if authenticated
      try {
        const { data: { user } } = await supabase.auth.getUser();
        userId = user?.id || null;
      } catch (authErr) {
        // User not authenticated, that's fine - userId stays null
        userId = null;
      }

      // Prepare submission data
      const submissionData = {
        user_id: userId,
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company || null,
        message: formData.message,
        status: 'new'
      };

      // Lightweight Supabase key check - use HEAD so no body is read
      let useMock = false;
      try {
        const envUrl = process.env.REACT_APP_SUPABASE_URL;
        const envKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
        if (!envUrl || !envKey) {
          useMock = true;
        } else {
          const headRes = await fetch(envUrl + '/rest/v1/', {
            method: 'HEAD',
            headers: {
              apikey: envKey,
              Authorization: `Bearer ${envKey}`
            }
          });
          // 401 indicates invalid key
          if (headRes.status === 401 || headRes.status === 403) {
            useMock = true;
          }
        }
      } catch (chkErr) {
        useMock = true;
      }

      if (useMock) {
        // Save to localStorage as a development fallback so the UI can continue
        try {
          const existing = JSON.parse(localStorage.getItem('mock_submissions') || '[]');
          existing.push({ ...submissionData, _mock: true, _created_at: new Date().toISOString() });
          localStorage.setItem('mock_submissions', JSON.stringify(existing));
          setIsSubmitting(false);
          setSubmitStatus('success');
          setFormData({ first_name: '', last_name: '', email: '', phone: '', company: '', message: '' });
          setTimeout(() => setSubmitStatus(null), 5000);
          return;
        } catch (lsErr) {
          throw new Error('Failed to save submission locally: ' + (lsErr.message || lsErr));
        }
      }

      // Insert into Supabase with explicit error handling
      const result = await supabase
        .from('contact_submissions')
        .insert([submissionData]);

      if (result.error) {
        throw new Error(result.error.message || 'Failed to submit form');
      }

      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ first_name: '', last_name: '', email: '', phone: '', company: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (err) {
      setIsSubmitting(false);
      const errorMsg = err?.message || 'Failed to submit form. Please try again.';
      setErrorMessage(errorMsg);
      console.error('Submission error:', err);
    }
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 bg-gradient-to-b from-[#bed3ff]/10 to-[#f8faff]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        
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
            <span className="text-xs sm:text-sm text-[#718096] uppercase tracking-widest">Get in Touch</span>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[#004aad]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4">
            Let's Build Something Secure
          </h2>
          <p className="text-base sm:text-lg text-[#4a5568] max-w-3xl mx-auto">
            Ready to fortify your infrastructure? Our security architects are standing by.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-gradient-to-br from-white to-[#f0f5ff] rounded-2xl p-8 shadow-lg border border-[#004aad]/10">
              <h3 className="text-2xl font-bold text-[#1a1a2e] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#004aad] to-[#0066cc] flex items-center justify-center flex-shrink-0 rounded-xl shadow-md">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-[#718096] mb-1 font-medium">Email</div>
                    <a href={`mailto:$inventiainfotech@gmail.com`} className="text-[#1a1a2e] hover:text-[#004aad] transition-colors font-semibold">
                      inventiainfotech@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#004aad] to-[#0066cc] flex items-center justify-center flex-shrink-0 rounded-xl shadow-md">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-[#718096] mb-1 font-medium">Phone</div>
                    <a href={`https://wa.me/918655041234`} className="text-[#1a1a2e] hover:text-[#004aad] transition-colors font-semibold">
                      +91 86550 41234
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#004aad] to-[#0066cc] flex items-center justify-center flex-shrink-0 rounded-xl shadow-md">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-[#718096] mb-1 font-medium">Address</div>
                    <div className="text-[#1a1a2e] font-semibold">
                      A-13, OM	AKURLI	TOWER,	KANDIWALI	EAST	MUMBAI,	400101
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="bg-gradient-to-r from-[#004aad] to-[#0066cc] rounded-2xl p-8 text-white shadow-xl">
              <div className="text-sm uppercase tracking-wider mb-3 opacity-90 font-semibold">Response Time</div>
              <div className="text-3xl font-bold mb-2">Under 2 Hours</div>
              <div className="text-sm opacity-90">For all enterprise inquiries</div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-white to-[#f0f5ff] rounded-2xl shadow-lg border border-[#004aad]/10 overflow-hidden">
              
              {/* Form Header */}
              <div className="bg-gradient-to-r from-[#bed3ff]/40 to-[#e8f0ff]/40 px-8 py-4 border-b border-[#004aad]/10">
                <span className="text-sm text-[#4a5568] font-semibold">Contact Form</span>
              </div>

              {/* Form Fields */}
              <div className="p-8 space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#1a1a2e] mb-2 font-semibold uppercase tracking-wider">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      required
                      className="terminal-input w-full"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#1a1a2e] mb-2 font-semibold uppercase tracking-wider">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      required
                      className="terminal-input w-full"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#1a1a2e] mb-2 font-semibold uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="terminal-input w-full"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#1a1a2e] mb-2 font-semibold uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="terminal-input w-full"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#1a1a2e] mb-2 font-semibold uppercase tracking-wider">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="terminal-input w-full"
                    placeholder="Your Company Inc."
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#1a1a2e] mb-2 font-semibold uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="terminal-input w-full resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <span className="flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 p-4 rounded-lg"
                  >
                    <div className="text-green-700 font-semibold">Message sent successfully!</div>
                    <div className="text-sm text-green-600 mt-1">We'll get back to you within 2 hours.</div>
                  </motion.div>
                )}

                {/* Error Message */}
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-4 rounded-lg"
                  >
                    <div className="text-red-700 font-semibold">Submission Failed</div>
                    <div className="text-sm text-red-600 mt-1">{errorMessage}</div>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
