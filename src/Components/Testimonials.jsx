import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  return (
    <>
      <section
        class="section section-height-3 section-background border-0 m-0"
        data-appear-animation="fadeIn"
        style={{
          "background-image":
            "url('https://www.okler.net/previews/porto/12.0.0/img/parallax/parallax-10.jpg')",
          "background-size": "cover",
          "background-position": "center",
        }}
      >
        <div class="container">
          <div class="row">
            <div
              class="col "
              data-appear-animation="fadeInUpShorter"
              data-appear-animation-delay="200"
            >
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={100}
                slidesPerView={2}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                className="  nav-bottom rounded-nav desktop-testi"
                data-plugin-options="{'items': 1, 'loop': false}"
              >
                <SwiperSlide>
                  <div class="testimonial testimonial-style-2 testimonial-with-quotes testimonial-quotes-dark mb-0">
                    <div class="testimonial-author">
                      <img
                        src="img/testimo2.jpeg"
                        class="img-fluid rounded-circle"
                        alt=""
                      />
                    </div>
                    <blockquote>
                      <p class="text-color-dark text-5 line-height-5 mb-0">
                        Fast shipping, great customer service, and a flag that
                        stands out! Highly recommend for anyone in need of a
                        quality product.
                      </p>
                    </blockquote>
                    <div class="testimonial-author">
                      <p>
                        <strong class="font-weight-extra-bold text-2">
                          - Quincy School
                        </strong>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="testimonial testimonial-style-2 testimonial-with-quotes testimonial-quotes-dark mb-0">
                    <div class="testimonial-author">
                      <img
                        src="img/testimo.jpeg"
                        class="img-fluid rounded-circle"
                        alt=""
                      />
                    </div>
                    <blockquote>
                      <p class="text-color-dark text-5 line-height-5 mb-0">
                        I love your job. It’s really what I wanted you gave to
                        me. The Flag is more than professional and the graphics
                        of the flag is exactly what I needed. Thank you once
                        more.
                      </p>
                    </blockquote>
                    <div class="testimonial-author">
                      <p>
                        <strong class="font-weight-extra-bold text-2">
                          - Oscar Clement
                        </strong>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="testimonial testimonial-style-2 testimonial-with-quotes testimonial-quotes-dark mb-0">
                    <div class="testimonial-author">
                      <img
                        src="img/testimo2.jpeg"
                        class="img-fluid rounded-circle"
                        alt=""
                      />
                    </div>
                    <blockquote>
                      <p class="text-color-dark text-5 line-height-5 mb-0">
                        From the easy ordering process to the final product,
                        everything was flawless. Highly recommend for personal
                        and professional use.
                      </p>
                    </blockquote>
                    <div class="testimonial-author">
                      <p>
                        <strong class="font-weight-extra-bold text-2">
                          - Quincy School
                        </strong>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={100}
                slidesPerView={1}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                className="  nav-bottom rounded-nav mobile-testi"
                data-plugin-options="{'items': 1, 'loop': false}"
              >
                <SwiperSlide>
                  <div class="testimonial testimonial-style-2 testimonial-with-quotes testimonial-quotes-dark mb-0">
                    <div class="testimonial-author">
                      <img
                        src="img/testimo2.jpeg"
                        class="img-fluid rounded-circle"
                        alt=""
                      />
                    </div>
                    <blockquote>
                      <p class="text-color-dark text-5 line-height-5 mb-0">
                        Fast shipping, great customer service, and a flag that
                        stands out! Highly recommend for anyone in need of a
                        quality product.
                      </p>
                    </blockquote>
                    <div class="testimonial-author">
                      <p>
                        <strong class="font-weight-extra-bold text-2">
                          - Quincy School
                        </strong>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="testimonial testimonial-style-2 testimonial-with-quotes testimonial-quotes-dark mb-0">
                    <div class="testimonial-author">
                      <img
                        src="img/testimo.jpeg"
                        class="img-fluid rounded-circle"
                        alt=""
                      />
                    </div>
                    <blockquote>
                      <p class="text-color-dark text-5 line-height-5 mb-0">
                        I love your job. It’s really what I wanted you gave to
                        me. The Flag is more than professional and the graphics
                        of the flag is exactly what I needed. Thank you once
                        more.
                      </p>
                    </blockquote>
                    <div class="testimonial-author">
                      <p>
                        <strong class="font-weight-extra-bold text-2">
                          - Oscar Clement
                        </strong>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="testimonial testimonial-style-2 testimonial-with-quotes testimonial-quotes-dark mb-0">
                    <div class="testimonial-author">
                      <img
                        src="img/testimo2.jpeg"
                        class="img-fluid rounded-circle"
                        alt=""
                      />
                    </div>
                    <blockquote>
                      <p class="text-color-dark text-5 line-height-5 mb-0">
                        From the easy ordering process to the final product,
                        everything was flawless. Highly recommend for personal
                        and professional use.
                      </p>
                    </blockquote>
                    <div class="testimonial-author">
                      <p>
                        <strong class="font-weight-extra-bold text-2">
                          - Quincy School
                        </strong>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
