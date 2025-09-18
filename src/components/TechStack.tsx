import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cloud, Smartphone, Database, Shield, Zap } from 'lucide-react';

const TechStack: React.FC = () => {
  const technologies = [
    {
      category: 'Artificial Intelligence',
      icon: Brain,
      color: 'bg-purple-100 text-purple-600',
      technologies: [
        { name: 'TensorFlow', description: 'Deep learning framework for crop analysis' },
        { name: 'Computer Vision', description: 'Advanced image recognition for plant diagnosis' },
        { name: 'Natural Language Processing', description: 'Intelligent chatbot and query processing' },
        { name: 'Machine Learning Models', description: 'Predictive analytics for crop recommendations' }
      ]
    },
    {
      category: 'Cloud Infrastructure',
      icon: Cloud,
      color: 'bg-blue-100 text-blue-600',
      technologies: [
        { name: 'AWS/Google Cloud', description: 'Scalable cloud computing platform' },
        { name: 'Kubernetes', description: 'Container orchestration for high availability' },
        { name: 'Microservices', description: 'Distributed architecture for reliability' },
        { name: 'CDN', description: 'Global content delivery for fast access' }
      ]
    },
    {
      category: 'Mobile & Web',
      icon: Smartphone,
      color: 'bg-green-100 text-green-600',
      technologies: [
        { name: 'React Native', description: 'Cross-platform mobile application' },
        { name: 'Progressive Web App', description: 'Offline-capable web experience' },
        { name: 'React.js', description: 'Modern web interface development' },
        { name: 'TypeScript', description: 'Type-safe application development' }
      ]
    },
    {
      category: 'Data & Analytics',
      icon: Database,
      color: 'bg-orange-100 text-orange-600',
      technologies: [
        { name: 'PostgreSQL', description: 'Robust relational database system' },
        { name: 'Redis', description: 'High-performance caching layer' },
        { name: 'Apache Kafka', description: 'Real-time data streaming platform' },
        { name: 'Data Lakes', description: 'Massive agricultural data storage' }
      ]
    },
    {
      category: 'Security & Privacy',
      icon: Shield,
      color: 'bg-red-100 text-red-600',
      technologies: [
        { name: 'OAuth 2.0', description: 'Secure user authentication system' },
        { name: 'End-to-End Encryption', description: 'Protected data transmission' },
        { name: 'GDPR Compliance', description: 'Privacy regulation adherence' },
        { name: 'Multi-Factor Auth', description: 'Enhanced account security' }
      ]
    },
    {
      category: 'Performance',
      icon: Zap,
      color: 'bg-yellow-100 text-yellow-600',
      technologies: [
        { name: 'Edge Computing', description: 'Low-latency processing at the edge' },
        { name: 'Caching Strategies', description: 'Optimized data retrieval' },
        { name: 'Load Balancing', description: 'Distributed request handling' },
        { name: 'Real-time Updates', description: 'Live data synchronization' }
      ]
    }
  ];

  return (
    <section id="tech" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powered by Cutting-Edge Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            KRISH-e leverages the latest in AI, cloud computing, and modern web technologies to deliver a seamless and powerful agricultural experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200"
              >
                <div className={`${tech.color} p-4 rounded-xl inline-block mb-6`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-6">{tech.category}</h3>
                
                <div className="space-y-4">
                  {tech.technologies.map((item, idx) => (
                    <div key={idx} className="border-l-2 border-gray-200 pl-4">
                      <h4 className="font-semibold text-gray-900 text-sm">{item.name}</h4>
                      <p className="text-gray-600 text-xs mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Built for Scale and Reliability</h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Our robust technology stack ensures KRISH-e can handle millions of users while maintaining fast response times and 99.9% uptime
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm opacity-90">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">&lt;200ms</div>
                <div className="text-sm opacity-90">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10M+</div>
                <div className="text-sm opacity-90">Daily Requests</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;