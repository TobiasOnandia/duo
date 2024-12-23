import { useState } from "react"

export const Sizes = () =>{
  const [selectedSize, setSelectedSize] = useState('M')

    return(
        <section className="flex gap-2">
                  {["S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      className={`w-10 h-10 rounded cursor-pointer ${
                        selectedSize === size
                          ? "bg-neutral-100 text-neutral 500 border border-neutral-300 shadow"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </section>
    )
}