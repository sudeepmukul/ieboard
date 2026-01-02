import React from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

const HomeVideoBackground = () => {
    const location = useLocation();

    if (location.pathname !== '/') return null;

    return (
        <div className="fixed inset-0 z-[-2] pointer-events-none overflow-hidden">
            {/* Wrapper to maintain aspect ratio and cover screen - Scaled to zoom in */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%]">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=rH-9LMdXwnY"
                    playing
                    loop
                    muted
                    width="100%"
                    height="100%"
                    config={{
                        youtube: {
                            playerVars: { showinfo: 0, controls: 0, disablekb: 1, modestbranding: 1, rel: 0, iv_load_policy: 3, fs: 0, origin: window.location.origin }
                        }
                    }}
                    style={{ opacity: 0.6 }} // Increased visibility & Brought to front
                />
            </div>

            {/* Faded Orange Gradient Overlay (Left <- Right) */}
            <div className="absolute inset-0 z-0 bg-gradient-to-l from-orange-500/10 via-transparent to-transparent" />
        </div>
    );
};

export default HomeVideoBackground;
