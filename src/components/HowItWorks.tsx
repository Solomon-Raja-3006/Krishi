import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Upload, Brain, CheckCircle, BarChart3, Leaf } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Sign Up & Profile Setup',
      description: 'Create your account and set up your farm profile with location, crop types, and farming preferences.',
      details: ['Farm location mapping', 'Crop history input', 'Farming goals setting', 'Preference configuration']
    },
    {
      icon: Upload,
      title: 'Data Input & Integration',
      description: 'Upload field images, soil reports, and connect with local weather stations for comprehensive data collection.',
      details: ['Soil test results upload', 'Field photo capture', 'Weather data sync', 'Historical data import']
    },
    {
      icon: Brain,
      title: 'AI Analysis & Processing',
      description: 'Our advanced AI algorithms analyze your data to generate personalized insights and recommendations.',
      details: ['Machine learning analysis', 'Pattern recognition', 'Risk assessment', 'Optimization calculations']
    },
    {
      icon: CheckCircle,
      title: 'Personalized Recommendations',
      description: 'Receive tailored advice for crop selection, fertilizer application, disease management, and scheduling.',
      details: ['Crop recommendations', 'Fertilizer optimization', 'Pest management plans', 'Planting schedules']
    },
    {
      icon: BarChart3,
      title: 'Monitor & Track Progress',
      description: 'Track your farm\'s performance with real-time analytics, yield predictions, and progress monitoring.',
      details: ['Performance dashboards', 'Yield forecasting', 'Growth tracking', 'ROI analysis']
    },
    {
      icon: Leaf,
      title: 'Continuous Improvement',
      description: 'Benefit from continuous learning as our AI improves recommendations based on outcomes and new data.',
      details: ['Feedback integration', 'Model refinement', 'Best practice updates', 'Community insights']
    }
  ];

  return (
    <section id="how" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How KRISH-e Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the simple yet powerful workflow that transforms your farming operations with AI-driven insights
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>

          <div className="space-y-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className={`flex items-start space-x-4 ${
                        isEven ? '' : 'lg:flex-row-reverse lg:space-x-reverse lg:text-right'
                      }`}>
                        <div className="bg-green-100 p-4 rounded-xl flex-shrink-0">
                          <IconComponent className="h-8 w-8 text-green-600" />
                        </div>
                        <div className="flex-grow">
                          <div className="text-sm font-semibold text-green-600 mb-2">
                            Step {index + 1}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {step.description}
                          </p>
                          <ul className={`space-y-2 ${
                            isEven ? '' : 'lg:text-right'
                          }`}>
                            {step.details.map((detail, idx) => (
                              <li key={idx} className={`flex items-center space-x-2 text-sm text-gray-500 ${
                                isEven ? '' : 'lg:flex-row-reverse lg:space-x-reverse'
                              }`}>
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></div>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                  </div>

                  {/* Image/Visual */}
                  <div className={`w-full lg:w-5/12 mt-8 lg:mt-0 ${isEven ? 'lg:pl-8' : 'lg:pr-8'}`}>
                    <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-8 h-64 flex items-center justify-center">
                      <IconComponent className="h-24 w-24 text-green-600 opacity-50" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Farm?</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Join thousands of farmers who are already benefiting from AI-powered agricultural insights
            </p>
            <motion.a
              href="#get-started"
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;