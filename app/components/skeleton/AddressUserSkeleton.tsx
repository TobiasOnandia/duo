export const AddressUserSkeleton = () => {
    return (
        <fieldset className="flex-1 lg:mx-4 grid grid-cols-1 md:grid-cols-2 border p-4 border-primary rounded-lg gap-4">
            <legend className="text-lg font-bold col-span-2">Dirección de entrega</legend>

            {/* Full Name */}
            <div className="col-span-2">
                <div className="h-5 w-32 bg-gray-200 rounded animate-pulse mb-1"></div>
                <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Email */}
            <div className="col-span-2">
                <div className="h-5 w-40 bg-gray-200 rounded animate-pulse mb-1"></div>
                <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Address */}
            <div className="col-span-2">
                <div className="h-5 w-36 bg-gray-200 rounded animate-pulse mb-1"></div>
                <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* City */}
            <div className="col-span-2 sm:col-span-1">
                <div className="h-5 w-20 bg-gray-200 rounded animate-pulse mb-1"></div>
                <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* State */}
            <div className="col-span-2 sm:col-span-1">
                <div className="h-5 w-24 bg-gray-200 rounded animate-pulse mb-1"></div>
                <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Postal Code */}
            <div className="col-span-2">
                <div className="h-5 w-28 bg-gray-200 rounded animate-pulse mb-1"></div>
                <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Phone */}
            <div className="col-span-2">
                <div className="h-5 w-24 bg-gray-200 rounded animate-pulse mb-1"></div>
                <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
            </div>
        </fieldset>
    );
};

