import React from 'react';
import { motion } from 'framer-motion';
import { Wheat, Beaker, Search, Calendar, MessageCircle, Leaf } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      id: 'feature-crop',
      icon: Wheat,
      title: 'Crop Recommendation',
      description: 'AI-powered suggestions for optimal crop selection based on soil conditions, climate data, and market trends.',
      benefits: ['Increased yield potential', 'Reduced risk', 'Market-aligned choices']
    },
    {
      id: 'feature-fertilizer',
      icon: Beaker,
      title: 'Fertilizer Optimization',
      description: 'Smart fertilizer recommendations that maximize crop nutrition while minimizing environmental impact and costs.',
      benefits: ['Cost optimization', 'Environmental protection', 'Enhanced soil health']
    },
    {
      id: 'feature-diagnose',
      icon: Search,
      title: 'Plant Diagnosis',
      description: 'Advanced image recognition to identify plant diseases, pests, and nutrient deficiencies with instant treatment recommendations.',
      benefits: ['Early detection', 'Accurate diagnosis', 'Treatment guidance']
    },
    {
      id: 'feature-schedule',
      icon: Calendar,
      title: 'Farming Schedule',
      description: 'Intelligent scheduling system that optimizes planting, irrigation, fertilization, and harvesting activities.',
      benefits: ['Time optimization', 'Resource planning', 'Activity coordination']
    },
    {
      id: 'feature-assistant',
      icon: MessageCircle,
      title: 'AI Assistant',
      description: '24/7 agricultural chatbot that answers farming questions and provides personalized guidance and support.',
      benefits: ['Instant support', 'Expert knowledge', 'Personalized advice']
    },
    {
      id: 'feature-sustainability',
      icon: Leaf,
      title: 'Sustainability Insights',
      description: 'Track and improve your farm\'s environmental impact with actionable sustainability metrics and recommendations.',
      benefits: ['Carbon tracking', 'Water conservation', 'Biodiversity support']
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for Smart Farming
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how KRISH-e's comprehensive suite of AI-powered tools can transform your agricultural operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.id}
                id={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-green-200"
              >
                <div className="bg-green-100 p-4 rounded-xl inline-block mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-green-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>

                <motion.div
                  className="mt-6 pt-6 border-t border-gray-100"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <a
                    href="#diagnose"
                    className="text-green-600 font-medium hover:text-green-700 transition-colors duration-200 flex items-center space-x-1 group"
                  >
                    <span>Learn more</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </a>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;