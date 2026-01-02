import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter, Target, Eye } from 'lucide-react';
import ParallaxWrapper from '../components/ParallaxWrapper';

const team = [
    { name: "Tushar Cutie", role: "Head I&E", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3" },
    { name: "Krishna Koushik", role: "E-Club President", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3" },
    { name: "Prahasith. G", role: "E-Cell head", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3" },
    { name: "Achsah", role: "General Secretary", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3" },
];

const About = () => {
    return (
        <div className="min-h-screen py-20 px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Intro */}
            <div className="text-center mb-24">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About the Board</h1>
                <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                    We are a student-run organization dedicated to fostering the spirit of innovation and entrepreneurship. We bridge the gap between academic learning and real-world problem solving.
                </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-32">
                <ParallaxWrapper offset={-30}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10"
                    >
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                            <Target size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                        <p className="text-gray-400 leading-relaxed">
                            To empower students with the resources, network, and guidance needed to launch successful ventures and drive technological innovation on campus.
                        </p>
                    </motion.div>
                </ParallaxWrapper>

                <ParallaxWrapper offset={30}>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10"
                    >
                        <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary mb-6">
                            <Eye size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                        <p className="text-gray-400 leading-relaxed">
                            To become the leading catalyst for student innovation, creating a self-sustaining ecosystem of creators, dreamers, and doers.
                        </p>
                    </motion.div>
                </ParallaxWrapper>
            </div>

            {/* Team Section */}
            <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-16">Meet the Team</h2>
                <div className="flex flex-wrap justify-center gap-12">
                    {team.map((member, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            key={index}
                            className="group relative"
                        >
                            <div className="relative w-40 h-40 mx-auto mb-6 rounded-full p-1 bg-gradient-to-br from-primary to-secondary">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-full object-cover rounded-full border-4 border-dark group-hover:scale-105 transition-transform duration-300"
                                />

                                {/* Social Overlay */}
                                <div className="absolute inset-0 rounded-full bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity gap-3 backdrop-blur-sm">
                                    <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-white text-white transition-colors"><Linkedin size={16} /></a>
                                    <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-gray-800 hover:text-white text-white transition-colors"><Github size={16} /></a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                            <p className="text-primary text-sm font-medium">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
