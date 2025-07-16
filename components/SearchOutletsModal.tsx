'use client'

import { X } from "lucide-react";
import React, { useEffect } from "react";

interface SearchOutletsModalProps {
    isOpen: boolean;
    onClose: () => void;
    filters: Record<string, Record<string, number>>;
}

export default function SearchOutletsModal({
    isOpen,
    onClose,
    filters,
}: SearchOutletsModalProps) {
    // 🔒 Lock scroll on mount, unlock on unmount
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div className="bg-white shadow-lg w-full max-w-md relative h-[500px]" >
                <div className="flex justify-between items-center p-3 border-1 border-gray-200">
                    <div className="font-semibold">Filter by Cities</div>
                    <button
                        onClick={onClose}
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* <input
                    type="text"
                    placeholder="Search by city, type..."
                    className="w-full border border-gray-300 p-2 rounded-md mb-4"
                /> */}

                {/* FILTERS */}
                <div className="p-4 overflow-y-auto h-[calc(100%-64px)]">
                    {/* You can tweak 64px if header is taller */}
                    <div className="flex flex-col gap-4">
                        {Object.entries(filters).map(([type, cities]) => (
                            <div key={type} className="flex flex-col gap-1">
                                <div className="font-semibold">
                                    {type}
                                </div>
                                <div className="flex flex-col gap-2 py-2 bg-white">
                                    {Object.entries(cities).map(([city, count]) => (
                                        <div key={city} className="text-blue-600 underline">
                                            {city} ({count})
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
}
