import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  imageUrl?: string;
  index: number;
}

const TestimonialCard = ({ 
  quote, 
  name, 
  title, 
  company, 
  imageUrl, 
  index 
}: TestimonialCardProps) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400">★</span>
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        {imageUrl ? (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
            <span className="text-blue-600 font-medium text-lg">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{title}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;