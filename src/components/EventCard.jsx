import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import clsx from 'clsx';

const EventCard = ({ title, date, location, description, image, status, category }) => {
    const isLive = status === 'live';

    // Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors flex flex-col h-full perspective-1000"
        >
            <div className="relative h-48 overflow-hidden transform-style-3d">
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                    {isLive && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold backdrop-blur-md border border-green-500/30">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            LIVE
                        </span>
                    )}
                    <span className="px-3 py-1 rounded-full bg-black/40 text-white text-xs font-medium backdrop-blur-md border border-white/10">
                        {category}
                    </span>
                </div>

                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    style={{ transform: "translateZ(20px)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80" />
            </div>

            <div className="p-6 flex flex-col flex-grow transform-style-3d" style={{ transform: "translateZ(30px)" }}>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-primary" />
                        {date}
                    </div>
                    <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-primary" />
                        {location}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                    {description}
                </p>

                <button className={clsx(
                    "w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all",
                    isLive
                        ? "bg-primary text-white hover:bg-indigo-600 shadow-lg shadow-primary/25"
                        : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                )}>
                    {isLive ? "Register Now" : "View Details"}
                    <ArrowRight size={16} />
                </button>
            </div>
        </motion.div>
    );
};

export default EventCard;
