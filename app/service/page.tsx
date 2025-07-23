'use client'

import ServiceForm from '@/components/Forms/ServiceForm'
import React from 'react'

export default function page() {
    return (
        <div className='flex w-full justify-center'>
            <div className='flex w-full sm:w-[60%] flex-col sm:flex-row sm:justify-center py-8 sm:py-16 px-4 sm:px-0 gap-10 sm:gap-20'>

                <div className='w-full sm:w-1/2 order-2 sm:order-1'><ServiceForm /></div>

                <div className='sm:w-1/2 w-full order-1 sm:order-2 flex flex-col gap-4'>
                    <div className='text-3xl font-semibold'>Keep Your Car Running Like New with <span className='text-blue-600'>Maruti Suzuki World Class Service Centers</span></div>

                    <div className='flex flex-col gap-3'>

                        <div className='flex flex-col gap-2'>
                            {/* <div className='text-md sm:text-lg font-semibold'>Visit Us</div> */}
                            <div>Ensure smooth, safe, and reliable drives with Maruti Suzuki’s expert car servicing. Get access to trained technicians, genuine parts, and service centers across India.</div>
                            <div>Book services online, track service history, and enjoy transparent pricing. Your car deserves the best care—because every journey begins with confidence.</div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
