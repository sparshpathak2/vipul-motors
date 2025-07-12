import Image from 'next/image'
import React from 'react'

export default function Navbar() {
    return (
        <div className='flex w-full px-16 h-18 justify-between items-center border-b border-gray-200'>
            {/* <div>
                Navbar
            </div> */}
            <a href='/'>
                <Image
                    width={64}
                    height={64}
                    alt='Vipul Motors Logo'
                    // className='h-10'
                    className='h-full w-full'
                    // src='/Logo-5.svg'
                    src='/Vipul-Motors-Logo.png'
                />
            </a>
            <div className='flex gap-8 h-full items-center'>
                {/* <a
                    href="/"
                    className="flex h-full items-center border-b-2 border-transparent hover:border-blue-700 transition"
                >
                    New Cars
                </a> */}

                <div className="relative group h-full">
                    <a
                        href="#"
                        // className="flex h-full items-center border-b-2 border-transparent hover:border-blue-700 transition"
                        className="flex h-full items-center border-b-2 border-transparent"
                    >
                        New Cars
                    </a>
                    <div className="absolute left-0 top-full mt-0 hidden bg-white border border-gray-200 shadow-md group-hover:block z-50 min-w-max">
                        <a
                            href="/corporate/fleet"
                            className="block px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                            Arena
                        </a>
                        <a
                            href="/corporate/lease"
                            className="block px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                            Nexa
                        </a>
                        <a
                            href="/corporate/lease"
                            className="block px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                            Commercial
                        </a>
                    </div>
                </div>

                <a
                    href="/"
                    className="flex h-full items-center border-b-2 border-transparent hover:border-blue-700 transition"
                >
                    Pre Owned
                </a>

                <a
                    href="/"
                    className="flex h-full items-center border-b-2 border-transparent hover:border-blue-700 transition"
                >
                    Service
                </a>

                <a
                    href="/"
                    className="flex h-full items-center border-b-2 border-transparent hover:border-blue-700 transition"
                >
                    Driving School
                </a>

                <a
                    href="/"
                    className="flex h-full items-center border-b-2 border-transparent hover:border-blue-700 transition"
                >
                    Car Loan
                </a>

                <a
                    href="/"
                    className="flex h-full items-center border-b-2 border-transparent hover:border-blue-700 transition"
                >
                    Insurance
                </a>

                {/* <a
                    href="/"
                    className="flex h-full items-center border-b-2 border-transparent hover:border-blue-700 transition"
                >
                    Corporate
                </a> */}

                <div className="relative group h-full">
                    <a
                        href="#"
                        className="flex h-full items-center border-b-2 border-transparent"
                    >
                        Corporate
                    </a>
                    <div className="absolute left-0 top-full hidden bg-white border border-gray-200 shadow-md group-hover:block z-50 min-w-max">
                        <a
                            href="/corporate/fleet"
                            className="block px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                            Contact Us
                        </a>
                        <a
                            href="/corporate/lease"
                            className="block px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                            About Us
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}