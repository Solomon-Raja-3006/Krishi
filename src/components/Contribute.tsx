import React from 'react';
import { motion } from 'framer-motion';
import { Github, GitFork, Star, Users, MessageSquare, Heart, Code, Bug } from 'lucide-react';

const Contribute: React.FC = () => {
  const contributionTypes = [
    {
      icon: Code,
      title: 'Code Contributions',
      description: 'Help improve KRISH-e by contributing new features, optimizations, and enhancements',
      ways: ['Feature development', 'Performance optimization', 'Code refactoring', 'Testing improvements'],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Bug,
      title: 'Bug Reports',
      description: 'Report issues and help us maintain the quality and reliability of the platform',
      ways: ['Issue reporting', 'Bug reproduction', 'Testing fixes', 'Quality assurance'],
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: MessageSquare,
      title: 'Documentation',
      description: 'Improve our documentation to help other developers and users understand KRISH-e',
      ways: ['API documentation', 'User guides', 'Code examples', 'Tutorials'],
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Help other users by answering questions and sharing your expertise',
      ways: ['Forum participation', 'Issue resolution', 'Best practices', 'Knowledge sharing'],
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const stats = [
    { icon: Star, value: '2.5K', label: 'GitHub Stars' },
    { icon: GitFork, value: '468', label: 'Forks' },
    { icon: Users, value: '150+', label: 'Contributors' },
    { icon: MessageSquare, value: '1.2K', label: 'Issues Resolved' }
  ];

  return (
    <section id="contribute" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            KRISH-e is an open-source project built by the community, for the community. 
            Contribute to the future of AI-powered agriculture.
          </p>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg mb-4"
                >
                  <IconComponent className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* Contribution Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contributionTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`${type.color} p-4 rounded-xl inline-block mb-6`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <div className="space-y-2">
                  {type.ways.map((way, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{way}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Getting Started with Contributing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-green-500 rounded-3xl p-8 md:p-12 text-white mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Contribute?</h3>
            <p className="text-xl max-w-3xl mx-auto">
              Follow these simple steps to start contributing to KRISH-e and help build the future of agricultural technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 p-6 rounded-2xl mb-4">
                <Github className="h-12 w-12 mx-auto" />
              </div>
              <h4 className="text-lg font-semibold mb-2">1. Fork the Repository</h4>
              <p className="text-sm opacity-90">
                Fork our GitHub repository to create your own copy of the project
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 p-6 rounded-2xl mb-4">
                <Code className="h-12 w-12 mx-auto" />
              </div>
              <h4 className="text-lg font-semibold mb-2">2. Make Your Changes</h4>
              <p className="text-sm opacity-90">
                Implement your improvements, fix bugs, or add new features
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 p-6 rounded-2xl mb-4">
                <GitFork className="h-12 w-12 mx-auto" />
              </div>
              <h4 className="text-lg font-semibold mb-2">3. Submit Pull Request</h4>
              <p className="text-sm opacity-90">
                Submit your changes for review and integration into the main project
              </p>
            </div>
          </div>
        </motion.div>

        {/* Community Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Connect with Our Community</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a
              href="https://github.com/krishe-ai/krish-e"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors duration-200 font-medium flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-5 w-5" />
              <span>View on GitHub</span>
            </motion.a>
            <motion.a
              href="#community"
              className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors duration-200 font-medium flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users className="h-5 w-5" />
              <span>Join Community</span>
            </motion.a>
            <motion.button
              className="text-green-600 px-8 py-4 rounded-full border-2 border-green-600 hover:bg-green-50 transition-colors duration-200 font-medium flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="h-5 w-5" />
              <span>Sponsor Project</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contribute;