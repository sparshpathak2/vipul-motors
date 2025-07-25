import React from 'react'

const testimonials = [
    {
        name: 'Pankaj Singh',
        text: `Today I bought IGNIS delta from vipul motors. My sales representatives Akash chauhan & Nisha jha gave me great deal. They are reliable, honest and operate with integrity. I recommend them to anyone who is looking for some great mechanics & great deal. Akash did my all paper works very smoothly. He always takes the time to answer any questions I may have, and provides me with all the options available. It was a great experience with them. Thanks guys 😊 💓`,
    },
    {
        name: 'Anju Kumari',
        text: `Aman is very good guy, he delivered my vehicle at very urgent basis, I am so happy with Aman Saxena also I am happy with Nexa Vipul Motors Sec-63, Service.`,
    },
    {
        name: 'Ashish Vind',
        text: `Thnqu so much for such generous time at nexa , this was a great experience for me to have my car delivered in 24hrs and get all the services to the best. Mr Hussain has been the face of excellence to us , my feedback cannot justify how delightful i am . I just wish this diwali 🍟 bring happiness to nexa family. A big thanks and happy diwali.`,
    },
];

export default function Testimonials() {
    return (
        <>
            <div className='flex flex-col gap-8 w-full'>

                <div className='flex flex-col gap-1'>
                    <h2 className='w-full text-3xl text-center font-semibold'>Testimonials</h2>
                    <div className='text-center'>Don't just take our word for it — hear it from our customers!</div>
                </div>

                <div className='hidden sm:flex justify-between gap-16 w-full over-x-hidden'>

                    {testimonials.map((item, index) => (
                        <div key={index} className='flex flex-col gap-4 w-full'>
                            <div className='text-wrap whitespace-pre-line'>{item.text}</div>
                            <div className='flex gap-2 items-center'>
                                <div className='flex w-4 h-4 p-4 bg-slate-400 rounded-full items-center justify-center'>
                                    {item.name.charAt(0)}
                                </div>
                                <div className='flex flex-col'>
                                    <div>{item.name}</div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                {/* Mobile View - Auto Scroll */}
                <div className='sm:hidden w-full overflow-x-auto scroll-smooth whitespace-nowrap no-scrollbar'>
                    <div className='flex gap-4 w-max pb-8'>
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className='flex-shrink-0 w-70 flex flex-col gap-4 border-1 border-gray-200 shadow-md p-4'
                            >
                                <div className='text-wrap whitespace-pre-line'>{item.text}</div>
                                <div className='flex gap-2 items-center'>
                                    <div className='flex w-4 h-4 p-4 bg-slate-400 rounded-full items-center justify-center'>
                                        {item.name.charAt(0)}
                                    </div>
                                    <div className='flex flex-col'>
                                        <div>{item.name}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>



        </>
    )
}
