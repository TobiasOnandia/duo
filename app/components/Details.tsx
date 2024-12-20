'use client'

import { useState } from 'react'
import helmet from "@/public/gorra.jpeg"
import Image from "next/image"
import { AddIcon, MinusIcon } from './Icons'
import {  Recommend } from './Recommend'


export  function Details() {
  const [selectedColor, setSelectedColor] = useState('black')
  const [selectedSize, setSelectedSize] = useState('M')

  return (
    <main className="container mx-auto px-4 py-8 mt-16">
 <div className="flex container gap-8">
  {/* Imagenes laterales */}
  <section className="flex flex-col container h-full w-[345px] gap-4 justify-between space-y-4 md:space-y-0">
    {[...Array(4)].map((_, i) => (
      <figure
        key={i}
        className="aspect-square relative overflow-hidden rounded-lg bg-gray-100 flex-grow"
      >
        <Image
          src={helmet}
          alt={`Boa Fleece Jacket view ${i + 1}`}
          className="object-cover"
          fill
      
        />
      </figure>
    ))}
  </section>

  {/* Imagen principal */}
  <section className=" h-full  w-full ">
    <figure className="aspect-square relative  overflow-hidden rounded-lg bg-gray-100">
      <Image
        src={helmet}
        alt="Boa Fleece Jacket main view"
        className="object-cover"
        fill
        priority
      />
    </figure>
  </section>

  {/* Información del producto */}
  <section className="flex flex-col justify-between ">
    <div className='flex flex-col gap-6' >
    <article className='space-y-4'>
      <h1 className="text-3xl font-bold">Boa Fleece Jacket</h1>
      <div className="flex items-baseline gap-2 mt-2">
        <span className="text-2xl font-bold">$122.00</span>
        <span className="text-gray-500 line-through">$129.00</span>
        <span className="bg-black text-white text-sm px-2 py-1 rounded">SALE</span>
      </div>
      <div className="mt-4 prose prose-gray max-w-none">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni ducimus
          aut explicabo quas, dolorem exercitationem, facilis dolor dicta amet
          officiis doloremque deserunt itaque error velit inventore perferendis,
          veritatis a. Impedit?
        </p>
      </div>
    </article>

    {/* Opciones */}
    <div className="space-y-4">
      <div>
        <h3 className="font-medium mb-2">Colores disponibles</h3>
        <div className="flex gap-2">
          {["black", "blue", "green"].map((color) => (
            <button
              key={color}
              className={`w-8 h-8 rounded border-2 ${
                selectedColor === color ? "border-primary" : "border-transparent"
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
              aria-label={`Select ${color} color`}
            />
          ))}
        </div>
      </div>
        <h3 className="font-medium ">Tamaño</h3>
        <div className="flex gap-2">
          {["S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              className={`w-10 h-10 rounded cursor-pointer ${
                selectedSize === size
                  ? "bg-neutral-500 text-white"
                  : "border-gray-300 hover:border-gray-400"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
    </div>
    <h4 className="font-medium ">Stock</h4>
    <div className="flex items-center gap-2">
      <button className="cursor-pointer bg-neutral-600 p-1  rounded-full text-neutral-100">
        <MinusIcon />
      </button>
      <span className="text-xl ">12</span>
      <button className="cursor-pointer bg-neutral-600 p-1 rounded-full text-neutral-100">
        <AddIcon />
      </button>
    </div>
    </div>
    {/* Botones */}
    <div className="flex gap-4">
      <button className="flex-1 bg-neutral-500 text-neutral-100 py-2 rounded cursor-pointer hover:scale-105 transition-transform">
        Agregar al carrito
      </button>
      <button className="flex-1 bg-neutral-800 text-neutral-100 py-2 rounded cursor-pointer hover:scale-105 transition-transform">
        Comprar
      </button>
    </div>
    
  </section>


</div>



      {/* Related Products */}
          <Recommend />
    </main>
  )
}

