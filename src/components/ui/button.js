// src/components/ui/button.js

import React from 'react';
import classNames from 'classnames';

const Button = ({ children, variant = 'default', size = 'md', className, ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md focus:outline-none';
  const variantStyles = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-100',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100',
  };
  const sizeStyles = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-md',
    lg: 'px-6 py-3 text-lg',
  };

  const combinedClasses = classNames(baseStyles, variantStyles[variant], sizeStyles[size], className);

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
