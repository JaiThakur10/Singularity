'use client'
import { Icons } from "./Icons";
import MaxWidthWarpper from "./MaxWidthWrapper";
import Link from "next/link";
import NavItems from "./NavItems";
import { Button, buttonVariants } from "./ui/button";
import MobileNav from "./MobileNav";
import { ArrowRight } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { User } from "next-auth";
import { useEffect } from "react";
import router from "next/router";



const Navbar =  () => {

    const {data: session} = useSession()
    const user: User = session?.user as User

    
        
     
    

   

    

    return(
        <div className=" bg-black sticky z-50 top-0 inset-x-0 h-16 text-white">
            <header className=" relative bg-black border-b border-gray-200">
                <MaxWidthWarpper>
                    <div className=""> {/*add border here if needed border-b border-gray-200 this classname */}
                        <div className="flex h-16 items-center">
                            {/* TODO: Mobile nav */}
                            <MobileNav/>
                            <div className=" ml-4 flex lg:ml-0">
                                <Link href='/'>
                                    {/* <Icons.logo className="h-10 w-10" /> */}
                                    <img src="images/logo_4.png" alt="" className="h-12 mt-0 "/>
                                </Link>
                            </div>
                            <div className=" hidden z-50 lg:ml-8 lg:block lf:self-stretch">
                                <NavItems />
                            </div>


                            
                            {/** conditional statements where sign-in singout loning create user and other related details are shown if the user is new or already existed */}
                            <div className=" ml-auto flex items-center">
                                <div className=" hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    {session? (<>
                                    
                                    <span className='mr-4'>Welcome {user?.username || user?.email} !</span>
                                    <Button className={buttonVariants({
                                    variant: 'ghost',
                                    className: 'bg-black'
                                })}
                                    onClick={() => signOut()}
                                    
                                    >Sign Out</Button>
                                    </>) : (<Link href='/sign-in' className={buttonVariants({
                                    variant: 'ghost'
                                  })}>Sign in</Link>)}

                                    <span className=" h-6 w-px bg-gray-200"
                                    aria-hidden = 'true'
                                    />

                                    <Link href='/pricing' className={buttonVariants({
                                        variant: 'ghost'
                                    })}>Pricing</Link>

                                    <span className=" h-6 w-px bg-gray-200"
                                    aria-hidden = 'true'
                                    />

                                    {session ? null : (<div className=" flex lg:ml-6">
                                    <span className=" h-6 w-px bg-gray-200"
                                    aria-hidden = 'true'
                                    /></div> ) }
                                    {session? (<Link href='/UserDashboard' className={buttonVariants({
                                        variant: 'ghost',
                                        className: ' bg-[#60A5FA]'
                                    })}>Let&apos; Design <ArrowRight/></Link>) : (<Link href='/sign-up' className={buttonVariants({
                                        variant: 'ghost',
                                        className: ' bg-[#60A5FA]'
                                    })}>Get Started <ArrowRight/></Link>)}
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWarpper>
            </header>
        </div>
    )
}

export default Navbar;