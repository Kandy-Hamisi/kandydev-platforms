import React from "react";

const About = () => {
  return (
    <section className="max-container min-h-screen flex flex-col items-center">
      <div className="flex">
        <div className="flex-1">
          <h3 className="wide:text-3xl font-bold">
            Powerful Integrations to help you manage all your goals
          </h3>
        </div>
        <div className="flex-1">
          <p className="leading-[30px] text-sm text-gray-600">
            Transform complex digital landscapes into cohesive, goal-driven
            networks. Our integrations intelligently connect your tools,
            automating workflows and centralizing management across platforms.
            By eliminating technological silos, we empower your business to
            execute strategies with precision and ease.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
