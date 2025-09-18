import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Mail, Phone, MapPin, Github, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Demo', href: '#diagnose' },
      { name: 'API', href: '#api' }
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' }
    ],
    resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'Help Center', href: '#help' },
      { name: 'Community', href: '#community' },
      { name: 'Status', href: '#status' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR', href: '#gdpr' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Solomon-Raja-3006/Krishi/', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/krishe_ai', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/krishe-ai', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://facebook.com/krishe.ai', label: 'Facebook' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'solomonraja299@gmail.com', href: 'mailto:solomonraja299@gmail.com' },
    { icon: Phone, text: '7676744948', href: 'tel:7676744948' },
    { icon: MapPin, text: 'Bengaluru, India', href: '#location' }
  ];

  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand and Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-600 p-3 rounded-xl">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <span className="text-3xl font-bold">KRISH-e</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Empowering farmers worldwide with AI-driven agricultural solutions for sustainable and profitable farming.
              </p>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.a
                    key={index}
                    href={contact.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <IconComponent className="h-5 w-5" />
                    <span>{contact.text}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with KRISH-e</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get the latest updates on new features, agricultural insights, and community news delivered to your inbox.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-3 sm:space-y-0 sm:space-x-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 bg-gray-800 border border-gray-700 rounded-full focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-white"
            />
            <motion.button
              className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors duration-200 font-medium whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>

        {/* Social Links and Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center"
        >
          <div className="text-gray-400 text-sm mb-4 sm:mb-0">
            © 2025 KRISH-e. All rights reserved. Built for farmers.
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <IconComponent className="h-5 w-5" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
