"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Car, CircleAlert, Factory, MoveRight, PaintRoller, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllTruevalueModels } from "@/api/truevalue";
import FormModal from "@/components/TrueValueQueryFormModal";
import SearchTrueValueModelsModal from "@/components/SearchTrueValueModelsModal";

interface TrueValueModel {
    id: string;
    modelName: string;
    description?: string | null;
    make?: string | null;
    year?: number | null;
    variant?: string | null;
    color?: string | null;
    createdAt: string;
    imageId?: string | null;
    image?:
    | {
        id: string;
        url: string;
        alt?: string | null;
        createdAt: string;
    }
    | null;
}

type SelectedFilter =
    | { type: "modelName"; value: string }
    | { type: "year"; value: number }
    | null;

export default function TruevaluePage() {
    const [selectedFilter, setSelectedFilter] = useState<SelectedFilter>(null);
    const [truevalueModels, setTruevalueModels] = useState<TrueValueModel[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const [selectedModelName, setSelectedModelName] = useState<string | null>(null);
    const [searchTrueValueModelsModal, setSearchTrueValueModelsModal] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        const fetchModels = async () => {
            setLoading(true);
            try {
                const response = await getAllTruevalueModels();
                // If your API returns { success, data }, keep response.data.
                // If it returns array directly, switch to setTruevalueModels(response).
                setTruevalueModels(response.data);
            } catch (error) {
                console.error("Failed to fetch models:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchModels();
    }, []);

    // Extract filters dynamically (memoized)
    const filters = useMemo(() => {
        const acc: { modelNames: Set<string>; years: Set<number> } = {
            modelNames: new Set<string>(),
            years: new Set<number>(),
        };
        for (const curr of truevalueModels) {
            if (curr.modelName) acc.modelNames.add(curr.modelName);
            if (curr.year !== null && curr.year !== undefined) {
                acc.years.add(curr.year);
            }
        }
        return acc;
    }, [truevalueModels]);

    // Apply filtering
    const filteredModels = useMemo(() => {
        if (!selectedFilter) return truevalueModels;
        return truevalueModels.filter((m) => {
            if (selectedFilter.type === "modelName") {
                return m.modelName === selectedFilter.value;
            }
            if (selectedFilter.type === "year") {
                return m.year === selectedFilter.value;
            }
            return true;
        });
    }, [selectedFilter, truevalueModels]);

    if (loading) return <div className="flex justify-center top-4">Loading models...</div>;

    return (
        <>
            <div>
                {/* Header */}
                <div className="flex flex-col w-full border-b-1 bg-white border-gray-200 items-center gap-2 py-4">
                    <div className="text-xl sm:text-2xl font-semibold">True Value</div>
                    <div className="flex gap-2 items-center">
                        <a href="/">
                            <div className="text-sm text-blue-600 hover:text-blue-800">Home</div>
                        </a>
                        <div className="text-sm">/</div>
                        <div className="text-sm">True Value</div>
                    </div>
                </div>

                {truevalueModels?.length === 0 ? (
                    <div className="flex flex-col w-full items-center gap-4 py-12 px-4">
                        <div className="flex w-full justify-center"><CircleAlert size={36} /></div>
                        <div className="text-center">There are no models now. Please come back later.</div>
                    </div>
                ) : (
                    <div className="flex sm:px-16 sm:py-4 w-full sm:w-[80%] mx-auto bg-[#FAFAFA] gap-6">
                        {/* Left filters (Desktop) */}
                        <div className="hidden sm:flex flex-col w-1/4 gap-4">
                            <div className="text-gray-700 font-semibold">Filter by Model</div>
                            <div className="flex flex-col gap-2 bg-white p-3">
                                {Array.from(filters.modelNames).map((name) => {
                                    const isSelected =
                                        selectedFilter?.type === "modelName" &&
                                        selectedFilter.value === name;
                                    return (
                                        <button
                                            key={name}
                                            className={`text-left text-blue-600 underline cursor-pointer ${isSelected ? "font-bold" : ""
                                                }`}
                                            onClick={() => setSelectedFilter({ type: "modelName", value: name })}
                                        >
                                            {name}
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="text-gray-700 font-semibold mt-4">Filter by Year</div>
                            <div className="flex flex-col gap-2 bg-white p-3">
                                {Array.from(filters.years)
                                    .sort((a, b) => b - a)
                                    .map((year) => {
                                        const isSelected =
                                            selectedFilter?.type === "year" &&
                                            selectedFilter.value === year;
                                        return (
                                            <button
                                                key={year}
                                                className={`text-left text-blue-600 underline cursor-pointer ${isSelected ? "font-bold" : ""
                                                    }`}
                                                onClick={() => setSelectedFilter({ type: "year", value: year })}
                                            >
                                                {year}
                                            </button>
                                        );
                                    })}
                            </div>
                        </div>

                        {/* Right list */}
                        <div className="flex w-full flex-col gap-4 bg-white p-3">
                            <div className="flex w-full justify-between items-center">
                                {/* <div className="flex items-center gap-1"> */}
                                <div className="flex items-center gap-1 sm:justify-between w-full">
                                    <div className="py-1">
                                        <span className="font-semibold mr-1">{filteredModels.length}</span>
                                        result(s)
                                    </div>
                                    {selectedFilter && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="rounded-full"
                                            onClick={() => setSelectedFilter(null)}
                                        >
                                            <X size={14} />
                                            Clear Filter
                                        </Button>
                                    )}
                                </div>

                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setSearchTrueValueModelsModal(true)}
                                    className="flex sm:hidden"
                                >
                                    <Search size={16} />
                                    <div>Filter models</div>
                                </Button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {filteredModels.map((model) => (
                                    <div
                                        key={model.id}
                                        className="flex flex-col gap-2 border border-gray-200 shadow-sm"
                                    >
                                        {/* Image */}
                                        <div className="h-[200px] flex items-center justify-center bg-white">
                                            <img
                                                width={400}
                                                height={400}
                                                alt={model?.image?.alt || model?.modelName}
                                                src={model?.image?.url || "/placeholder-image.png"}
                                                className="h-[200px] object-cover mx-auto"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col justify-between gap-2">
                                            <div className="flex flex-col gap-2 px-3">
                                                <div className="text-[20px] font-semibold">{model?.modelName}</div>
                                                <div className="flex flex-col gap-1 text-sm">
                                                    <div className="flex items-center gap-2">
                                                        <Factory size={22} />
                                                        <div>{model.make}</div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Car size={22} />
                                                        <div>{model.variant}</div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <PaintRoller size={20} />
                                                        <div>{model.color}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2 py-2 px-2">
                                                <Button
                                                    className="w-full font-bold"
                                                    onClick={() => {
                                                        setSelectedModelName(model.modelName);
                                                        setIsFormOpen(true);
                                                    }}>
                                                    KNOW MORE
                                                    <MoveRight />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

            </div>

            <FormModal
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                model={selectedModelName}
            />

            <SearchTrueValueModelsModal
                isOpen={searchTrueValueModelsModal}
                onClose={() => setSearchTrueValueModelsModal(false)}
                filters={filters} // { modelNames: Set<string>; years: Set<number> }
                selectedFilter={selectedFilter} // { type: 'modelName'|'year', value }
                setSelectedFilter={setSelectedFilter}
            />
        </>
    );
}
