import { Main } from "@/app/components/Main";
import { HeroSection } from "./components/Portada";
import { Bento } from "./components/Bento";
import { Suspense } from "react";

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
