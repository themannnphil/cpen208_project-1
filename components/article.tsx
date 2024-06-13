// components/ArticleCard.js
import React from 'react';
interface articles {
    title: string;
    description: string;
    url: string;
  }

export default function ArticleCard({ article }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-semibold">{article.title}</h3>
      <p className="text-gray-600">{article.date}</p>
      <p className="text-gray-500">{article.summary}</p>
    </div>
  );
}
