import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Code, GitBranch, Play, Copy, Check, Terminal, FileText } from 'lucide-react';

const GetStarted: React.FC = () => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = async (text: string, command: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCommand(command);
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const installationSteps = [
    {
      title: 'Clone Repository',
      command: 'git clone https://github.com/krishe-ai/krish-e-app.git',
      description: 'Download the KRISH-e application source code'
    },
    {
      title: 'Install Dependencies',
      command: 'npm install',
      description: 'Install all required packages and dependencies'
    },
    {
      title: 'Environment Setup',
      command: 'cp .env.example .env.local',
      description: 'Configure your environment variables'
    },
    {
      title: 'Start Development',
      command: 'npm run dev',
      description: 'Launch the development server'
    }
  ];

  const quickStart = {
    web: {
      title: 'Web Application',
      icon: Code,
      description: 'Full-featured web dashboard for comprehensive farm management',
      features: ['Complete dashboard', 'Advanced analytics', 'Multi-user support', 'Desktop optimized'],
      action: 'Launch Web App',
      link: '#demo'
    },
    mobile: {
      title: 'Mobile App',
      icon: Download,
      description: 'Field-ready mobile application for on-the-go farm management',
      features: ['Offline capability', 'Camera integration', 'GPS tracking', 'Field optimized'],
      action: 'Download App',
      link: '#mobile'
    },
    api: {
      title: 'Developer API',
      icon: Terminal,
      description: 'Integrate KRISH-e capabilities into your existing systems',
      features: ['RESTful API', 'AI endpoints', 'Webhook support', 'Comprehensive docs'],
      action: 'View API Docs',
      link: '#api'
    }
  };

  const fileStructure = [
    { name: 'src/', type: 'folder', description: 'Main application source code' },
    { name: '├── components/', type: 'folder', description: 'Reusable React components' },
    { name: '├── pages/', type: 'folder', description: 'Application pages and routes' },
    { name: '├── services/', type: 'folder', description: 'API services and utilities' },
    { name: '├── models/', type: 'folder', description: 'AI models and algorithms' },
    { name: '├── utils/', type: 'folder', description: 'Helper functions and utilities' },
    { name: '├── types/', type: 'folder', description: 'TypeScript type definitions' },
    { name: '└── assets/', type: 'folder', description: 'Static assets and images' },
    { name: 'docs/', type: 'folder', description: 'Documentation and guides' },
    { name: 'tests/', type: 'folder', description: 'Test suites and configurations' },
    { name: 'package.json', type: 'file', description: 'Project dependencies and scripts' },
    { name: 'README.md', type: 'file', description: 'Project overview and setup guide' }
  ];

  return (
    <section id="get-started" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Started with KRISH-e
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your preferred way to integrate KRISH-e into your farming operations
          </p>
        </motion.div>

        {/* Quick Start Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {Object.entries(quickStart).map(([key, option], index) => {
            const IconComponent = option.icon;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-green-200"
              >
                <div className="bg-green-100 p-4 rounded-xl inline-block mb-6">
                  <IconComponent className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <ul className="space-y-2 mb-8">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.a
                  href={option.link}
                  className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors duration-200 font-medium inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {option.action}
                </motion.a>
              </motion.div>
            );
          })}
        </div>

        {/* Installation Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Terminal className="h-8 w-8 text-green-400" />
                <h3 className="text-2xl font-bold">Quick Installation</h3>
              </div>
              <p className="text-gray-300 mb-8 text-lg">
                Get KRISH-e running on your local machine in just a few simple steps
              </p>
              
              <div className="space-y-4">
                {installationSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-400 font-medium text-sm">
                        {index + 1}. {step.title}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 bg-black rounded p-3 font-mono text-sm">
                      <span className="text-green-400">$</span>
                      <code className="text-white flex-grow">{step.command}</code>
                      <button
                        onClick={() => copyToClipboard(step.command, step.title)}
                        className="text-gray-400 hover:text-white transition-colors duration-200 ml-2"
                        aria-label={`Copy ${step.title} command`}
                      >
                        {copiedCommand === step.title ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="h-8 w-8 text-green-400" />
                <h3 className="text-2xl font-bold">Project Structure</h3>
              </div>
              <p className="text-gray-300 mb-8 text-lg">
                Understanding the KRISH-e codebase organization
              </p>
              
              <div className="bg-black rounded-lg p-4 font-mono text-sm overflow-auto max-h-80">
                {fileStructure.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 py-1 group hover:bg-gray-800 px-2 rounded"
                  >
                    <span className={`${
                      item.type === 'folder' 
                        ? 'text-blue-400' 
                        : 'text-green-400'
                    }`}>
                      {item.name}
                    </span>
                    <span className="text-gray-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {item.description}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-300 mb-6 text-lg">
              Need help getting started? Check out our comprehensive documentation
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="#docs"
                className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors duration-200 font-medium inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="h-5 w-5" />
                <span>View Documentation</span>
              </motion.a>
              <motion.a
                href="#examples"
                className="border-2 border-gray-600 text-gray-300 px-6 py-3 rounded-full hover:border-gray-500 hover:text-white transition-colors duration-200 font-medium inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="h-5 w-5" />
                <span>View Examples</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* System Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">System Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                <Code className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Node.js</h4>
              <p className="text-sm text-gray-600">Version 16 or higher</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                <Terminal className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Memory</h4>
              <p className="text-sm text-gray-600">Minimum 4GB RAM</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                <FileText className="h-8 w-8 text-purple-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Storage</h4>
              <p className="text-sm text-gray-600">5GB free space</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                <GitBranch className="h-8 w-8 text-orange-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Git</h4>
              <p className="text-sm text-gray-600">Latest version</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;