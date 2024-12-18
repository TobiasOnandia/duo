import { SearchIcon } from "./Icons";

export function HeroSection() {
  return (
    <div className="relative h-[calc(100vh-4rem)] md:h-[calc(100vh-8rem)] bg-gray-100">
      <div 
        className="absolute inset-0 bg-cover bg-center portada"
        
      >
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center px-4 pt-16">
        <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold mb-8 text-center">Shop</h1>
        <div className="w-full max-w-md md:max-w-2xl">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-4">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search on Stuffsus"
                className="flex-1 border-0 focus:ring-0 focus:outline-none text-sm md:text-base"
              />
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <SearchIcon />
              </button>
            </div>
          </div>
          <p className="text-white text-center mt-4 text-sm md:text-lg">
            Todo lo que necesitas
          </p>
        </div>
      </div>
    </div>
  )
}

