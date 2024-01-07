import Button from "./resuable/Button";
import Glass from "./resuable/Glass";

export default function UseCases2() {
  return (
    <section className="lg:text-start text-center lg:mx-0 mx-5">
      <div className="flex lg:flex-row flex-col items-start justify-start lg:gap-20">
        <div>
          <h4 className="font-bold text-3xl">For Business</h4>
          <p className="my-5 text-gray-400">
          For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them.
          </p>
          <div className="flex lg:flex-row flex-col items-center justify-start my-20 gap-10">
            <div className="">
              <h5 className="font-bold text-5xl text-primary">65%</h5>
              <p className="text-gray-400 my-5 max-w-[150px]">
              Cash Flow Management
              </p>
            </div>
            <div className="">
              <h5 className="font-bold text-5xl text-primary">70%</h5>
              <p className="text-gray-400 my-5 max-w-[150px]">
              Drive Business Expansion{" "}
              </p>
            </div>
            <div className="">
              <h5 className="font-bold text-5xl text-primary">45%</h5>
              <p className="text-gray-400 my-5 max-w-[150px]">
              Streamline payroll processing
              </p>
            </div>
          </div>
          <Button className="text-white bg-glass rounded-full lg:mb-0 mb-8">
            Learn More
          </Button>
        </div>

        {/* text */}
        <div className="">
          <Glass
            image="/images/Frame.svg"
            heading="Startups and Entrepreneurs"
            image1="/images/cash.svg"
            heading1="Cash Flow Management"
            image2="/images/box.svg"
            heading2="Business Expansion"
            image3="/images/dollar.svg"
            heading3="Payment Solutions"
          />
        </div>
      </div>
    </section>
  );
}
