import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Code2, Sparkles, Rocket, Brain, Palette, Terminal, ArrowRight } from 'lucide-react';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    controls.start({
      background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 80%)`,
    });
  }, [mousePosition, controls]);

  const welcomeText = "Welcome to Sanzei Soft".split("");
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const services = [
    { 
      icon: Terminal,
      title: 'Web Development',
      description: 'Creating responsive and modern web applications with cutting-edge technologies',
      tech: ['React', 'Node.js', 'TypeScript']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Crafting beautiful and intuitive user interfaces that delight users',
      tech: ['Figma', 'Adobe XD', 'Sketch']
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Implementing intelligent solutions using advanced AI technologies',
      tech: ['TensorFlow', 'PyTorch', 'OpenAI']
    },
    {
      icon: Rocket,
      title: 'Performance Optimization',
      description: 'Enhancing application speed and efficiency for better user experience',
      tech: ['Webpack', 'Vite', 'Performance Metrics']
    }
  ];

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

  const glowVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-black via-purple-900/10 to-black overflow-hidden">
      <motion.div
        animate={controls}
        className="fixed inset-0 pointer-events-none"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2 
            }}
            className="flex justify-center mb-8"
          >
            <motion.div
              variants={glowVariants}
              initial="initial"
              animate="animate"
              className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full"
            />
            <Code2 className="w-24 h-24 text-purple-500 relative z-10" />
          </motion.div>

          {/* Animated Welcome Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex justify-center flex-wrap mb-6"
          >
            {welcomeText.map((letter, index) => (
              <motion.span
                key={index}
                variants={child}
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Running Text Banner */}
          <div className="w-full overflow-hidden bg-purple-900/20 py-4 my-8 backdrop-blur-sm">
            <motion.div
              animate="animate"
              variants={infiniteScroll}
              className="whitespace-nowrap"
            >
              <span className="text-2xl font-bold text-purple-400 mx-4">
                ⚡ Innovation • Excellence • Creativity • Passion • Technology • Design • Quality • Innovation • Excellence • Creativity • Passion • Technology • Design • Quality
              </span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            Transforming ideas into exceptional digital experiences through innovative technology and creative design
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-3 bg-purple-600 text-white rounded-full font-medium flex items-center space-x-2 hover:bg-purple-700 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5" />
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-3 border-2 border-purple-500 text-purple-400 rounded-full font-medium flex items-center space-x-2 hover:bg-purple-500/10 transition-all duration-300"
            >
              <Terminal className="w-5 h-5" />
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group p-8 rounded-xl bg-purple-900/20 border border-purple-500/20 backdrop-blur-sm relative overflow-hidden"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4 + index * 0.2 }}
                className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors duration-500"
              />
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <service.icon className="w-12 h-12 text-purple-400 mb-6 transform transition-transform duration-500 group-hover:scale-110" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-purple-400 mb-4 relative z-10">{service.title}</h3>
              <p className="text-gray-400 mb-6 relative z-10">{service.description}</p>
              <div className="flex flex-wrap gap-2 relative z-10">
                {service.tech.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full transition-colors duration-300 hover:bg-purple-500/30"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "100+", label: "Projects Completed" },
            { number: "50+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group text-center p-6 rounded-lg bg-purple-900/20 border border-purple-500/20 relative overflow-hidden"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2 + index * 0.2 }}
                className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.2 }}
                className="text-3xl font-bold text-purple-400 mb-2 relative z-10"
              >
                {stat.number}
              </motion.h4>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 + index * 0.2 }}
                className="text-gray-400 relative z-10"
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;