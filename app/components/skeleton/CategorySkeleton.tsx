import React from 'react';

export function CategorySkeleton() {
    return (
        <section className="mt-2 flex flex-col-reverse sm:flex-row gap-2 sm:items-center justify-between animate-pulse">
            <article className="hidden 2xl:flex items-center gap-4">
                {[...Array(6)].map((_, index) => (
                    <div
                        key={index}
                        className="h-10 bg-gray-200 rounded-full px-8 flex items-center"
                    />
                ))}
            </article>

            <div className="w-full sm:w-72 h-10 bg-gray-200 rounded-lg" />
        </section>
    );
}