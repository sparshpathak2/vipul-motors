'use client'

import InsuranceForm from '@/components/Forms/InsuranceForm'
import React from 'react'

export default function page() {
    return (
        <div className='flex flex-col w-full justify-center'>

            <div className='flex flex-col w-full border-b-1 bg-white border-gray-200 items-center gap-2 py-4'>
                <div className='text-xl sm:text-2xl font-semibold'>Car Insurance</div>
                <div className='flex gap-2 items-center'>
                    <a href="/">
                        {/* <Home className='w-[14px] sm:w-[16px] h-auto text-blue-600 hover:text-blue-800 cursor-pointer' /> */}
                        <div className='text-sm text-blue-600 hover:text-blue-800'>Home</div>
                    </a>
                    <div className='text-sm'>/</div>
                    <div className='text-sm'>Car Insurance</div>
                </div>
            </div>

            <div className='flex w-full justify-center'>
                <div className='flex w-full sm:w-[60%] flex-col sm:flex-row sm:justify-center py-4 sm:py-8 px-4 sm:px-0 gap-8 sm:gap-20'>

                    <div className='w-full sm:w-1/2 order-2 sm:order-1'><InsuranceForm /></div>

                    <div className='sm:w-1/2 w-full order-1 sm:order-2 flex flex-col gap-4'>
                        <div className='text-3xl font-semibold'>Protect Your Drive with Maruti Suzuki <span className='text-blue-600'>Car Insurance</span></div>

                        <div className='flex flex-col gap-3'>

                            <div className='flex flex-col gap-2'>
                                {/* <div className='text-md sm:text-lg font-semibold'>Visit Us</div> */}
                                <div>Get comprehensive car insurance with quick claims, cashless repairs, and seamless renewals—trusted by millions of Maruti Suzuki owners across India.</div>
                                <div>Choose from a range of plans tailored to your needs, with end-to-end support and transparency.</div>
                                {/* <div>Drive worry-free, knowing your car is covered by experts who know it best.</div> */}
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
