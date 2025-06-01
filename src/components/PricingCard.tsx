import { motion } from 'framer-motion';
import Button from './Button';
import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  index: number;
}

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  popular = false,
  index
}: PricingCardProps) => {
  return (
    <motion.div 
      className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
        popular ? 'border-2 border-blue-500 relative' : 'border border-gray-200'
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {popular && (
        <div className="bg-blue-500 text-white text-center py-1 text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-gray-900">${price}</span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="mb-8 space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <span className={`flex-shrink-0 mr-2 mt-1 ${feature.included ? 'text-green-500' : 'text-gray-300'}`}>
                <Check size={16} />
              </span>
              <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
        <Button 
          variant={popular ? 'primary' : 'outline'} 
          size="lg" 
          to="/contact" 
          className="w-full"
        >
          Get Started
        </Button>
      </div>
    </motion.div>
  );
};

export default PricingCard;