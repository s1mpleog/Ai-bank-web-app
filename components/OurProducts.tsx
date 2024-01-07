import Button from "./resuable/Button";
import Card from "./resuable/Card";

export default function OurProducts() {
  return (
    <section>
      <div className="flex md:flex-row lg:text-start text-center flex-col md:mx-0 mx-5 items-center mt-20 justify-between">
        <div>
          <h4 className="font-bold lg:text-5xl text-3xl">
            Our <span className="text-primary">Products</span>
          </h4>
          <p className="text-gray-400 my-6 max-w-[840px]">
            Discover a range of comprehensive and customizable banking products
            at YourBank, designed to suit your unique financial needs and
            aspirations
          </p>
        </div>
        <div className="card-bt py-3 lg:px-6 px-2 gap-4">
          <Button className="rounded-full py-3">For Individuals</Button>
          <Button className="bg-transparent text-white py-0">For Businesses</Button>
        </div>
      </div>
      <div className="flex md:flex-row lg:mx-0 mx-5 flex-col items-center justify-between my-14 gap-5">
        <div className="md:border-r-[1px] border-b-[1px] md:border-b-0 border-card md:pr-10 pb-5">
          <Card
            image="/images/briefcase.fill.svg"
            heading="Checking Accounts"
            paragraph="Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access."
          />
        </div>
        <div className="md:border-r-[1px] border-b-[1px] md:border-b-0 border-card md:pr-10 pb-5">
          <Card
            image="/images/savings.svg"
            heading="Savings Accounts"
            paragraph="Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you."
          />
        </div>
        <Card
          image="/images/loan.svg"
          heading="Loans and Mortgages"
          paragraph="Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need."
        />
      </div>
    </section>
  );
}
