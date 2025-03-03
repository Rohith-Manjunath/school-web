// src/components/Input.jsx
import React from 'react';

const Input = React.forwardRef(({ className = '', ...props }, ref) => {
  return (
    <input
      className={`flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm 
        focus:outline-none focus:ring-2 focus:ring-[#8A2E88] 
        disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };