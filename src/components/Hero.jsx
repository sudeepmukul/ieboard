import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ReactPlayer from 'react-player';
import ImageCarousel from './ImageCarousel';
import InteractiveText from './InteractiveText';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay for better text readability */}
            </div>

            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none z-0" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-semibold mb-6 tracking-wide">
                            Welcome to the Future of Innovation
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white">
                            <InteractiveText text="Innovate." />
                            <span className="block">
                                <InteractiveText text="Incubate." className="text-secondary" />
                            </span>
                            <InteractiveText text="Inspire." />
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg text-gray-400 max-w-lg leading-relaxed"
                    >
                        The College Innovation & Entrepreneurship Board is the launchpad for your wildest ideas. We turn student concepts into market-ready startups.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-wrap gap-4"
                    >
                        <button className="group relative px-8 py-3.5 bg-primary rounded-xl font-semibold text-white overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                            <span className="relative z-10 flex items-center gap-2">
                                Join the Board <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <button className="px-8 py-3.5 bg-white/5 border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm">
                            Explore Events
                        </button>
                    </motion.div>
                </div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="relative h-[500px] w-full flex items-center justify-center lg:justify-end"
                >
                    <ImageCarousel />

                    {/* Floating Cards (Decorative) */}

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
