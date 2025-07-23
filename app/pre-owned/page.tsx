'use client'

import PreOwnedForm from '@/components/Forms/PreOwnedCarsForm'
import React from 'react'

export default function page() {
    return (
        <div className='flex flex-col w-full justify-center'>

            <div className='flex flex-col w-full border-b-1 bg-white border-gray-200 items-center gap-2 py-4'>
                <div className='text-xl sm:text-2xl font-semibold'>Pre Owned Cars</div>
                <div className='flex gap-2 items-center'>
                    <a href="/">
                        {/* <Home className='w-[14px] sm:w-[16px] h-auto text-blue-600 hover:text-blue-800 cursor-pointer' /> */}
                        <div className='text-sm text-blue-600 hover:text-blue-800'>Home</div>
                    </a>
                    <div className='text-sm'>/</div>
                    <div className='text-sm'>Pre Owned Cars</div>
                </div>
            </div>

            <div className='flex w-full justify-center'>
                <div className='flex w-full sm:w-[60%] flex-col sm:flex-row sm:justify-center py-4 sm:py-8 px-4 sm:px-0 gap-8 sm:gap-20'>

                    <div className='w-full sm:w-1/2 order-2 sm:order-1'><PreOwnedForm /></div>

                    <div className='sm:w-1/2 w-full order-1 sm:order-2 flex flex-col gap-4'>
                        <div className='text-3xl font-semibold'>Drive Confidence with Certified <span className='text-blue-600'>Pre-Owned Cars</span></div>

                        <div className='flex flex-col gap-3'>

                            <div className='flex flex-col gap-2'>
                                {/* <div className='text-md sm:text-lg font-semibold'>Visit Us</div> */}
                                <div>Discover certified pre-owned Maruti Suzuki cars that offer quality, reliability, and great value. Each vehicle undergoes a rigorous 376-point check to ensure top-notch condition.</div>
                                <div>Enjoy warranty options, transparent pricing, and hassle-free documentation.</div>
                                <div>Whether you're buying or selling, Maruti Suzuki True Value delivers a trusted experience every step of the way.</div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
