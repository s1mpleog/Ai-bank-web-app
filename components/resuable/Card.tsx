import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface CardProps {
  image: string;
  heading: string;
  paragraph: string;
  className?: string;
}
export default function Card({
  image,
  heading,
  paragraph,
  className,
}: CardProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className={twMerge("card-bg p-6 rounded-full my-4", className)}>
        <Image src={image} alt="card" width={28} height={28} />
      </div>
      <div className="my-3">
        <h4 className="text-xl">{heading}</h4>
      </div>
      <div className="my-4">
        <p className="text-gray-400 max-w-[400px]">{paragraph}</p>
      </div>
    </div>
  );
}
