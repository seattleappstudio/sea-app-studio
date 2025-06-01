import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'gray' | 'blue';
  spacing?: 'sm' | 'md' | 'lg';
}

const Section = ({ 
  children, 
  id, 
  className = '', 
  background = 'white',
  spacing = 'md'
}: SectionProps) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-blue-50',
  };
  
  const spacingClasses = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
  };
  
  return (
    <section 
      id={id}
      className={`${bgColors[background]} ${spacingClasses[spacing]} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;