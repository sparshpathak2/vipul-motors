import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from '@tabler/icons-react'
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
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-2'>
                            <span className='text-2xl font-semibold'>DRIVEN BY TRUST.</span>
                            <span className='text-2xl font-semibold'>DEFINED BY EXCELLENCE.</span>
                        </div>
                        <div className='flex gap-2'>
                            <a href="https://www.instagram.com/vipulmotorspvtltd?igsh=MXMxNGJhdnE3dDV3bw%3D%3D&utm_source=qr"><IconBrandInstagram size={28} /></a>
                            <a href="https://www.facebook.com/profile.php?id=100094960847061"><IconBrandFacebook size={28} /></a>
                            <a href="https://www.youtube.com/@vipulmotors8585"><IconBrandYoutube size={28} /></a>
                            <a href="https://www.linkedin.com/company/vipul-motors-privet-limited/?viewAsMember=true"><IconBrandLinkedin size={28} /></a>
                        </div>
                    </div>
                </div>

                <div className='w-full sm:w-2/5 flex flex-col sm:flex-row gap-8 sm:gap-0'>

                    <div className='w-full sm:w-1/2 flex flex-col gap-2'>
                        <div className='font-semibold'>Important Links</div>
                        <div className='flex flex-col gap-1 text-sm'>
                            {/* <a href='/about-us'>About Us</a> */}
                            <a href='/models'>All Models</a>
                            <a href='/service'>Book A Service</a>
                            <a href='/book-test-drive'>Book A Test Drive</a>
                            <a href='/contact-us'>Contact Us</a>
                            {/* <a href='terms-and-conditions'>Terms & Conditions</a> */}
                            {/* <a href='privacy-policy'>Privacy Policy</a> */}
                        </div>
                    </div>

                    <div className='w-full sm:w-1/2 flex flex-col gap-2'>
                        <div className='font-semibold'>Contact Details</div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2 text-sm'>
                                <div className='py-1'>
                                    <MapPin size={16} />
                                </div>
                                <div className='flex flex-col'>
                                    <div>ARENA Vipul Motors Faridabad</div>
                                    <div>Mathura Road, 27/5 KM, NH-19, Faridabad, Haryana 121002</div>
                                </div>
                            </div>
                            <div className='flex gap-2 text-sm'>
                                <div className='py-1'>
                                    <Phone size={16} />
                                </div>
                                <a href="tel:+919876543210" className="font-semibold text-white underline">
                                    +91 9990057744
                                </a>
                            </div>
                            <div className='flex gap-2 text-sm'>
                                <div className='py-1'>
                                    <Mail size={16} />
                                </div>
                                <a href="mailto:contactus@vipulmotors.com" className="font-semibold text-white underline">
                                    contactus@vipulmotors.com
                                </a>
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
