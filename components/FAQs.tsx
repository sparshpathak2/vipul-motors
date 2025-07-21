'use client';

import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

type FAQ = {
    question: string;
    answer: string;
};

type FAQCategory = {
    [key: string]: FAQ[];
};

const faqData: FAQCategory = {
    "Service Related": [
        {
            question: "What is your return policy?",
            answer:
                "We offer a 30-day return policy for unused items in their original packaging.",
        },
        {
            question: "How can I track my order?",
            answer:
                "You will receive an email with tracking information once your order is shipped.",
        },
    ],
    General: [
        {
            question: "Do you offer customer support?",
            answer: "Yes, our support team is available 24/7 via chat and email.",
        },
        {
            question: "What payment methods are accepted?",
            answer: "We accept credit cards, PayPal, and bank transfers.",
        },
    ],
    "Preventive Measures": [
        {
            question: "What precautions are taken during servicing?",
            answer:
                "All vehicles are sanitized post-service and contactless interactions are ensured.",
        },
        {
            question: "Do staff follow safety protocols?",
            answer: "Yes, all technicians wear protective gear and follow hygiene standards.",
        },
    ],
};

const categories = Object.keys(faqData);

export default function FAQs() {
    const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleIndex = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <>
            {/* Desktop */}
            <div className="hidden sm:flex gap-16 px-2 sm:px-16 justify-center">
                {/* Left: Categories */}
                <div className="flex flex-col gap-4 text-lg">
                    {categories.map((cat, i) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setSelectedCategory(cat);
                                setActiveIndex(null); // reset FAQ open state on tab switch
                            }}
                            // className={`text-left font-semibold transition-all duration-200 ${selectedCategory === cat
                            //     ? "text-black border-b border-black"
                            //     : "text-gray-400"
                            //     }`}
                            className="flex gap-4"
                        >
                            <div className="font-semibold text-black/60">{`0${i + 1}.`}</div> <div
                                className={`text-left w-fit font-semibold cursor-pointer transition-all duration-200 ${selectedCategory === cat
                                    ? "text-black border-b border-black"
                                    : "text-gray-400 border-b border-gray-100"
                                    }`}
                            >{cat}
                            </div>
                        </button>
                    ))}
                </div>

                {/* Right: FAQs */}
                <div className="flex flex-col w-[800px] border-x-1 border-x-gray-200 border-t-1 border-t-gray-200">
                    {faqData[selectedCategory].map((faq, index) => (
                        <div
                            key={index}
                            className="flex flex-col bg-white transition-all"
                        >
                            <button
                                onClick={() => toggleIndex(index)}
                                className="w-full flex justify-between items-center p-4 text-left font-medium cursor-pointer border-b-1 border-gray-200"
                            >
                                <span>{faq.question}</span>
                                <span>{activeIndex === index ? <ChevronUp /> : <ChevronDown />}</span>
                            </button>
                            <div
                                className={`p-4 text-gray-700 text-left transition-all duration-300 ease-in-out ${activeIndex === index ? "block border-b-1 border-gray-200" : "hidden"
                                    }`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile */}
            <div className="sm:hidden flex flex-col gap-2 w-full px-4">
                <div className="flex space-x-4 overflow-x-auto pb-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setSelectedCategory(category);
                                setActiveIndex(null); // Reset open FAQ
                            }}
                            className={`whitespace-nowrap px-4 py-2 ${selectedCategory === category
                                ? "text-blue-600 font-semibold border-b-1 border-b-blue-600"
                                : "text-gray-700 border-gray-300"
                                } transition-all duration-200`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* FAQs */}
                {/* <div className="mt-6 space-y-4"> */}
                <div className="flex flex-col border-x-1 border-x-gray-200 border-t-1 border-t-gray-200">
                    {faqData[selectedCategory].map((faq, index) => (
                        <div
                            key={index}
                            className="border-b-1 border-b-gray-200 bg-white overflow-hidden"
                        >
                            <button
                                onClick={() =>
                                    setActiveIndex((prev) => (prev === index ? null : index))
                                }
                                className="w-full text-left px-4 py-3 bg-white"
                            >
                                <div className="flex justify-between font-semibold">
                                    <span>{faq.question}</span>
                                    <span>{activeIndex === index ? <ChevronUp /> : <ChevronDown />}</span>
                                </div>
                            </button>
                            {activeIndex === index && (
                                <div className="px-4 py-3 bg-white border-t text-gray-700 text-start">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
