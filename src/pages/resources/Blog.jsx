import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, Search } from 'lucide-react';

const Blog = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Cybersecurity', 'RFID', 'Networking', 'Cloud'];

  const blogPosts = [
    {
      id: 1,
      title: 'Zero Trust Architecture: A Complete Implementation Guide',
      excerpt: 'Learn how to implement zero trust security in your enterprise with our comprehensive guide.',
      category: 'Cybersecurity',
      date: 'Jan 15, 2026',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800',
      featured: true
    },
    {
      id: 2,
      title: 'RFID vs Barcode: Choosing the Right Solution',
      excerpt: 'A detailed comparison to help you decide between RFID and barcode technology.',
      category: 'RFID',
      date: 'Jan 12, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800'
    },
    {
      id: 3,
      title: 'SD-WAN: Transforming Enterprise Networking',
      excerpt: 'Discover how SD-WAN is revolutionizing how businesses connect their global operations.',
      category: 'Networking',
      date: 'Jan 10, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800'
    },
    {
      id: 4,
      title: 'Cloud Migration Best Practices for 2026',
      excerpt: 'Essential strategies for a successful cloud migration without disrupting operations.',
      category: 'Cloud',
      date: 'Jan 8, 2026',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800'
    },
    {
      id: 5,
      title: 'Ransomware Prevention: Protecting Your Data',
      excerpt: 'Comprehensive strategies to protect your organization from ransomware attacks.',
      category: 'Cybersecurity',
      date: 'Jan 5, 2026',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800'
    },
    {
      id: 6,
      title: 'IoT Security Challenges and Solutions',
      excerpt: 'Addressing the unique security challenges posed by IoT devices in enterprise environments.',
      category: 'Cybersecurity',
      date: 'Jan 3, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800'
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8faff] via-[#bed3ff]/30 to-[#e8f0ff]">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 pt-12">
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
        className="max-w-[1400px] mx-auto px-8 lg:px-16 py-16"
      >
        <h1 className="text-5xl lg:text-6xl font-bold text-[#1a1a2e] mb-6">
          Insights &{' '}
          <span className="bg-gradient-to-r from-[#004aad] to-[#0066cc] bg-clip-text text-transparent">
            Blog
          </span>
        </h1>
        <p className="text-xl text-[#4a5568] max-w-3xl">
          Expert insights on cybersecurity, infrastructure, and emerging technologies.
        </p>
      </motion.div>

      {/* Categories */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 mb-12">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-[#004aad] text-white'
                  : 'bg-white/80 text-[#4a5568] hover:bg-[#004aad]/10'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'All' && (
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-[#bed3ff]/30"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-[#004aad] text-white rounded-full text-sm font-bold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4 text-sm text-[#4a5568]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#1a1a2e] mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-[#4a5568] mb-6">{featuredPost.excerpt}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-[#004aad] font-semibold"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Blog Grid */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured || selectedCategory !== 'All').map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-[#bed3ff]/30 hover:border-[#004aad]/50 transition-all cursor-pointer"
            >
              <div className="relative h-48">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-[#004aad] rounded-full text-xs font-bold">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-xs text-[#4a5568]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-[#4a5568] text-sm line-clamp-2">{post.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-[#004aad] to-[#0066cc] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Get the latest insights on security trends and technology updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-4 rounded-xl text-[#1a1a2e] outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-[#004aad] font-bold rounded-xl hover:shadow-2xl transition-all"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
