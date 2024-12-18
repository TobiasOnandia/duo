import Image from "next/image"

export interface Product {
    id: string
    name: string
    price: number
    image: string
    color: string
    connectivity: string
    support: string
    quantity: number
  }
  
interface CartItemProps {
  product: Product
  onUpdateQuantity: (id: string, quantity: number) => void
  onRemove: (id: string) => void
  onToggleWishlist: (id: string) => void
}

export function CartItem({ product, onUpdateQuantity, onRemove, onToggleWishlist }: CartItemProps) {
  return (
    <div className="flex items-start gap-4 py-6 border-b">
      <div className="w-24 h-24 relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>
      <div className="flex-1 space-y-1">
        <h3 className="text-xl font-medium">{product.name}</h3>
        <p className="text-gray-600">{product.color}</p>
        <p className="text-gray-600">{product.connectivity}</p>
        <p className="text-gray-600">{product.support}</p>
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => onUpdateQuantity(product.id, Math.max(0, product.quantity - 1))}
          >
          </button>
          <span className="w-8 text-center">{product.quantity}</span>
          <button
            
            
            onClick={() => onUpdateQuantity(product.id, product.quantity + 1)}
          >
          </button>
        </div>
      </div>
      <div className="text-right space-y-2">
        <p className="text-xl">${product.price}</p>
        <div className="flex gap-2 justify-end">
          <button
            
            
            onClick={() => onToggleWishlist(product.id)}
          >
          </button>
          <button
            onClick={() => onRemove(product.id)}
          >
          </button>
        </div>
      </div>
    </div>
  )
}

