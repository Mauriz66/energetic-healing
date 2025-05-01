import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'default',
  asChild,
  ...props 
}) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors";
  const variantStyles = {
    default: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "border border-purple-600 text-purple-600 hover:bg-purple-50",
    ghost: "text-gray-600 hover:bg-gray-100"
  };

  const Comp = asChild ? 'span' : 'button';

  return (
    <Comp 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}; 