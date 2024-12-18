import { Main } from "@/app/components/Main";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/Portada";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Main />
      <Footer />
    </>
  );
}
