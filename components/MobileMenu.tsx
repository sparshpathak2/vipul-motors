'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, Clock, Mail, Menu, Phone, X } from 'lucide-react';
import Link from 'next/link';
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from '@tabler/icons-react';

const MobileMenu = () => {
    const [open, setOpen] = useState(false);
    const [corporateOpen, setCorporateOpen] = useState(false);
    const [newCarsOpen, setNewCarsOpen] = useState(false);

    const toggleMenu = () => setOpen(!open);

    // 🧠 Prevent body scroll when menu is open
    useEffect(() => {
        if (open) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        // Clean up on unmount
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [open]);

    return (
        <div className="lg:hidden relative">
            <button
                onClick={toggleMenu}
                aria-label="Toggle menu"
                className="p-2 focus:outline-none"
            >
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {open && (
                // <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-50">
                // <div className="absolute right-[-8px] mt-2 w-screen bg-white shadow-lg py-2 z-50 h-screen border-t border-black">
                // <div className="fixed flex flex-col justify-between top-18 left-0 w-screen h-screen bg-white shadow-lg z-50">
                <div
                    className="fixed flex flex-col top-18 left-0 w-screen bg-white shadow-lg z-50 overflow-y-auto gap-4"
                    style={{ height: 'calc(100vh - 4.5rem)' }} // 4.5rem = h-18 = 72px
                >
                    <div className='flex flex-col w-full'>
                        <div className="border-b border-gray-200">
                            <button
                                onClick={() => setNewCarsOpen(!newCarsOpen)}
                                className="w-full text-left px-4 py-3 hover:bg-gray-100 flex justify-between items-center"
                            >
                                <span>New Cars</span>
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform ${newCarsOpen ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {newCarsOpen && (
                                <div className="bg-gray-50">
                                    <Link
                                        href="/models?outlet=arena"
                                        className="block pl-6 py-2 border-y border-gray-200 hover:bg-gray-100"
                                        onClick={() => setOpen(false)}
                                    >
                                        Arena
                                    </Link>
                                    <Link
                                        href="/models?outlet=nexa"
                                        className="block pl-6 py-2 border-b border-gray-200 hover:bg-gray-100"
                                        onClick={() => setOpen(false)}
                                    >
                                        Nexa
                                    </Link>
                                    <Link
                                        href="/models?outlet=commercial"
                                        className="block pl-6 py-2"
                                        onClick={() => setOpen(false)}
                                    >
                                        Commercial
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            href="/pre-owned"
                            className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-200"
                            onClick={() => setOpen(false)}
                        >
                            Pre Owned
                        </Link>
                        <Link
                            href="/service"
                            className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-200"
                            onClick={() => setOpen(false)}
                        >
                            Service
                        </Link>
                        <Link
                            href="/outlets"
                            className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-200"
                            onClick={() => setOpen(false)}
                        >
                            Outlets
                        </Link>
                        <Link
                            href="/driving-school"
                            className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-200"
                            onClick={() => setOpen(false)}
                        >
                            Driving School
                        </Link>
                        <Link
                            href="/car-loan"
                            className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-200"
                            onClick={() => setOpen(false)}
                        >
                            Car Loan
                        </Link>
                        <Link
                            href="/insurance"
                            className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-200"
                            onClick={() => setOpen(false)}
                        >
                            Insurance
                        </Link>
                        <Link
                            href="/contact-us"
                            className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-200"
                            onClick={() => setOpen(false)}
                        >
                            Contact Us
                        </Link>

                        {/* <div className="border-b border-gray-200">
                            <button
                                onClick={() => setCorporateOpen(!corporateOpen)}
                                className="w-full text-left px-4 py-3 hover:bg-gray-100 flex justify-between items-center"
                            >
                                <span>Corporate</span>
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform ${corporateOpen ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {corporateOpen && (
                                <div className="bg-gray-50">
                                    <Link
                                        href="/contact-us"
                                        className="block pl-6 py-2 border-y border-gray-200 hover:bg-gray-100"
                                        onClick={() => setOpen(false)}
                                    >
                                        Contact Us
                                    </Link>
                                    <Link
                                        href="/"
                                        className="block pl-6 py-2"
                                        onClick={() => setOpen(false)}
                                    >
                                        About Us
                                    </Link>
                                </div>
                            )}
                        </div> */}
                    </div>

                    <div className='flex flex-col gap-8 h-full p-4'>
                        <div className='flex flex-col gap-1'>
                            <div className='italic'>CONTACT DETAILS</div>
                            <div className='flex gap-2 items-center'>
                                <Phone size={16} className='text-blue-700' />
                                {/* <div>+91 9990057744</div> */}
                                <a href="tel:+919990057744" target="_blank" className="font-semibold text-blue-600 underline">
                                    +91 9990057744
                                </a>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Mail size={16} className='text-blue-700' />
                                {/* <div>contactus@vipulmotors.com</div> */}
                                <a href="mailto:contactus@vipulmotors.com" target="_blank" className="font-semibold text-blue-600 underline">
                                    contactus@vipulmotors.com
                                </a>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Clock size={16} className='text-blue-700' />
                                <div>Mon-Sun: 9AM-7PM</div>
                            </div>
                        </div>

                        <div className='flex gap-3 items-center text-blue-600'>
                            <a href="https://www.instagram.com/vipulmotorspvtltd?igsh=MXMxNGJhdnE3dDV3bw%3D%3D&utm_source=qr"><IconBrandInstagram size={28} /></a>
                            <a href="https://www.facebook.com/profile.php?id=100094960847061"><IconBrandFacebook size={28} /></a>
                            <a href="https://www.youtube.com/@vipulmotors8585"><IconBrandYoutube size={28} /></a>
                            <a href="https://www.linkedin.com/company/vipul-motors-privet-limited/?viewAsMember=true"><IconBrandLinkedin size={28} /></a>
                        </div>
                    </div>

                </div>
            )}

        </div>
    );
};

export default MobileMenu;
