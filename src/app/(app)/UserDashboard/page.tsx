'use client';

import { User } from 'next-auth';
import { useSession } from 'next-auth/react';

import { useForm } from 'react-hook-form';


function UserDashboard() {
  

  const { data: session } = useSession();

  


  // Fetch initial state from the server


  // Handle switch change
 

  if (!session || !session.user) {
    return <div></div>;
  }

  const { username } = session.user as User;


  

  return (
    <div className="my-8 mx-4 md:mx-8 lg:mx-auto p-6 bg-white rounded w-full max-w-6xl">
        <div className=' h-20 w-20 rounded-full bg-gray-100 p-1'>
            <img width={200}  height={200} src="https://api.dicebear.com/8.x/lorelei/svg?seed=Oreo" alt="avatar" />
        </div>
      <h1 className="text-4xl font-bold mb-4">Hey {`${username}`}! Welcome to the User Dashboard</h1>
      
    </div>
  );
}

export default UserDashboard;