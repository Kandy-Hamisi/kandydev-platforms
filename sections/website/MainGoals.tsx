import React from "react";
import { ourMainGoals } from "@/constants";
import Image from "next/image";

const MainGoals = () => {
  return (
    <section className="relative min-h-screen padding-x">
      <div className="flex justify-center padding-b">
        <h4 className="wide:text-4xl sm:text-3xl text-xl green-text-gradient font-bold">
          What We Stand For
        </h4>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
        {/*    first div */}
        <div className="flex flex-col gap-6">
          {ourMainGoals.map((goal) => (
            <div key={goal.title} className="flex flex-col">
              <h5 className="font-bold wide:text-lg text-sm pink-text-gradient mb-2">
                {goal.title}
              </h5>
              <p className="text-sm leading-[30px]">{goal.description}</p>
            </div>
          ))}
        </div>
        {/*    second div */}
        <div className="">
          <div className="relative h-[300px] w-[350px] wide:h-[500px]">
            <Image
              src="/client-meeting.jpg"
              alt="client meeitng"
              fill
              className="overflow-hidden object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default MainGoals;
