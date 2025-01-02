import React from 'react';

export function OrderSummarySkeleton() {
    return (
        <section className="rounded-lg border h-fit border-gray-300 p-6 flex flex-[0.3] flex-col gap-6 bg-white shadow-md animate-pulse">
            {/* Subtotal */}
            <div className="flex justify-between items-center text-lg">
                <div className="h-6 bg-gray-200 rounded w-24" />
                <div className="h-6 bg-gray-200 rounded w-20" />
            </div>

            {/* Shipping */}
            <div className="flex justify-between items-center text-lg">
                <div className="h-6 bg-gray-200 rounded w-16" />
                <div className="h-6 bg-gray-200 rounded w-20" />
            </div>

            {/* Total */}
            <div className="flex justify-between items-center border-t-2 border-dashed border-gray-300 pt-4 text-xl">
                <div className="h-7 bg-gray-200 rounded w-16" />
                <div className="h-7 bg-gray-200 rounded w-24" />
            </div>

            {/* Buy Now Button */}
            <div className="w-full h-12 bg-gray-300 rounded-lg" />
        </section>
    );
}