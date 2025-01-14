import { Suspense } from "react";
import { Bento } from "@components/product/Bento";
import { HeroSection } from "@components/pages/Portada";
import { Main } from "@components/pages/Main"
import { MainSkeleton } from "./components/skeleton/MainSkeleton";
export default function Home() {

  return (
    <>
      <Suspense fallback={<MainSkeleton />}>
        <HeroSection />
        <Main />
        <Bento />
        {/* <AboutMe /> */}
      </Suspense>
    </>
  );
}
