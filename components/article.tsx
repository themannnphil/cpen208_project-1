// components/article.tsx
import React from 'react';

interface Article {
  id: string;
  title: string;
  description: string;
  url: string;
}

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="mb-4">
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        <h3 className="text-lg font-semibold">{article.title}</h3>
      </a>
      <p className="text-gray-700">{article.description}</p>
    </div>
  );
}

export default ArticleCard;
 