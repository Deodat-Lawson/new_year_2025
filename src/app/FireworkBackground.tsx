"use client"; // if using Next.js app router

import React, { useEffect, useRef } from "react";
import fireworks from "fireworks-js";

const FireworksBackgroundTest = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Initialize
        const fw = new fireworks(containerRef.current, {
            boundaries: {
                x: 0,
                y: 0,
                width: containerRef.current.clientWidth,
                height: containerRef.current.clientHeight,
            },
            delay: { min: 5, max: 10 },
            speed: 2,
            acceleration: 1.05,
            friction: 0.96,
            gravity: 1.5,
            particles: 50,
            trace: 3,
            explosion: 5,
            sound: {
                enable: false,
            },
        });

        // Start
        fw.start();

        // Cleanup
        return () => {
            fw.stop();
        };
    }, []);

    return (
        <>
            {/* Fireworks Container - behind everything, but let's keep it visible for testing */}
            <div
                ref={containerRef}
                className="fixed inset-0 z-0 bg-gradient-to-br from-red-600 via-red-700 to-pink-700"
            />

            {/* Your content */}
?
        </>
    );
};

export default FireworksBackgroundTest;
