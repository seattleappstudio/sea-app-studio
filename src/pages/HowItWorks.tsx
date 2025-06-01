import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Code, Rocket, CheckCircle, PenTool, Database, Smartphone, Zap } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';

const HowItWorks = () => {
  useEffect(() => {
    document.title = 'How It Works | Seattle App Studio';
  }, []);

  const processes = [
    {
      icon: <Search className="w-12 h-12 text-blue-600" />,
      title: "1. Discover",
      description: "We start with a free consultation to understand your business goals, target audience, and project requirements. We'll discuss timeline, budget, and the best approach for your specific needs."
    },
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: "2. Build",
      description: "Using no-code, low-code, or generative coding tools, we design and build your custom solution. We provide regular updates and collect your feedback throughout the process to ensure the final product meets your expectations."
    },
    {
      icon: <Rocket className="w-12 h-12 text-blue-600" />,
      title: "3. Launch",
      description: "Once approved, we deploy your website or app and provide training on how to use and maintain it. We also offer optional ongoing support and maintenance plans to keep everything running smoothly."
    }
  ];

  const tools = [
    {
      icon: <PenTool className="w-8 h-8 text-blue-600" />,
      name: "WordPress",
      description: "For professional websites with content management systems"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      name: "Bubble",
      description: "For creating powerful web applications and custom solutions"
    },
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      name: "Airtable",
      description: "For flexible databases and content management"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      name: "Make.com",
      description: "For powerful automations and integrations"
    }
  ];

  const benefits = [
    {
      title: "Speed",
      description: "Get your project live in weeks, not months. No-code development accelerates the building process."
    },
    {
      title: "Affordability",
      description: "Pay a fraction of traditional development costs while still getting professional results."
    },
    {
      title: "Flexibility",
      description: "Easily make changes and updates as your business evolves without extensive redevelopment."
    },
    {
      title: "User-Friendly",
      description: "Maintain and update your site or app yourself, even without technical expertise."
    },
    {
      title: "Scalability",
      description: "Start small and scale up as your business grows. Add features and functionality as needed."
    },
    {
      title: "Support",
      description: "Get ongoing assistance and training to help you get the most from your digital solution."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section className="pt-32 md:pt-40 pb-16" background="white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
          >
            How We Bring Your Ideas to Life
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            We've simplified the app and website development process to make it faster, more affordable, and stress-free for small businesses and solopreneurs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button to="/contact" size="lg">
              Book Your Free Consultation
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Process Section */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our 3-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple, transparent approach from start to finish.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                {process.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{process.title}</h3>
              <p className="text-gray-600">{process.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-blue-600 text-white py-3 px-6 rounded-lg inline-flex items-center"
          >
            <CheckCircle className="mr-2" />
            <span className="font-medium">Most projects completed in 2-4 weeks</span>
          </motion.div>
        </div>
      </Section>

      {/* Tools Section */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Toolbox
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We use industry-leading no-code and low-code platforms to create powerful digital solutions without the complexity and cost of traditional development.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg text-center"
            >
              <div className="flex justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="font-semibold mb-2">{tool.name}</h3>
              <p className="text-sm text-gray-600">{tool.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <p className="text-center text-gray-700">
            We also work with AI tools like ChatGPT, generative coding tools, automation platforms, and other specialized solutions depending on your project's specific needs.
          </p>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="blue">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Benefits of Our Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Why choose no-code, low-code, or next-gen development for your business?
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Collaboration Section */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Collaboration is Key
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We believe in working closely with our clients throughout the entire process. Your input and feedback are essential to creating a solution that truly meets your needs.
            </p>
            <ul className="space-y-4">
              {[
                "Regular progress updates and reviews",
                "Clear communication every step of the way",
                "Your feedback incorporated into every iteration",
                "Training and documentation to help you succeed"
              ].map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-green-500 flex-shrink-0 mr-2 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="/images/joe-collaborating.png" 
              alt="Collaboration" 
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book your free 30-minute consultation today. No pressure, no obligation—just a conversation about your business needs and how we might help.
          </p>
          <Button to="/contact" size="lg">
            Book Your Free Consultation
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default HowItWorks;