import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Coffee } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-black via-purple-900/10 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-purple-400 mb-4">About Us</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We are passionate about creating innovative digital solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-purple-400">Our Story</h2>
            <p className="text-gray-400">
              Founded with a vision to transform digital experiences, Sanzei Soft has been at the
              forefront of technological innovation. We combine creativity with technical expertise
              to deliver exceptional solutions.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Code, label: '100+ Projects' },
                { icon: Coffee, label: '10k+ Code Hours' },
                { icon: Award, label: '25+ Awards' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center p-4 bg-purple-900/20 rounded-lg"
                >
                  <stat.icon className="w-8 h-8 text-purple-400 mb-2" />
                  <span className="text-sm text-gray-400">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Team working"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-purple-500/20 rounded-lg"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;