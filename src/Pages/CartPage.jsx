import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Shop from "../Components/Shop";

const CartPage = () => {
  return (
    <>
      <div className="container">
        <div class="row">
          <div class="col">
            <ul class="breadcrumb font-weight-bold text-6 justify-content-center my-5">
              <li class="text-transform-none me-2">
                <a
                  href="shop-cart.html"
                  class="text-decoration-none text-color-primary"
                >
                  Shopping Cart
                </a>
              </li>
              <li class="text-transform-none text-color-grey-lighten me-2">
                <a
                  href="shop-checkout.html"
                  class="text-decoration-none text-color-grey-lighten text-color-hover-primary"
                >
                  Checkout
                </a>
              </li>
              <li class="text-transform-none text-color-grey-lighten">
                <a
                  href="shop-order-complete.html"
                  class="text-decoration-none text-color-grey-lighten text-color-hover-primary"
                >
                  Order Complete
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row pb-4 mb-5">
          <div className="col-lg-8 mb-5 mb-lg-0">
            <form >
              <div className="table-responsive">
                <table className="shop_table cart">
                  <thead>
                    <tr className="text-color-dark">
                      <th className="product-thumbnail" width="15%">
                        &nbsp;
                      </th>
                      <th className="product-name text-uppercase" width="30%">
                        Product
                      </th>
                      <th className="product-price text-uppercase" width="15%">
                        Price
                      </th>
                      <th
                        className="product-quantity text-uppercase"
                        width="20%"
                      >
                        Quantity
                      </th>
                      <th
                        className="product-subtotal text-uppercase text-end"
                        width="20%"
                      >
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Product Row */}
                    <tr className="cart_table_item">
                      <td className="product-thumbnail">
                        <div className="product-thumbnail-wrapper">
                          <a
                            href="#"
                            className="product-thumbnail-remove"
                            title="Remove Product"
                          >
                            <i className="fas fa-times"></i>
                          </a>
                          <a
                            href="shop-product-sidebar-right.html"
                            className="product-thumbnail-image"
                            title="Photo Camera"
                          >
                            <img
                              width="90"
                              height="90"
                              alt="LP"
                              className="img-fluid"
                              src="https://s.alicdn.com/@sc04/kf/H6fe358f11e3a4cf8a2a56fb2a9b6be4bk.jpg_720x720q50.jpg"
                            />
                          </a>
                        </div>
                      </td>
                      <td className="product-name">
                        <a
                          href="shop-product-sidebar-right.html"
                          className="font-weight-semi-bold text-color-dark text-color-hover-primary text-decoration-none"
                        >
                          Labour Party Flag
                        </a>
                      </td>
                      <td className="product-price">
                        <span className="amount font-weight-medium text-color-grey">
                          ₦59
                        </span>
                      </td>
                      <td className="product-quantity">
                        <div className="quantity d-flex m-0">
                          <input
                            type="button"
                            className="minus text-color-hover-light bg-color-hover-primary border-color-hover-primary"
                            value="-"
                          />
                          <input
                            type="text"
                            className="input-text qty text w-10"
                            title="Qty"
                            defaultValue="1"
                            name="quantity"
                            min="1"
                            step="1"
                          />
                          <input
                            type="button"
                            className="plus text-color-hover-light bg-color-hover-primary border-color-hover-primary"
                            value="+"
                          />
                        </div>
                      </td>
                      <td className="product-subtotal text-end">
                        <span className="amount text-color-dark font-weight-bold text-4">
                          ₦59
                        </span>
                      </td>
                    </tr>
                    {/* Additional product rows can be added here */}
                    <tr>
                      <td colSpan="5">
                        <div className="row justify-content-between mx-0">
                          <div className="col-md-auto px-0 mb-3 mb-md-0">
                            <div className="d-flex align-items-center">
                              <input
                                type="text"
                                className="form-control h-auto border-radius-0 line-height-1 py-3"
                                name="couponCode"
                                placeholder="Coupon Code"
                              />
                              <button
                                type="submit"
                                className="btn btn-light btn-modern text-color-dark bg-color-grey text-color-hover-light bg-color-hover-primary text-uppercase text-3 font-weight-bold border-0 border-radius-0 ws-nowrap btn-px-4 py-3 ms-2"
                              >
                                Apply Coupon
                              </button>
                            </div>
                          </div>
                          <div className="col-md-auto px-0">
                            <button
                              type="submit"
                              className="btn btn-light btn-modern text-color-dark bg-color-grey text-color-hover-light bg-color-hover-primary text-uppercase text-3 font-weight-bold border-0 border-radius-0 btn-px-4 py-3"
                            >
                              Update Cart
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>
          <div className="col-lg-4 position-relative">
            <div
              className="card border-width-3 border-radius-0 border-color-hover-dark"
              data-plugin-sticky
              data-plugin-options='{"minWidth": 991, "containerSelector": ".row", "padding": {"top": 85}}'
            >
              <div className="card-body">
                <h4 className="font-weight-bold text-uppercase text-4 mb-3">
                  Cart Totals
                </h4>
                <table className="shop_table cart-totals mb-4">
                  <tbody>
                    <tr className="cart-subtotal">
                      <td className="border-top-0">
                        <strong className="text-color-dark">Subtotal</strong>
                      </td>
                      <td className="border-top-0 text-end">
                        <strong>
                          <span className="amount font-weight-medium">
                            ₦431
                          </span>
                        </strong>
                      </td>
                    </tr>
                    <tr className="shipping">
                      <td colSpan="2">
                        <strong className="d-block text-color-dark mb-2">
                          Shipping
                        </strong>
                        <div className="d-flex flex-column">
                          <label
                            className="d-flex align-items-center text-color-grey mb-0"
                            htmlFor="shipping_method1"
                          >
                            <input
                              id="shipping_method1"
                              type="radio"
                              className="me-2"
                              name="shipping_method"
                              value="free"
                              defaultChecked
                            />
                            Free Shipping
                          </label>
                          <label
                            className="d-flex align-items-center text-color-grey mb-0"
                            htmlFor="shipping_method2"
                          >
                            <input
                              id="shipping_method2"
                              type="radio"
                              className="me-2"
                              name="shipping_method"
                              value="local-pickup"
                            />
                            Local Pickup
                          </label>
                          <label
                            className="d-flex align-items-center text-color-grey mb-0"
                            htmlFor="shipping_method3"
                          >
                            <input
                              id="shipping_method3"
                              type="radio"
                              className="me-2"
                              name="shipping_method"
                              value="flat-rate"
                            />
                            Flat Rate: ₦5.00
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr className="total">
                      <td>
                        <strong className="text-color-dark text-3-5">
                          Total
                        </strong>
                      </td>
                      <td className="text-end">
                        <strong className="text-color-dark">
                          <span className="amount text-color-dark text-5">
                            ₦431
                          </span>
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <a
                  href="#"
                  className="btn btn-dark btn-modern w-100 text-uppercase bg-color-hover-primary border-color-hover-primary border-radius-0 text-3 py-3"
                >
                  Proceed to Checkout{" "}
                  <i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h4 class="font-weight-semibold text-4 mb-3">PEOPLE ALSO BOUGHT</h4>
            <hr class="mt-0" />
            <Shop />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
