import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div class="container">
          <div class="footer-ribbon">
            <span>Get in Touch</span>
          </div>
          <div class="row py-5 my-4">
            <div class="col-md-6 mb-4 mb-lg-0">
              <a href="index.html" class="logo pe-0 pe-lg-3">
                <img
                  alt="Rev"
                  src="img/revlogo.png"
                  class="opacity-7 bottom-4"
                  height="32"
                />
              </a>
              <p class="mt-2 mb-2">
                At Revo media, out mission is to pioneer the digital printing
                insustry by consistently delivering unparalled excellence. We
                are commited to crafting experiences, telling compelling
                stories, and bringing visions to life through precision,
                creativity, and unwavering dedication. We strive to set the
                standard for quality in every project, ensuring that each
                creation leaving our faciility is a masterpiece that exceeds
                expectation.
              </p>
              <p class="mb-0">
                <a
                  href="/"
                  class="btn-flat btn-xs text-color-light"
                >
                  <strong class="text-2">VIEW MORE</strong>
                  <i class="fas fa-angle-right p-relative top-1 ps-2"></i>
                </a>
              </p>
            </div>
            <div class="col-md-6">
              <h5 class="text-3 mb-3">CONTACT US</h5>
              <div class="row">
                <div class="col-md-6">
                  <ul class="list list-icons list-icons-lg">
                    <li class="mb-1">
                      <i class="far fa-dot-circle text-color-primary"></i>
                      <p class="m-0">234 Street Name, City Name</p>
                    </li>
                    <li class="mb-1">
                      <i class="fab fa-whatsapp text-color-primary"></i>
                      <p class="m-0">
                        <a href="tel:8001234567">(800) 123-4567</a>
                      </p>
                    </li>
                    <li class="mb-1">
                      <i class="far fa-envelope text-color-primary"></i>
                      <p class="m-0">
                        <a href="../../../cdn-cgi/l/email-protection.html#7d101c14113d18051c100d1118531e1210">
                          <span
                            class="__cf_email__"
                            data-cfemail="3e535f57527e5b465f534e525b105d5153"
                          >
                            [email&#160;protected]
                          </span>
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="list list-icons list-icons-sm">
                    <li>
                      <i class="fas fa-angle-right"></i>
                      <a href="page-faq.html" class="link-hover-style-1 ms-1">
                        {" "}
                        FAQ's
                      </a>
                    </li>
                    <li>
                      <i class="fas fa-angle-right"></i>
                      <a href="sitemap.html" class="link-hover-style-1 ms-1">
                        {" "}
                        Sitemap
                      </a>
                    </li>
                    <li>
                      <i class="fas fa-angle-right"></i>
                      <a href="contact-us.html" class="link-hover-style-1 ms-1">
                        {" "}
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-copyright footer-copyright-style-2">
          <div class="container py-2">
            <div class="row py-4">
              <div class="col d-flex align-items-center justify-content-center">
                <p>© Copyright 2024. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
