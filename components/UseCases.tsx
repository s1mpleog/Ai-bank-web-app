import Button from "./resuable/Button";
import Glass from "./resuable/Glass";

export default function UseCases() {
  return (
    <section className="lg:text-start text-center lg:mx-0 mx-5">
      <div>
        <h4 className="text-5xl font-bold">
          Use <span className="text-primary">Cases</span>
        </h4>
        <p className="text-gray-400 my-6">
          At YourBank, we cater to the diverse needs of individuals and
          businesses alike, offering a wide range of financial solutions
        </p>
      </div>
      <div className="flex lg:flex-row  flex-col lg:items-start my-20 lg:justify-start items-center justify-center lg:gap-20">
        <div className="">
          <Glass
            image="/images/Frame.svg"
            heading="Managing Personal Finances"
            image1="/images/saving.svg"
            heading1="Saving for the Future"
            image2="/images/house.svg"
            heading2="Homeownership"
            image3="/images/reading.svg"
            heading3="Education Funding"
          />
        </div>
        <div>
          <h4 className="font-bold text-3xl">For Individuals</h4>
          <p className="my-5 text-gray-400">
            For individuals, our mortgage services pave the way to
            homeownership, and our flexible personal loans provide vital support
            during various life milestones. We also prioritize retirement
            planning, ensuring a financially secure future for our customers
          </p>
          <div className="flex lg:flex-row flex-col lg:items-center lg:justify-start  items-center justify-center my-20 lg:gap-10">
            <div className="">
              <h5 className="font-bold text-5xl text-primary">78%</h5>
              <p className="text-gray-400 my-5 max-w-[150px]">Secure Retirement Planning</p>
            </div>
            <div className="">
              <h5 className="font-bold text-5xl text-primary">63%</h5>
              <p className="text-gray-400 my-5 max-w-[150px]">Manageable Debt Consolidation </p>
            </div>
            <div className="">
              <h5 className="font-bold text-5xl text-primary">91%</h5>
              <p className="text-gray-400 my-5 max-w-[150px]">Reducing financial burdens</p>
            </div>
          </div>
          <Button className="text-white bg-glass rounded-full">Learn More</Button>
        </div>
      </div>
    </section>
  );
}
