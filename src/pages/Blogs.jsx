import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, Calendar, Clock } from 'lucide-react';

const blogs = [
    {
        id: 1,
        category: "Latest Innovation",
        title: "The Future of Quantum Computing in FinTech",
        excerpt: "Exploring how quantum supremacy could revolutionize high-frequency trading and encryption standards.",
        author: "Sarah Jen",
        date: "Dec 18, 2024",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3"
    },
    {
        id: 2,
        category: "Student Success",
        title: "How Team 'Nova' Won the National Hackathon",
        excerpt: "A deep dive into their ideation process, tech stack choices, and the sleepless nights that led to victory.",
        author: "Team Nova",
        date: "Nov 30, 2024",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3"
    },
    {
        id: 3,
        category: "Tech Trends",
        title: "Why Rust is Taking Over Web Assembly",
        excerpt: "An analysis of performance metrics and safety features that make Rust the go-to for WASM.",
        author: "Dev Club",
        date: "Oct 25, 2024",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1555617981-d1a455f9K.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Corrected placeholder
    }
];

const Blogs = () => {
    return (
        <div className="min-h-screen py-20 px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Insights & Stories
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Thought leadership from our students and the latest updates from the tech world.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                    <motion.article
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        key={index}
                        className="flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.08] transition-colors group"
                    >
                        <div className="h-48 overflow-hidden relative">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4 bg-dark/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-primary border border-white/10">
                                {blog.category}
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                <div className="flex items-center gap-1.5"><User size={12} /> {blog.author}</div>
                                <div className="flex items-center gap-1.5"><Calendar size={12} /> {blog.date}</div>
                                <div className="flex items-center gap-1.5"><Clock size={12} /> {blog.readTime}</div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {blog.title}
                            </h3>

                            <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                                {blog.excerpt}
                            </p>

                            <button className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                                Read Article <ArrowRight size={16} />
                            </button>
                        </div>
                    </motion.article>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
