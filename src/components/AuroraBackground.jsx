import React from 'react';

import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const AuroraBackground = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    // drastically reduce opacity on home to let video show
    const opacityClass = isHome ? "opacity-20" : "opacity-40";

    if (isHome) return null; // Completely remove on Home as requested

    return (
        <div className="fixed inset-0 z-[-3] pointer-events-none">
            <div className={`absolute inset-0 ${opacityClass} transition-opacity duration-500`}>
                <motion.div
                    animate={{
                        x: ["-20%", "20%", "-20%"],
                        y: ["-20%", "20%", "-20%"],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-primary/20 blur-[120px]"
                />
                <motion.div
                    animate={{
                        x: ["20%", "-20%", "20%"],
                        y: ["20%", "-20%", "20%"],
                        rotate: [0, -180, -360],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-secondary/15 blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-blue-600/10 blur-[100px]"
                />
            </div>
            {/* Noise overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
        </div>
    );
};

export default AuroraBackground;
