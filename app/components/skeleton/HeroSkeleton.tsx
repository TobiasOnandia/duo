import React from 'react';

const HeroSkeleton: React.FC = () => {
    return (
        <div className="relative h-[calc(100vh-4rem)] md:h-[calc(100vh-8rem)] lg:mb-8 bg-gray-200">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-gray-200 animate-pulse"></div>
            <div className="relative h-full flex flex-col items-center justify-center px-4 pt-16 text-center">
                <div className="w-3/4 h-12 md:h-16 lg:h-24 bg-gray-300 rounded-lg animate-pulse mb-6"></div>
                <div className="w-1/2 h-6 md:h-8 bg-gray-300 rounded-lg animate-pulse mb-4"></div>
                <div className="w-full max-w-md md:max-w-2xl">
                    <div className="bg-white rounded-lg shadow-lg p-2 md:p-4 flex items-center">
                        <div className="flex-1 h-8 md:h-10 bg-gray-200 rounded-l-md animate-pulse"></div>
                        <div className="w-10 h-8 md:h-10 bg-gray-300 rounded-r-md animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSkeleton;

