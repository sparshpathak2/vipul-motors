import { IconBuildingStore, IconCar, IconCarSuv, IconUsers } from '@tabler/icons-react'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const metadata = {
    title: "About Us | Vipul Motors",
    description: "Discover the story behind Vipul Motors – our legacy, values, and commitment to delivering unmatched car buying and ownership experiences.",
};

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
                <div className='flex w-full md:w-[65%] flex-col sm:justify-center py-4 sm:pt-8 sm:pb-16 px-4 md:px-0 gap-12 sm:gap-16'>

                    {/* <div className='sm:w-1/2 w-full flex flex-col gap-4'> */}
                    <div className='w-full flex flex-col sm:flex-row gap-8 sm:gap-4 h-full'>
                        <div className='w-full sm:w-1/3 flex flex-col gap-4 justify-between'>
                            <div className='flex flex-col gap-1'>
                                <div className='text-2xl font-semibold'>DRIVEN BY TRUST.</div>
                                <div className='text-2xl font-semibold'>DEFINED BY EXCELLENCE.</div>
                            </div>

                            <div className="hidden sm:flex w-full flex-col justify-center gap-8">

                                <div className="flex flex-col gap-1 w-full">

                                    <div className="flex gap-4 items-center">
                                        <div className="py-1.5">
                                            <IconUsers size={22} />
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="font-semibold">50 Lakhs+ Happy Customers</div>
                                            {/* <div>Trusted by over 50 lakh satisfied customers across the country.</div> */}
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <div className="py-1">
                                            <IconCar size={22} />
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="font-semibold">16 Arena Showrooms</div>
                                            {/* <div>Widespread presence with 16 Arena showrooms to serve you better.</div> */}
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <div className="py-1">
                                            <IconCarSuv size={22} />
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="font-semibold">8 Nexa Showrooms</div>
                                            {/* <div>Experience premium car buying at our 8 exclusive NEXA showrooms.</div> */}
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <div className="py-1">
                                            <IconBuildingStore size={22} />
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="font-semibold">19 Workshops</div>
                                            {/* <div>Get expert care and service at our 19 authorized workshops.</div> */}
                                        </div>
                                    </div>

                                </div>

                                {/* <Button className='w-fit'>Contact Us</Button> */}
                                <a href="/contact-us" className="group flex gap-2 items-center border-1 bg-blue-600 hover:bg-blue-800 text-white w-fit h-fit px-4 py-3">
                                    <div className="text-sm">Contact Us</div>
                                    <ArrowUpRight size={20} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>

                            </div>

                        </div>

                        <div className="w-full sm:w-2/3 flex flex-col gap-2">
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

                        <div className="flex sm:hidden w-full flex-col justify-center gap-8">

                            {/* <div className="flex flex-col gap-1 w-full"> */}
                            <div className="grid grid-cols-2 gap-1 w-full">

                                <div className="flex flex-col gap-1">
                                    <div className="py-1">
                                        <IconUsers size={36} />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="font-semibold">50 Lakhs+ Happy Customers</div>
                                        {/* <div>Trusted by over 50 lakh satisfied customers across the country.</div> */}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <div className="py-1">
                                        <IconCar size={36} />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="font-semibold">16 Arena Showrooms</div>
                                        {/* <div>Widespread presence with 16 Arena showrooms to serve you better.</div> */}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <div className="py-1">
                                        <IconCarSuv size={36} />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="font-semibold">8 Nexa Showrooms</div>
                                        {/* <div>Experience premium car buying at our 8 exclusive NEXA showrooms.</div> */}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <div className="py-1">
                                        <IconBuildingStore size={36} />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="font-semibold">19 Workshops</div>
                                        {/* <div>Get expert care and service at our 19 authorized workshops.</div> */}
                                    </div>
                                </div>

                            </div>

                            {/* <Button className='w-fit'>Contact Us</Button> */}
                            <a href="/contact-us" className="group flex gap-2 items-center border-1 bg-blue-600 hover:bg-blue-800 text-white w-fit h-fit px-4 py-3">
                                <div className="text-sm">Contact Us</div>
                                <ArrowUpRight size={20} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </a>

                        </div>

                    </div>

                    {/* <div className=''> */}
                    <div className='flex flex-col gap-4'>
                        <div className='text-3xl font-semibold'>Our Team</div>
                        <div className='grid grid-cols-1 sm:grid-cols-3 w-full h-full sm:gap-4 gap-8'>

                            <div className='flex flex-col gap-2'>
                                {/* <div className='bg-gray-300 h-[300px]'></div> */}
                                <div className='h-[360px] w-full'>
                                    <Image
                                        width={200}
                                        height={200}
                                        alt='anniversary'
                                        src='/Mr-Vinit-Beriwala.jpeg'
                                        className="w-full h-full sm:h-full object-cover object-left"
                                    />
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-semibold'>Mr. Vinit Beriwala</div>
                                    <div className='text-sm'>Managing Director, Vipul Motors Pvt. Ltd.</div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2'>
                                {/* <div className='bg-gray-300 h-[300px]'></div> */}
                                <div className='h-[360px] w-full'>
                                    <Image
                                        width={200}
                                        height={200}
                                        alt='anniversary'
                                        src='/Mr-Vitthal-Beriwala.jpeg'
                                        className="w-full h-full sm:h-full object-cover object-left"
                                    />
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-semibold'>Mr. Vitthal Beriwala</div>
                                    <div className='text-sm'>Director, Vipul Motors Pvt. Ltd.</div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2'>
                                {/* <div className='bg-gray-300 h-[300px]'></div> */}
                                <div className='h-[360px] w-full'>
                                    <Image
                                        width={200}
                                        height={200}
                                        alt='anniversary'
                                        src='/Mr-Manan-Kedia.jpeg'
                                        className="w-full h-full sm:h-full object-cover object-left"
                                    />
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-semibold'>Mr. Manan Kedia</div>
                                    <div className='text-sm'>CEO Nexa, Vipul Motors Pvt. Ltd.</div>
                                </div>
                            </div>

                            {/* <div className='flex flex-col gap-2'>
                                <div className='bg-gray-300 h-[300px]'></div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-semibold'>Mrs. Uma Beriwala</div>
                                    <div className='text-sm'>Director, Vipul Motors Pvt. Ltd.</div>
                                </div>
                            </div> */}



                            {/* <div className='flex flex-col gap-2'>
                                <div className='bg-gray-300 h-[300px]'></div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-semibold'>Mrs. Uma Beriwala</div>
                                    <div className='text-sm'>CEO, Vipul Motors Pvt. Ltd.</div>
                                </div>
                            </div> */}

                        </div>
                    </div>
                    {/* </div> */}

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
