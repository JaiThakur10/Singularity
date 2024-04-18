import MaxWidthWarpper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react'
import Herosection from "@/components/Herosection";




export default function Home() {
  return (
    <>
     <main className="min-h-screen  antialiased bg-grid-white/[0.02] bg-black">
    <Herosection/>
   </main>
    
    <MaxWidthWarpper>
   
      <div className=" py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className=" text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ">Welcome to the Demo Page of {' '}
        <span className=" text-blue-600">
          Singularity
          </span>
          .
          </h1>
          <p className=" mt-6 text-lg max-w-prose text-muted-foreground">Welcome to Demo Page of Singularity. Currently working on backend.
            Now the Auth part is getting covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href ='/products' className={buttonVariants()}> Browse Trending
            </Link>
            <Button variant='ghost'>Our quality promise &rarr;</Button>
          </div>
      </div>
    </MaxWidthWarpper>
    
    </>
  );
}
