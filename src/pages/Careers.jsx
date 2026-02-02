import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';

const Careers = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const jobs = [
    {
      title: 'Senior Security Engineer',
      department: 'Cybersecurity',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      salary: '$150k - $200k'
    },
    {
      title: 'Network Architect',
      department: 'Infrastructure',
      location: 'New York',
      type: 'Full-time',
      salary: '$140k - $180k'
    },
    {
      title: 'RFID Solutions Specialist',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      salary: '$120k - $160k'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Austin',
      type: 'Full-time',
      salary: '$130k - $170k'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8faff] via-[#bed3ff]/30 to-[#e8f0ff]">
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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[1200px] mx-auto px-8 lg:px-16 py-20"
      >
        <div className="flex items-center gap-4 mb-6">
          <Briefcase className="w-12 h-12 text-[#004aad]" />
          <h1 className="text-5xl font-bold text-[#1a1a2e]">Careers at Inventia</h1>
        </div>
        <p className="text-2xl text-[#4a5568] mb-12">
          Join our team of security experts and innovators building the future of digital infrastructure.
        </p>

        {/* Open Positions */}
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white to-[#f8faff] rounded-2xl p-8 shadow-lg border border-[#004aad]/10 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#1a1a2e] mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-[#4a5568]">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                </div>
                <button className="btn-primary whitespace-nowrap">
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Careers;