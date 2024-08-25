import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-10 bg-white rounded-lg shadow-lg animate-bounce-in">
        <h3 className="text-4xl font-bold text-teal-600 mb-4 animate-pulse">404 NOT FOUND</h3>
        <p className="text-gray-700 mb-8 animate-fade-in">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 text-white bg-teal-600 rounded-full shadow-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
