'use client'

import React, { Suspense, useEffect, useState } from 'react'
import { models } from '@/lib/data'
import Image from 'next/image'
import { IconBrandSpeedtest, IconEngine, IconGasStation } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { useRouter, useSearchParams } from 'next/navigation'
import { Zap } from 'lucide-react'

type Category = "All" | "Arena" | "Nexa" | "Commercial";
const categories: Category[] = ["All", "Arena", "Nexa", "Commercial"];

export default function ModelsPageComponent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const outletParam = searchParams.get("outlet")?.toLowerCase();
    const urlCategoryMap: Record<string, Category> = {
        arena: "Arena",
        nexa: "Nexa",
        commercial: "Commercial",
    };

    const initialCategory: Category = urlCategoryMap[outletParam || ""] || "All";

    const [selectedCategory, setSelectedCategory] = useState<Category>(initialCategory);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Optional: Sync state with URL param if it changes
    useEffect(() => {
        setSelectedCategory(initialCategory);
    }, [outletParam]);

    const handleCategoryClick = (category: Category) => {
        setSelectedCategory(category);
        setActiveIndex(null);

        // Update URL
        const outletValue = category === "All" ? null : category.toLowerCase();
        const newUrl = outletValue ? `?outlet=${outletValue}` : `/models`;
        router.push(newUrl);
    };

    return (
        <Suspense fallback={<div className='flex w-full h-full justify-center top-4'>Loading...</div>}>

            <div className='flex flex-col w-full justify-center items-center'>

                <div className='flex flex-col w-full border-b-1 bg-white border-gray-200 items-center gap-2 py-4'>
                    <div className='text-xl sm:text-2xl font-semibold'>Models</div>
                    <div className='flex gap-2 items-center'>
                        <a href="/">
                            {/* <Home className='w-[14px] sm:w-[16px] h-auto text-blue-600 hover:text-blue-800 cursor-pointer' /> */}
                            <div className='text-sm text-blue-600 hover:text-blue-800'>Home</div>
                        </a>
                        <div className='text-sm'>/</div>
                        <div className='text-sm'>Models</div>
                    </div>
                </div>

                <div className='flex w-full px-4 pt-4 justify-center'>
                    <div className="flex w-full overflow-x-auto sm:justify-center">
                        <div className="flex space-x-2 pb-2 sm:pb-0">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleCategoryClick(category)}
                                    className={`whitespace-nowrap px-4 py-2 text-sm cursor-pointer ${selectedCategory === category
                                        ? "text-white bg-blue-600 font-semibold"
                                        : "text-gray-700 border-gray-300"
                                        } transition-all duration-200`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>



                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[1280px] px-4 sm:px-16 py-4'>
                    {
                        models
                            .filter((model) =>
                                selectedCategory === "All" || model.category.toLowerCase() === selectedCategory.toLowerCase()
                            )
                            .map((model, index) => (
                                <div key={index} className="flex flex-col gap-2 border border-gray-200">
                                    <div className="h-[160px] flex items-center justify-center bg-white">
                                        <Image
                                            width={400}
                                            height={400}
                                            alt={model?.name}
                                            src={model?.image}
                                            // className="h-[140px] object-contain mx-auto"
                                            className="h-[160px] object-cover mx-auto"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between gap-2">
                                        <div className="flex flex-col gap-2 px-3">
                                            <div className="text-[20px] font-semibold">{model?.name}</div>
                                            <div className="flex flex-col gap-1 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <IconEngine size={24} />
                                                    <div>{model?.displacement} CC</div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <IconGasStation size={24} />
                                                    <div>{model?.fuelEfficiency} KM/L</div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Zap size={22} />
                                                    <div>{model?.power} BHP</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 py-2 px-2">
                                            {/* <Button variant="outline" className="flex-1 min-w-0 truncate border border-blue-600">Get Brochure</Button> */}
                                            {/* <Button className="flex-1 min-w-0 truncate">Get Brochure</Button> */}
                                            <a
                                                href={model?.getBrochureCta}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 min-w-0 truncate"
                                            >
                                                <Button className="w-full">Get Brochure</Button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                </div>
            </div >

        </Suspense>
    )
}
