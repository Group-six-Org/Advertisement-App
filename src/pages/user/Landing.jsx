import React from "react";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Testimonials from "../../components/Testimonials";
import Cta from "../../components/CTA";
import Categories from "../../components/Categories";

const Landing = () => {
  return (
    <div>
      <Hero />
      <About />
      <Categories />
      <Testimonials />
      <Cta />
    </div>
  );
};

export default Landing;
