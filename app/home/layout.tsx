// pages/index.js
import React from 'react';
import GreetingCard from '@/components/greetingcard';
import Calendar from '@/components/calender';
import NewsFeed from '@/components/news';
import Homes from '@/components/nav';

export default function Home() {
  const user = {
    name: 'Prince Phil',
    image: 'https://via.placeholder.com/150', // Replace with the user's actual image URL
  };

  const events = [
    { id: 1, title: 'Team Meeting', date: '2024-06-14', description: 'Discuss project milestones and timelines.' },
    { id: 2, title: 'Project Deadline', date: '2024-06-20', description: 'Submit the final project report.' },
    { id: 3, title: 'Client Presentation', date: '2024-06-22', description: 'Present the project to the client.' },
  ];

  const articles = [
    { id: 1, title: 'New Project Launch', date: '2024-06-10', description: 'We are excited to announce the launch of our new project.', url: '#' },
    { id: 2, title: 'Team Expansion', date: '2024-06-12', description: 'We have expanded our team with new talented members.', url: '#' },
    { id: 3, title: 'Quarterly Results', date: '2024-06-15', description: 'Our quarterly results have shown significant growth.', url: '#' },
  ];

  return (
    <div className="min-h-screen ">
      <Homes />
      <h1 className="text-4xl font-bold mt-8 mb-4">Dashboard</h1>
      <GreetingCard user={user} />
      {/* <div className="mt-8 w-full">
        <Calendar events={events} />
      </div> */}
      <div className="mt-8 w-full">
        <NewsFeed articles={articles} />
      </div>
    </div>
  );
}
