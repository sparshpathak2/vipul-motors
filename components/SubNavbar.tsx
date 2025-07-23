import { Clock, Mail, Phone } from 'lucide-react'
import React from 'react'

export default function SubNavbar() {
    return (
        <div className='flex w-full py-2 px-2 sm:px-16 border-b border-gray-200 text-[15px] justify-end'>
            <div className='flex gap-4 h-full'>
                <div className='flex gap-2 items-center'>
                    <Phone size={14} className='text-blue-700' />
                    <div className='text-sm'>+91 9990057744</div>
                </div>
                <div className='flex gap-2 items-center'>
                    <Mail size={14} className='text-blue-700' />
                    <div className='text-sm'>contactus@vipulmotors.com</div>
                </div>
                <div className='flex gap-2 items-center'>
                    <Clock size={14} className='text-blue-700' />
                    <div className='text-sm'>Mon-Sun: 9AM-7PM</div>
                </div>
            </div>
        </div>
    )
}
