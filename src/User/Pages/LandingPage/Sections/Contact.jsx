import React from "react";

export default function Contact() {
  return (
    <div className="contact_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="contact_taital">Thông báo</h1>
            <div className="bulit_icon">
              <img src="http://localhost:3000/assets/bulit-icon.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="contact_section_2">
          <div className="row">
            <div className="col-md-12">
              <div className="mail_section_1">
                <input
                  type="text"
                  className="mail_text"
                  placeholder="Your Name"
                  name="Your Name"
                />
                <input
                  type="text"
                  className="mail_text"
                  placeholder="Your Email"
                  name="Your Email"
                />
                <input
                  type="text"
                  className="mail_text"
                  placeholder="Your Phone"
                  name="Your Phone"
                />
                <textarea
                  className="massage-bt"
                  placeholder="Massage"
                  rows={5}
                  id="comment"
                  name="Massage"
                  defaultValue={""}
                />
                <div className="send_bt">
                  <a href="#">SEND</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
