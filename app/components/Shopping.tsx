'use client'

import { useState } from "react"
import { CartItem } from "./CartItem"
import { OrderSummary } from "./OrderSummary"

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
  
  export interface CartTotals {
    subtotal: number
    shipping: number
    tax: number
    total: number
  }
  
  
const initialProducts: Product[] = [
  {
    id: "1",
    name: "Yuqos Neosound Flex",
    price: 652,
    image: "/placeholder.svg",
    color: "Black Wood",
    connectivity: "Wired",
    support: "Support Google Assitance & Siri",
    quantity: 1,
  },
  {
    id: "2",
    name: "Yuqos Spliter Sound",
    price: 1360,
    image: "/placeholder.svg",
    color: "Dark Brown Wood",
    connectivity: "Wireless",
    support: "Support Google Assitance & Siri",
    quantity: 2,
  },
  {
    id: "3",
    name: "Yuqos Roles Defying",
    price: 482,
    image: "/placeholder.svg",
    color: "Black Brown",
    connectivity: "Wireless",
    support: "Not Support Google Assitance & Siri",
    quantity: 1,
  },
]

export default function ShoppingCart() {
  const [products, setProducts] = useState<Product[]>(initialProducts)

  const updateQuantity = (id: string, quantity: number) => {
    setProducts(products.map(p => 
      p.id === id ? { ...p, quantity } : p
    ))
  }

  const removeProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id))
  }

  const toggleWishlist = (id: string) => {
    // Implement wishlist functionality
    console.log("Toggle wishlist for product:", id)
  }

  const calculateTotals = (): CartTotals => {
    const subtotal = products.reduce((sum, p) => sum + (p.price * p.quantity), 0)
    const shipping = 120
    const tax = 50
    return {
      subtotal,
      shipping,
      tax,
      total: subtotal + shipping + tax
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl font-medium mb-6">Your Product List</h1>
          <div className="space-y-6">
            {products.map(product => (
              <CartItem
                key={product.id}
                product={product}
                onUpdateQuantity={updateQuantity}
                onRemove={removeProduct}
                onToggleWishlist={toggleWishlist}
              />
            ))}
          </div>
        </div>
        <div>
          <OrderSummary totals={calculateTotals()} />
        </div>
      </div>
    </div>
  )
}

