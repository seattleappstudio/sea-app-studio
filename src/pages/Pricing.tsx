import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Info } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import PricingCard from '../components/PricingCard';

const Pricing = () => {
  useEffect(() => {
    document.title = 'Pricing | Seattle App Studio';
  }, []);

  const pricingPlans = [
    {
      title: "Starter",
      price: "499",
      description: "Perfect for simple landing pages or one-page websites to establish your online presence.",
      features: [
        { text: "1-page or landing page site/app", included: true },
        { text: "Mobile-responsive design", included: true },
        { text: "Contact form", included: true },
        { text: "Basic SEO setup", included: true },
        { text: "Delivery in 1 week", included: true },
        { text: "Free 30-minute consultation", included: true },
        { text: "14-day support", included: true },
        { text: "Booking/calendar features", included: false },
        { text: "User accounts", included: false },
        { text: "Database functionality", included: false }
      ]
    },
    {
      title: "Growth",
      price: "999",
      description: "For growing businesses that need more pages and basic interactive features.",
      features: [
        { text: "Up to 5 pages or screens", included: true },
        { text: "Mobile-responsive design", included: true },
        { text: "Contact form", included: true },
        { text: "Advanced SEO optimization", included: true },
        { text: "Booking/calendar features", included: true },
        { text: "Payment integration", included: true },
        { text: "Basic automation", included: true },
        { text: "Free 30-minute consultation", included: true },
        { text: "14-day support", included: true },
        { text: "User accounts & database", included: false }
      ],
      popular: true
    },
    {
      title: "Pro",
      price: "1,999",
      description: "For businesses needing full-featured websites or applications with advanced functionality.",
      features: [
        { text: "Full website or app", included: true },
        { text: "Mobile-responsive design", included: true },
        { text: "Advanced features & interactions", included: true },
        { text: "User accounts & login", included: true },
        { text: "Database functionality", included: true },
        { text: "CRM integration", included: true },
        { text: "Advanced automations", included: true },
        { text: "Free 30-minute consultation", included: true },
        { text: "14-day support", included: true },
        { text: "Priority support", included: true }
      ]
    }
  ];

  const addOns = [
    {
      title: "Maintenance Plan",
      price: "$99/month",
      description: "Regular updates, security patches, and content updates (up to 2 hours per month)."
    },
    {
      title: "SEO Package",
      price: "$199",
      description: "Comprehensive SEO setup including keyword research, meta descriptions, and Google Business Profile optimization."
    },
    {
      title: "Content Creation",
      price: "From $99",
      description: "Professional copywriting for your website or app, tailored to your brand voice and audience."
    },
    {
      title: "Graphic Design",
      price: "From $99",
      description: "Custom graphics, illustrations, and visual elements to enhance your website or app's appearance."
    },
    {
      title: "Documentation and Training",
      price: "From $99",
      description: "Comprehensive documentation and personalized training sessions for managing your website or app."
    },
    {
      title: "Custom Feature Development",
      price: "Custom Quote",
      description: "Additional custom features or integrations beyond what's included in your selected package."
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
            Simple Pricing That Grows With You
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Affordable no-code and low-code solutions for every budget. No hidden fees, just transparent pricing and exceptional value.
          </motion.p>
        </div>
      </Section>

      {/* Pricing Plans Section */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the package that best fits your current needs. Not sure which is right for you? Book a free consultation and we'll help you decide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard 
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-10 bg-blue-50 rounded-lg p-6 max-w-3xl mx-auto">
          <div className="flex items-start">
            <Info className="text-blue-600 flex-shrink-0 mr-4 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Need something custom?</h3>
              <p className="text-gray-600 mb-4">
                We offer custom quotes for more complex projects or specific requirements not covered by our standard packages. Contact us to discuss your unique needs.
              </p>
              <Button to="/contact" variant="outline">
                Request Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Add-ons Section */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Optional Add-ons
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your website or app with these additional services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {addOns.map((addon, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{addon.title}</h3>
                <span className="text-blue-600 font-medium">{addon.price}</span>
              </div>
              <p className="text-gray-600">{addon.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Questions About Pricing
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Are there any hidden fees?",
                answer: "No. We believe in complete transparency. The price you see is the price you pay, with no surprise charges. Any additional costs will be discussed and approved before work begins."
              },
              {
                question: "Do you offer payment plans?",
                answer: "Yes! For larger projects, we typically require a 50% deposit to begin work, with the remaining balance due upon completion. For ongoing services, we offer monthly payment options."
              },
              {
                question: "What happens after the 14-day support period?",
                answer: "After the initial 14-day support period, you can purchase our monthly maintenance plan or request support on an as-needed basis at our standard hourly rate."
              },
              {
                question: "Can I upgrade my plan later?",
                answer: "Absolutely! As your business grows, we can add features and functionality to your existing site or app. We'll provide a custom quote based on your specific requirements."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book your free 30-minute consultation today and discover how we can create the perfect digital solution for your business.
          </p>
          <Button to="/contact" size="lg">
            Book Your Free Consultation
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Pricing;