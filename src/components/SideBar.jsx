import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { LayoutDashboard, User, User2 } from 'lucide-react';


const SideBar = () => {
    return (
        <div className='flex '>
            <div className='fixed w-20 h-screen p-4  border-r-[8px] flex flex-col justify-between '>
                <div className='flex flex-col items-center '>
                    <Link href='/'>
                        <div className=' h-20 w-20 rounded-full p-1 bg-red-600'>
                            <img width={200} height={200} src="https://api.dicebear.com/8.x/lorelei/svg?seed=Oreo" alt="avatar" />
                        </div>
                    </Link>
                    {/* <span className='border-b-[1px] border-gray-200 max-w-full h-auto p-2 '></span> */}
                    <Link href='/'>
                        <div className=' hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block mt-6 bg-red-600'>
                            <LayoutDashboard size={40} />
                        </div>
                    </Link>
                    <Link href='/customers'>
                        <div className='bg-red-600 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block mt-6'>
                            <RxPerson size={40} />
                        </div>
                    </Link>
                    <Link href='/orders'>
                        <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block mt-6'>
                            <HiOutlineShoppingBag size={40} />
                        </div>
                    </Link>
                    <Link href='/'>
                        <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block mt-6'>
                            <FiSettings size={40} />
                        </div>
                    </Link>
                </div>
            </div>
           
        </div>

    );
};

export default SideBar;
