import TrueValueForm from '@/components/Forms/TrueValueForm'
import React from 'react'

export const metadata = {
    title: "Maruti True Value | Vipul Motors",
    description: "Buy and sell used Maruti Suzuki cars through Vipul Motors’ True Value with complete trust, inspection, and certification.",
};


export default function page() {
    return (
        <div className='flex flex-col w-full justify-center'>

            {/* <div className='flex flex-col w-full border-b-1 bg-white border-gray-200 items-center gap-2 py-4'>
                <div className='text-xl sm:text-2xl font-semibold'>True Value</div>
                <div className='flex gap-2 items-center'>
                    <a href="/">
                        <div className='text-sm text-blue-600 hover:text-blue-800'>Home</div>
                    </a>
                    <div className='text-sm'>/</div>
                    <div className='text-sm'>True Value</div>
                </div>
            </div> */}

            {/* <div className="relative h-[120px] sm:h-[200px] flex items-center w-full bg-cover bg-center" style={{ backgroundImage: "url('/banner-service.jpg')" }}> */}
            <div className="relative h-[120px] sm:h-[200px] flex items-center w-full bg-white border-b-1 border-gray-200">

                {/* 🔹 Overlay Layer */}
                {/* <div className="absolute inset-0 bg-black/50 z-0" /> */}

                {/* 🔸 Content Over the Overlay */}
                <div className="relative z-10 flex flex-col w-full items-center gap-2">
                    <div className="text-3xl sm:text-4xl font-semibold">True Value</div>
                    <div className="flex gap-2 items-center">
                        <a href="/" className="text-sm underline">Home</a>
                        <div className="text-sm">/</div>
                        <div className="text-sm">True Value</div>
                    </div>
                </div>
            </div>

            <div className='flex w-full justify-center'>
                <div className='flex w-full sm:w-[60%] flex-col sm:flex-row sm:justify-center py-4 sm:py-8 px-4 sm:px-0 gap-8 sm:gap-20'>

                    <div className='w-full sm:w-1/2 order-2 sm:order-1'><TrueValueForm /></div>

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
        </div>
    )
}
