"use client";

import React, { useState, useEffect, FormEvent } from "react";
import { Sparkles } from "lucide-react";
import FireworksBackground from "./FireworkBackground";

const ChineseNewYear2025 = () => {
    const [showFireworks, setShowFireworks] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // A series of well-wishes specifically for Nora
    const wishesForNora = [
        {
            title: "Warm Wish #1",
            content: "May your passion for economics and math flourish in this Year of the Snake—ace those formulas!"
        },
        {
            title: "Warm Wish #2",
            content: "Dance like nobody's watching, Nora! May 2025 bring you endless joyful moves and graceful steps."
        },
        {
            title: "Warm Wish #3",
            content: "Stay healthy and strong! As the Snake symbolizes longevity and renewal, may sickness be far away."
        },
        {
            title: "Warm Wish #4",
            content: "With your keen interest in banking, may all the right doors open for you this year!"
        },
        {
            title: "Warm Wish #5",
            content: "Embrace challenges fearlessly—the Snake's wisdom and resilience guide you to success in 2025."
        }
    ];

    const [currentWishIndex, setCurrentWishIndex] = useState(0);
    const [wishVisible, setWishVisible] = useState(true);

    // Sparkles toggling
    useEffect(() => {
        const interval = setInterval(() => {
            setShowFireworks((prev) => !prev);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Initial entrance animation
    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Handle wish transitions
    const handleNextWish = () => {
        setWishVisible(false);
        setTimeout(() => {
            setCurrentWishIndex((prev) => (prev + 1) % wishesForNora.length);
            setWishVisible(true);
        }, 300);
    };

    return (
        <>
            <FireworksBackground />
            <div className="min-h-screen bg-transparent flex items-center justify-center p-4 relative">
                <div
                    className={`max-w-3xl w-full bg-red-50 rounded-lg shadow-xl overflow-hidden transform transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                >
                    <div className="relative">
                        {/* Header with floating animation */}
                        <div className="bg-red-600 p-8 text-center border-b-8 border-yellow-500">
                            <h1 className="text-5xl font-extrabold text-yellow-300 mb-2 animate-bounce">
                                新年快樂 Nora!
                            </h1>
                            <div className="space-y-2">
                                <h2 className="text-3xl text-yellow-200 transform hover:scale-110 transition-transform duration-300">
                                    Happy New Year Nora
                                </h2>
                                <h3 className="text-2xl text-yellow-100 transform hover:scale-110 transition-transform duration-300">
                                    Year of the Snake 2025
                                </h3>
                            </div>
                        </div>

                        {/* Main content with fade transitions */}
                        <div className="p-8">
                            <div className="mt-8 bg-white p-6 rounded-lg shadow-md text-center transform hover:shadow-2xl transition-all duration-300">
                                <div className={`transition-opacity duration-300 ${
                                    wishVisible ? 'opacity-100' : 'opacity-0'
                                }`}>
                                    <h3 className="text-xl font-bold text-red-600 mb-4 transform hover:scale-105 transition-transform">
                                        {wishesForNora[currentWishIndex].title}
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        {wishesForNora[currentWishIndex].content}
                                    </p>
                                </div>
                                <button
                                    onClick={handleNextWish}
                                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                                >
                                    Next Wish
                                </button>
                            </div>
                        </div>

                        {/* Animated corner sparkles */}
                        <div className="absolute top-4 left-4 transition-opacity duration-500">
                            {showFireworks && <Sparkles className="text-yellow-300 w-8 h-8 animate-ping" />}
                        </div>
                        <div className="absolute top-4 right-4 transition-opacity duration-500">
                            {showFireworks && <Sparkles className="text-yellow-300 w-8 h-8 animate-ping" />}
                        </div>
                        <div className="absolute bottom-4 left-4 transition-opacity duration-500">
                            {!showFireworks && <Sparkles className="text-yellow-300 w-8 h-8 animate-ping" />}
                        </div>
                        <div className="absolute bottom-4 right-4 transition-opacity duration-500">
                            {!showFireworks && <Sparkles className="text-yellow-300 w-8 h-8 animate-ping" />}
                        </div>
                    </div>

                    {/* Footer with hover effect */}
                    <div className="bg-red-600 p-4 text-center transform hover:scale-105 transition-transform duration-300">
                        <p className="text-yellow-300">
                            蛇年大吉 • May the Year of the Snake bring wisdom, prosperity, and joy to Nora!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChineseNewYear2025;