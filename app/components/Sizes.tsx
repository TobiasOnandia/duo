import { useState } from "react"
import { useStore } from "../store/Store.products"

export const Sizes = ({ productId }: { productId: number }) => {
  const [selectedSize, setSelectedSize] = useState('M')
  const size = useStore(state => state.sizes[productId])
  const selectedSizes = useStore(state => state.selectedSizes)


  const handleSelectSize = (size: string) => {
    selectedSizes(productId, [selectedSize])
    setSelectedSize(size)
  }

  return (
    <section className="flex gap-2">
      {["S", "M", "L", "XL"].map((size) => (
        <button
          key={size}
          className={`w-10 h-10 rounded cursor-pointer ${selectedSize === size
            ? "bg-neutral-100 text-neutral 500 border border-neutral-300 shadow"
            : "border-gray-300 hover:border-gray-400"
            }`}
          onClick={() => handleSelectSize(size)}
        >
          {size}
        </button>
      ))}
    </section>
  )
}