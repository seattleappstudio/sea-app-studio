import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  to, 
  className = '',
  onClick,
  disabled,
  ariaLabel 
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';
  
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 border border-transparent disabled:bg-blue-300',
    secondary: 'bg-blue-100 text-blue-700 hover:bg-blue-200 border border-transparent disabled:bg-blue-50',
    outline: 'bg-transparent text-blue-600 hover:bg-blue-50 border border-blue-600 disabled:border-blue-300 disabled:text-blue-300'
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-2',
    md: 'text-base px-5 py-2.5',
    lg: 'text-lg px-6 py-3'
  };
  
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${disabled ? 'cursor-not-allowed' : ''}`;
  
  if (href) {
    return (
      <a 
        href={href} 
        className={styles}
        aria-label={ariaLabel}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        target={href.startsWith('http') ? '_blank' : undefined}
      >
        {children}
      </a>
    );
  }
  
  if (to) {
    return (
      <Link 
        to={to} 
        className={styles}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }
  
  return (
    <button 
      className={styles} 
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;