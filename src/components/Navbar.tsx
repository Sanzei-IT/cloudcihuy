import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/about', icon: User, label: 'About' },
    { to: '/projects', icon: Briefcase, label: 'Projects' },
    { to: '/contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-black/80 backdrop-blur-sm border-b border-purple-500/20 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="group flex items-center space-x-2">
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="text-purple-500 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600"
              >
                Sanzei Soft
              </motion.span>
            </Link>
          </motion.div>
          <div className="flex space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="relative group px-4 py-2"
                >
                  <span className="relative z-10 flex items-center space-x-1 text-sm font-medium transition-colors duration-300">
                    <item.icon className={`w-4 h-4 transition-colors duration-300 ${
                      isActive ? 'text-purple-400' : 'text-gray-300 group-hover:text-purple-400'
                    }`} />
                    <span className={`transition-colors duration-300 ${
                      isActive ? 'text-purple-400' : 'text-gray-300 group-hover:text-purple-400'
                    }`}>
                      {item.label}
                    </span>
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-purple-500/10 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;