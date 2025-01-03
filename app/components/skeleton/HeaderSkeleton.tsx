const HeaderSkeleton = () => {
    return (
        <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[95%] md:w-4/5 z-50 rounded-b-3xl shadow-md bg-white py-4 px-6 flex items-center justify-between">
            {/* Logo placeholder */}
            <div className="w-24 h-8 bg-gray-200 animate-pulse rounded"></div>

            {/* Mobile menu button placeholder */}
            <div className="flex md:hidden items-center">
                <div className="w-8 h-8 bg-gray-200 animate-pulse rounded-full mr-2"></div>
                <div className="w-8 h-8 bg-gray-200 animate-pulse rounded"></div>
            </div>

            {/* Desktop Navigation placeholders */}
            <section className="hidden md:flex items-center space-x-6">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="w-16 h-4 bg-gray-200 animate-pulse rounded"></div>
                ))}
            </section>

            {/* Desktop Nav Items placeholders */}
            <nav className="hidden md:flex">
                <ul className="flex items-center gap-4">
                    {[1, 2, 3].map((item) => (
                        <li key={item} className="w-8 h-8 bg-gray-200 animate-pulse rounded-full"></li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default HeaderSkeleton;

