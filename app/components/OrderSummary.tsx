
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
      <h2 className="text-3xl font-medium">Orden</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${totals.subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Envio</span>
          <span>${totals.shipping}</span>
        </div>
        <div className="flex justify-between text-xl font-medium pt-4 border-t">
          <span>Total</span>
          <span>${totals.total}</span>
        </div>
      </div>
      <button className="w-full bg-neutral-800 text-neutral-100 py-2 rounded text-center" >
        Comprar
      </button>
     
      <div className="space-y-2 ">
        <h3 className="text-xl font-medium">Codigo de promocion</h3>
        <input placeholder="Enter your promo code" className="border border-neutral-200 w-full py-2 px-2 rounded"/>
      </div>
    </div>
  )
}

