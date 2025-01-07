import React from "react";

const Hero = () => {
  return (
    <>
      <section class="section border-0 m-0">
        <div class="container h-100">
          <div class="row align-items-center h-100">
            <div class="col-lg-6">
              <div class="d-flex flex-column align-items-center justify-content-center h-100">
                <h1
                  class="position-relative text-color-dark text-5 line-height-5 font-weight-semibold px-4 mb-2 "
                  data-appear-animation="fadeInDownShorterPlus"
                  data-plugin-options="{'minWindowWidth': 0}"
                >
                  <span class="position-absolute right-100pct top-50pct transform3dy-n50">
                    <img
                      src="https://www.okler.net/previews/porto/12.0.0/img/slides/slide-title-border-light.png"
                      class="w-auto "
                      data-plugin-options="{'minWindowWidth': 0}"
                      alt=""
                    />
                  </span>
                  DO YOU NEED
                  <span class="position-absolute left-100pct top-50pct transform3dy-n50">
                    <img
                      src="https://www.okler.net/previews/porto/12.0.0/img/slides/slide-title-border-light.png"
                      class="w-auto "
                      data-plugin-options="{'minWindowWidth': 0}"
                      alt=""
                    />
                  </span>
                </h1>
                <h1
                  class="text-color-dark font-weight-extra-bold text-12 mb-3 "
                  data-appear-animation="blurIn"
                  data-appear-animation-delay="1000"
                  data-plugin-options="{'minWindowWidth': 0}"
                >
                  A NEW AND CLASSY FLAG?
                </h1>
                <p
                  class="text-4 text-color-dark font-weight-light mb-0"
                  data-plugin-options="{'startDelay': 2000, 'minWindowWidth': 0}"
                >
                  Check out our options and features
                </p>
              </div>
            </div>
            <div className="col-lg-6 ">
              <img
                src="https://media.gettyimages.com/id/184327474/photo/international-flags.jpg?s=612x612&w=gi&k=20&c=h6oER97WGp95YTfRso_TslvcoTsUeGuamj6WnQUayoA="
                alt=""
                className="pr-10"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
