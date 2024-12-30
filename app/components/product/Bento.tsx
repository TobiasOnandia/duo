import Image from "next/legacy/image"
import helmet from "@/public/gorra.jpeg"
import short from "@/public/short.jpeg"
import tshirt from "@/public/tshirt.jpeg"
const categories = [
  { name: "Pantalones", color: "bg-blue-500", image: short },
  { name: "Gorras", color: "bg-red-500", image: helmet },
  { name: "Remeras", color: "bg-pink-500", image: tshirt },
]

export const Bento = async () => {


  return (
    <section className="grid grid-cols-1 sm:grid-cols-2  bg-[#f8f8f8] p-6 rounded-3xl border border-gray-200 shadow-lg md:grid-cols-3 gap-6 mt-14 w-[95%] md:w-4/5 mx-auto">
      {categories.map((category, index) => (
        <section
          key={index}
          className={`${index === 0 ? 'md:col-span-2 md:row-span-2' : ''} 
          rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300
           `}
        >
          <article className="relative cursor-pointer w-full h-full flex items-center justify-center group">
            <figure className="relative w-full pb-[100%] transition-transform duration-300 group-hover:scale-105 cursor-pointer">
              <Image
                src={category.image}
                alt={category.name}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </figure>
            <h3 className="absolute z-10 flex items-center justify-center backdrop-brightness-40 h-full w-full text-white font-semibold text-center px-4 py-2 rounded-lg text-2xl sm:text-3xl md:text-4xl group-hover:backdrop-brightness-80  transition-all">
              {category.name}
            </h3>
          </article>
        </section>
      ))}
    </section>
  )
}
