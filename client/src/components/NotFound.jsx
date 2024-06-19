import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-600 to-indigo-800">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg ">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-6xl font-bold text-gray-800 mb-2 animate-pulse">404</h1>
          <p className="text-2xl text-gray-600 animate-bounce">Page Not Found</p>
        </div>
        <p className="text-gray-700 mb-6 text-center">
          The page you're looking for doesn't seem to exist. Perhaps you mistyped the URL or the page has been moved or deleted.
        </p>
        <div className="flex justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500 transition-colors shadow-md"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;