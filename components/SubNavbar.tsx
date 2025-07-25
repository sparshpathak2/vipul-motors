import { Clock, Mail, Phone } from 'lucide-react'
import React from 'react'

export default function SubNavbar() {
    return (
        <div className='flex w-full py-2 px-2 sm:px-16 border-b border-gray-200 text-[15px] justify-end'>
            <div className='flex gap-4 h-full'>
                <div className='flex gap-2 items-center'>
                    <Phone size={14} className='text-blue-700' />
                    <a href="tel:+919876543210" className="text-sm font-semibold text-blue-600">
                        +91 9876543210
                    </a>
                </div>
                <div className='flex gap-2 items-center'>
                    <Mail size={14} className='text-blue-700' />
                    <a href="mailto:contactus@vipulmotors.com" className="text-sm font-semibold text-blue-600">
                        contactus@vipulmotors.com
                    </a>
                </div>
                <div className='flex gap-2 items-center'>
                    <Clock size={14} className='text-blue-700' />
                    <div className='text-sm'>Mon-Sun: 9AM-7PM</div>
                </div>
            </div>
        </div>
    )
}
