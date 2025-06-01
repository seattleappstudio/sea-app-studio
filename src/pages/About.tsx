import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Heart, MessageSquare } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';

const About = () => {
  useEffect(() => {
    document.title = 'About | Seattle App Studio';
  }, []);

  const values = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Client Partnership",
      description: "We view every project as a partnership. Your success is our success, and we're committed to understanding your unique needs and goals."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Quality Solutions",
      description: "We never compromise on quality. Our no-code and next-gen solutions are professionally designed and built to the highest standards."
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Passion for Innovation",
      description: "We constantly explore new tools and approaches to deliver better, faster, and more affordable solutions."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
      title: "Clear Communication",
      description: "We believe in transparent, jargon-free communication throughout the entire process."
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
            About Seattle App Studio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Building affordable digital solutions for small businesses and solopreneurs using the power of no-code, low-code, and AI-powered coding tools.
          </motion.p>
        </div>
      </Section>

      {/* Founder Section */}
      <Section background="gray">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Joe Perez
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Joe is a Seattle-based builder using no-code, low-code, and next-gen tools to bring your ideas to life. With decades of experience in both technology and marketing, he bridges the gap between technical possibilities and business needs.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              As a small business advocate, Joe founded Seattle App Studio with a mission to make professional digital solutions accessible to businesses of all sizes—not just those with enterprise budgets.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Joe, Principal and Lead Developer for Seattle App Studio, is also an expert content builder and manager for creating or editing your website copy, ensuring your digital presence communicates your value effectively.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Joe has also worked as a technical communications professional for Microsoft, Google, and Amazon. A Harvard University graduate, he has earned a WebDev certification from the Nucamp Coding Bootcamp.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/perezjoseph/" 
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                LinkedIn Profile
              </a>
              <a 
                href="https://x.com/seattleappsco" 
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Twitter
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src="/images/joe-headshot-for-sas.png" 
                alt="Joe Perez" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-white py-3 px-6 rounded-lg shadow-lg">
                <p className="font-medium text-gray-900">Founder & Lead Developer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Our Story Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              Seattle App Studio was born from a simple observation: small businesses and entrepreneurs were being priced out of professional digital solutions.
            </p>

            <p>
              Traditional web and app development was often too expensive, too slow, and too complex for small business needs. The cost of building an MVP app could easily run an entrepreneur $80,000, with no guarantee of having a useful solution at the end of the road.
            </p>

            <p>
              We saw the emerging no-code and AI-assisted coding movement as a game-changer—a way to democratize app and website development and make it accessible to businesses of all sizes. These tools offered the perfect balance of power, flexibility, and affordability.
            </p>

            <p>
              Since our founding, we've helped dozens of small businesses, solopreneurs, consultants, and service providers establish and enhance their digital presence. Our clients appreciate our straightforward approach, affordable pricing, and focus on delivering solutions that drive real business results.
            </p>

            <p>
              We're proud to be based in Seattle area and we offer in-person meetings when appropriate. Additionally, we work with clients across the United States. When needed for full-code projects, we collaborate with our network of trusted local and offshore specialists to keep costs manageable without compromising quality.
            </p>

            <p>
              Our mission remains constant: to provide small businesses with affordable, professional digital solutions that help them compete and thrive in an increasingly digital world.
            </p>
          </div>
        </div>
      </Section>

      {/* Our Values Section */}
      <Section background="blue">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our work and relationships.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help your business thrive online with affordable, professional digital solutions.
          </p>
          <Button to="/contact" size="lg">
            Book Your Free Consultation
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default About;