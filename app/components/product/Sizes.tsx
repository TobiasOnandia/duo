import { useStore } from "@store/Store.products"

export const Sizes = ({ productId }: { productId: number }) => {
  const sizes = useStore(state => state.sizes[productId]) || 'M'
  const selectedSizes = useStore(state => state.updateSizes || 'M')

  return (
    <section className="flex gap-2">
      {["S", "M", "L", "XL"].map((size) => (
        <button
          key={size}
          className={`w-10 h-10 rounded cursor-pointer ${sizes[0] === size
            ? "bg-neutral-100 text-neutral 500 border border-neutral-300 shadow"
            : "border-gray-300 hover:border-gray-400"
            }`}
          onClick={() => selectedSizes(productId, [size])}
        >
          {size}
        </button>
      ))}
    </section>
  )
}