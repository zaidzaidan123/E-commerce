import React from "react";
import "./Styles.css";
import Title from "./Title";
const Footer = () => {
  const dataTitles = [
    {
      title: "Categories",
      subTitle: [
        "About us",
        "Testimonials",
        "Contact",
        "Journal",
        "Privacy Policy",
      ],
    },
    {
      title: "Partners ",
      subTitle: [
        "Support",
        "Shipping & Returns",
        "Size Guide ",
        "Product Care",
      ],
    },
    {
      title: "Contact us ",
      subTitle: ["Support", "Singapore, 058187", "", "+65 6221 5462"],
    },
  ];

  return (
    <div className="footer-container">
      <div className="titles-footer">
        {dataTitles.map((item) => (
          <Title {...item} />
        ))}
        <div className="title-subTitle">
          <h3>Subscribe to newsletter</h3>
          <div className="inputs-butt">
            <input placeholder="Enter your email" />
            <button className="buttonCont">Subscribe</button>
          </div>
          <div>
          <i class="fa-brands fa-facebook"></i>
          </div>
        </div>
      </div>
      <div className="copy">© Copyright Matter PTE LTD  2017</div>
    </div>
  );
};

export default Footer;
