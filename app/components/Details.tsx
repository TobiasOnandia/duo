'use client'

import { useState } from 'react'
import helmet from "@/public/gorra.jpeg"
import Image from "next/image"

interface RelatedProduct {
  id: string
  name: string
  price: string
  image: string
}

const relatedProducts: RelatedProduct[] = [
  {
    id: '1',
    name: 'Adidas x Jolt',
    price: '$349.00',
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: '2',
    name: 'P 5 Cap',
    price: '$49.00',
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: '3',
    name: 'OS Beanie',
    price: '$20.00',
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: '4',
    name: 'NH X Hekknox Folding Tote',
    price: '$39.90',
    image: '/placeholder.svg?height=200&width=200',
  },
]

export  function Details() {
  const [selectedColor, setSelectedColor] = useState('black')
  const [selectedSize, setSelectedSize] = useState('M')

  return (
    <main className="container mx-auto px-4 py-8 mt-16">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images */}
        <section className="space-y-4">
          <figure className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={helmet}
              alt="Boa Fleece Jacket main view"
              className="object-cover"
              fill
              priority
            />
          </figure>
          <ul className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <li key={i} className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt={`Boa Fleece Jacket view ${i + 1}`}
                  className="object-cover"
                  fill
                />
              </li>
            ))}
          </ul>
        </section>

        {/* Product Info */}
        <section className="space-y-6 flex flex-col ">
          <article>
            <h1 className="text-3xl font-bold">Boa Fleece Jacket</h1>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-2xl font-bold">$122.00</span>
              <span className="text-gray-500 line-through">$129.00</span>
              <span className="bg-black text-white text-sm px-2 py-1 rounded">SALE</span>
            </div>
            <div className="mt-4 prose prose-gray max-w-none">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni ducimus aut explicabo quas, dolorem exercitationem, facilis dolor dicta amet officiis doloremque deserunt itaque error velit inventore perferendis, veritatis a. Impedit?
              </p>
            </div>
          </article>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Colores disponibles</h3>
              <div className="flex gap-2">
                {['black', 'blue', 'green'].map((color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded border-2 ${
                      selectedColor === color ? 'border-primary' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Select ${color} color`}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Tamaño</h3>
              <div className="flex gap-2">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className={`w-10 h-10 rounded cursor-pointer ${
                      selectedSize === size
                        ? 'bg-neutral-500 text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-neutral-500 text-neutral-100 py-2 rounded cursor-pointer hover:scale-105 transition-transform">Agregar al carrito</button>
            <button className="flex-1 bg-neutral-800 text-neutral-100 py-2 rounded cursor-pointer hover:scale-105 transition-transform">Comprar</button>
          </div>
        </section>
      </div>

      {/* Related Products */}
      <footer className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Otros usuarios tambien vieron</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-cover group-hover:scale-105 transition-transform"
                  fill
                />
           
              </div>
              <div className="p-4">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </footer>
    </main>
  )
}

