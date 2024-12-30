import { Suspense } from "react";
import { Bento } from "@components/product/Bento";
import { HeroSection } from "@components/pages/Portada";
import { Main } from "@components/pages/Main"
export default function Home() {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <Main />
        <Bento />
    </Suspense>
    </>
  );
}
