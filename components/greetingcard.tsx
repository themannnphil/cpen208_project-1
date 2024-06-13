import Image from 'next/image';

export default function GreetingCard({ user }) {
  return (
    <div className="flex items-center p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-x-4">
      <div className="flex-shrink-0">
        <Image
          className="h-12 w-12 rounded-full"
          src={user.image}
          alt="User profile picture"
          width={50}
          height={50}
        />
      </div>
      <div>
        <div className="text-xl font-medium text-black">Hello {user.name},</div>
        <p className="text-gray-500">Good Day!</p>
      </div>
    </div>
  );
}
