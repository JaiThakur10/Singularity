'use client';

import MaxWidthWarpper from '@/components/MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import { User } from 'next-auth';
import { useSession } from 'next-auth/react';
<<<<<<< HEAD
import { redirect } from 'next/navigation';

=======

import { useForm } from 'react-hook-form';
import SideBar from '@/components/SideBar';
import TopCards from '@/components/TopCards';
>>>>>>> 8281beea1881dea5737cac968e11f0491b7ae684

function UserDashboard() {


  const { data: session } = useSession();




  // Fetch initial state from the server


  // Handle switch change


  if (!session || !session.user) {
    return <></>
  }

  const { username } = session.user as User;



<<<<<<< HEAD
  
=======
>>>>>>> 8281beea1881dea5737cac968e11f0491b7ae684

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
<<<<<<< HEAD
      <h1 className="text-4xl font-bold mb-4">Hey {`${username}`}! Welcome to Singularity </h1>
=======
>>>>>>> 8281beea1881dea5737cac968e11f0491b7ae684

      </div>

    </>
  );
}
export default UserDashboard;

