import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Monitor, Smartphone, Tablet } from 'lucide-react';

const Screenshots: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeDevice, setActiveDevice] = useState('desktop');

  const screenshots = [
    {
      url: 'https://images.pexels.com/photos/5691468/pexels-photo-5691468.jpeg',
      title: 'Dashboard Overview',
      description: 'Comprehensive farm analytics and monitoring dashboard'
    },
    {
      url: 'https://images.pexels.com/photos/4112236/pexels-photo-4112236.jpeg',
      title: 'Crop Recommendations',
      description: 'AI-powered crop selection interface'
    },
    {
      url: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg',
      title: 'Plant Diagnosis',
      description: 'Advanced disease detection and analysis'
    },
    {
      url: 'https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg',
      title: 'Weather Integration',
      description: 'Real-time weather data and forecasting'
    },
    {
      url: 'https://images.pexels.com/photos/4992464/pexels-photo-4992464.jpeg',
      title: 'Mobile App',
      description: 'Field-ready mobile application'
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const deviceTypes = [
    { id: 'desktop', icon: Monitor, label: 'Desktop' },
    { id: 'tablet', icon: Tablet, label: 'Tablet' },
    { id: 'mobile', icon: Smartphone, label: 'Mobile' }
  ];

  return (
    <section id="screenshots" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See KRISH-e in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our intuitive interface designed for modern farmers across all devices
          </p>

          {/* Device Toggle */}
          <div className="inline-flex bg-white rounded-full p-2 shadow-lg">
            {deviceTypes.map((device) => {
              const IconComponent = device.icon;
              return (
                <button
                  key={device.id}
                  onClick={() => setActiveDevice(device.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                    activeDevice === device.id
                      ? 'bg-green-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="text-sm font-medium">{device.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="relative">
          {/* Main Screenshot Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`relative mx-auto rounded-2xl overflow-hidden shadow-2xl ${
              activeDevice === 'desktop' 
                ? 'max-w-6xl' 
                : activeDevice === 'tablet' 
                ? 'max-w-2xl' 
                : 'max-w-sm'
            }`}
          >
            <div className={`bg-gray-900 p-4 ${
              activeDevice === 'desktop' ? 'rounded-t-2xl' : 'rounded-t-3xl'
            }`}>
              {activeDevice === 'desktop' && (
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 bg-gray-700 rounded mx-4 px-3 py-1">
                    <span className="text-gray-300 text-xs">krish-e.com</span>
                  </div>
                </div>
              )}
              {(activeDevice === 'tablet' || activeDevice === 'mobile') && (
                <div className="flex justify-center">
                  <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
                </div>
              )}
            </div>

            <div className="relative">
              <img
                src={screenshots[activeIndex].url}
                alt={screenshots[activeIndex].title}
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
                aria-label="Next screenshot"
              >
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </motion.div>

          {/* Screenshot Info */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mt-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {screenshots[activeIndex].title}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {screenshots[activeIndex].description}
            </p>
          </motion.div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === activeIndex 
                    ? 'bg-green-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;