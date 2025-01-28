import React from "react";
import { Button } from "@/components/ui/button";

import Image from "next/image";

const SecurityConcern = () => {
  return (
    <section className="max-container min-h-screen relative">
      <div className="flex justify-center padding-b">
        <h1 className="green-text-gradient wide:text-4xl font-palanquin font-bold text-center">
          Your Security is our concern. We protect your codebase, files,
          clients, and emails
        </h1>
      </div>
      <div className="glass-morphism border border-gray-400 flex items-center gap-12 justify-between">
        <div className="flex-1 flex flex-col">
          <h4 className="wide:text-xl font-bold mb-4">
            Get seamless integrations with current secure technologies
          </h4>
          <p className="text-xs leading-[30px] mb-4">
            Just some information about how our integrations will give our
            clients a secure experience. We know what we are doing and that is
            why we are ensuring on edge security features
          </p>
          <Button className="bg-transparent text-xs rounded-full w-24 border border-white">
            Learn More
          </Button>
        </div>

        <div className="flex-1">
          <div>
            <Image
              src="/comp.png"
              alt="illustration"
              height={400}
              width={400}
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute violet-gradient h-24 w-24 rounded-full shadow-sm blur-3xl top-5 left-[50%] transform-x-1/2 -z-10"></div>
    </section>
  );
};
export default SecurityConcern;
