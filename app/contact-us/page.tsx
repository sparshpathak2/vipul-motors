'use client'

import ContactForm from '@/components/Forms/ContactForm'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

export default function page() {
    return (
        <div className='flex flex-col w-full justify-center'>

            <div className='flex flex-col w-full border-b-1 bg-white border-gray-200 items-center gap-2 py-4'>
                <div className='text-xl sm:text-2xl font-semibold'>Contact Us</div>
                <div className='flex gap-2 items-center'>
                    <a href="/">
                        {/* <Home className='w-[14px] sm:w-[16px] h-auto text-blue-600 hover:text-blue-800 cursor-pointer' /> */}
                        <div className='text-sm text-blue-600 hover:text-blue-800'>Home</div>
                    </a>
                    <div className='text-sm'>/</div>
                    <div className='text-sm'>Contact Us</div>
                </div>
            </div>

            <div className='flex w-full justify-center'>
                <div className='flex w-full sm:w-[60%] flex-col sm:flex-row sm:justify-center py-4 sm:py-8 px-4 sm:px-0 gap-12 sm:gap-20'>

                    <div className='sm:w-1/2 w-full flex flex-col gap-4'>
                        <div className='text-3xl font-semibold'>How can we help!</div>

                        <div className='flex flex-col gap-3'>

                            <div className='flex flex-col gap-2'>
                                <div className='text-md sm:text-lg font-semibold'>Visit Us</div>
                                <div className='flex gap-2 text-sm'>
                                    <div className='py-1'>
                                        <MapPin size={16} />
                                    </div>
                                    <div className='flex flex-col'>
                                        <div>ARENA Vipul Motors Faridabad</div>
                                        <div>Mathura Road, 27/5 KM, NH-19, Faridabad, Haryana 121002</div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className='text-md sm:text-lg font-semibold'>Chat With Us</div>
                                <div className='flex gap-2 text-sm'>
                                    <div className='py-1'>
                                        <Mail size={16} />
                                    </div>
                                    <a href="mailto:contactus@vipulmotors.com" className="font-semibold text-blue-600 underline">
                                        contactus@vipulmotors.com
                                    </a>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className='text-md sm:text-lg font-semibold'>Call Us</div>

                                <div className='flex gap-2 text-sm'>
                                    <div className='py-1'>
                                        <Phone size={16} />
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <a href="tel:+919876543210" className="font-semibold text-blue-600 underline">
                                            +91 9876543210
                                        </a>
                                        <div>Mon-Sat from 9 AM to 8 PM</div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='w-full sm:w-1/2'><ContactForm /></div>

                </div>
            </div>
        </div>
    )
}
