import React from "react";
import Hero from "@/sections/website/Hero";
import Navbar from "@/components/website/Navbar";
import About from "@/sections/website/About";
import SecurityConcern from "@/sections/website/SecurityConcern";

const HomePage = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="relative">
        <Hero />
      </section>
      <section className="relative w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 padding-t bg-pink">
        <About />
        <SecurityConcern />
      </section>
    </main>
  );
};
export default HomePage;
