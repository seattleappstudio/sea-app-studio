import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, Clock } from 'lucide-react';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact | Seattle App Studio';
  }, []);

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
            Let's Connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Book your free consultation or send us a message. We're here to help bring your digital vision to life.
          </motion.p>
        </div>
      </Section>

      {/* Contact Options Section */}
      <Section background="gray">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Calendly Embed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="flex items-center mb-4">
                <Calendar className="text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Book a Free Consultation</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Schedule a 30-minute call to discuss your project needs and how we can help.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg mb-4">
                <div className="flex items-center mb-4">
                  <Clock className="text-blue-600 mr-2" />
                  <span className="text-gray-700 font-medium">Available time slots:</span>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>Monday - Friday: 9:00 AM - 5:00 PM PST</li>
                  <li>Evenings and weekends by appointment</li>
                </ul>
              </div>
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                {/* In a real implementation, this would be replaced with an actual Calendly embed */}
                <div className="text-center p-8">
                  <h3 className="font-medium text-gray-900 mb-2">Calendly Booking Widget</h3>
                  <p className="text-gray-600 text-sm mb-4">This would be replaced with a real Calendly embed in production.</p>
                  <a 
                    href="https://calendly.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Mail className="text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Have questions or ready to discuss your project? Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Contact Information Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to reach us for your convenience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail className="text-blue-600 h-8 w-8 mb-4" />,
                title: "Email",
                content: "hello@seattleappstudio.com",
                description: "For general inquiries and questions"
              },
              {
                icon: <Phone className="text-blue-600 h-8 w-8 mb-4" />,
                title: "Phone & Text",
                content: "(206) 555-1234",
                description: "Call or text us, we reply within 24 hours"
              },
              {
                icon: <MapPin className="text-blue-600 h-8 w-8 mb-4" />,
                title: "Location",
                content: "Greater Seattle Area, WA",
                description: "Serving clients across the US"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg text-center"
              >
                <div className="flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-600 font-medium mb-2">{item.content}</p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Map Section (placeholder) */}
      <Section background="gray" spacing="sm">
        <div className="rounded-lg overflow-hidden shadow-md">
          <div className="bg-gray-200 h-64 flex items-center justify-center">
            <div className="text-center">
              <h3 className="font-medium text-gray-700 mb-2">Map of Seattle Area</h3>
              <p className="text-gray-600 text-sm">This would be replaced with an actual map in production.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Response Time Section */}
      <Section background="white" spacing="sm">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Response Commitment</h3>
            <p className="text-gray-700 mb-4">
              We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please text or call us directly.
            </p>
            <div className="flex justify-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <Clock size={16} className="mr-1" />
                Typically respond in &lt; 12 hours
              </span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;