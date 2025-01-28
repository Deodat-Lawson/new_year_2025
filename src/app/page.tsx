"use client";

import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
// If you have your custom Card, import it. Otherwise, a normal <div> works fine.
import FireworksBackground from "./FireworkBackground";

const ChineseNewYear2025 = () => {
    const [showFireworks, setShowFireworks] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowFireworks((prev) => !prev);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Background Fireworks */}
            <FireworksBackground />

            {/* Page Content */}
            <div className="min-h-screen bg-transparent flex items-center justify-center p-4 relative">
                {/* Your Card or content container */}
                <div className="max-w-3xl w-full bg-red-50 rounded-lg shadow-xl overflow-hidden">
                    <div className="relative">
                        {/* Header */}
                        <div className="bg-red-600 p-8 text-center border-b-8 border-yellow-500">
                            <h1 className="text-4xl font-extrabold text-yellow-300 mb-2 drop-shadow-lg animate-pulse">
                                新年快樂
                            </h1>
                            <h2 className="text-2xl text-yellow-200 drop-shadow-sm">
                                Happy Year of the Dragon 2025!
                            </h2>
                        </div>

                        {/* Main content */}
                        <div className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Left column */}
                                <div className="space-y-6">
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="text-xl font-bold text-red-600 mb-4">
                                            Lunar New Year Greetings
                                        </h3>
                                        <p className="text-gray-700">恭喜發財 (Gong Xi Fa Cai)</p>
                                        <p className="text-gray-700">萬事如意 (Wan Shi Ru Yi)</p>
                                        <p className="text-gray-700">龍年大吉 (Long Nian Da Ji)</p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="text-xl font-bold text-red-600 mb-4">
                                            2025 - Year of the Dragon
                                        </h3>
                                        <p className="text-gray-700">
                                            The Dragon symbolizes power, nobility, and good fortune in Chinese culture.
                                        </p>
                                    </div>
                                </div>

                                {/* Right column */}
                                <div className="space-y-6">
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="text-xl font-bold text-red-600 mb-4">
                                            Lucky Elements for 2025
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Lucky Colors: Gold, Red</li>
                                            <li>Lucky Numbers: 1, 6, 7</li>
                                            <li>Lucky Directions: East, North</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="text-xl font-bold text-red-600 mb-4">
                                            Celebrations
                                        </h3>
                                        <p className="text-gray-700">
                                            Join us in celebrating with traditional festivities including lion dances,
                                            red envelopes, and family reunions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sparkles toggling (top corners / bottom corners) */}
                        <div className="absolute top-4 left-4">
                            {showFireworks && <Sparkles className="text-yellow-300 w-8 h-8 animate-bounce" />}
                        </div>
                        <div className="absolute top-4 right-4">
                            {showFireworks && <Sparkles className="text-yellow-300 w-8 h-8 animate-bounce" />}
                        </div>
                        <div className="absolute bottom-4 left-4">
                            {!showFireworks && <Sparkles className="text-yellow-300 w-8 h-8 animate-bounce" />}
                        </div>
                        <div className="absolute bottom-4 right-4">
                            {!showFireworks && <Sparkles className="text-yellow-300 w-8 h-8 animate-bounce" />}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="bg-red-600 p-4 text-center">
                        <p className="text-yellow-300">
                            龍年大吉 • May the Year of the Dragon bring you prosperity and joy!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChineseNewYear2025;
