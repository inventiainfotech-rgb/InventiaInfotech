import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Trust from "../components/Trust";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import EsteemedClients from "../components/EsteemedClients";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Trust />
      <Projects />
      <Testimonials />
      <ContactForm />
      <EsteemedClients />
    </>
  );
};

export default Home;
