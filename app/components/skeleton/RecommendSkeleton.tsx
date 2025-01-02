import React from 'react';

export function RecommendSkeleton() {
    return (
        <footer className="mt-12 container mx-auto animate-pulse">
            {/* Title Skeleton */}
            <div className="h-8 w-64 bg-gray-200 rounded mb-6" />

            {/* Grid of Product Cards */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[...Array(4)].map((_, index) => (
                    <article key={index} className="group">
                        {/* Image Skeleton */}
                        <div className="aspect-square rounded-lg bg-gray-200" />

                        {/* Content Skeleton */}
                        <div className="p-4 space-y-2">
                            {/* Title Skeleton */}
                            <div className="h-5 bg-gray-200 rounded w-3/4" />
                            {/* Price Skeleton */}
                            <div className="h-5 bg-gray-200 rounded w-1/4" />
                            <div className="h-5 bg-gray-200 rounded w-1/4" />

                        </div>
                    </article>
                ))}
            </section>
        </footer>
    );
}