import React from 'react';

export const ProductDetailSkeleton: React.FC = () => (
    <main className="container mx-auto px-4 py-8 mt-16">
        <div className="flex flex-col xl:flex-row container gap-8">
            {/* Side Images */}
            <section className="relative flex xl:flex-col flex-row container h-full xl:w-[345px] gap-4 justify-between space-y-4 md:space-y-0">
                {[...Array(4)].map((_, i) => (
                    <div
                        key={i}
                        className="aspect-square w-full h-full max-w-3xs relative overflow-hidden rounded-lg bg-gray-200 animate-pulse"
                    />
                ))}
            </section>

            {/* Main Image */}
            <section className="relative h-full w-full">
                <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-200 animate-pulse" />
            </section>

            {/* Product Information */}
            <section className="flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                    <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />

                    <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse" />
                    <div className="flex gap-2">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
                        ))}
                    </div>

                    <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse" />
                    <div className="flex gap-2">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-10 h-10 rounded bg-gray-200 animate-pulse" />
                        ))}
                    </div>

                    <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse" />
                    <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse" />
                </div>

                {/* Buttons */}
                <div className="flex sm:flex-row flex-col gap-4 pt-4">
                    <div className="flex-1 h-10 bg-gray-200 rounded animate-pulse" />
                    <div className="flex-1 h-10 bg-gray-200 rounded animate-pulse" />
                </div>
            </section>
        </div>
    </main>
);


