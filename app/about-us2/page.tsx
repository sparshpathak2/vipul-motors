'use client'

import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div className='flex flex-col w-full justify-center'>

            <div className='flex flex-col w-full border-b-1 bg-white border-gray-200 items-center gap-2 py-4'>
                <div className='text-xl sm:text-2xl font-semibold'>About Us</div>
                <div className='flex gap-2 items-center'>
                    <a href="/">
                        {/* <Home className='w-[14px] sm:w-[16px] h-auto text-blue-600 hover:text-blue-800 cursor-pointer' /> */}
                        <div className='text-sm text-blue-600 hover:text-blue-800'>Home</div>
                    </a>
                    <div className='text-sm'>/</div>
                    <div className='text-sm'>About Us</div>
                </div>
            </div>

            <div className='flex w-full justify-center'>
                <div className='flex w-full sm:w-[90%] flex-col sm:justify-center py-4 sm:py-8 px-4 sm:px-0 gap-6 sm:gap-20'>

                    {/* <div className='sm:w-1/2 w-full flex flex-col gap-4'> */}
                    <div className='w-full flex flex-col gap-4'>
                        <div className='text-3xl font-semibold'>DRIVEN BY TRUST. DEFINED BY EXCELLENCE.</div>

                        <div className="flex flex-col gap-2">
                            <div>
                                Vipul Motors – Driven by Trust, Defined by Service
                            </div>
                            <div>
                                Established in 1987, Vipul Motors is a leading and trusted dealership of Maruti Suzuki, known for delivering outstanding customer experiences across every touchpoint. With a legacy of over three decades, we have built our reputation on the pillars of honesty, commitment, and customer-first thinking.
                            </div>
                            <div>
                                Our growing footprint includes 19 showrooms and 30 workshops strategically located across Delhi, Noida, Gurgaon, Faridabad, Jaipur, Dausa, and Bikaner. We proudly represent the full Maruti Suzuki portfolio—Arena, Nexa, True Value, and Service—ensuring that every customer finds the right car and continued care throughout their ownership journey.
                            </div>
                            <div>
                                At Vipul Motors, customer satisfaction is at the core of everything we do. From personalized consultations and hassle-free buying processes to prompt after-sales support and efficient servicing, we go the extra mile to make car ownership truly joyful and worry-free.
                            </div>
                            <div>
                                Our strength lies in our dedicated team of professionals who treat every customer like family—listening, advising, and supporting with empathy and accountability. Over the years, our unwavering focus on building lasting relationships has earned us the trust of thousands of happy customers.
                            </div>
                            <div>
                                We believe that buying a car is not just a transaction—it’s a relationship. And at Vipul Motors, that relationship begins with trust and grows through exceptional service.
                            </div>
                        </div>

                    </div>

                    {/* <div className="flex flex-col sm:flex-row bg-white mx-4 sm:mx-16 my-2">

                        <div className="w-full sm:w-2/5 h-[240px] sm:h-full">
                            <Image
                                width={400}
                                height={400}
                                alt='anniversary'
                                src='/vipul-motors-gallery-11.jpeg'
                                className="w-full h-[240px] sm:h-full object-cover object-left"
                            />
                        </div>

                        <div className="flex w-full sm:w-3/5 flex-col gap-4 p-4 sm:px-12 sm:py-8 justify-between">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-semibold">DRIVEN BY TRUST. DEFINED BY EXCELLENCE.</h2>
                                <div className="flex flex-col gap-2">
                                    <div>
                                        Vipul Motors – Driven by Trust, Defined by Service
                                    </div>
                                    <div>
                                        Established in 1987, Vipul Motors is a leading and trusted dealership of Maruti Suzuki, known for delivering outstanding customer experiences across every touchpoint. With a legacy of over three decades, we have built our reputation on the pillars of honesty, commitment, and customer-first thinking.
                                    </div>
                                    <div>
                                        Our growing footprint includes 19 showrooms and 30 workshops strategically located across Delhi, Noida, Gurgaon, Faridabad, Jaipur, Dausa, and Bikaner. We proudly represent the full Maruti Suzuki portfolio—Arena, Nexa, True Value, and Service—ensuring that every customer finds the right car and continued care throughout their ownership journey.
                                    </div>
                                    <div>
                                        At Vipul Motors, customer satisfaction is at the core of everything we do. From personalized consultations and hassle-free buying processes to prompt after-sales support and efficient servicing, we go the extra mile to make car ownership truly joyful and worry-free.
                                    </div>
                                    <div>
                                        Our strength lies in our dedicated team of professionals who treat every customer like family—listening, advising, and supporting with empathy and accountability. Over the years, our unwavering focus on building lasting relationships has earned us the trust of thousands of happy customers.
                                    </div>
                                    <div>
                                        We believe that buying a car is not just a transaction—it’s a relationship. And at Vipul Motors, that relationship begins with trust and grows through exceptional service.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> */}

                    {/* <div className='flex flex-col gap-4 w-full sm:w-1/2'> */}
                    {/* <div className='flex flex-col gap-4 w-full'>
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
                                    <a href="mailto:contactus@vipulmotors.com" target="_blank" className="font-semibold text-blue-600 underline">
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
                                        <a href="tel:+919990057744" target="_blank" className="font-semibold text-blue-600 underline">
                                            +91 9990057744
                                        </a>
                                        <div>Mon-Sat from 9 AM to 8 PM</div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <ContactForm />
                    </div> */}

                </div>
            </div>
        </div>
    )
}
