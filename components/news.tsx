import React from 'react';
import ArticleCard from '@/components/article';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

interface Article {
  id: string;
  title: string;
  description: string;
  url: string;
}

interface NewsFeedProps {
  articles: Article[];
}

const NewsFeed: React.FC<NewsFeedProps> = async({ articles }) => {  
  const session = await getServerSession(authOptions);
    const user = undefined
  return (
    <div className="z-20 w-full max-w-5xl ml-3">
       {session?.user ? (                       
                       <>
                        <h2 className="text-2xl font-bold mb-6">News Feed</h2>
      {articles.length === 0 ? (
        <p className="text-gray-500">No news articles available.</p>
      ) : (
        articles.map((article) => <ArticleCard key={article.id} article={article} />)
      )}</>       
                    ) : (
                      <>
                      </>
                    )}
    </div>
  );
}

export default NewsFeed;
