import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between mb-12">
          <div className="w-full mb-8 md:mb-0">
            <div className="w-fit">
              <Image
                src="/mobiusEngineFooter.png"
                alt="MobuisEngine"
                width={150}
                height={40}
                className="mb-4"
              />
              <hr className="border-gray-300 my-8" />
            </div>

            <div className="flex flex-wrap justify-between items-start">
              {/* Left Side */}
              <div className="flex flex-wrap gap-12">
                <div>
                  <p className="text-primary leading-tight font-medium">
                    <span className="underline pb-0.5">Address</span>
                    <br />
                    1875 Mission St Ste 103 #450
                    <br />
                    San Francisco, CA 94103
                  </p>
                </div>
                <div>
                  <p className="text-primary leading-tight font-medium">
                    <span className="underline pb-0.5">Email</span>
                    <br />
                    finance@mobiusengine.ai
                  </p>
                </div>
                <div>
                  <p className="text-primary leading-tight font-medium">
                    <span className="underline pb-0.5">Telephone</span>
                    <br />
                    650-889-6026
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className="mt-8 md:mt-0">
                <p className="text-primary leading-tight font-medium mb-2">
                  <span className="underline pb-0.5">Socials</span>
                </p>
                <div className="flex gap-4">
                  <Link href="https://linkedin.com" target="_blank">
                    <div className="border border-[#0649E7] rounded-full p-2 w-10 h-10 flex items-center justify-center">
                      <Image
                        src="/linkedin-icon.svg"
                        alt="LinkedIn"
                        width={24}
                        height={24}
                      />
                    </div>
                  </Link>
                  <Link href="https://linkedin.com" target="_blank">
                    <div className="border border-[#0649E7] rounded-full p-2 w-10 h-10 flex items-center justify-center">
                      <Image
                        src="/linkedin-icon.svg"
                        alt="LinkedIn"
                        width={24}
                        height={24}
                      />
                    </div>
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="py-4 bg-primary text-center">
        <div className="container flex justify-between items-center">
          <p className="text-white text-sm">
            &copy; 2023 Mobiusservices LLC
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white text-sm">Terms & Conditions</Link>
            <Link href="#" className="text-white text-sm">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
