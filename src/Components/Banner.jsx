import React from "react";

const Banner = () => {
  const handleWhatsAppClick = (message) => {
    const phoneNumber = "2348068336413";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="home-intro light border border-bottom-0 mb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <p className="font-weight-bold text-color-dark">
                Flags are more than fabric; they’re symbols of &nbsp;
                <span className="highlighted-word highlighted-word-animation-1 text-color-primary font-weight-semibold text-5">
                  identity
                </span>
                <span>Check out our options and features included.</span>
              </p>
            </div>
            <div className="col-lg-4">
              <div className="get-started text-start text-lg-end">
                <button
                  onClick={() =>
                    handleWhatsAppClick(
                      "Hello, I'd like to get started with Revomedia Flag Production!"
                    )
                  }
                  className="btn btn-primary btn-lg text-3 font-weight-semibold btn-py-2 px-4"
                >
                  Get Started Now
                </button>
                <div className="learn-more">
                  or{" "}
                  <button
                    onClick={() =>
                      handleWhatsAppClick(
                        "Hello, I'd like to make a special request about Revomedia Flag Production!"
                      )
                    }
                    className="btn btn-link font-weight-bold p-0"
                    style={{ textDecoration: "underline", color: "inherit" }}
                  >
                    make a special request.
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
