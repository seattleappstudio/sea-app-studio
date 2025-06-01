import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';

interface Project {
  title: string;
  subtitle: string;
  description: string[];
  features: string[];
  imageUrl: string;
  screenshotUrl: string;
  tags: string[];
}

const Projects = () => {
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Our Projects | Seattle App Studio';
  }, []);

  const projects: Project[] = [
    {
      title: "Mountain View Cafe",
      subtitle: "Restaurant Website & Online Ordering System",
      description: [
        "A complete digital transformation for this popular Seattle cafe, featuring an intuitive online ordering system and loyalty program integration.",
        "The new website helped increase online orders by 150% within the first three months and significantly improved customer engagement through the loyalty program."
      ],
      features: [
        "Custom WordPress website with WooCommerce integration",
        "Mobile-optimized ordering system",
        "Customer loyalty program with points tracking",
        "Table reservation system",
        "Menu management system",
        "Integration with POS system"
      ],
      imageUrl: "https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg",
      screenshotUrl: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      tags: ["WordPress", "WooCommerce", "Food & Beverage"]
    },
    {
      title: "SeattleFit Mobile App",
      subtitle: "Fitness Tracking & Community Platform",
      description: [
        "A comprehensive fitness app that helps users track workouts, follow custom training plans, and connect with other fitness enthusiasts.",
        "The app has garnered over 10,000 downloads and maintains a 4.8-star rating on both iOS and Android platforms."
      ],
      features: [
        "Native iOS and Android apps built with Adalo",
        "Workout tracking and progress visualization",
        "Custom training plan generator",
        "Social features and community forums",
        "Integration with fitness wearables",
        "In-app messaging system"
      ],
      imageUrl: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg",
      screenshotUrl: "https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg",
      tags: ["Adalo", "Mobile App", "Health & Fitness"]
    },
    {
      title: "Pacific Consulting Group",
      subtitle: "Professional Services Platform",
      description: [
        "A sophisticated website and client portal for a growing consulting firm, streamlining client onboarding and service delivery.",
        "The platform reduced administrative tasks by 40% and improved client satisfaction scores by 25%."
      ],
      features: [
        "Professional WordPress website",
        "Secure client portal",
        "Document sharing system",
        "Automated appointment booking",
        "Client onboarding workflow",
        "Resource library"
      ],
      imageUrl: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      screenshotUrl: "https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg",
      tags: ["WordPress", "Consulting", "Professional Services"]
    },
    {
      title: "Green Earth Landscaping",
      subtitle: "Service Business Automation",
      description: [
        "A comprehensive business management solution for a landscaping company, automating everything from quote requests to scheduling and invoicing.",
        "The system helped reduce administrative overhead by 60% and improved customer response times by 80%."
      ],
      features: [
        "Custom quote calculator",
        "Automated scheduling system",
        "Customer portal",
        "Service tracking",
        "Invoice automation",
        "Weather-based rescheduling"
      ],
      imageUrl: "https://images.pexels.com/photos/589/garden-grass-lawn-meadow.jpg",
      screenshotUrl: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      tags: ["Automation", "Service Business", "Custom Solution"]
    },
    {
      title: "Emerald City Real Estate",
      subtitle: "Property Management Platform",
      description: [
        "A custom property management solution that streamlines listings, tenant applications, and maintenance requests.",
        "The platform helped reduce vacancy rates by 30% and improved maintenance response times by 50%."
      ],
      features: [
        "Property listing management",
        "Tenant application portal",
        "Maintenance request system",
        "Automated rent collection",
        "Document management",
        "Property analytics dashboard"
      ],
      imageUrl: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      screenshotUrl: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg",
      tags: ["Real Estate", "Property Management", "Custom Platform"]
    },
    {
      title: "Seattle Art Gallery",
      subtitle: "Virtual Gallery & E-commerce",
      description: [
        "An innovative online platform for a local art gallery, featuring virtual exhibitions and secure art sales.",
        "The platform increased online sales by 200% and expanded the gallery's reach to international collectors."
      ],
      features: [
        "Virtual gallery tours",
        "Secure art purchasing system",
        "Artist profiles and portfolios",
        "Exhibition calendar",
        "Art authentication tracking",
        "Collector's dashboard"
      ],
      imageUrl: "https://images.pexels.com/photos/1674049/pexels-photo-1674049.jpeg",
      screenshotUrl: "https://images.pexels.com/photos/20967/pexels-photo.jpg",
      tags: ["E-commerce", "Arts & Culture", "Virtual Experience"]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 md:pt-40 pb-16" background="white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Explore our portfolio of successful projects delivering real results for businesses across various industries.
          </motion.p>
        </div>
      </Section>

      {/* Projects Grid */}
      <Section background="gray">
        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-full">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
                  <h3 className="text-lg text-blue-600 mb-4">{project.subtitle}</h3>
                  
                  {project.description.map((paragraph, i) => (
                    <p key={i} className="text-gray-600 mb-4">{paragraph}</p>
                  ))}
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline"
                    onClick={() => setSelectedScreenshot(project.screenshotUrl)}
                  >
                    View Screenshot
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Screenshot Modal */}
      <AnimatePresence>
        {selectedScreenshot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedScreenshot(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-7xl w-full bg-white rounded-lg overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedScreenshot(null)}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
              >
                <X size={24} />
              </button>
              <img
                src={selectedScreenshot}
                alt="Project Screenshot"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can create something amazing for your business.
          </p>
          <Button to="/contact" size="lg">
            Book Your Free Consultation
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Projects;