import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const images = [
    { id: 1, src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3", type: "event", year: "2024", title: "Keynote Session" },
    { id: 2, src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3", type: "workshop", year: "2025", title: "Brainstorming" },
    { id: 3, src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3", type: "hackathon", year: "2023", title: "Ideathon Finals" },
    { id: 4, src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3", type: "event", year: "2024", title: "Networking" },
    { id: 5, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3", type: "workshop", year: "2025", title: "Team Building" },
    { id: 6, src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3", type: "event", year: "2023", title: "Awards Ceremony" },
    { id: 7, src: "https://images.unsplash.com/photo-1507537297725-24a1c434e328?ixlib=rb-4.0.3", type: "hackathon", year: "2025", title: "Coding Springs" },
    { id: 8, src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3", type: "workshop", year: "2024", title: "Robotics Workshop" },
];

const GalleryGrid = () => {
    const [filter, setFilter] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredImages = filter === 'all'
        ? images
        : images.filter(img => img.type === filter || img.year === filter);

    // Simple column distribution for masonry effect
    const columns = [[], [], []];
    filteredImages.forEach((img, i) => columns[i % 3].push(img));

    return (
        <>
            {/* Filter Controls */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {['all', '2025', '2024', 'hackathon', 'workshop'].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-6 py-2 rounded-full text-sm font-semibold capitalize border transition-all ${filter === f
                                ? 'bg-primary border-primary text-white'
                                : 'bg-transparent border-white/20 text-gray-400 hover:border-white hover:text-white'
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Masonry Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {columns.map((col, colIndex) => (
                    <div key={colIndex} className="flex flex-col gap-6">
                        {col.map((img) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                key={img.id}
                                className="group relative rounded-2xl overflow-hidden cursor-zoom-in"
                                onClick={() => setSelectedImage(img)}
                            >
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <ZoomIn className="text-white" size={32} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <div className="absolute bottom-6 left-0 right-0 text-center text-white">
                            <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                            <p className="text-gray-400 text-sm mt-1">{selectedImage.year} • {selectedImage.type}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default GalleryGrid;
