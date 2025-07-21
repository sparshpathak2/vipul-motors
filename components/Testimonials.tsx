import React from 'react'

export default function Testimonials() {
    return (
        <>
            <div className='flex flex-col gap-8 w-full'>

                <div className='flex flex-col gap-1'>
                    <h2 className='w-full text-3xl text-center font-semibold'>Testimonials</h2>
                    <div className='text-center'>Don't just take our word for it — hear it from our customers!</div>
                </div>

                <div className='hidden sm:flex justify-between gap-16 w-full over-x-hidden'>

                    <div className='flex flex-col gap-4 w-full'>
                        <div>
                            Lorem ipsum dolor sit amet consectetur. In amet risus mi risus habitant porttitor tincidunt. Dui enim faucibus sit orci sollicitudin amet vitae. Id sit duis duis eros vitae ultrices tincidunt id amet. Egestas varius enim scelerisque proin id ipsum.
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='flex w-4 h-4 p-4 bg-slate-400 rounded-full items-center justify-center'>S</div>

                            <div className='flex flex-col'>
                                <div>Lorem ipsum</div>
                                <div>Lorem ipsum dolor</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 w-full'>
                        <div>
                            Lorem ipsum dolor sit amet consectetur. In amet risus mi risus habitant porttitor tincidunt. Dui enim faucibus sit orci sollicitudin amet vitae. Id sit duis duis eros vitae ultrices tincidunt id amet. Egestas varius enim scelerisque proin id ipsum.
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='flex w-4 h-4 p-4 bg-slate-400 rounded-full items-center justify-center'>S</div>

                            <div className='flex flex-col'>
                                <div>Lorem ipsum</div>
                                <div>Lorem ipsum dolor</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 w-full'>
                        <div>
                            Lorem ipsum dolor sit amet consectetur. In amet risus mi risus habitant porttitor tincidunt. Dui enim faucibus sit orci sollicitudin amet vitae. Id sit duis duis eros vitae ultrices tincidunt id amet. Egestas varius enim scelerisque proin id ipsum.
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='flex w-4 h-4 p-4 bg-slate-400 rounded-full items-center justify-center'>S</div>

                            <div className='flex flex-col'>
                                <div>Lorem ipsum</div>
                                <div>Lorem ipsum dolor</div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Mobile View - Auto Scroll */}
                <div className='sm:hidden w-full overflow-x-auto scroll-smooth whitespace-nowrap no-scrollbar'>
                    <div className='flex gap-4 w-max pb-8'>
                        {[1, 2, 3].map((i) => (
                            <div key={i} className='flex-shrink-0 w-70 flex flex-col gap-4 border-1 border-gray-200 shadow-md p-4'>
                                <div className='flex text-wrap'>
                                    Lorem ipsum dolor sit amet consectetur. In amet risus mi risus habitant porttitor tincidunt. Dui enim faucibus sit orci sollicitudin amet vitae. Id sit duis duis eros vitae ultrices tincidunt id amet. Egestas varius enim scelerisque proin id ipsum.
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <div className='flex w-4 h-4 p-4 bg-slate-400 rounded-full items-center justify-center'>S</div>
                                    <div className='flex flex-col'>
                                        <div>Lorem ipsum</div>
                                        <div>Lorem ipsum dolor</div>
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
