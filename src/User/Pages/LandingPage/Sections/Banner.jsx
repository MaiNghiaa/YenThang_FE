import React from "react";

export default function Banner() {
  return (
    <div className="banner_section layout_padding">
      <div className="container">
        <div id="banner_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-6">
                  <div className="banner_img">
                    <img
                      src="http://localhost:3000/assets/banner-img.png"
                      alt="Banner"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="banner_taital_main">
                    <h1 className="banner_taital">coffee</h1>
                    <h5 className="tasty_text">Tasty Of DozeCafe</h5>
                    <p className="banner_text">
                      more-or-less normal distribution of letters, as opposed to
                      using{" "}
                    </p>
                    <div className="btn_main">
                      <div className="about_bt">
                        <a href="#">About Us</a>
                      </div>
                      <div className="callnow_bt active">
                        <a href="#">Call Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-6">
                  <div className="banner_img">
                    <img
                      src="http://localhost:3000/assets/banner-img.png"
                      alt="Banner"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="banner_taital_main">
                    <h1 className="banner_taital">coffee</h1>
                    <h5 className="tasty_text">Tasty Of DozeCafe</h5>
                    <p className="banner_text">
                      more-or-less normal distribution of letters, as opposed to
                      using{" "}
                    </p>
                    <div className="btn_main">
                      <div className="about_bt">
                        <a href="#">About Us</a>
                      </div>
                      <div className="callnow_bt active">
                        <a href="#">Call Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-6">
                  <div className="banner_img">
                    <img
                      src="http://localhost:3000/assets/banner-img.png"
                      alt="Banner"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="banner_taital_main">
                    <h1 className="banner_taital">coffee</h1>
                    <h5 className="tasty_text">Tasty Of DozeCafe</h5>
                    <p className="banner_text">
                      more-or-less normal distribution of letters, as opposed to
                      using{" "}
                    </p>
                    <div className="btn_main">
                      <div className="about_bt">
                        <a href="#">About Us</a>
                      </div>
                      <div className="callnow_bt active">
                        <a href="#">Call Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
