import { Link } from "next-view-transitions";
import Image from "next/legacy/image";
import { DetailsActions } from "../details/DetailsActions";
import { ProductType } from "@/app/types/typesProduct";



export const Card = ({ data }: { data: ProductType }) => (
  <article className="w-full bg-white rounded-lg border max-w-md flex flex-col justify-between border-gray-300 shadow-lg hover:shadow-xl transition-shadow">
    <Link href={`/item/${data.id}`} className="" >
      <figure className="relative w-full  aspect-[4/3]">
        <Image
          src={data.thumbnail}
          alt={data.title}
          className="rounded-t-lg object-cover hover:scale-110 transition-transform"
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
      <DetailsActions data={data} />
    </div>
  </article>
);
