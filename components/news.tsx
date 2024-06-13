import React from 'react';
import ArticleCard from '@/components/article';

interface Article {
  id: string;
  title: string;
  description: string;
  url: string;
}

interface NewsFeedProps {
  articles: Article[];
}

const NewsFeed: React.FC<NewsFeedProps> = ({ articles }) => {
  return (
    <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">News Feed</h2>
      {articles.length === 0 ? (
        <p className="text-gray-500">No news articles available.</p>
      ) : (
        articles.map((article) => <ArticleCard key={article.id} article={article} />)
      )}
    </div>
  );
}

export default NewsFeed;
