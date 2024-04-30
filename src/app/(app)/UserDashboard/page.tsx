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
    <>

      <div className='flex-row '>
       <SideBar />
        <div className='w-full flex-col'>
          <div className="my-8 lg:mx-auto   rounded lg:w-full max-w-6xl ">
            
            <h1 className="text-4xl font-bold mb-4">Hey {`${username}`}!</h1>

          </div>
          <div className='  ml-40'><TopCards /></div>
        </div>

      </div>

    </>
  );
}
export default UserDashboard;

