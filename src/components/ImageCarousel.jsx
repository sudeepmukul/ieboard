import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3", title: "Innovation Summits" },
    { id: 2, src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3", title: "Collaborative Workshops" },
    { id: 3, src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3", title: "Hackathons" },
    { id: 4, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3", title: "Team Building" },
    { id: 5, src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3", title: "Awards & Recognition" },
];

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-cycle
    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleDragEnd = (event, info) => {
        if (info.offset.x < -50) {
            handleNext();
        } else if (info.offset.x > 50) {
            handlePrev();
        }
    };

    return (
        <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center perspective-1000">
            {carouselImages.map((img, index) => {
                let position = (index - currentIndex + carouselImages.length) % carouselImages.length;

                // Active Card
                if (position === 0) {
                    return (
                        <motion.div
                            key={img.id}
                            layout
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.2}
                            onDragEnd={handleDragEnd}
                            className="absolute z-30 w-full max-w-[350px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10 cursor-grab active:cursor-grabbing"
                            initial={{ scale: 0.9, opacity: 0, x: 100 }}
                            animate={{ scale: 1, opacity: 1, x: 0, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <img src={img.src} alt={img.title} className="w-full h-full object-cover pointer-events-none" />
                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none">
                                <h3 className="text-white font-bold text-xl">{img.title}</h3>
                            </div>
                        </motion.div>
                    );
                }

                // Next Card (Stack Behind)
                if (position === 1) {
                    return (
                        <motion.div
                            key={img.id}
                            layout
                            className="absolute z-20 w-full max-w-[350px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl brightness-50"
                            animate={{ scale: 0.92, x: 30, rotate: 3, opacity: 0.8 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                        </motion.div>
                    );
                }

                // 2nd Next Card (Deep Stack)
                if (position === 2) {
                    return (
                        <motion.div
                            key={img.id}
                            layout
                            className="absolute z-10 w-full max-w-[350px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl brightness-50"
                            animate={{ scale: 0.84, x: 60, rotate: 6, opacity: 0.5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                        </motion.div>
                    );
                }

                // Previous/Exit Animation
                if (position === carouselImages.length - 1) {
                    return (
                        <motion.div
                            key={img.id}
                            layout
                            className="absolute z-0 w-full max-w-[350px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl brightness-50"
                            animate={{ scale: 0.8, x: -100, rotate: -10, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                        </motion.div>
                    );
                }

                return null;
            })}

            {/* Navigation Buttons - Added for better interactivity */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-40">
                <button onClick={handlePrev} className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all text-white border border-white/10">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={handleNext} className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all text-white border border-white/10">
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Decorative background glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 blur-3xl -z-10" />
        </div>
    );
};

export default ImageCarousel;
