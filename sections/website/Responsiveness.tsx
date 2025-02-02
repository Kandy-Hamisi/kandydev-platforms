import React from "react";

const Responsiveness = () => {
  return (
    <section className="min-h-screen max-container">
      <div className="flex items-center flex-col">
        <h4 className="wide:text-4xl green-text-gradient font-bold">
          Better design for content
        </h4>
        <p className="wide:text-lg text-sm text-center mt-8 wide:leading-[35px] leading-[30px]">
          Startup Framework contains components and complex blocks which can
          easily be integrated into almost any design. All of the components are
          made in the same style, and can easily be integrated into projects,
          allowing you to create hundreds of solutions.
        </p>
      </div>
      <div className="flex items-center gap-12">
        <div>
          <h6>Some info here</h6>
        </div>
        <div className="relative"></div>
      </div>
    </section>
  );
};
export default Responsiveness;
