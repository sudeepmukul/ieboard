import React from 'react';

const partners = [
    "Student Tribe", "Google Developers Group", "AWS", "Zency", "Edventure", "EXpert", "Draper",
    "Curve", "IIC"
];

const PartnerCarousel = () => {
    return (
        <div className="w-full py-10 bg-dark border-y border-white/5 overflow-hidden">
            <div className="flex w-max animate-scroll">
                {[...partners, ...partners].map((partner, index) => (
                    <div key={index} className="mx-8 flex items-center justify-center p-2">
                        <span className="text-2xl font-bold text-gray-600 uppercase tracking-widest hover:text-white transition-colors cursor-default">
                            {partner}
                        </span>
                    </div>
                ))}
            </div>

            {/* Inline styles for the animation if not in Tailwind config yet */}
            <style jsx>{`
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
};

export default PartnerCarousel;
