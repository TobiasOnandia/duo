'use client'
import Image from "next/image"
import { useFetch } from "../hooks/useFecth"
import { Link } from "next-view-transitions"


export const Recommend = () => {
  const { data } = useFetch('https://dummyjson.com/products?limit=4&skip=10')

  console.log(data?.products)

  return (
    <footer className="mt-12 container  mx-auto">
      <h2 className="text-2xl font-bold mb-6">Otros usuarios tambien vieron</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 cursor-pointer">
        {data?.products.map((product) => (
          <Link key={product.id} href={`/item/${product.id}`}>
            <article className="group relative">
              <figure className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={product.thumbnail || '/placeholder.svg'}
                  alt={product.title || 'Imagen predeterminada'}
                  className="object-cover group-hover:scale-105 transition-transform"
                  fill
                />

              </figure>
              <div className="p-4">
                <h3 className="font-medium">{product.title}</h3>
                <p className="text-md text-gray-600">$ {product.price}</p>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </footer>
  )
}