import Hero from "@/components/Hero";
import OurProducts from "@/components/OurProducts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-[1300px] text-white mx-auto">
      <Image
      className="absolute top-0 left-0"
        src="/images/Abstract Design.svg"
        width={150}
        height={150}
        alt="design"
      />
      <Hero />
      <OurProducts />
    </main>
  );
}
