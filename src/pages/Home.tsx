import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Smartphone, Globe, Settings, Zap } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';
import FAQ from '../components/FAQ';

const Home = () => {
  useEffect(() => {
    document.title = 'Seattle App Studio | No-Code Apps & WordPress Sites';
  }, []);

  const projects = [
    {
      title: 'Mountain View Cafe',
      description: 'Custom website with online ordering system and loyalty program integration.',
      imageUrl: 'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg',
      tags: ['WordPress', 'WooCommerce', 'Food & Beverage']
    },
    {
      title: 'SeattleFit Mobile App',
      description: 'Fitness tracking app with workout plans, progress tracking, and community features.',
      imageUrl: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg',
      tags: ['Adalo', 'Mobile App', 'Health & Fitness']
    },
    {
      title: 'Pacific Consulting Group',
      description: 'Professional website with client portal, appointment booking, and resource library.',
      imageUrl: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      tags: ['WordPress', 'Consulting', 'Professional Services']
    }
  ];

  const testimonials = [
    {
      quote: "Seattle App Studio transformed my business with a beautiful website and booking system that was up and running in just two weeks. My clients love how easy it is to use!",
      name: "Sarah Johnson",
      title: "Owner",
      company: "Emerald City Wellness"
    },
    {
      quote: "As a solopreneur, I needed an affordable app solution. Joe delivered exactly what I needed without the enterprise price tag. The process was collaborative and painless.",
      name: "Michael Chen",
      title: "Founder",
      company: "Seattle Home Services"
    },
    {
      quote: "I was impressed by how quickly my idea turned into a working product. The no-code approach saved me thousands compared to traditional development.",
      name: "Lisa Rodriguez",
      title: "Independent Consultant",
      company: "Rodriguez Advisory"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section className="pt-32 md:pt-40 pb-16 md:pb-24" background="white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              No-Code Apps.<br />WordPress Sites.<br />CodeGen Full-Code.<br />Real Results.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We build affordable websites, web apps, and mobile apps for small businesses and solopreneurs in Seattle and beyond. Get professional results without enterprise costs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/contact" size="lg">
                Book Your Free Consultation
              </Button>
              <Button to="/how-it-works" variant="outline" size="lg">
                Learn How It Works <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="/images/joe-giving-presentation.png" 
              alt="Team collaboration" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-5 -left-5 bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg">
              <p className="font-medium">Websites & Apps from $499</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Features Section */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Digital Solutions for Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you need a simple website or a full-featured app, we have the perfect solution for your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Globe className="text-blue-600 h-8 w-8 mb-4" />,
              title: "WordPress Websites",
              description: "Professional, customizable websites for businesses of all sizes."
            },
            {
              icon: <Smartphone className="text-blue-600 h-8 w-8 mb-4" />,
              title: "Mobile Apps",
              description: "Native-feeling apps for iOS and Android without the high cost."
            },
            {
              icon: <Settings className="text-blue-600 h-8 w-8 mb-4" />,
              title: "Web Applications",
              description: "Custom web apps with databases, user accounts, and more."
            },
            {
              icon: <Zap className="text-blue-600 h-8 w-8 mb-4" />,
              title: "Automations",
              description: "Streamline your workflows and save time with smart automations."
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Recent Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent work delivering no-code, low-code, and full-code solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button to="/projects" variant="secondary" size="lg">
            View All Projects
          </Button>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section background="blue">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              company={testimonial.company}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our services and process.
          </p>
        </div>
        
        <FAQ />
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Have more questions? We're here to help.</p>
          <Button to="/contact">
            Contact Us
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Bring Your Idea to Life?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book your free 30-minute consultation today and discover how we can help your business grow online.
          </p>
          <Button to="/contact" size="lg">
            Book Your Free Consultation
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Home;