import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const Responsiveness = () => {
  return (
    <section className="relative padding max-container">
      <div className="flex items-center flex-col">
        <h4 className="wide:text-4xl sm:text-3xl green-text-gradient font-bold">
          Better design for content
        </h4>
        <p className="wide:text-lg text-sm text-center mt-8 wide:leading-[35px] leading-[30px]">
          Startup Framework contains components and complex blocks which can
          easily be integrated into almost any design. All of the components are
          made in the same style, and can easily be integrated into projects,
          allowing you to create hundreds of solutions.
        </p>
      </div>
      <div className="flex xl:flex-row flex-col items-center xl:justify-between gap-12 mt-12">
        <div className="flex-1">
          <h4 className="max-w-sm xl:text-left text-center wide:leading-[30px] wide:text-xl font-bold">
            We haven&#39;t forgotten all about{" "}
            <span className="blue-text-gradient">responsive</span> layout
          </h4>
          <div className="flex flex-col xl:items-start items-center my-8 max-w-sm">
            <div className="mb-2 flex gap-2 items-center pink-text-gradient">
              <span>
                <Check className="w-6 h-6 text-green-400" />
              </span>
              <h6 className="font-bold ">Retina Ready</h6>
            </div>
            <p className="text-sm text-center xl:text-left leading-[30px]">
              Our designs work fine on devices supporting Retina Display. Feel
              the Clarity!
            </p>
          </div>
          <div className="flex flex-col xl:items-start items-center my-8 max-w-sm">
            <div className="mb-2 flex gap-2 pink-text-gradient">
              <span>
                <Check className="w-6 h-6 text-green-400" />
              </span>
              <h6 className="font-bold ">Responsive Layout</h6>
            </div>
            <p className="text-sm text-center xl:text-left leading-[30px]">
              Of course the designs come with full mobile support giving your
              client the native feeling of interacting with a mobile
              application.
            </p>
          </div>
        </div>
        <div className="flex justify-center relative flex-1">
          {/* First Image (on top) */}
          <Image
            src="/hero-iphone.png"
            alt="horizontal-iphone"
            height={500}
            width={350}
            className="object-cover overflow-hidden -z-10"
          />

          {/* Second Image (behind the first image) */}
          <div className="absolute xl:-left-[2rem] bottom-[2rem]">
            <Image
              src="/another-iphone.png"
              alt="vertical-iphone"
              height={500}
              width={350}
              className="object-cover overflow-hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Responsiveness;
