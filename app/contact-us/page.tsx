import ContactForm from '@/components/ContactForm'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

export default function page() {
    return (
        <div className='flex w-full justify-center'>
            <div className='flex w-full sm:w-[60%] flex-col sm:flex-row sm:justify-center py-8 sm:py-16 px-4 sm:px-0 gap-12 sm:gap-20'>

                <div className='sm:w-1/2 w-full flex flex-col gap-4'>
                    <div className='text-3xl font-semibold'>How can we help!</div>

                    <div className='flex flex-col gap-3'>

                        <div className='flex flex-col gap-2'>
                            <div className='text-md sm:text-lg font-semibold'>Visit Us</div>
                            <div className='flex gap-2 text-sm'>
                                <div className='py-1'>
                                    <MapPin size={16} />
                                </div>
                                This is going to be the address of the main branch. asudhhds vshdvoi sdhvh dsoif oishdf hioh
                            </div>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <div className='text-md sm:text-lg font-semibold'>Chat With Us</div>
                            <div className='flex gap-2 text-sm'>
                                <div className='py-1'>
                                    <Mail size={16} />
                                </div>
                                <div className='font-semibold'>vipul@vipulmotors.com</div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <div className='text-md sm:text-lg font-semibold'>Call Us</div>

                            <div className='flex gap-2 text-sm'>
                                <div className='py-1'>
                                    <Phone size={16} />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <div className='font-semibold'>+91 9876543210</div>
                                    <div>Mon-Sat from 9 AM to 8 PM</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='w-full sm:w-1/2'><ContactForm /></div>

            </div>
        </div>
    )
}
