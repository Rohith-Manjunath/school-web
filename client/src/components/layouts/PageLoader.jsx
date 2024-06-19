import React from 'react';

const PageLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="relative w-24 h-24">
      <div className="absolute top-0 left-0 w-full h-full border-4 border-dashed rounded-full border-gray-200 animate-spin"></div>
      <div className="absolute top-0 left-0 w-full h-full border-4 border-solid rounded-full border-secondary animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-secondary">
        Loading...
      </div>
    </div>
  </div>
  );
};

export default PageLoader;