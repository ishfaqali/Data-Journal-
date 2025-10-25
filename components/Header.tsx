
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#" className="hover:text-sky-300 transition-colors">
            Journal of Data and Information
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-sky-300 transition-colors">Home</a>
          <a href="#" className="hover:text-sky-300 transition-colors">Archive</a>
          <a href="#" className="hover:text-sky-300 transition-colors">About</a>
          <a href="#" className="hover:text-sky-300 transition-colors">Editorial Board</a>
          <a
            href="#"
            className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded-md transition-colors shadow"
          >
            Submit Manuscript
          </a>
        </nav>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
