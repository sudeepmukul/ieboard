import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Users, Radio, Cpu } from 'lucide-react';

const milestones = [
    {
        icon: <Users size={24} className="text-blue-400" />,
        title: "E-Summit 2023",
        stat: "500+ Attendees",
        desc: "A massive gathering of students and entrepreneurs. Hosted 30+ startups and renowned speakers."
    },
    {
        icon: <Cpu size={24} className="text-purple-400" />,
        title: "Workshops",
        stat: "15+ Conducted",
        desc: "Hands-on sessions on IoT, Blockchain, Design Thinking, and Full-stack Development."
    },
    {
        icon: <TrendingUp size={24} className="text-green-400" />,
        title: "Startups Incubated",
        stat: "$50K+ Raised",
        desc: "Facilitated seed funding and mentorship for 5 student-led startups in the last year."
    },
    {
        icon: <Radio size={24} className="text-red-400" />,
        title: "E-Summit 2025",
        stat: "Upcoming Mega Event",
        desc: "The Future of GenAI. Preparing for our biggest event yet with global participation."
    }
];

const Achievements = () => {
    return (
        <div className="min-h-screen py-20 px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Motto */}
            <div className="text-center mb-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center justify-center p-4 rounded-full bg-white/5 border border-white/10 mb-8"
                >
                    <Trophy className="text-secondary mr-3" size={32} />
                    <span className="text-xl font-bold text-white">Our Legacy</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
                    Turning Ideas into <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                        Reality.
                    </span>
                </h1>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {milestones.map((item, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        key={index}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-32 bg-primary/10 rounded-full blur-[64px] group-hover:bg-primary/20 transition-colors pointer-events-none" />

                        <div className="relative z-10 flex items-start gap-6">
                            <div className="p-4 rounded-2xl bg-dark/50 border border-white/10 shadow-xl">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                                <div className="text-secondary font-bold text-lg mb-3">{item.stat}</div>
                                <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
