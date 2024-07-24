// components/GreetingCard.js
import React from 'react'; 

import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import SignInForm from '@/app/signin/page';


interface GreetingCardProps {
  name: string;
  image: string;
}

// const GreetingCard: React.FC<GreetingCardProps> = ({ name, image }) => {

// }


const home = async() => {
  const session = await getServerSession(authOptions);
    const user = undefined
  return (
    <>
  {session?.user ? (                       
    <div className="  ml-3 bg-red w-1 max-w-4xl fixed left-0 top-0  border-b  border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border-0 lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 py-24"> 
  <h2 className="text-xl ">Hello  <span className='font-bold'>{session?.user.fname} {session?.user.lname}</span>!</h2>
   <p className=""> <span className='font-xl'>{session?.user.studentId}</span> is your student ID</p>
   </div>        
 ) : (  
  <SignInForm/>
 )}
 </>
)
  
}
export default home;
