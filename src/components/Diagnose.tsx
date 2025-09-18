import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Camera, Search, CheckCircle, AlertTriangle, Leaf } from 'lucide-react';

const Diagnose: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [diagnosis, setDiagnosis] = useState<any>(null);

  const sampleImages = [
    {
      url: 'https://images.pexels.com/photos/1459534/pexels-photo-1459534.jpeg',
      name: 'Healthy Tomato Plant',
      diagnosis: {
        status: 'healthy',
        confidence: 94,
        disease: null,
        recommendations: ['Continue current care routine', 'Monitor for early signs of blight', 'Maintain consistent watering']
      }
    },
    {
      url: 'https://images.pexels.com/photos/1300503/pexels-photo-1300503.jpeg',
      name: 'Wheat Field',
      diagnosis: {
        status: 'warning',
        confidence: 87,
        disease: 'Potential nutrient deficiency',
        recommendations: ['Apply nitrogen fertilizer', 'Test soil pH levels', 'Increase irrigation frequency']
      }
    },
    {
      url: 'https://images.pexels.com/photos/1459673/pexels-photo-1459673.jpeg',
      name: 'Corn Crop',
      diagnosis: {
        status: 'healthy',
        confidence: 91,
        disease: null,
        recommendations: ['Excellent growth conditions', 'Continue monitoring', 'Prepare for harvest in 3-4 weeks']
      }
    }
  ];

  const handleImageSelect = (image: any) => {
    setSelectedImage(image.url);
    setIsAnalyzing(true);
    setDiagnosis(null);

    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setDiagnosis(image.diagnosis);
    }, 2500);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSelectedImage(url);
      setIsAnalyzing(true);
      setDiagnosis(null);

      setTimeout(() => {
        setIsAnalyzing(false);
        setDiagnosis({
          status: 'healthy',
          confidence: 89,
          disease: null,
          recommendations: ['Plant appears healthy', 'Continue current care', 'Monitor for changes']
        });
      }, 3000);
    }
  };

  return (
    <section id="diagnose" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Plant Diagnosis Demo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our advanced AI-powered plant diagnosis system. Upload an image or try our sample images to see instant analysis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-dashed border-gray-300 hover:border-green-400 transition-colors duration-300">
              <div className="text-center">
                <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Plant Image</h3>
                <p className="text-gray-600 mb-6">Upload a photo of your plant for instant AI analysis</p>
                
                <label className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors duration-200 cursor-pointer inline-flex items-center space-x-2">
                  <Camera className="h-5 w-5" />
                  <span>Choose Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Sample Images */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Or try our sample images:</h4>
              <div className="grid grid-cols-3 gap-4">
                {sampleImages.map((image, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer"
                    onClick={() => handleImageSelect(image)}
                  >
                    <img
                      src={image.url}
                      alt={image.name}
                      className="w-full h-24 object-cover rounded-lg border-2 border-transparent hover:border-green-400 transition-all duration-200"
                    />
                    <p className="text-xs text-center mt-2 text-gray-600">{image.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Analysis Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
          >
            {!selectedImage ? (
              <div className="text-center text-gray-500 py-16">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p>Select an image to begin analysis</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <img
                    src={selectedImage}
                    alt="Selected plant"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>

                {isAnalyzing ? (
                  <div className="text-center py-8">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="inline-block"
                    >
                      <Leaf className="h-8 w-8 text-green-600" />
                    </motion.div>
                    <p className="text-gray-600 mt-4">Analyzing image with AI...</p>
                  </div>
                ) : diagnosis ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-semibold text-gray-900">Diagnosis Results</h4>
                      <div className="flex items-center space-x-2">
                        {diagnosis.status === 'healthy' ? (
                          <CheckCircle className="h-6 w-6 text-green-500" />
                        ) : (
                          <AlertTriangle className="h-6 w-6 text-yellow-500" />
                        )}
                        <span className={`text-sm font-medium ${
                          diagnosis.status === 'healthy' ? 'text-green-600' : 'text-yellow-600'
                        }`}>
                          {diagnosis.confidence}% Confidence
                        </span>
                      </div>
                    </div>

                    {diagnosis.disease && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <p className="font-medium text-yellow-800">Detected Issue:</p>
                        <p className="text-yellow-700">{diagnosis.disease}</p>
                      </div>
                    )}

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="font-medium text-green-800 mb-3">Recommendations:</p>
                      <ul className="space-y-2">
                        {diagnosis.recommendations.map((rec: string, idx: number) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-green-700 text-sm">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ) : null}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Diagnose;