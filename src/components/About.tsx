import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    {
      icon: Target,
      value: '95%',
      label: 'Accuracy Rate',
      description: 'In crop recommendations'
    },
    {
      icon: Users,
      value: '10K+',
      label: 'Active Farmers',
      description: 'Trust our platform'
    },
    {
      icon: Award,
      value: '50+',
      label: 'Crop Varieties',
      description: 'Supported by AI'
    },
    {
      icon: TrendingUp,
      value: '30%',
      label: 'Yield Increase',
      description: 'Average improvement'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionizing Agriculture with AI
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            KRISH-e combines cutting-edge artificial intelligence with deep agricultural knowledge 
            to provide farmers with intelligent insights, personalized recommendations, and 
            data-driven solutions that maximize crop yield while minimizing resource usage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors duration-300"
              >
                <div className="bg-green-600 p-3 rounded-xl inline-block mb-4">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-green-600 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-green-500 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h3>
              <p className="text-xl leading-relaxed mb-6">
                To empower farmers worldwide with intelligent agricultural solutions that increase 
                productivity, ensure sustainability, and contribute to global food security through 
                the power of artificial intelligence.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Smart crop recommendations based on soil and climate data</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>AI-powered plant disease detection and treatment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Optimized fertilizer usage for maximum yield</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Comprehensive farming schedule management</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg"
                alt="Modern farming technology"
                className="rounded-2xl shadow-2xl w-full h-64 md:h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;