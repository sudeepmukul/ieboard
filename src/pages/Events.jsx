import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EventCard from '../components/EventCard';
import clsx from 'clsx';

const eventsData = [
    {
        id: 1,
        title: "Ideathon 2025",
        date: "Dec 24, 2025",
        location: "Innovation Hub",
        description: "48-hour hackathon to solve real-world problems. Prizes worth $10k up for grabs!",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3",
        status: "live",
        category: "Hackathon",
        type: "upcoming" // Categorizing 'Upcoming' tab as holding current/future events
    },
    {
        id: 2,
        title: "Startup Bootcamp",
        date: "Jan 10, 2026",
        location: "Main Auditorium",
        description: "Learn the fundamentals of building a startup from zero to one with successful founders.",
        image: "https://images.unsplash.com/photo-1559136555-9303dff16302?ixlib=rb-4.0.3",
        status: "registration_open",
        category: "Workshop",
        type: "upcoming"
    },
    {
        id: 3,
        title: "AI & Ethics Talk",
        date: "Nov 15, 2025",
        location: "Online",
        description: "A deep dive into the ethical implications of Generative AI in modern business.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3",
        status: "past",
        category: "Seminar",
        type: "past"
    },
    {
        id: 4,
        title: "Pitch Perfect",
        date: "Oct 05, 2025",
        location: "Conference Hall",
        description: "Students pitched their ideas to a panel of investors. 3 startups received seed funding.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3",
        status: "past",
        category: "Competition",
        type: "past"
    }
];

const Events = () => {
    const [activeTab, setActiveTab] = useState('upcoming');

    const filteredEvents = eventsData.filter(event => event.type === activeTab);

    return (
        <div className="min-h-screen py-20 px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6"
                >
                    Events & Workshops
                </motion.h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Join our events to learn, compete, and network with the best minds in the ecosystem.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-16">
                <div className="flex p-1 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                    {['upcoming', 'past'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={clsx(
                                "px-8 py-2.5 rounded-lg text-sm font-semibold capitalize transition-all duration-300",
                                activeTab === tab
                                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                                    : "text-gray-400 hover:text-white"
                            )}
                        >
                            {tab} Events
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence mode='popLayout'>
                    {filteredEvents.map((event) => (
                        <EventCard key={event.id} {...event} />
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredEvents.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    No events found in this category.
                </div>
            )}
        </div>
    );
};

export default Events;
