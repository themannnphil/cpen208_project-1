// components/GreetingCard.js
import React from 'react';


export default function GreetingCard(user:any) {
  return (
    <div className="rounded-2xl  bg-red w-2/3 max-w-4xl fixed left-0 top-0  border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 py-12">
      <img
        className="h-16 w-16 rounded-full"
        src={user.image}
        alt={`${user.name}'s profile`}
      />
      <div>
        <h2 className="text-2xl font-semibold">Hello {user.name},</h2>
        <p className="text-gray-600">Good Day!</p>
      </div>
    </div>
  );
}
