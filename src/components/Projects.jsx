import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { mockData } from '../mock';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#bed3ff]/20 to-white">
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
            <span className="text-xs sm:text-sm text-[#718096] uppercase tracking-widest">Featured Projects</span>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[#004aad]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4">
            Real-World Impact
          </h2>
          <p className="text-base sm:text-lg text-[#4a5568] max-w-3xl mx-auto">
            Measurable results across enterprise deployments. From security transformations to infrastructure modernization.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden bg-white rounded-2xl shadow-lg border border-[#004aad]/10 hover:border-[#004aad]/30 hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover project-image transition-all duration-500 group-hover:scale-110"
                />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 bg-gradient-to-r from-[#004aad] to-[#0066cc] px-4 py-2 z-10 rounded-lg shadow-md">
                  <span className="text-xs text-white uppercase tracking-wider font-semibold">
                    {project.category}
                  </span>
                </div>

                {/* Metrics Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#004aad]/95 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex gap-6">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-2xl font-bold text-white">{value}</div>
                        <div className="text-xs text-white/80 uppercase">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4 group-hover:text-[#004aad] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#4a5568] leading-relaxed">
                  {project.description}
                </p>

                {/* Read More Link */}
                <motion.div
                  className="flex items-center gap-2 mt-6 text-[#004aad] opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-sm uppercase tracking-wider font-semibold">View Case Study</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-10 text-center"
        >
          <button className="btn-secondary btn-glitch">
            <span className="flex items-center gap-3">
              View All Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
