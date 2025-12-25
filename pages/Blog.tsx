import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Link } from 'react-router-dom';

export const Blog = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Eye Health Insights</h1>
          <p className="text-slate-600">Expert advice on vision care, trends, and myopia prevention.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-slate-400 mb-3 space-x-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-slate-600 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                <Link to="#" className="text-medical-700 font-semibold text-sm hover:underline">Read More →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
