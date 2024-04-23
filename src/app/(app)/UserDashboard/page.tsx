'use client';


import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/components/ui/use-toast';

import { ApiResponse } from '@/types/ApiResponse';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import { Loader2, RefreshCcw } from 'lucide-react';
import { User } from 'next-auth';
import { useSession } from 'next-auth/react';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';


function UserDashboard() {


  const { toast } = useToast();

  

  const { data: session } = useSession();

  const form = useForm({
    
  });

  const { register, watch, setValue } = form;


  const fetchAcceptMessages = useCallback(async () => {
   
    try {
      const response = await axios.get<ApiResponse>('/api/accept-messages');
      
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      toast({
        title: 'Error',
        description:
          axiosError.response?.data.message ??
          'Failed to fetch message settings',
        variant: 'destructive',
      });
    } 
  }, [setValue, toast]);

 

  // Fetch initial state from the server


  // Handle switch change
 

  if (!session || !session.user) {
    return <div></div>;
  }

  const { username } = session.user as User;

  const baseUrl = `${window.location.protocol}//${window.location.host}`;
  const profileUrl = `${baseUrl}/u/${username}`;

  

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