"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

// const desktopImages = ["/banner-1.jpeg", "/c-1.webp", "/c-2.webp", "/c-3.webp"];
const desktopImages = ["/cd-2.jpg", "/cd-3.jpg", "/cd-4.jpg", "/cd-1.jpg"];
const mobileImages = ["/cm-2.jpg", "/cm-3.jpg", "/cm-4.jpg", "/cm-1.jpg"];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 640); // Tailwind's sm breakpoint
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    const images = isMobile ? mobileImages : desktopImages;

    const nextSlide = () =>
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    const prevSlide = () =>
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(interval);
    }, [images]);

    return (
        <div
            className={`relative w-full mx-auto overflow-hidden ${isMobile ? "aspect-[360/283]" : "aspect-[1366/523]"
                }`}
        >
            {/* Carousel track */}
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
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation buttons */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
            >
                <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>
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
