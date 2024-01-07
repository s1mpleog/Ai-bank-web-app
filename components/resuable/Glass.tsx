import Image from "next/image";

interface GlassProps {
  image: string;
  heading: string;

  image1: string;
  heading1: string;
  image2: string;
  heading2: string;

  image3: string;
  heading3: string;
}

export default function Glass({
  image,
  heading,
  image1,
  heading1,
  image2,
  heading2,
  image3,
  heading3,
}: GlassProps) {
  return (
    <div className="bg-glass rounded-3xl relative py-4 px-2 lg:mx-0 mx-2">
      <Image
        className="absolute top-0 left-0"
        src="/images/Abstract Design.svg"
        width={100}
        height={100}
        alt="style"
      />
      <div className="flex items-start gap-4 justify-start lg:mx-10 mx-4">
        <div className="flex bg-glass1 lg:min-w-[280px] lg:min-h-[200px] min-w-[150px] min-h-[150px] py-6 px-6 rounded-2xl border-[1px] border-card flex-col items-center justify-start text-center">
          <div className="card-bg w-[70px] h-[70px] flex items-center justify-center rounded-full">
            <Image src={image} width={28} height={28} alt="flame" />
          </div>
          <div className="my-4 max-w-[200px]">
            <h4>{heading}</h4>
          </div>
        </div>

        <div className="flex bg-glass1 lg:min-w-[280px] lg:max-h-[200px] min-w-[150px] min-h-[150px] py-6 px-6 rounded-2xl border-[1px] border-card flex-col items-center justify-start text-center">
          <div className="card-bg w-[70px] h-[70px] flex items-center justify-center rounded-full">
            <Image src={image1} width={28} height={28} alt="flame" />
          </div>
          <div className="my-4 max-w-[200px]">
            <h4>{heading1}</h4>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-4 my-8 lg:ml-10 ml-5 justify-start">
        <div className="flex bg-glass1 lg:min-w-[280px] lg:min-h-[200px] min-w-[150px] min-h-[150px] py-6 px-6  rounded-2xl border-[1px] border-card flex-col items-center justify-start text-center">
          <div className="card-bg w-[70px] h-[70px] flex items-center justify-center rounded-full">
            <Image src={image2} width={28} height={28} alt="flame" />
          </div>
          <div className="my-4 max-w-[200px]">
            <h4>{heading2}</h4>
          </div>
        </div>

        <div className="flex bg-glass1 lg:min-w-[280px] lg:min-h-[200px] min-w-[150px] min-h-[150px] py-6 px-6 rounded-2xl border-[1px] border-card flex-col items-center justify-start text-center">
          <div className="card-bg w-[70px] h-[70px] flex items-center justify-center rounded-full">
            <Image src={image3} width={28} height={28} alt="flame" />
          </div>
          <div className="my-4 max-w-[200px]">
            <h4>{heading3}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
