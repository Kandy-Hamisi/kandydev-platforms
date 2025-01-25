import React from "react";
import Hero from "@/sections/website/Hero";
import Navbar from "@/components/website/Navbar";

const HomePage = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="relative">
        <Hero />
      </section>
    </main>
  );
};
export default HomePage;
