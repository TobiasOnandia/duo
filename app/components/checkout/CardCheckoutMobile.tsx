import { useStore } from "@/app/store/Store.products"
import { CardCheckout } from "@components/checkout/CardCheckout"
export const CardCheckoutMobile = () => {
  const products = useStore((state) => state.products)

  return (
    <>
      {
        products.length === 0 && <h3 className="flex items-center justify-center pt-8  text-gray-400">No hay productos en el carrito</h3>
      }

      {
        products.length > 0 && products.map(item => {
          return (
            <div key={item.id} className="overflow-y-auto lg:mx-4 max-h-[400px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              <CardCheckout item={item} />
            </div>
          )
        })
      }
    </>
  )
}