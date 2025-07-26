'use client'

import RoadsideAssistanceForm from '@/components/Forms/RoadsideAssistanceForm'
import React from 'react'

export default function page() {
    return (
        <div className='flex flex-col w-full justify-center'>

            {/* <div className='flex flex-col w-full border-b-1 bg-white border-gray-200 items-center gap-2 py-4'>
                <div className='text-xl sm:text-2xl font-semibold'>Roadside Assistance</div>
                <div className='flex gap-2 items-center'>
                    <a href="/">
                        <div className='text-sm text-blue-600 hover:text-blue-800'>Home</div>
                    </a>
                    <div className='text-sm'>/</div>
                    <div className='text-sm'>Roadside Assistance</div>
                </div>
            </div> */}

            {/* <div className="relative h-[120px] sm:h-[200px] flex items-center w-full bg-cover bg-center" style={{ backgroundImage: "url('/banner-service.jpg')" }}> */}
            <div className="relative h-[120px] sm:h-[200px] flex items-center w-full bg-white border-b-1 border-gray-200">

                {/* 🔹 Overlay Layer */}
                {/* <div className="absolute inset-0 bg-black/50 z-0" /> */}

                {/* 🔸 Content Over the Overlay */}
                <div className="relative z-10 flex flex-col w-full items-center gap-2">
                    <div className="text-3xl sm:text-4xl font-semibold">Roadside Assistance</div>
                    <div className="flex gap-2 items-center">
                        <a href="/" className="text-sm underline">Home</a>
                        <div className="text-sm">/</div>
                        <div className="text-sm">Roadside Assistance</div>
                    </div>
                </div>
            </div>

            <div className='flex w-full justify-center'>
                <div className='flex w-full sm:w-[60%] flex-col sm:flex-row sm:justify-center py-4 sm:py-8 px-4 sm:px-0 gap-8 sm:gap-20'>

                    <div className='w-full sm:w-1/2 order-2 sm:order-1'><RoadsideAssistanceForm /></div>

                    <div className='sm:w-1/2 w-full order-1 sm:order-2 flex flex-col gap-4'>
                        <div className='text-3xl font-semibold'><span className='text-blue-600'>24x7 Roadside Assistance</span> , Wherever You Are</div>

                        <div className='flex flex-col gap-3'>

                            <div className='flex flex-col gap-2'>
                                {/* <div className='text-md sm:text-lg font-semibold'>Visit Us</div> */}
                                <div>Stay protected on every journey with Maruti Suzuki's nationwide Roadside Assistance.</div>
                                <div>From flat tires to breakdowns and towing, we’ve got your back anytime, anywhere.</div>
                                <div>With just one call, help reaches you fast—so you never feel stranded. Available for all Maruti Suzuki cars, across India.</div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
