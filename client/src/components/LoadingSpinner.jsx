import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-secondary z-50">
      <div className="relative">
        {/* Main spinner */}
        <div className="animate-spin w-16 h-16 border-4 border-[#E76F51] border-t-transparent rounded-full"></div>
        
        {/* School logo or name could be placed in the center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-white font-bold">
          MIS
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;