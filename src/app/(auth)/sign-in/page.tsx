'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { signIn } from 'next-auth/react';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { signInSchema } from '@/schemas/signInSchema';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function SignInForm() {

  const [isSubmitting, setIsSubmitting] = useState(false);

  
  const router = useRouter();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      identifier: '',
      password: '',
    },
  });

  const { toast } = useToast();
  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    setIsSubmitting(true);
    const result = await signIn('credentials', {
      redirect: false,
      identifier: data.identifier,
      password: data.password,
    });

    if (result?.error) {
      if (result.error === 'CredentialsSignin') {
        toast({
          title: 'Login Failed',
          description: 'Incorrect username or password',
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Error',
          description: result.error,
          variant: 'destructive',
        });
      }
    }

    if (result?.url) {
      router.replace('/UserDashboard');
    }
    setIsSubmitting(false)
  };

  return (
    <div className="flex justify-center h-[300px] bg-white">
      <div className="w-full max-w-md p-8  bg-white ">
        <div className="text-center mb-10">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 mx-4 mb-2">
          Let&apos;s Get Started
          </h2>
          <p>
            Not a member?{' '}
            <Link href="/sign-up" className="text-blue-600 hover:text-blue-800">
              Sign up 
            </Link>
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              name="identifier"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email | Username</FormLabel>
                  <Input {...field}
                  placeholder='abc@gmail.com'
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <Input type="password"
                  placeholder='••••••••'
                  {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className='bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600  dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]' type="submit">
            {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin " />
                 Signing In
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>
        </Form>

        <div className=' relative mt-6'>
          <div
          aria-hidden= 'true'
          className=' absolute inset-0 flex items-center'>
            <span className=' bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full'/>
          </div>
          <div className=' relative flex justify-center text-xs uppercase '>
            <span className=' bg-background px-2 text-muted-foreground'>
              or
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
}