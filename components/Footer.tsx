import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <div className='flex flex-col w-full bg-black text-white'>
            <div className="flex flex-col sm:flex-row w-full justify-between border-t-1 border-t-white px-4 sm:px-16 py-8 gap-8">

                <div className='w-full sm:w-2/5 flex flex-col gap-1'>
                    {/* <Image
                        width={64}
                        height={64}
                        alt='Vipul Motors Logo'
                        // className='h-10'
                        // className='h-full w-full'
                        className='h-24 w-24'
                        // src='/Vipul-Motors-Logo-1.svg'
                        src='/Vipul-Motors-Logo-2.svg'
                    /> */}
                    <div className='flex flex-col gap-2'>
                        <span className='text-2xl font-semibold'>DRIVEN BY TRUST.</span>
                        <span className='text-2xl font-semibold'>DEFINED BY EXCELLENCE.</span>
                    </div>
                </div>

                <div className='w-full sm:w-2/5 flex flex-col sm:flex-row gap-8 sm:gap-0'>

                    <div className='w-full sm:w-1/2 flex flex-col gap-2'>
                        <div className='font-semibold'>Important Links</div>
                        <div className='flex flex-col gap-1 text-sm'>
                            <div>About Us</div>
                            <div>Contact Us</div>
                            <div>Terms & Conditions</div>
                            <div>Privacy Policy</div>
                        </div>
                    </div>

                    <div className='w-full sm:w-1/2 flex flex-col gap-2'>
                        <div className='font-semibold'>Contact Details</div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2 text-sm'>
                                <div className='py-1'>
                                    <MapPin size={16} />
                                </div>
                                This is going to be the address of the main branch. asudhhds vshdvoi sdhvh dsoif oishdf hioh
                            </div>
                            <div className='flex gap-2 text-sm'>
                                <div className='py-1'>
                                    <Phone size={16} />
                                </div>
                                +91 9876543210
                            </div>
                            <div className='flex gap-2 text-sm'>
                                <div className='py-1'>
                                    <Mail size={16} />
                                </div>
                                vipul@vipulmotors.com
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='text-sm py-2 text-center border-t-1 border-t-white'>
                Copyright © 2025 Vipul Motors. All rights reserved.
            </div>
        </div>
    )
}
