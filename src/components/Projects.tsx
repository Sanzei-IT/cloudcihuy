import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Award, Users, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with real-time inventory management and AI-powered recommendations',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Redis', 'TensorFlow'],
      stats: {
        stars: '4.9k',
        users: '10k+',
        awards: 3
      }
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time data visualization and AI insights',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['Vue.js', 'Express', 'PostgreSQL', 'D3.js', 'WebSocket'],
      stats: {
        stars: '3.2k',
        users: '5k+',
        awards: 2
      }
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered responses and multilingual support',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['Next.js', 'Python', 'TensorFlow', 'WebRTC', 'NLP'],
      stats: {
        stars: '5.1k',
        users: '15k+',
        awards: 4
      }
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  };

  const infiniteScroll = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-black via-purple-900/10 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="flex justify-center mb-6"
          >
            <Code className="w-16 h-16 text-purple-400" />
          </motion.div>
          <h1 className="text-4xl font-bold text-purple-400 mb-4">Our Projects</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our latest works and innovations in software development
          </p>
        </motion.div>

        {/* Running Text Banner */}
        <div className="w-full overflow-hidden bg-purple-900/20 py-4 mb-16">
          <motion.div
            animate="animate"
            variants={infiniteScroll}
            className="whitespace-nowrap"
          >
            <span className="text-2xl font-bold text-purple-400 mx-4">
              🚀 Featured Projects • Innovation in Code • Award-Winning Solutions • Cutting-Edge Technology • Excellence in Development • Creative Solutions • 
            </span>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-purple-900/20 rounded-xl overflow-hidden border border-purple-500/20 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-4 left-4 flex space-x-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center space-x-1 text-purple-400"
                  >
                    <Star className="w-4 h-4" />
                    <span className="text-sm">{project.stats.stars}</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center space-x-1 text-purple-400"
                  >
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{project.stats.users}</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center space-x-1 text-purple-400"
                  >
                    <Award className="w-4 h-4" />
                    <span className="text-sm">{project.stats.awards}</span>
                  </motion.div>
                </motion.div>
              </div>
              <div className="p-6 relative">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3 }}
                  className="text-xl font-semibold text-purple-400 mb-2"
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-400 mb-4"
                >
                  {project.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-2 mb-4"
                >
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full hover:bg-purple-500/30 transition-colors duration-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex space-x-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-purple-500/20 rounded-lg text-purple-400 hover:bg-purple-500/30 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-purple-500/20 rounded-lg text-purple-400 hover:bg-purple-500/30 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;