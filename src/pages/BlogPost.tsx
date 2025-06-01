import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import { blogPosts } from './Blog';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.id === id);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Seattle App Studio Blog`;
    } else {
      navigate('/blog');
    }
  }, [post, navigate]);

  if (!post) return null;

  return (
    <div>
      {/* Hero Section */}
      <Section className="pt-32 md:pt-40 pb-16" background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Button
            variant="outline"
            onClick={() => navigate('/blog')}
            className="mb-8 inline-flex items-center"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Blog
          </Button>

          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <span className="flex items-center">
              <Calendar size={16} className="mr-1" />
              {post.date}
            </span>
            <span className="flex items-center">
              <Clock size={16} className="mr-1" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {post.title}
          </h1>
          <h2 className="text-xl text-blue-600 mb-6">
            {post.subtitle}
          </h2>
          <p className="text-lg text-gray-600 mb-8">By Joe Perez</p>
        </motion.div>
      </Section>

      {/* Featured Image */}
      <Section background="gray" spacing="sm">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </motion.div>
      </Section>

      {/* Content */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
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
    </div>
  );
};

export default BlogPost;