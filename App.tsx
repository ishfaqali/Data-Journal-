
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ArticleCard } from './components/ArticleCard';
import { Footer } from './components/Footer';
import { ARTICLES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <section id="latest-articles" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {ARTICLES.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
