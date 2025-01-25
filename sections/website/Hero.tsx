import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative lg:min-h-screen flex gap-12 flex-row-reverse justify-between">
      <div className="flex-1 padding ring-5 ring-red-500 padding-t flex flex-col gap-6">
        <h1 className="text-4xl md:text-6xl wide:text-8xl font-palanquin capitalize font-bold">
          Elevate Your Digital Presence
        </h1>
        <h2 className="text-2xl wide:text-4xl max-w-[45rem] text-slate-600">
          Digital Solutions Engineered to Perfection
        </h2>
        <p className="leading-[35px] max-w-[40rem] text-md">
          Transform your business with cutting-edge web technologies that
          deliver performance, reliability, and user-centric experiences. We
          craft digital solutions that turn your vision into powerful online
          platforms.
        </p>
        <div className="flex gap-4 items-center">
          <Button>View Portfolio</Button>
          <Button className="bg-transparent text-black border border-gray-500 hover:text-white">
            The Perks
          </Button>
        </div>
      </div>
      <div className="hidden xl:flex">
        <Image
          src="/woman-vr2.jpg"
          alt="virtual reality lady"
          height={1000}
          width={500}
          className="object-cover"
        />
      </div>
    </section>
  );
};
export default Hero;
