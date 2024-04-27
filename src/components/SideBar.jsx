import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';


const SideBar = ({children}) => {
    return (
        <div className='flex'>
            <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
                <div className='flex flex-col items-center'>
                    <Link href='/'>
                        <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
                            <img src="images/logo_4.png" alt="" />
                        </div>
                    </Link>
                    <span className='border-b-[1px] border-gray-200 max-w-full h-auto p-2'></span>
                    <Link href='/'>
                        <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block mt-6'>
                            <RxDashboard size={40} />
                        </div>
                    </Link>
                    <Link href='/customers'>
                        <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block mt-6'>
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
                <main className='ml-20 w-full'>{children}</main>
            </div>
           
    );
};

export default SideBar;
