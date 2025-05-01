import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ className = '', ...props }) => (
  <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`} {...props} />
);

export const CardHeader: React.FC<CardProps> = ({ className = '', ...props }) => (
  <div className={`p-6 ${className}`} {...props} />
);

export const CardTitle: React.FC<CardProps> = ({ className = '', ...props }) => (
  <h3 className={`text-xl font-semibold text-gray-900 ${className}`} {...props} />
);

export const CardDescription: React.FC<CardProps> = ({ className = '', ...props }) => (
  <p className={`mt-2 text-gray-600 ${className}`} {...props} />
);

export const CardContent: React.FC<CardProps> = ({ className = '', ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props} />
);

export const CardFooter: React.FC<CardProps> = ({ className = '', ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props} />
); 