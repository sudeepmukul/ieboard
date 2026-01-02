import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position state
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    };

    // Smooth spring animation for the cursor
    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
    const smoothX = useSpring(mouse.x, smoothOptions);
    const smoothY = useSpring(mouse.y, smoothOptions);

    useEffect(() => {
        const moveCursor = (e) => {
            // Update useMotionValue
            mouse.x.set(e.clientX);
            mouse.y.set(e.clientY);

            // Update useSpring values
            smoothX.set(e.clientX);
            smoothY.set(e.clientY);
        };

        const manageMouseOver = (e) => {
            // Check if the target is interactive
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button') || e.target.closest('.magnetic-target')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", manageMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", manageMouseOver);
        };
    }, [mouse.x, mouse.y, smoothX, smoothY]);

    return (
        <>
            <motion.div
                style={{
                    left: smoothX,
                    top: smoothY,
                }}
                className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block" // Hidden on mobile
            />

            <motion.div
                style={{
                    left: smoothX,
                    top: smoothY,
                }}
                animate={{
                    scale: isHovered ? 4 : 1,
                    opacity: isHovered ? 0.2 : 0, // Only show ring when hovering or adjust design
                }}
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block"
            />
        </>
    );
};

export default CustomCursor;
