// pages/index.js
import React from 'react';
import GreetingCard from '@/components/greetingcard';
import Calendar from '@/components/calender';
import NewsFeed from '@/components/news';
import Homes from '@/components/nav';
import { url } from 'inspector';

export default function Home() {
  const user = {
    name: 'Prince Phil',
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" // Replace with the user's actual image URL
  };

  const events = [
    { id: 1, title: 'SES 25th Anivesary', date: '2024-06-14', description: 'Celebrate timelines and milestones we"ve achieved as a school so far.' },
    { id: 2, title: 'Project Deadline', date: '2024-06-20', description: 'Submit the first project report.' },
    { id: 3, title: 'Presentation', date: '2024-06-22', description: 'Present DSA Sorting to the class @Next Week.' },
  ];

  const articles = [
   { id: 1, title: 'SES 25th Anivesary', date: '2024-06-14', description: 'Celebrate timelines and milestones we"ve achieved as a school so far.' },
    { id: 2, title: 'Project Deadline', date: '2024-06-20', description: 'Submit the first project report.' },
    { id: 3, title: 'Presentation', date: '2024-06-22', description: 'Present DSA Sorting to the class @Next Week.' },
  ];
  return (
    <div className="min-h-screen ">
      <Homes />
      <h1 className="text-4xl font-bold mt-8 mb-4">Dashboard</h1>
      <GreetingCard name={user.name} image={user.image}/>
      {/* <div className="mt-8 w-full">
        <Calendar events={events} />
      </div> */}
      <div className="mt-8 w-full">
        <NewsFeed articles={articles} />
      </div>
    </div>
  );
}
