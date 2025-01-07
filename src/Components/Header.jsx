import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useCart } from "../CartContext";

const Header = () => {
  const [cartDropdownVisible, setCartDropdownVisible] = useState(false);
  const [searchDropdownVisible, setSearchDropdownVisible] = useState(false);
  const { cart, removeFromCart, clearCart } = useCart();

  const toggleCartDropdown = () => {
    setCartDropdownVisible((prev) => !prev);
  };

  const toggleSearchDropdown = () => {
    setSearchDropdownVisible((prev) => !prev);
  };

  return (
    <header
      id="header"
      className="center"
      style={{
        transition: "top 0.3s, box-shadow 0.3s",
      }}
    >
      <div className="header-body">
        <div className="header-container container">
          <div className="header-row align-items-center">
            {/* Logo */}
            <div className="header-column">
              <div className="header-row">
                <div className="header-logo">
                  <a href="index.html">
                    <img
                      alt="Revo"
                      width="100"
                      height="48"
                      data-sticky-width="82"
                      data-sticky-height="40"
                      data-sticky-top="25"
                      src="img/revlogo.png"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Navbar */}
            <div className="header-column justify-content-end">
              <div className="header-row pt-3">
                <nav className="header-nav-top">
                  <ul className="nav nav-pills">
                    <li className="nav-item nav-item-anim-icon d-none d-md-block">
                      <a className="nav-link ps-0" href="/">
                        <i className="fas fa-angle-right"></i> About Us
                      </a>
                    </li>
                    <li className="nav-item nav-item-anim-icon d-none d-md-block">
                      <a className="nav-link" href="/">
                        <i className="fas fa-angle-right"></i> Contact Us
                      </a>
                    </li>
                    <li className="nav-item nav-item-left-border nav-item-left-border-remove nav-item-left-border-md-show">
                      <span className="ws-nowrap">
                        <i className="fas fa-phone"></i> (234) 806-833-6413
                      </span>
                    </li>
                  </ul>
                </nav>
                <div className="header-nav-features">
                  <div className="header-nav-features">
                    <div className="header-nav-feature header-nav-features-search d-inline-flex">
                      <a
                        onClick={toggleSearchDropdown}
                        className="header-nav-features-toggle text-decoration-none"
                        aria-label="Search"
                      >
                        <i className="fas fa-search header-nav-top-icon"></i>
                      </a>
                      <div
                        className={`header-nav-features-dropdown ${
                          searchDropdownVisible ? "show" : ""
                        }`}
                        id="headerTopSearchDropdown"
                      >
                        <form role="search">
                          <div className="simple-search input-group">
                            <input
                              className="form-control text-1"
                              id="headerSearch"
                              name="q"
                              type="search"
                              value=""
                              placeholder="Search..."
                            />
                            <button
                              className="btn"
                              type="submit"
                              aria-label="Search"
                            >
                              <i className="fas fa-search header-nav-top-icon"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="header-nav-feature header-nav-features-cart d-inline-flex ms-2">
                      <a
                        onClick={toggleCartDropdown}
                        className="header-nav-features-toggle"
                        aria-label="Cart"
                      >
                        <img
                          src="img/icons/icon-cart.svg"
                          width="14"
                          alt="Cart"
                          className="header-nav-top-icon-img"
                        />
                        <span className="cart-info">
                          <span className="cart-qty">{cart.length}</span>
                        </span>
                      </a>
                      <div
                        className={`header-nav-features-dropdown ${
                          cartDropdownVisible ? "show" : ""
                        }`}
                        id="headerTopCartDropdown"
                      >
                        <ol className="mini-products-list">
                          {cart.map((item) => (
                            <li className="item" key={item._id}>
                              <a
                                href="#"
                                title={item.name}
                                className="product-image"
                              >
                                <img
                                  src={item.productImage}
                                  alt={item.name}
                                />
                              </a>
                              <div className="product-details">
                                <p className="product-name">
                                  <a href="#">{item.name}</a>
                                </p>
                                <p className="qty-price">
                                  {item.quantity} X{" "}
                                  <span className="price">
                                    ₦{item.price}
                                  </span>
                                </p>
                                <a
                                  onClick={() => removeFromCart(item._id)}
                                  title="Remove This Item"
                                  className="btn-remove"
                                >
                                  <i className="fas fa-times"></i>
                                </a>
                              </div>
                            </li>
                          ))}
                        </ol>
                        <div className="totals">
                          <span className="label">Total:</span>
                          <span className="price-total">
                            <span className="price">
                              ₦
                              {cart.reduce(
                                (total, item) =>
                                  total + item.price * item.quantity,
                                0
                              )}
                            </span>
                          </span>
                        </div>
                        <div className="actions">
                          <a className="btn btn-dark" href="/cart">
                            View Cart
                          </a>
                          <a className="btn btn-primary" href="#">
                            Checkout
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navbar Links */}
              <div className="header-row pt-1">
                <nav className="navbar navbar-expand-lg">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto nav nav-pills">
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="">
                          About Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/contact">
                          Contact Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/blog">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/shop">
                          Shop
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
                <ul className="header-social-icons social-icons d-none d-sm-block">
                  <li className="social-icons-facebook">
                    <a
                      href="http://www.facebook.com/"
                      target="_blank"
                      title="Facebook"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="social-icons-x">
                    <a href="http://www.x.com/" target="_blank" title="X">
                      <i className="fab fa-x-twitter"></i>
                    </a>
                  </li>
                  <li className="social-icons-linkedin">
                    <a
                      href="http://www.linkedin.com/"
                      target="_blank"
                      title="Linkedin"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
