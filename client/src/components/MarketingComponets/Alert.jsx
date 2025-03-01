// src/components/Alert.jsx
import React from 'react';

const Alert = React.forwardRef(({ className = '', variant = 'default', ...props }, ref) => {
  const variantStyles = {
    default: 'bg-gray-100 border-gray-200',
    destructive: 'bg-red-50 border-red-200 text-red-800',
    success: 'bg-green-50 border-green-200 text-green-800'
  };

  return (
    <div
      ref={ref}
      role="alert"
      className={`relative w-full rounded-lg border p-4 
        [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] 
        [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 
        ${variantStyles[variant]} ${className}`}
      {...props}
    />
  );
});

const AlertDescription = React.forwardRef(({ className = '', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`text-sm [&_p]:leading-relaxed ${className}`}
      {...props}
    />
  );
});

Alert.displayName = "Alert";
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription };