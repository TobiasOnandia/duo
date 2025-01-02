'use client';

import { ProductType } from "@/app/types/typesProduct";
import { ButtonBuy } from "@lib/ButtonBuy";
import { ButtonAdd } from "@/app/lib/ButtonAdd";

export function DetailsActions({ data }: { data: ProductType }) {
  return (
    <footer className="flex sm:flex-row  flex-col gap-4 pt-4">
      <ButtonAdd data={data} />
      <ButtonBuy data={data} />
    </footer>
  );
}
