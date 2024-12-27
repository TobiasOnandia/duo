'use client';

import Image from "next/legacy/image";
import short from "@/public/short.jpeg";
import { ProductType } from "@/app/types/typesProduct";

export function DetailsImageGallery({ data }: { data: ProductType }) {
    return (
        <>
            {/* Imágenes laterales */}
            <section className="relative flex xl:flex-col flex-row container h-full xl:w-[345px] gap-4 justify-between space-y-4 md:space-y-0">
                {[...Array(4)].map((_, i) => (
                    <figure
                        key={i}
                        className="aspect-square w-full h-full max-w-3xs relative cursor-pointer overflow-hidden rounded-lg bg-gray-100 flex-grow"
                    >
                        <Image
                            src={data.thumbnail || short}
                            alt={`Image ${i + 1}`}
                            className="object-cover"
                            layout="fill"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </figure>
                ))}
            </section>

            {/* Imagen principal */}
            <section className="relative h-full w-full">
                <figure className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
                    <Image
                        src={data.images[0] || short}
                        alt="Main view"
                        className="object-cover"
                        layout="fill"
                        priority
                    />
                </figure>
            </section>
        </>
    );
}
