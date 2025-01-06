import React, { useState } from "react";
import { useCart } from "../CartContext";
import Shop from "../Components/Shop";

const CartPage = () => {
  const { cart, removeFromCart, clearCart, addToCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Handle quantity change
  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return; // Prevent setting quantity less than 1
    const updatedItem = cart.find((item) => item._id === itemId);
  
    if (updatedItem) {
      addToCart({ ...updatedItem, quantity: newQuantity }); // Pass the exact new quantity
    }
  };
  

  const incrementQuantity = (itemId, currentQuantity) => {
    handleQuantityChange(itemId, currentQuantity + 1);
  };

  const decrementQuantity = (itemId, currentQuantity) => {
    handleQuantityChange(itemId, currentQuantity - 1);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="breadcrumb font-weight-bold text-6 justify-content-center my-5">
              <li className="text-transform-none me-2">
                <a
                  href="shop-cart.html"
                  className="text-decoration-none text-color-primary"
                >
                  Shopping Cart
                </a>
              </li>
              <li className="text-transform-none text-color-grey-lighten me-2">
                <a
                  href="shop-checkout.html"
                  className="text-decoration-none text-color-grey-lighten text-color-hover-primary"
                >
                  Checkout
                </a>
              </li>
              <li className="text-transform-none text-color-grey-lighten">
                <a
                  href="shop-order-complete.html"
                  className="text-decoration-none text-color-grey-lighten text-color-hover-primary"
                >
                  Order Complete
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row pb-4 mb-5">
          <div className="col-lg-8 mb-5 mb-lg-0">
            <form>
              <div className="table-responsive">
                {cart.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  <>
                    <table className="shop_table cart">
                      <thead>
                        <tr className="text-color-dark">
                          <th className="product-thumbnail" width="15%">&nbsp;</th>
                          <th className="product-name text-uppercase" width="30%">
                            Product
                          </th>
                          <th className="product-price text-uppercase" width="15%">
                            Price
                          </th>
                          <th className="product-quantity text-uppercase" width="20%">
                            Quantity
                          </th>
                          <th className="product-subtotal text-uppercase text-end" width="20%">
                            Subtotal
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => (
                          <tr className="cart_table_item" key={item._id}>
                            <td className="product-thumbnail">
                              <div className="product-thumbnail-wrapper">
                                <a
                                  href="#"
                                  className="product-thumbnail-remove"
                                  title="Remove Product"
                                  onClick={() => removeFromCart(item._id)}
                                >
                                  <i className="fas fa-times"></i>
                                </a>
                                <a
                                  href="shop-product-sidebar-right.html"
                                  className="product-thumbnail-image"
                                  title={item.name}
                                >
                                  <img
                                    width="90"
                                    height="90"
                                    alt={item.name}
                                    className="img-fluid"
                                    src={item.productImage}
                                  />
                                </a>
                              </div>
                            </td>
                            <td className="product-name">
                              <a
                                href="shop-product-sidebar-right.html"
                                className="font-weight-semi-bold text-color-dark text-color-hover-primary text-decoration-none"
                              >
                                {item.name}
                              </a>
                            </td>
                            <td className="product-price">
                              <span className="amount font-weight-medium text-color-grey">
                                ₦{item.price}
                              </span>
                            </td>
                            <td className="product-quantity">
                              <div className="quantity d-flex m-0">
                                <input
                                  type="button"
                                  className="minus text-color-hover-light bg-color-hover-primary border-color-hover-primary"
                                  value="-"
                                  onClick={() =>
                                    decrementQuantity(item._id, item.quantity)
                                  }
                                />
                                <input
                                  type="text"
                                  className="input-text qty text w-10"
                                  title="Qty"
                                  value={item.quantity}
                                  onChange={(e) =>
                                    handleQuantityChange(item._id, parseInt(e.target.value))
                                  }
                                  name="quantity"
                                  min="1"
                                  step="1"
                                />
                                <input
                                  type="button"
                                  className="plus text-color-hover-light bg-color-hover-primary border-color-hover-primary"
                                  value="+"
                                  onClick={() =>
                                    incrementQuantity(item._id, item.quantity)
                                  }
                                />
                              </div>
                            </td>
                            <td className="product-subtotal text-end">
                              <span className="amount text-color-dark font-weight-bold text-4">
                                ₦{item.price * item.quantity}
                              </span>
                            </td>
                          </tr>
                        ))}
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
                  </>
                )}
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
                            ₦{calculateTotal()}
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
                            ₦{calculateTotal()}
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
        <div className="row">
          <div className="col">
            <h4 className="font-weight-semibold text-4 mb-3">PEOPLE ALSO BOUGHT</h4>
            <hr className="mt-0" />
            <Shop />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
