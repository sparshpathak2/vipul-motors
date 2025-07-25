'use client'

import React, { useState } from 'react'
import { outlets } from "@/lib/data";
import { Clock, Mail, MapPin, Phone, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SearchOutletsModal from '@/components/SearchOutletsModal';
import FormModal from '@/components/FormModal';

export default function page() {
    const [searchOutletsModal, setSearchOutletsModal] = useState(false)
    const [isFormOpen, setIsFormOpen] = useState(false);
    // const [selectedCity, setSelectedCity] = useState<string | null>(null);
    const [selectedFilter, setSelectedFilter] = useState<{
        type: string;
        city: string;
    } | null>(null);



    const filters = outlets.reduce((acc, curr) => {
        const { type, city } = curr;

        if (!acc[type]) {
            acc[type] = {};
        }

        if (!acc[type][city]) {
            acc[type][city] = 1;
        } else {
            acc[type][city]++;
        }

        return acc;
    }, {} as Record<string, Record<string, number>>);

    const filteredOutlets = selectedFilter
        ? outlets.filter(
            (outlet) =>
                outlet.city === selectedFilter.city &&
                outlet.type === selectedFilter.type
        )
        : outlets;


    return (
        <>
            <div>
                <div className='flex flex-col w-full border-b-1 bg-white border-gray-200 items-center gap-2 py-4'>
                    <div className='text-xl sm:text-2xl font-semibold'>Outlets</div>
                    <div className='flex gap-2 items-center'>
                        <a href="/">
                            {/* <Home className='w-[14px] sm:w-[16px] h-auto text-blue-600 hover:text-blue-800 cursor-pointer' /> */}
                            <div className='text-sm text-blue-600 hover:text-blue-800'>Home</div>
                        </a>
                        <div className='text-sm'>/</div>
                        <div className='text-sm'>Outlets</div>
                    </div>
                </div>

                <div className='flex sm:px-16 sm:py-4 w-full sm:w-[80%] mx-auto bg-[#FAFAFA] gap-6'>

                    {/* Left filters Desktop */}
                    <div className='hidden sm:flex flex-col w-1/4 gap-4'>
                        <div className='text-gray-700 font-semibold'>Filter by Cities</div>
                        <div className='flex flex-col gap-6'>

                            {Object.entries(filters).map(([type, cities]) => (
                                <div key={type} className="flex flex-col gap-1">
                                    <div className="font-semibold bg-blue-600 px-2 py-1 text-white">{type}</div>
                                    <div className='flex flex-col gap-2 py-2 px-3 bg-white'>

                                        {/* {Object.entries(cities).map(([city, count]) => (
                                            <div
                                                key={city}
                                                className={`text-blue-600 underline cursor-pointer ${selectedCity === city ? 'font-bold' : ''
                                                    }`}
                                                onClick={() => setSelectedCity(city)}
                                            >
                                                {city} ({count})
                                            </div>
                                        ))} */}

                                        {Object.entries(cities).map(([city, count]) => {
                                            const isSelected =
                                                selectedFilter?.type === type && selectedFilter?.city === city;
                                            return (
                                                <div
                                                    key={city}
                                                    className={`text-blue-600 underline cursor-pointer ${isSelected ? "font-bold" : ""
                                                        }`}
                                                    onClick={() => setSelectedFilter({ type, city })}
                                                >
                                                    {city} ({count})
                                                </div>
                                            );
                                        })}

                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Right list Desktop */}
                    <div className='hidden sm:flex w-3/4 flex-col gap-4 bg-white px-6 pt-4 pb-6'>
                        <div className='flex w-full justify-between'>
                            <div className='py-1'>
                                <span className='font-semibold mr-1'>{filteredOutlets.length}</span>
                                result(s)
                            </div>
                            {selectedFilter && (
                                <Button
                                    variant='outline'
                                    size='sm'
                                    className="rounded-full"
                                    onClick={() => setSelectedFilter(null)}
                                >
                                    <X size={14} />
                                    Clear Filter
                                </Button>
                            )}
                        </div>
                        {
                            // outlets
                            //     .filter((outlet) => !selectedCity || outlet.city === selectedCity)
                            //     .filter((outlet) => {
                            //         if (!selectedFilter) return true;
                            //         return (
                            //             outlet.city === selectedFilter.city &&
                            //             outlet.type === selectedFilter.type
                            //         );
                            //     })
                            filteredOutlets
                                .map((outlet, index) => (

                                    // Card 3 Desktop
                                    <div key={index} className="flex justify-between w-full bg-white border-1 border-gray-200 shadow-md">
                                        <div className='flex flex-col gap-2 w-full p-3'>

                                            <div className='flex w-full justify-between items-center'>
                                                <h3 className="text-xl font-semibold">{outlet.title}</h3>
                                            </div>

                                            <div className='flex flex-col gap-4'>
                                                <p>{outlet.address}</p>
                                                <div className='flex flex-col gap-0.5'>
                                                    <div className='flex gap-2 items-center'>
                                                        <Clock size={16} />
                                                        <p>{outlet.workingHours}</p>
                                                    </div>
                                                    <div className='flex gap-2 items-center'>
                                                        <Phone size={16} />
                                                        <a href={`tel:${outlet.contactNo}`} className="text-blue-600 underline font-semibold cursor-pointer">
                                                            {outlet.contactNo}
                                                        </a>
                                                    </div>
                                                    <div className='flex gap-2 items-center'>
                                                        <Mail size={16} />
                                                        {/* <p className='text-blue-600 underline font-semibold'>{outlet.email}</p> */}
                                                        <p
                                                            className="text-blue-600 underline font-semibold cursor-pointer"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                navigator.clipboard.writeText(outlet.email);
                                                            }}
                                                        >
                                                            <a href={`mailto:${outlet.email}`} className="block">
                                                                {outlet.email}
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex flex-col justify-between border-l-1 border-gray-200 p-3'>
                                            <div className='flex flex-col gap-1'>
                                                <p className='text-sm'>Outlet type</p>
                                                <p className='font-semibold'>{outlet.type}</p>
                                                {/* <Badge className='rounded-full w-full text-red-600 bg-red-100 border-1 border-red-400 text-[13px] font-semibold'>{outlet.type}</Badge> */}
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <a
                                                    href={outlet?.locationCta}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex w-full"
                                                >
                                                    <Button
                                                        // className='flex gap-2 font-semibold text-blue-700  hover:text-blue-700 border-1 border-blue-700' variant='outline'
                                                        className='flex w-full gap-2 font-semibold border-1 cursor-pointer' variant='outline'
                                                    >
                                                        <MapPin size={16} />
                                                        Locate on Map
                                                    </Button>
                                                </a>
                                                <Button
                                                    onClick={() => setIsFormOpen(true)}
                                                    className='font-semibold cursor-pointer'
                                                >
                                                    Request for Callback
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                    </div>

                    {/* Right list Mobile */}
                    <div className='flex sm:hidden flex-col w-full gap-4 sm:bg-white p-3 sm:p-6'>

                        <div className='flex w-full justify-between items-center'>

                            <div className='flex items-center gap-1'>
                                <div className=''>
                                    <span className='font-semibold mr-1'>{filteredOutlets.length}</span>
                                    result(s)
                                </div>
                                {selectedFilter && (
                                    <Button
                                        variant='outline'
                                        size='sm'
                                        className="rounded-full"
                                        onClick={() => setSelectedFilter(null)}
                                    >
                                        <X size={14} />
                                        Clear Filter
                                    </Button>
                                )}
                            </div>

                            <Button
                                variant='outline'
                                size='sm'
                                onClick={() => setSearchOutletsModal(true)}
                            >
                                <Search size={16} />
                                <div >Filter outlet</div>
                            </Button>

                        </div>

                        {filteredOutlets.map((outlet, index) => (

                            // Card 1 Mobile
                            <div key={index} className="flex flex-col w-full bg-white border-1 border-gray-100 shadow-md">
                                <div className='flex flex-col gap-2 w-full p-3'>

                                    <div className='flex flex-col w-full'>
                                        <h3 className="text-xl font-semibold">{outlet.title}</h3>
                                        {/* <div className='flex flex-col gap-1'>
                                    <p className='text-sm'>Outlet type</p>
                                    <p className='font-semibold'>{outlet.type}</p>
                                    <Badge className='rounded-full w-fit text-red-600 bg-red-100 border-1 border-red-400 text-[13px] font-semibold'>{outlet.type}</Badge>
                                </div> */}
                                    </div>

                                    <div className='flex flex-col gap-4'>
                                        <div className='flex flex-col gap-1'>
                                            {/* <p className='text-sm'>Outlet type</p> */}
                                            {/* <p className='font-semibold'>{outlet.type}</p> */}
                                            <Badge className='rounded-full w-fit text-red-600 bg-red-100 border-1 border-red-400 text-[13px] font-semibold'>{outlet.type}</Badge>
                                        </div>
                                        <p>{outlet.address}</p>
                                        <div className='flex flex-col gap-0.5'>
                                            <div className='flex gap-2 items-center'>
                                                <Clock size={16} />
                                                <p>{outlet.workingHours}</p>
                                            </div>
                                            <div className='flex gap-2 items-center'>
                                                <Phone size={16} />
                                                {/* <p className='text-blue-600 underline font-semibold'>{outlet.contactNo}</p> */}
                                                <p
                                                    className="text-blue-600 underline font-semibold cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigator.clipboard.writeText(outlet.contactNo);
                                                    }}
                                                >
                                                    <a href={`tel:${outlet.contactNo}`} className="block">
                                                        {outlet.contactNo}
                                                    </a>
                                                </p>

                                            </div>
                                            <div className='flex gap-2 items-center'>
                                                <Mail size={16} />
                                                {/* <p className='text-blue-600 underline font-semibold'>{outlet.email}</p> */}
                                                <p
                                                    className="text-blue-600 underline font-semibold cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigator.clipboard.writeText(outlet.email);
                                                    }}
                                                >
                                                    <a href={`mailto:${outlet.email}`} className="block">
                                                        {outlet.email}
                                                    </a>
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col justify-between border-l-1 border-gray-200 p-3'>
                                    {/* <div className='flex flex-col gap-1'>
                                <p className='text-sm'>Outlet type</p>
                                <p className='font-semibold'>{outlet.type}</p>
                                <Badge className='rounded-full w-fit text-red-600 bg-red-100 border-1 border-red-400 text-[13px] font-semibold'>{outlet.type}</Badge>
                            </div> */}
                                    <div className='flex flex-col gap-2'>
                                        <a
                                            href={outlet?.locationCta}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex w-full cursor-pointer"
                                        >
                                            <Button
                                                // className='flex gap-2 font-semibold text-blue-700  hover:text-blue-700 border-1 border-blue-700' variant='outline'
                                                className='flex w-full gap-2 font-semibold border-1' variant='outline'
                                            >
                                                {/* <Button className='flex gap-2 bg-[#4263EB] hover:bg-blue-500 font-semibold'> */}
                                                {/* <Button className='flex gap-2 bg-blue-600 hover:bg-blue-500 font-semibold'> */}
                                                <MapPin size={16} />
                                                Locate on Map
                                            </Button>

                                        </a>
                                        <Button
                                            onClick={() => setIsFormOpen(true)}
                                            className='font-semibold cursor-pointer'>
                                            Request for Callback
                                        </Button>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>

            </div>

            <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

            <SearchOutletsModal
                isOpen={searchOutletsModal}
                onClose={() => setSearchOutletsModal(false)}
                filters={filters}
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
            />

        </>
    )
}
