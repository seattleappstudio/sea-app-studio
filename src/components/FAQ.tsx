import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span className="ml-6 flex-shrink-0 text-gray-500">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mt-3 pr-12">
              <p className="text-gray-600">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems = [
    {
      question: "What is no-code or low-code development?",
      answer: "No-code and low-code development uses visual interfaces and modern tools to build websites and apps without traditional coding. It enables faster development and empowers non-technical users to create functional digital products."
    },
    {
      question: "Is WordPress considered a no-code or low-code platform?",
      answer: "Yes. WordPress is often seen as a low-code or even no-code platform, depending on how you use it. Most small business sites can be built with themes and plugins—no coding needed. But for custom features, some code or expert help (like ours!) can come in handy."
    },
    {
      question: "What is next-generation software development?",
      answer: "We use AI-assisted full-code development for prototypes and for some complete projects--no drag-and-drop builders, but real, production-grade bespoke code written by LLMs based on your vision."
    },
    {
      question: "How long does it take to build a website or app?",
      answer: "Simple websites or apps can be delivered in as little as 1 week. More complex projects with custom features typically take 2-4 weeks. We'll provide a clear timeline during our initial consultation based on your specific requirements."
    },
    {
      question: "Do I need technical knowledge to maintain my site/app?",
      answer: "No! We build user-friendly solutions that are easy to update and maintain, even without technical expertise. We also provide training and documentation, and offer optional maintenance plans if you prefer us to handle updates."
    },
    {
      question: "Can you integrate with my existing systems?",
      answer: "Yes! We can integrate with many popular services like payment processors, CRMs, email marketing tools, and more. During our consultation, we'll discuss your existing systems and how best to connect them to your new solution."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <div className="rounded-lg overflow-hidden">
        {faqItems.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            toggleOpen={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;