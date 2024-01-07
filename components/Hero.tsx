import Image from "next/image";
import Button from "./resuable/Button";

export default function Hero() {
  return (
    <section className="flex md:flex-row flex-col md:text-start text-center items-start md:mt-32 mt-10 text-white md:justify-between justify-start md:max-w-[1300px] md:mx-auto mx-5">
      <div className="flex flex-col md:items-start md:justify-start items-center justify-center">
        <div className="bg-card px-5 flex items-center gap-2 py-2 rounded-xl">
          <Image src="/images/done.svg" width={24} height={24} alt="done" />
          <p className="text-sm text-gray-400">
            No LLC Required, No Credit Check.
          </p>
        </div>
        <div className="my-5">
          <h1 className="font-extrabold md:text-5xl text-3xl md:max-w-[730px] leading-normal">
            Welcome to YourBank Empowering Your{" "}
            <span className="text-primary">Financial Journey</span>
          </h1>
          <p className="my-4 max-w-[600px] text-gray-400">
            At YourBank, our mission is to provide comprehensive banking
            solutions that empower individuals and businesses to achieve their
            financial goals. We are committed to delivering personalized and
            innovative services that prioritize our customers' needs.
          </p>
          <Button className="mt-3 rounded-full">Open Account</Button>
        </div>
      </div>
      <div className="relative">
        <Image
          className="md:w-[515px] md:h-[515px] object-contain"
          src="/images/Container1.png"
          width={1980}
          height={1080}
          alt="hero"
          quality={100}
          priority
        />
        <div className="absolute -z-20 top-0 md:right-8 right-0">
          <Image
            src="/images/Vector1.png"
            width={100}
            height={100}
            alt="vector"
          />
        </div>
        <div className="absolute -z-20 top-20 md:right-8 right-2">
          <Image
          className="bg-blend-screen"
            src="/images/Vector1.png"
            width={100}
            height={100}
            alt="vector"
          />
        </div>
      </div>
    </section>
  );
}
