import short from "@/public/short.jpeg"
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
  

export const Recommend = () => {
    return(
        <footer className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Otros usuarios tambien vieron</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={short}
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
    )}