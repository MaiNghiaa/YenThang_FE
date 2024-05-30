import React from "react";

export default function About() {
  return (
    <div className="about_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="about_taital">About Our shop</h1>
            <div className="bulit_icon">
              <img src="http://localhost:3000/assets/bulit-icon.png" />
            </div>
          </div>
        </div>
        <div className="about_section_2 layout_padding">
          <div className="">
            <img
              src="http://localhost:3000/assets/about-img.png"
              className="about_img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
