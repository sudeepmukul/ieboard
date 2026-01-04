import React from 'react';
import Hero from '../components/Hero';
import PartnerCarousel from '../components/PartnerCarousel';
import AchievementsPreview from '../components/AchievementsPreview';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <div className="min-h-screen relative">
            <SEO
                title="Home"
                description="Welcome to the Official IE Board Website. Incubate your ideas and transform them into reality."
            />
            <Hero />
            <PartnerCarousel />

            {/* Achievements Preview Section */}
            <AchievementsPreview />

            {/* Featured Section placeholder to fill vertical space for scrolling */}
            <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Join Us?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We provide the ecosystem, mentorship, and resources you need to transform your innovative ideas into reality.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "E-Cell Mentorship", desc: "Get guided by industry experts and alumni." },
                        { title: "Funding", desc: "Pitch deck preparation and seed funding opportunities." },
                        { title: "E-Club Networking", desc: "Connect with like-minded innovators and founders." }
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
