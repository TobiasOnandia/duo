'use client';

import { Description } from "@components/product/Description";
import { Colors } from "@components/product/Colors";
import { Sizes } from "@components/product/Sizes";
import { Stock } from "@components/product/Stock";
import { ProductType } from "@/app/types/typesProduct";

export function DetailsInfo({ data }: { data: ProductType }) {
  return (
    <div className="flex flex-col gap-4">
      <Description />
      <h3 className="font-medium">Colores disponibles</h3>
      <Colors productId={data.id} />
      <h3 className="font-medium">Tamaño</h3>
      <Sizes productId={data.id} />
      <h4 className="font-medium">Stock</h4>
      <Stock productId={data.id} productPrice={data.price} />
    </div>
  );
}
