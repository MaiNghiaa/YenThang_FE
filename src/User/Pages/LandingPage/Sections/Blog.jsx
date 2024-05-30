import React from "react";

export default function Blog() {
  return (
    <div className="blog_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="about_taital">Our Blog</h1>
            <div className="bulit_icon">
              <img src="http://localhost:3000/assets/bulit-icon.png" />
            </div>
          </div>
        </div>
        <div className="blog_section_2">
          <div className="row">
            <div className="col-md-6">
              <div className="blog_box">
                <div className="blog_img">
                  <img src="http://localhost:3000/assets/blog-img1.png" />
                </div>
                <h4 className="date_text">05 April</h4>
                <h4 className="prep_text">PREP TECHNIQUES Coffee</h4>
                <p className="lorem_text">
                  distracted by the readable content of a page when looking at
                  its layout. The point of using Lorem Ipsum is that it has a
                  moredistracted by the readable content of a page when looking
                  at its layout. The point of using Lorem Ipsum is that it has a
                  more
                </p>
              </div>
              <div className="read_bt">
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog_box">
                <div className="blog_img">
                  <img src="http://localhost:3000/assets/blog-img2.png" />
                </div>
                <h4 className="date_text">05 April</h4>
                <h4 className="prep_text">PREP TECHNIQUES Coffee</h4>
                <p className="lorem_text">
                  distracted by the readable content of a page when looking at
                  its layout. The point of using Lorem Ipsum is that it has a
                  moredistracted by the readable content of a page when looking
                  at its layout. The point of using Lorem Ipsum is that it has a
                  more
                </p>
              </div>
              <div className="read_bt">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
