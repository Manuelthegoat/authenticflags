import React from "react";

const Brands = () => {
  return (
    <>
      <div class="container mb-5 pb-4">
        <hr class="solid my-5" />

        <div class="row text-center pt-4">
          <div class="col-lg-6">
            <h2 class="word-rotator slide font-weight-bold text-8 mb-2">
              <span>Nigeria number 1 online shop for </span>
              <span class="word-rotator-words bg-primary">
                <b class="is-visible">authentic flags.</b>
                <b>happy</b>
              </span>
              <span>
                {" "}
                we take pride in producing authentic, high-quality flags that symbolize integrity and craftsmanship.
              </span>
            </h2>
            <h4 class="text-primary lead tall text-4">
            Each flag is made with durable materials, vibrant colors, and precise detailing to ensure it meets the highest standards of authenticity.
            </h4>
          </div>
          <div className="col-lg-6">
            <img src="./img/useimg.jpeg" width={500} alt="" />
          </div>
        </div>

        <div class="row text-center mt-5">
          <div
            class=" owl-theme carousel-center-active-item"
            data-plugin-options="{'responsive': {'0': {'items': 1}, '476': {'items': 1}, '768': {'items': 5}, '992': {'items': 7}, '1200': {'items': 7}}, 'autoplay': true, 'autoplayTimeout': 3000, 'dots': false}"
          >
            <div>
              <img
                class="img-fluid"
                src="https://rollupbanners.ng/wp-content/uploads/al_opt_content/IMAGE/rollupbanners.ng/wp-content/uploads/Group_61_h8vxko.jpg.bv_resized_desktop.jpg.bv.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
