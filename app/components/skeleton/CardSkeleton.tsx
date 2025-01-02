import React from 'react';

export const CardSkeleton = () => {
    return (
        <article className="w-full bg-white rounded-lg border max-w-sm flex flex-col justify-between border-gray-300 shadow-lg">
            <div className="relative w-full aspect-[4/3] bg-gray-200 animate-pulse rounded-t-lg" />

            <div className="flex flex-col gap-4 px-4 py-4">
                <header className="flex items-center justify-between">
                    <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse" />
                    <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse" />
                </header>
                <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                </div>
                <footer className="flex items-center justify-between gap-2">
                    <div className="h-10 bg-gray-200 rounded w-full animate-pulse" />
                    <div className="h-10 bg-gray-200 rounded w-full animate-pulse" />
                </footer>
            </div>
        </article>
    )

};

