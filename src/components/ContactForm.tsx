import { useState } from 'react';
import { z } from 'zod';
import validator from 'validator';
import Button from './Button';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().refine(val => !val || validator.isMobilePhone(val), {
    message: 'Invalid phone number'
  }),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  businessType: z.string().min(1, 'Please select a business type'),
  projectSize: z.string().min(1, 'Please select a project size'),
  honeypot: z.string().max(0, 'Bot detected')
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    businessType: '',
    projectSize: '',
    honeypot: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when field is modified
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    try {
      formSchema.parse(formData);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate limiting
    const now = Date.now();
    if (now - lastSubmitTime < 1000) { // 1 second cooldown
      setErrors({ message: 'Please wait before submitting again' });
      return;
    }
    if (submitCount >= 5) { // Max 5 submissions per session
      setErrors({ message: 'Maximum submission limit reached' });
      return;
    }

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulated API call with artificial delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real application, you would send the data to your server here
      console.log('Form submitted:', formData);
      
      // Update submission tracking
      setSubmitCount(prev => prev + 1);
      setLastSubmitTime(now);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        businessType: '',
        projectSize: '',
        honeypot: ''
      });
      
      alert('Thank you for your message! We will get back to you soon.');
    } catch (error) {
      setErrors({
        message: 'An error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
      {/* Honeypot field */}
      <div className="hidden">
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="John Doe"
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error\" className="mt-1 text-sm text-red-600\" role="alert">
            {errors.name}
          </p>
        )}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="john@example.com"
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error\" className="mt-1 text-sm text-red-600\" role="alert">
            {errors.email}
          </p>
        )}
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="(206) 555-1234"
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error\" className="mt-1 text-sm text-red-600\" role="alert">
            {errors.phone}
          </p>
        )}
      </div>
      
      <div>
        <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
          Business Type *
        </label>
        <select
          id="businessType"
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          required
          className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
            errors.businessType ? 'border-red-500' : 'border-gray-300'
          }`}
          aria-describedby={errors.businessType ? 'businessType-error' : undefined}
        >
          <option value="">Select your business type</option>
          <option value="small-business">Small Business</option>
          <option value="solopreneur">Solopreneur</option>
          <option value="consultant">Consultant</option>
          <option value="service-provider">Service Provider</option>
          <option value="other">Other</option>
        </select>
        {errors.businessType && (
          <p id="businessType-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.businessType}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="projectSize" className="block text-sm font-medium text-gray-700 mb-1">
          Project Size *
        </label>
        <select
          id="projectSize"
          name="projectSize"
          value={formData.projectSize}
          onChange={handleChange}
          required
          className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
            errors.projectSize ? 'border-red-500' : 'border-gray-300'
          }`}
          aria-describedby={errors.projectSize ? 'projectSize-error' : undefined}
        >
          <option value="">Select your project size</option>
          <option value="starter">Starter ($499)</option>
          <option value="growth">Growth ($999)</option>
          <option value="pro">Pro ($1,999)</option>
          <option value="custom">Custom Quote Needed</option>
          <option value="unknown">I Don't Know</option>
        </select>
        {errors.projectSize && (
          <p id="projectSize-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.projectSize}
          </p>
        )}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Your Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Tell us about your project needs..."
          aria-describedby={errors.message ? 'message-error' : undefined}
        ></textarea>
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.message}
          </p>
        )}
      </div>
      
      <div>
        <Button 
          variant="primary" 
          size="lg" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>

      {/* Required fields notice */}
      <p className="text-sm text-gray-600">
        * Required fields
      </p>
    </form>
  );
};

export default ContactForm;