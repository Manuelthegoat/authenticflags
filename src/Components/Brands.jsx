import React from "react";

const Brands = () => {
  return (
    <>
      <div class="container mb-5 pb-4">
        <hr class="solid my-5" />

        <div class="row text-center pt-4">
          <div class="col">
            <h2 class="word-rotator slide font-weight-bold text-8 mb-2">
              <span>Nigeria’s No. 1 online print shop for Roll up </span>
              <span class="word-rotator-words bg-primary">
                <b class="is-visible">banners</b>
                <b>happy</b>
              </span>
              <span>
                {" "}
                Feather flag banners, Gazebo Canopy, Backdrop Banners etc.
              </span>
            </h2>
            <h4 class="text-primary lead tall text-4">
              Our print services and solutions are trusted by these brands and
              other businesses in Nigeria.
            </h4>
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
