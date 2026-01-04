import React from 'react';
import GalleryGrid from '../components/GalleryGrid';
import ParallaxWrapper from '../components/ParallaxWrapper';
import SEO from '../components/SEO';

const Gallery = () => {
    return (
        <div className="min-h-screen py-20 px-6 lg:px-8 max-w-7xl mx-auto">
            <SEO
                title="Gallery"
                description="Moments of innovation, captured from our past summits, hackathons, and workshops."
            />
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
                    Moments of Innovation
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Captured memories from our past summits, hackathons, and workshops.
                </p>
            </div>

            <ParallaxWrapper offset={30}>
                <GalleryGrid />
            </ParallaxWrapper>
        </div>
    );
};

export default Gallery;
