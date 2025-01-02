import React from 'react';
import { OrderSummarySkeleton } from './OrderSummarySkeleton';
import { RecommendSkeleton } from './RecommendSkeleton';

export function CheckoutSkeleton() {
    return (
        <main className="container w-[95%] md:w-4/5 mx-auto mt-24 bg-gray-50 p-6 rounded-2xl shadow-lg border border-gray-200 animate-pulse">
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-[0.7]">
                    {/* Header */}
                    <header className="flex items-center justify-between pb-6 border-b border-gray-300">
                        <div className="h-8 bg-gray-200 rounded w-40" />
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-gray-200 rounded" />
                            <div className="h-6 bg-gray-200 rounded w-16" />
                        </div>
                    </header>

                    {/* Labels */}
                    <section className="flex items-center gap-4 py-4 border-b border-gray-300">
                        <div className="w-24 hidden sm:block" />
                        <div className="flex w-full justify-between sm:px-4 ml-4">
                            <div className="h-5 bg-gray-200 rounded w-20" />
                            <div className="h-5 bg-gray-200 rounded w-20" />
                            <div className="h-5 bg-gray-200 rounded w-16" />
                        </div>
                    </section>

                    {/* Product List */}
                    <div className="overflow-y-auto max-h-[400px]">
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="flex items-center gap-4 py-4 border-b border-gray-200">
                                {/* Product Image */}
                                <div className="w-24 h-24 bg-gray-200 rounded hidden sm:block" />
                                {/* Product Details */}
                                <div className="flex w-full justify-between items-center sm:px-4 ml-4">
                                    <div className="space-y-2">
                                        <div className="h-5 bg-gray-200 rounded w-32" />
                                        <div className="h-4 bg-gray-200 rounded w-24" />
                                    </div>
                                    <div className="h-8 bg-gray-200 rounded w-24" />
                                    <div className="h-6 bg-gray-200 rounded w-20" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Order Summary */}
                <OrderSummarySkeleton />
            </div>

            {/* Recommended Products */}
            <section className="mt-8">
                <RecommendSkeleton />
            </section>
        </main>
    );
}