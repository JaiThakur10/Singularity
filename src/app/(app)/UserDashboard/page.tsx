'use client';

import MaxWidthWarpper from '@/components/MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import { User } from 'next-auth';
import { useSession } from 'next-auth/react';

import { useForm } from 'react-hook-form';
import SideBar from '@/components/SideBar';
import TopCards from '@/components/TopCards';

function UserDashboard() {


  const { data: session } = useSession();




  // Fetch initial state from the server


  // Handle switch change


  if (!session || !session.user) {
    return <div></div>;
  }

  const { username } = session.user as User;




  return (

    // <div className='flex-row '>
    <SideBar>
      <div className="my-8 ml-20 ] lg:mx-auto  bg-white rounded lg:w-full max-w-6xl">
        <div className=' h-20 w-20 rounded-full bg-gray-100 p-1'>
          <img width={200} height={200} src="https://api.dicebear.com/8.x/lorelei/svg?seed=Oreo" alt="avatar" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Hey {`${username}`}! Welcome to Singularity</h1>

      </div>
      <div className=' w-1/2 ml-20'><TopCards /></div>
    </SideBar>
    // </div>


  );
}
export default UserDashboard;

