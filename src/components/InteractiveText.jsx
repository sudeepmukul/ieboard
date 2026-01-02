import React from 'react';
import { motion } from 'framer-motion';

const InteractiveText = ({ text, className }) => {
    const words = text.split(" ");

    return (
        <div className={`flex flex-wrap gap-x-3 ${className}`}>
            {words.map((word, i) => (
                <div key={i} className="flex overflow-hidden">
                    {word.split("").map((char, j) => (
                        <motion.span
                            key={j}
                            className="inline-block relative cursor-default"
                            whileHover={{
                                y: -5,
                                color: "#F97316", // Orange hover
                                transition: { duration: 0.1 }
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default InteractiveText;
