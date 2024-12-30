import React from "react";

const Header = () => {
  return (
    <>
      <header
        id="header"
        className="center"
        data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyStartAt': 45, 'stickySetTop': '-45px', 'stickyChangeLogo': true}"
      >
        <div class="header-body">
          <div class="header-container container">
            <div class="header-row">
              <div class="header-column">
                <div class="header-row">
                  <div class="header-logo">
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
              <div class="header-column justify-content-end">
                <div class="header-row pt-3">
                  <nav class="header-nav-top">
                    <ul class="nav nav-pills">
                      <li class="nav-item nav-item-anim-icon d-none d-md-block">
                        {" "}
                        <a class="nav-link ps-0" href="about-us.html">
                          <i class="fas fa-angle-right"></i> About Us
                        </a>{" "}
                      </li>
                      <li class="nav-item nav-item-anim-icon d-none d-md-block">
                        {" "}
                        <a class="nav-link" href="contact-us.html">
                          <i class="fas fa-angle-right"></i> Contact Us
                        </a>
                      </li>
                      <li class="nav-item nav-item-left-border nav-item-left-border-remove nav-item-left-border-md-show">
                        <span class="ws-nowrap">
                          <i class="fas fa-phone"></i> (123) 456-789
                        </span>
                      </li>
                    </ul>
                  </nav>
                  <div class="header-nav-features">
                    <div class="header-nav-feature header-nav-features-search d-inline-flex">
                      {" "}
                      <a
                        href="index-classic.html#"
                        class="header-nav-features-toggle text-decoration-none"
                        data-focus="headerSearch"
                        aria-label="Search"
                      >
                        <i class="fas fa-search header-nav-top-icon"></i>
                      </a>
                      <div
                        class="header-nav-features-dropdown"
                        id="headerTopSearchDropdown"
                      >
                        <form
                          role="search"
                          action="page-search-results.html"
                          method="get"
                        >
                          <div class="simple-search input-group">
                            {" "}
                            <input
                              class="form-control text-1"
                              id="headerSearch"
                              name="q"
                              type="search"
                              value=""
                              placeholder="Search..."
                            />{" "}
                            <button
                              class="btn"
                              type="submit"
                              aria-label="Search"
                            >
                              {" "}
                              <i class="fas fa-search header-nav-top-icon"></i>{" "}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="header-nav-feature header-nav-features-cart d-inline-flex ms-2">
                      {" "}
                      <a
                        href="index-classic.html#"
                        class="header-nav-features-toggle"
                        aria-label=""
                      >
                        <img
                          src="img/icons/icon-cart.svg"
                          width="14"
                          alt=""
                          class="header-nav-top-icon-img"
                        />{" "}
                        <span class="cart-info d-none">
                          {" "}
                          <span class="cart-qty">1</span>{" "}
                        </span>{" "}
                      </a>
                      <div
                        class="header-nav-features-dropdown"
                        id="headerTopCartDropdown"
                      >
                        <ol class="mini-products-list">
                          <li class="item">
                            {" "}
                            <a
                              href="index-classic.html#"
                              title="Camera X1000"
                              class="product-image"
                            >
                              <img
                                src="img/products/product-1.jpg"
                                alt="Camera X1000"
                              />
                            </a>
                            <div class="product-details">
                              <p class="product-name">
                                {" "}
                                <a href="index-classic.html#">
                                  Camera X1000{" "}
                                </a>{" "}
                              </p>
                              <p class="qty-price">
                                {" "}
                                1X <span class="price">$890</span>{" "}
                              </p>{" "}
                              <a
                                href="index-classic.html#"
                                title="Remove This Item"
                                class="btn-remove"
                              >
                                <i class="fas fa-times"></i>
                              </a>
                            </div>
                          </li>
                        </ol>
                        <div class="totals">
                          {" "}
                          <span class="label">Total:</span>{" "}
                          <span class="price-total">
                            <span class="price">$890</span>
                          </span>{" "}
                        </div>
                        <div class="actions">
                          {" "}
                          <a class="btn btn-dark" href="index-classic.html#">
                            View Cart
                          </a>{" "}
                          <a class="btn btn-primary" href="index-classic.html#">
                            Checkout
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="header-row">
                  <div class="header-nav pt-1">
                    <div class="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1">
                      <nav class="collapse">
                        <ul class="nav nav-pills" id="mainNav">
                          <li class="dropdown">
                            {" "}
                            <a
                              class="dropdown-item dropdown-toggle active"
                              href="index.html"
                            >
                              {" "}
                              Home{" "}
                            </a>
                          </li>

                        
                          <li class="dropdown">
                            {" "}
                            <a
                              class="dropdown-item dropdown-toggle"
                              href="index-classic.html#"
                            >
                              {" "}
                              Blog{" "}
                            </a>
                          </li>
                          <li class="dropdown">
                            {" "}
                            <a
                              class="dropdown-item dropdown-toggle"
                              href="index-classic.html#"
                            >
                              {" "}
                              Shop{" "}
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <ul class="header-social-icons social-icons d-none d-sm-block">
                      <li class="social-icons-facebook">
                        <a
                          href="http://www.facebook.com/"
                          target="_blank"
                          title="Facebook"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li class="social-icons-x">
                        <a href="http://www.x.com/" target="_blank" title="X">
                          <i class="fab fa-x-twitter"></i>
                        </a>
                      </li>
                      <li class="social-icons-linkedin">
                        <a
                          href="http://www.linkedin.com/"
                          target="_blank"
                          title="Linkedin"
                        >
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                    <button
                      class="btn header-btn-collapse-nav"
                      data-bs-toggle="collapse"
                      data-bs-target=".header-nav-main nav"
                    >
                      <i class="fas fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
