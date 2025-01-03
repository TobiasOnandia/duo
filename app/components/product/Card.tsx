import { Link } from "next-view-transitions";
import Image from "next/legacy/image";
import { ProductType } from "@/app/types/typesProduct";
import { ButtonAdd } from "@/app/lib/ButtonAdd";



export const Card = ({ data }: { data: ProductType }) => (
  <article className="w-full h-full bg-white rounded-lg border max-w-md flex flex-col justify-between border-gray-300 shadow-lg hover:shadow-xl transition-shadow">
    <Link href={`/item/${data.id}`} className="" >
      <figure className="relative w-full  aspect-[4/3]">
        <Image
          src={data.thumbnail}
          alt={data.title}
          className="rounded-t-lg object-cover hover:scale-110  transition-transform"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          layout="fill"
        />
      </figure>
    </Link>

    <div className="flex flex-col gap-4 px-4 py-4">
      <header className="flex items-center justify-between">
        <h4 className="text-xl font-semibold">{data.title}</h4>
        <p className="text-lg font-semibold">${data.price}</p>
      </header>
      <p className="line-clamp-2 text-gray-600">{data.description}</p>
      <footer className="flex items-center flex-col sm:flex-row justify-between gap-2">
        <Link
          href={`/item/${data.id}`}
          className="px-4 text-nowrap text-center cursor-pointer hover:scale-105 transition-transform py-2 rounded w-full border border-gray-300 bg-gray-100  hover:bg-gray-200"
        >
          Ver detalle
        </Link>
        <ButtonAdd data={data} />
      </footer>
    </div>
  </article>
);
