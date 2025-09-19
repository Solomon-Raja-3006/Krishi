import React, { useEffect } from 'react';
import { ShepherdTourContext } from 'react-shepherd';

const tourOptions = {
  defaultStepOptions: {
    classes: 'shepherd-theme-custom',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: {
      enabled: true,
    },
  },
  useModalOverlay: true,
};

const steps = [
  {
    title: 'Welcome to KRISH-e!',
    text: 'Let me show you around our AI-powered agricultural platform. This tour will introduce you to all the key features.',
    attachTo: {
      element: '#nav',
      on: 'bottom'
    },
    buttons: [
      {
        text: 'Skip Tour',
        action: 'cancel',
        classes: 'shepherd-button-secondary'
      },
      {
        text: 'Next',
        action: 'next',
        classes: 'shepherd-button-primary'
      }
    ]
  },
  {
    title: 'Navigation & Tour',
    text: 'This is your main navigation. You can always restart this tour by clicking "Take a Tour" here.',
    attachTo: {
      element: '#tour-button',
      on: 'bottom'
    },
    buttons: [
      {
        text: 'Back',
        action: 'back',
        classes: 'shepherd-button-secondary'
      },
      {
        text: 'Next',
        action: 'next',
        classes: 'shepherd-button-primary'
      }
    ]
  },
  {
    title: 'Hero Section',
    text: 'This is where your agricultural journey begins. Learn about KRISH-e\'s mission to revolutionize farming with AI.',
    attachTo: {
      element: '#hero',
      on: 'bottom'
    },
    buttons: [
      {
        text: 'Back',
        action: 'back',
        classes: 'shepherd-button-secondary'
      },
      {
        text: 'Next',
        action: 'next',
        classes: 'shepherd-button-primary'
      }
    ]
  },
  {
    title: 'About KRISH-e',
    text: 'Discover how KRISH-e combines AI with agricultural expertise to help farmers make data-driven decisions.',
    attachTo: {
      element: '#about',
      on: 'bottom'
    },
    buttons: [
      {
        text: 'Back',
        action: 'back',
        classes: 'shepherd-button-secondary'
      },
      {
        text: 'Next',
        action: 'next',
        classes: 'shepherd-button-primary'
      }
    ]
  },
  {
    title: 'Powerful Features',
    text: 'Explore our comprehensive suite of AI-powered agricultural tools designed to optimize every aspect of farming.',
    attachTo: {
      element: '#features',
      on: 'top'
    },
    buttons: [
      {
        text: 'Back',
        action: 'back',
        classes: 'shepherd-button-secondary'
      },
      {
        text: 'Next',
        action: 'next',
        classes: 'shepherd-button-primary'
      }
    ]
  },
  {
    title: 'Crop Recommendation',
    text: 'Get AI-powered crop suggestions based on soil conditions, climate data, and market trends.',
    attachTo: {
      element: '#feature-crop',
      on: 'top'
    },
    buttons: [
      {
        text: 'Back',
        action: 'back',
        classes: 'shepherd-button-secondary'
      },
      {
        text: 'Next',
        action: 'next',
        classes: 'shepherd-button-primary'
      }
    ]
  },
  {
    title: 'Fertilizer Optimization',
    text: 'Optimize fertilizer usage with smart recommendations that maximize crop nutrition while minimizing costs.',
    attachTo: {
      element: '#feature-fertilizer',
      on: 'top'
    },
    buttons: [
      {
        text: 'Back',
        action: 'back',
        classes: 'shepherd-button-secondary'
      },
      {
        text: 'Next',
        action: 'next',
        classes: 'shepherd-button-primary'
      }
    ]
  },
  {
    title: 'Plant Diagnosis',
    text: 'Use advanced image recognition to identify plant diseases, pests, and nutrient deficiencies instantly.',
    attachTo: {
      element: '#feature-diagnose',
      on: 'top'
    },
    buttons: [
      {
        text: 'Back',
        action: 'back',
        classes: 'shepherd-button-secondary'
      },
      {
        text: 'Next',
        action: 'next',
        classes: 'shepherd-button-primary'
      }
    ]
  },
  {
    title: 'Farming Schedule',
    text: 'Plan and optimize your farming activities with intelligent scheduling for maximum efficiency.',
    attachTo: {
      element: '#feature-schedule',
      on: 'top'
    },
    buttons: [
      {
        text: 'Back',
        action: 'back',
        classes: 'shepherd-button-secondary'
      },
      {
        text: 'Next',
        action: 'next',
        classes: 'shepherd-button-primary'
      }
    ]
  },
  {
    title: 'AI Assistant',
    text: 'Get 24/7 support from our agricultural AI chatbot that answers your farming questions instantly.',
    attachTo: {
      element: '#feature-assistant',
      on: 'top'
    },
    buttons: [
      {
        text: 'Back',
        action: 'back',
        classes: 'shepherd-button-secondary'
      },
      {
        text: 'Next',
        action: 'next',
        classes: 'shepherd-button-primary'
      }
    ]
  },
  {
    title: 'Live Plant Diagnosis Demo',
    text: 'Try our AI-powered plant diagnosis tool! Upload plant images or use sample images to see instant analysis.',
    attachTo: {
      element: '#diagnose',
      on: 'top'
    },
    buttons: [
      {
        text: 'Back',
        action: 'back',
        classes: 'shepherd-button-secondary'
      },
      {
        text: 'Next',
        action: 'next',
        classes: 'shepherd-button-primary'
      }
    ]
  },
  {
    title: 'Screenshots Gallery',
    text: 'See KRISH-e in action across different devices - desktop, tablet, and mobile.',
    attachTo: {
      element: '#screenshots',
      on: 'top'
    },
    buttons: [
      {
        text: 'Back',
        action: 'back',
        classes: 'shepherd-button-secondary'
      },
      {
        text: 'Next',
        action: 'next',
        classes: 'shepherd-button-primary'
      }
    ]
  },
  {
    title: 'Technology Stack',
    text: 'Learn about the cutting-edge technologies powering KRISH-e\'s AI capabilities.',
    attachTo: {
      element: '#tech',
      on: 'top'
    },
    buttons: [
      {
        text: 'Back',
        action: 'back',
        classes: 'shepherd-button-secondary'
      },
      {
        text: 'Next',
        action: 'next',
        classes: 'shepherd-button-primary'
      }
    ]
  },
  {
    title: 'How It Works',
    text: 'Understand the simple workflow from setup to continuous improvement that makes KRISH-e so effective.',
    attachTo: {
      element: '#how',
      on: 'top'
    },
    buttons: [
      {
        text: 'Back',
        action: 'back',
        classes: 'shepherd-button-secondary'
      },
      {
        text: 'Next',
        action: 'next',
        classes: 'shepherd-button-primary'
      }
    ]
  },
  {
    title: 'Get Started',
    text: 'Ready to begin? Here you\'ll find everything you need to start using KRISH-e in your farming operations.',
    attachTo: {
      element: '#get-started',
      on: 'top'
    },
    buttons: [
      {
        text: 'Back',
        action: 'back',
        classes: 'shepherd-button-secondary'
      },
      {
        text: 'Next',
        action: 'next',
        classes: 'shepherd-button-primary'
      }
    ]
  },
  {
    title: 'Join Our Community',
    text: 'KRISH-e is open source! Contribute to the project and connect with fellow agricultural innovators.',
    attachTo: {
      element: '#contribute',
      on: 'top'
    },
    buttons: [
      {
        text: 'Back',
        action: 'back',
        classes: 'shepherd-button-secondary'
      },
      {
        text: 'Next',
        action: 'next',
        classes: 'shepherd-button-primary'
      }
    ]
  },
  {
    title: 'Contact & Support',
    text: 'Need help or have questions? Find all our contact information and support resources in the footer.',
    attachTo: {
      element: '#footer',
      on: 'top'
    },
    buttons: [
      {
        text: 'Back',
        action: 'back',
        classes: 'shepherd-button-secondary'
      },
      {
        text: 'Finish Tour',
        action: 'complete',
        classes: 'shepherd-button-primary'
      }
    ]
  }
];

export const ShepherdTour: React.FC = () => {
  useEffect(() => {
    // Dynamically import Shepherd to avoid SSR issues
    import('shepherd.js').then((Shepherd) => {
      const tour = new Shepherd(tourOptions);
      
      steps.forEach((step) => {
        tour.addStep({
          ...step,
          id: step.title.toLowerCase().replace(/\s+/g, '-'),
        });
      });

      // Auto-start tour on first visit
      const hasSeenTour = localStorage.getItem('krish-e-tour-seen');
      if (!hasSeenTour) {
        setTimeout(() => {
          tour.start();
          localStorage.setItem('krish-e-tour-seen', 'true');
        }, 2000);
      }

      // Listen for tour start event
      const handleTourStart = () => {
        tour.start();
      };

      window.addEventListener('startTour', handleTourStart);

      return () => {
        window.removeEventListener('startTour', handleTourStart);
        tour.complete();
      };
    });
  }, []);

  return null;
};