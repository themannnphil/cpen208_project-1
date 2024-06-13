// components/GreetingCard.js
import React from 'react'; 
import image from "@/public/vercel.svg";

interface GreetingCardProps {
  name: string;
  image: string;
}

const GreetingCard: React.FC<GreetingCardProps> = ({ name, image }) => {
  return (
    <div className="rounded-2xl  ml-3 bg-red w-1 max-w-4xl fixed left-0 top-0  border-b  border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 py-24">
      <img src={image} alt={name} className="w-16 h-16 rounded-full mr-4" />
      <div>
        <h2 className="text-xl font-bold">Hello, {name}!</h2>
        <p className="text-gray-600">Good Day</p>
      </div>
    </div>
  );
}

export default GreetingCard;
