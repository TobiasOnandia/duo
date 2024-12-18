import Image from "next/image";
import helmet from "@/public/gorra.jpeg";

interface ProductProps {
  name: string;
  price: number;
  description: string;
  image: string;
}

const ProductCard = ({ name, price, description, image }: ProductProps) => (
  <article className="w-full  bg-white rounded-lg shadow border border-neutral-200 ">
    <figure className="">
       <Image src={image} alt={name} className="rounded-t-lg " />
    </figure>

    <div className="flex flex-col gap-2 px-2 py-4">
      <header className="flex items-center justify-between">
        <h4 className="text-xl font-semibold">{name}</h4>
        <p className="text-lg">${price}</p>
      </header>
      <p className="line-clamp-1  ">{description}</p>
      <footer className="flex items-center justify-between">
        <button className="px-4 py-2 rounded-lg flex items-center  cursor-pointer group/item">
            <span >Agregar carrito</span> 
        </button>
        <button className=" px-4 py-2 rounded-lg  cursor-pointer transition-colors">
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
