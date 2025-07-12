"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
    "/c-1.webp",
    "/c-2.webp",
    "/c-3.webp",
    // "/c-4m.webp",
];


export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () =>
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    const prevSlide = () =>
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        // <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg shadow-md aspect-[1366/523]">
        // <div className="relative w-full mx-auto overflow-hidden aspect-[360/283] sm:aspect-[1366/523]">
        <div className="relative w-full mx-auto overflow-hidden sm:aspect-[1366/523]">
            {/* <div className="relative w-full mx-auto overflow-hidden h-[400px]"> */}
            {/* Carousel Track */}
            <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{
                    transform: `translateX(-${current * (100 / images.length)}%)`,
                    width: `${images.length * 100}%`,
                }}
            >
                {images.map((src, idx) => (
                    <div
                        key={idx}
                        className="relative"
                        style={{ width: `${100 / images.length}%`, height: "100%" }}
                    >
                        <img
                            src={src}
                            alt={`Slide ${idx}`}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
            </div>

            {/* Action Buttons */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
            >
                <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>

            {/* Right Arrow */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
            >
                <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-2 w-2 rounded-full ${current === idx ? "bg-blue-600" : "bg-gray-300"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
}
