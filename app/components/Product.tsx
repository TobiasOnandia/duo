import Image from "next/image";
import helmet from "@/public/gorra.jpeg";

interface ProductProps {
  name: string;
  price: number;
  description: string;
  image: string;
}

const ProductCard = ({ name, price, description, image }: ProductProps) => (
  <article className="w-full bg-white rounded-lg border border-gray-300 shadow-lg hover:shadow-xl transition-shadow">
    <figure className="relative w-full aspect-[4/3]">
      <Image src={image} alt={name} fill className="rounded-t-lg object-cover" />
    </figure>

    <div className="flex flex-col gap-4 px-4 py-4">
      <header className="flex items-center justify-between">
        <h4 className="text-xl font-semibold">{name}</h4>
        <p className="text-lg font-semibold">${price}</p>
      </header>
      <p className="line-clamp-2 text-gray-600">{description}</p>
      <footer className="flex items-center justify-between gap-2">
        <button className="px-4 py-2 rounded w-full transition-transform border border-gray-300 bg-gray-100 cursor-pointer hover:bg-gray-200">
          Ver detalle
        </button>
        <button className="px-4 py-2 rounded w-full cursor-pointer transition-colors bg-neutral-600 text-white hover:bg-neutral-800">
          Comprar
        </button>
      </footer>
    </div>
  </article>
);

export const Product = () => {
  const products = [
    { name: "Gorra", price: 100, description: "Lorem ipsum dolor sit amet iwerjiwerjiwejriwejriwejriwejriwejriwejriwejriwejriwejriwej", image: helmet },
    { name: "Gorra Negra", price: 120, description: "Edición limitada iwerjiwerjiwejriwejriwejriwejriwejriwejriwejriwejriwejriwej", image: helmet },
    { name: "Gorra Azul", price: 110, description: "Cómoda y elegante iwerjiwerjiwejriwejriwejriwejriwejriwejriwejriwejriwejriwej", image: helmet },
    { name: "Gorra Verde", price: 115, description: "Perfecta para el verano iwerjiwerjiwejriwejriwejriwejriwejriwejriwejriwejriwejriwej", image: helmet },
  ];

  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-full h-full gap-8">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          description={product.description}
          image={product.image}
        />
      ))}
    </section>
  );
};
