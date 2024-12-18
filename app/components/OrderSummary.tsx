
import Image from "next/image"


export interface CartTotals {
    subtotal: number
    shipping: number
    tax: number
    total: number
  }
  

interface OrderSummaryProps {
  totals: CartTotals
}

export function OrderSummary({ totals }: OrderSummaryProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-medium">Order Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${totals.subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Standard Shipping</span>
          <span>${totals.shipping}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>${totals.tax}</span>
        </div>
        <div className="text-sm text-gray-500">
          Applicable taxes will be calculated at checkout
        </div>
        <div className="flex justify-between text-xl font-medium pt-4 border-t">
          <span>Total</span>
          <span>${totals.total}</span>
        </div>
      </div>
      <button className="w-full" >
        Checkout
      </button>
      <button className="w-full" >
        <div className="relative w-20 h-5">
          <Image src="/paypal.svg" alt="PayPal" fill className="object-contain" />
        </div>
      </button>
      <div className="space-y-2">
        <h3 className="text-xl font-medium">Promo Code</h3>
        <input placeholder="Enter your promo code" />
      </div>
    </div>
  )
}

