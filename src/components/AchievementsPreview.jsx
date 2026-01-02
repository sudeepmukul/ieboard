import React from 'react';

import { motion } from 'framer-motion';
import { Trophy, Rocket, Users } from 'lucide-react';

const achievements = [
    { icon: Trophy, label: "WorkShops Conducted", value: "15+", color: "text-yellow-500", bg: "bg-yellow-500/20" },
    { icon: Rocket, label: "Events Conducted", value: "30+", color: "text-primary", bg: "bg-primary/20" },
    { icon: Users, label: "LearnWave Members Community", value: "2000+", color: "text-green-500", bg: "bg-green-500/20" },
];

const AchievementsPreview = () => {
    return (
        <section className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            key={index}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 backdrop-blur-sm transition-all hover:-translate-y-2"
                        >
                            <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center ${item.color} mb-6 group-hover:scale-110 transition-transform`}>
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-4xl font-bold text-white mb-2">{item.value}</h3>
                            <p className="text-gray-400 font-medium">{item.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementsPreview;
