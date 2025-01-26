import React from "react";
import Hero from "@/sections/website/Hero";
import Navbar from "@/components/website/Navbar";
import About from "@/sections/website/About";

const HomePage = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="relative">
        <Hero />
      </section>
      <section className="relative padding">
        <About />
      </section>
    </main>
  );
};
export default HomePage;
