import { Link } from 'react-router-dom';
import { Code, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code size={28} className="text-blue-400" />
              <span className="text-xl font-bold">Seattle App Studio</span>
            </div>
            <p className="text-gray-400 mb-4">
              Building affordable no-code, low-code, and full-code solutions for small businesses and solopreneurs.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61576578675246" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/seattleappsco" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/in/perezjoseph/" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-blue-400 transition-colors">How It Works</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-blue-400 transition-colors">Pricing</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">Seattle, WA</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">joe@seattleappstudio.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">(206) 555-1234</span>
              </li>
              <li className="flex items-center space-x-3">
                <Globe size={20} className="text-blue-400 flex-shrink-0" />
                <a href="https://seattleaiconsultant.com" className="text-gray-400 hover:text-blue-400 transition-colors">Seattle AI Consulting</a>
              </li>
              <li className="flex items-center space-x-3">
                <Globe size={20} className="text-blue-400 flex-shrink-0" />
                <a href="https://writingwolf.net" className="text-gray-400 hover:text-blue-400 transition-colors">Writing Wolf</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Seattle App Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;