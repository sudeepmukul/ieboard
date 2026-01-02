import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen py-20 px-6 lg:px-8 max-w-7xl mx-auto flex items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
                    <p className="text-gray-400 text-lg mb-12">
                        Have an idea? Want to partner with us? Or just want to say hi? <br />
                        We'd love to hear from you.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold mb-1">Email</h3>
                                <p className="text-gray-400">ecell@cmrcet.ac.in</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold mb-1">Head Quarters</h3>
                                <p className="text-gray-400">Idea Lab Block 1,<br />CMRCET</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-primary">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold mb-1">Phone</h3>
                                <p className="text-gray-400">+91 6942014367</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 flex gap-6">
                        {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                            <a key={i} href="#" className="p-3 rounded-full border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 hover:scale-110 transition-all">
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">First Name</label>
                                <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Last Name</label>
                                <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Email</label>
                            <input type="email" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Message</label>
                            <textarea rows={4} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about yourself..." />
                        </div>

                        <button type="button" className="w-full py-4 bg-primary hover:bg-indigo-600 text-white rounded-xl font-semibold transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2 group">
                            Send Message <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
