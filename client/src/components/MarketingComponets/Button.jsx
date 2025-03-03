// src/components/Button.jsx
import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', // primary, secondary, outline
  size = 'medium', // small, medium, large
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-[#E76F51] hover:bg-[#E76F51]/90 text-white',
    secondary: 'bg-[#8A2E88] hover:bg-[#8A2E88]/90 text-white',
    outline: 'border-2 border-[#8A2E88] text-[#8A2E88] hover:bg-[#8A2E88] hover:text-white'
  };

  const sizes = {
    small: 'text-sm px-3 py-1',
    medium: 'text-sm px-4 py-2',
    large: 'text-base px-6 py-3'
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button 
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;