import React from 'react'

function TopCards() {
    return (
        <div>
            <div className='grid lg:grid-cols-5 gap-4 p-4'>
                <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
                    <div className='flex flex-col w-full pb-4'>
                        <p className='text-2xl font-bold'>$</p>
                        <p className='text-gray-600'>Billing and Payments</p>
                    </div>
                    <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                        <span className='text-green-700 text-lg'>&rarr;</span>
                    </p>
                </div>
                <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
                    <div className='flex flex-col w-full pb-4'>
                        <p className='text-2xl font-bold'>#</p>
                        <p className='text-gray-600'>Help Desk</p>
                    </div>
                    <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                        <span className='text-green-700 text-lg'>&rarr;</span>
                    </p>
                </div>
                <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
                    <div className='flex flex-col w-full pb-4'>
                        <p className='text-2xl font-bold'>%</p>
                        <p className='text-gray-600'>Offers</p>
                    </div>
                    <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                        <span className='text-green-700 text-lg'>&rarr;</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TopCards
