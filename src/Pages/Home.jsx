import React from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import Shop from "../Components/Shop";
import Brands from "../Components/Brands";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <>
      <div role="main" class="main">
        <Hero />
        <Banner />
      </div>
      <div role="main" class="main shop pt-4">
        <div className="container">
          <div className="row">
            <Shop />
          </div>
        </div>
      </div>
      <div role="main" class="main">
        <Brands />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
