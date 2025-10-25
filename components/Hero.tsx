
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 leading-tight">
          Journal of Data and Information
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Advancing the frontiers of data science and information systems through peer-reviewed, high-impact research.
        </p>
      </div>
    </section>
  );
};
