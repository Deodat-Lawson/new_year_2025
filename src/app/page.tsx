"use client";

import React, { useState, useEffect, FormEvent } from "react";
import { Sparkles } from "lucide-react";
import FireworksBackground from "./FireworkBackground";

const ChineseNewYear2025 = () => {
    const [showFireworks, setShowFireworks] = useState(false);

    // A series of well-wishes specifically for Nora
    const wishesForNora = [
        {
            title: "Warm Wish #1",
            content: "May your passion for economics and math flourish in this Year of the Snake—ace those formulas!"
        },
        {
            title: "Warm Wish #2",
            content: "Dance like nobody’s watching, Nora! May 2025 bring you endless joyful moves and graceful steps."
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
            content: "Embrace challenges fearlessly—the Snake’s wisdom and resilience guide you to success in 2025."
        }
    ];

    // Tracks the currently displayed wish
    const [currentWishIndex, setCurrentWishIndex] = useState(0);

    // Interactive form state
    const [userName, setUserName] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

    // Sparkles toggling
    useEffect(() => {
        const interval = setInterval(() => {
            setShowFireworks((prev) => !prev);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Go to the next wish (loop back when reaching the end)
    const handleNextWish = () => {
        setCurrentWishIndex((prev) => (prev + 1) % wishesForNora.length);
    };

    // Handle the form submission
    const handleSubmitForm = (e: FormEvent) => {
        e.preventDefault();
        // You can do anything with userMessage here (e.g., send to server)
        setSubmittedMessage(`Thank you, ${userName}! Your note to Nora: "${userMessage}"`);
        // Clear the input fields if you want
        // setUserName("");
        // setUserMessage("");
    };

    return (
        <>
            {/* Background Fireworks */}
            <FireworksBackground />

            {/* Page Content */}
            <div className="min-h-screen bg-transparent flex items-center justify-center p-4 relative">
                {/* Main Card */}
                <div className="max-w-3xl w-full bg-red-50 rounded-lg shadow-xl overflow-hidden">
                    <div className="relative">
                        {/* Header */}
                        <div className="bg-red-600 p-8 text-center border-b-8 border-yellow-500">
                            <h1 className="text-4xl font-extrabold text-yellow-300 mb-2 drop-shadow-lg animate-pulse">
                                新年快樂
                            </h1>
                            <h2 className="text-2xl text-yellow-200 drop-shadow-sm">
                                Happy Year of the Snake 2025!
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
                                        <p className="text-gray-700">蛇年大吉 (She Nian Da Ji)</p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="text-xl font-bold text-red-600 mb-4">
                                            2025 – Year of the Snake
                                        </h3>
                                        <p className="text-gray-700">
                                            The Snake symbolizes wisdom, resilience, and transformation in Chinese culture.
                                            May these guide Nora’s year!
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
                                            <li>Lucky Colors: Green, Red</li>
                                            <li>Lucky Numbers: 2, 8, 9</li>
                                            <li>Lucky Directions: East, Southeast</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="text-xl font-bold text-red-600 mb-4">
                                            Celebrations
                                        </h3>
                                        <p className="text-gray-700">
                                            Celebrate with family feasts, red envelopes, and
                                            traditions that invite health and fortune throughout the year.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Interactive Form */}
                            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-red-600 mb-4">Send Your Note to Nora</h3>
                                <form onSubmit={handleSubmitForm} className="space-y-4">
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">
                                            Your Name:
                                        </label>
                                        <input
                                            type="text"
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                            className="w-full p-2 border border-gray-300 rounded"
                                            required
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">
                                            Your Message for Nora:
                                        </label>
                                        <textarea
                                            value={userMessage}
                                            onChange={(e) => setUserMessage(e.target.value)}
                                            className="w-full p-2 border border-gray-300 rounded"
                                            rows={3}
                                            placeholder="Write something to encourage or cheer up Nora!"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md"
                                    >
                                        Send Wish
                                    </button>
                                </form>

                                {/* Display submitted message if any */}
                                {submittedMessage && (
                                    <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
                                        {submittedMessage}
                                    </div>
                                )}
                            </div>

                            {/* Interactive “Wish” Section */}
                            <div className="mt-8 bg-white p-6 rounded-lg shadow-md text-center">
                                <h3 className="text-xl font-bold text-red-600 mb-4">
                                    {wishesForNora[currentWishIndex].title}
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    {wishesForNora[currentWishIndex].content}
                                </p>
                                <button
                                    onClick={handleNextWish}
                                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md"
                                >
                                    Next Wish
                                </button>
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
                            蛇年大吉 • May the Year of the Snake bring wisdom, prosperity, and joy to Nora!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChineseNewYear2025;
