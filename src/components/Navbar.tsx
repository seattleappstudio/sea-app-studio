import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'How', path: '/how-it-works' },
    { name: 'Projects', path: '/projects' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'
      }`}
      role="banner"
    >
      <nav 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            aria-label="Seattle App Studio home"
          >
            <Code size={32} className="text-blue-600" aria-hidden="true" />
            <span className="text-xl font-bold text-gray-900">
              Seattle App Studio
            </span>
          </Link>

          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors font-medium ${
                  location.pathname === link.path
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                aria-current={location.pathname === link.path ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`md:hidden absolute left-0 right-0 top-full bg-white border-b border-gray-200 transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          aria-hidden={!isOpen}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors px-2 py-1 ${
                    location.pathname === link.path
                      ? 'text-blue-600 font-medium'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;