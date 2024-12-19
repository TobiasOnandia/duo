import Image from "next/image"
import helmet from "@/public/gorra.jpeg"
import short from "@/public/short.jpeg"
import tshirt from "@/public/tshirt.jpeg"

const categories = [
  { name: "Pantalones", color: "bg-blue-500", image: short },
  { name: "Gorras",  color: "bg-red-500", image: helmet },
  { name: "Remeras", color: "bg-pink-500", image: tshirt },
]

export const Bento = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {categories.map((category, index) => (
        <section 
          key={index} 
          className={`${index === 0 ? 'md:col-span-2 md:row-span-2' : ''} 
          rounded-lg overflow-hidden 
           `} 
        >
          <article className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-full pb-[100%] hover:scale-105 transition-transform duration-300">
              <Image 
                src={category.image} 
                alt={category.name} 
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="absolute z-100 backdrop-blur w-full font-bold text-center p-4 text-4xl">{category.name}</h3>
          </article>
        </section>
      ))}
    </div>
  )
}

