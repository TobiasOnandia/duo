import { Link } from "next-view-transitions";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface ProductProps {
  name: string;
  price: number;
  description: string;
  image: StaticImageData;
  id: string
}

export const Card = ({ name, price, description, image, id }: ProductProps) => (
  <article className="w-full bg-white rounded-lg border max-w-md flex flex-col justify-between border-gray-300 shadow-lg hover:shadow-xl transition-shadow">
    <figure className="relative w-full  aspect-[4/3]">
      <Image
        src={image}
        alt={name}
        fill
        className="rounded-t-lg object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        layout="fill"
      />
    </figure>

    <div className="flex flex-col gap-4 px-4 py-4">
      <header className="flex items-center justify-between">
        <h4 className="text-xl font-semibold">{name}</h4>
        <p className="text-lg font-semibold">${price}</p>
      </header>
      <p className="line-clamp-2 text-gray-600">{description}</p>
      <footer className="flex items-center justify-between gap-2">
        <Link
          href={`/item/${id}`}
          className="px-4 text-center py-2 rounded w-full transition-transform border border-gray-300 bg-gray-100 cursor-pointer hover:bg-gray-200"
        >
          Ver detalle
        </Link>
        <Link
          href={"/checkout"}
          className="px-4 text-center py-2 rounded w-full cursor-pointer transition-colors bg-neutral-600 text-white hover:bg-neutral-700"
        >
          Comprar
        </Link>
      </footer>
    </div>
  </article>
);
