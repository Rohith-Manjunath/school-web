// src/components/Select.jsx
import React from 'react';

const Select = React.forwardRef(({ className = '', children, ...props }, ref) => {
  return (
    <select
      ref={ref}
      className={`flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm 
        focus:outline-none focus:ring-2 focus:ring-[#8A2E88] 
        disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
});

const SelectTrigger = React.forwardRef(({ className = '', children, ...props }, ref) => {
  return (
    <div ref={ref} className={`relative ${className}`} {...props}>
      {children}
    </div>
  );
});

const SelectValue = React.forwardRef(({ className = '', ...props }, ref) => {
  return (
    <span ref={ref} className={`block truncate ${className}`} {...props} />
  );
});

const SelectContent = React.forwardRef(({ className = '', children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-lg z-50 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

const SelectItem = React.forwardRef(({ className = '', children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`relative flex w-full cursor-pointer select-none items-center px-3 py-2 text-sm
        hover:bg-gray-100 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

Select.displayName = "Select";
SelectTrigger.displayName = "SelectTrigger";
SelectValue.displayName = "SelectValue";
SelectContent.displayName = "SelectContent";
SelectItem.displayName = "SelectItem";

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };