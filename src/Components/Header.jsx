import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  useEffect(() => {
    const header = document.getElementById("header");

    const handleScroll = () => {
      if (window.scrollY > 0) {
        header.classList.add("fixed-header");
      } else {
        header.classList.remove("fixed-header");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
                      <a className="nav-link ps-0" href="about-us.html">
                        <i className="fas fa-angle-right"></i> About Us
                      </a>
                    </li>
                    <li className="nav-item nav-item-anim-icon d-none d-md-block">
                      <a className="nav-link" href="contact-us.html">
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
                  <div className="header-nav-feature header-nav-features-search d-inline-flex">
                    <a
                      href="/"
                      className="header-nav-features-toggle text-decoration-none"
                      data-focus="headerSearch"
                      aria-label="Search"
                    >
                      <i className="fas fa-search header-nav-top-icon"></i>
                    </a>
                    <div
                      className="header-nav-features-dropdown"
                      id="headerTopSearchDropdown"
                    >
                      <form
                        role="search"
                        action="page-search-results.html"
                        method="get"
                      >
                        <div className="simple-search input-group">
                          <input
                            className="form-control text-1"
                            id="headerSearch"
                            name="q"
                            type="search"
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
                </div>
              </div>
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
                      <li className="nav-item dropdown">
                        <a
                          className="dropdown-item dropdown-toggle nav-link active bg-success"
                          href=""
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="">
                          About Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                          Contact Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                          Shop
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
