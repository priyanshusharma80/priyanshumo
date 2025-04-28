import { Button } from "./button";
import { GreenRightIcon } from "./icon";

const PricingCard = ({
  planName,
  price,
  services = [],
  popular = false,
  planDescription,
  priceType = "/week",
}) => {
  return (
    <div className="bg-white p-6 rounded-[35px] shadow-lg border border-primary flex-1 relative flex flex-col">
      {popular && (
        <div className="absolute top-6 right-6 bg-[#EBF1FF] text-[#0649E7] text-xs px-[17] py-[9] border-1 border-solid rounded-full">
          Popular
        </div>
      )}
      <div className="flex-none">
        <h2 className=" text-3xl font-semibold mb-4 text-primary">
          {planName}
        </h2>
        {planDescription && (
          <p className="text-primary text-sm mb-4">{planDescription}</p>
        )}

        <div className="mb-6">
          <span className="text-3xl font-bold text-primary">${price}</span>
          <span className="text-primary font-bold">{priceType}</span>
        </div>
        <hr className="border border-gray-200" />
      </div>

      <div className="flex-grow overflow-y-auto my-8">
        <ul className="space-y-3">
          {services?.map((service, index) => (
            <li key={index} className="flex items-start">
              <GreenRightIcon />
              <span className="text-primary font-medium">{service}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-none mt-auto">
        <Button>Get Started →</Button>
      </div>
    </div>
  );
};

export default PricingCard;
