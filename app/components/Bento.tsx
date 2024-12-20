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
    <section className="grid grid-cols-1 sm:grid-cols-2 bg-[#fdfdfd] p-4 rounded-3xl border border-primary shadow md:grid-cols-3 gap-4 mt-14 w-[95%] md:w-4/5 mx-auto">
      {categories.map((category, index) => (
        <section 
          key={index} 
          className={`${index === 0 ? 'md:col-span-2 md:row-span-2' : ''} 
          rounded-lg overflow-hidden 
           `} 
        >
          <article className="relative w-full h-full flex items-center justify-center">
            <figure className="relative w-full pb-[100%] hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Image 
                src={category.image} 
                alt={category.name} 
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </figure>
            <h3 className="absolute z-100 backdrop-blur text-background w-full font-bold text-center p-4 text-4xl">{category.name}</h3>
          </article>
        </section>
      ))}
    </section>
  )
}

