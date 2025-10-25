
import React from 'react';
import { Article } from '../types';
import { DocumentTextIcon } from './IconComponents';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <header>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          {article.title}
        </h2>
        <p className="text-sm text-gray-500 mb-3">{article.publicationDate}</p>
        <div className="text-md text-sky-700 font-medium mb-4">
          {article.authors.join(', ')}
        </div>
      </header>
      <p className="text-gray-700 leading-relaxed mb-4">
        {article.abstract}
      </p>
      <footer className="flex flex-wrap items-center justify-between">
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
          {article.keywords.map((keyword) => (
            <span key={keyword} className="bg-gray-100 text-gray-600 text-xs font-semibold px-2.5 py-1 rounded-full">
              {keyword}
            </span>
          ))}
        </div>
        <a 
          href={`https://doi.org/${article.doi}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center bg-slate-800 hover:bg-slate-900 text-white font-semibold py-2 px-4 rounded-md transition-colors text-sm"
        >
          <DocumentTextIcon className="w-4 h-4 mr-2" />
          View PDF
        </a>
      </footer>
    </article>
  );
};
