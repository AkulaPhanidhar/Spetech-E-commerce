import React from "react";
import "./News.css";

const News = () => {
  return (
    <>
      <div className="newsLetter">
        <div className="newsLeft">
          <p className="newsFirstLine">Sign UP for Newsletter</p>
          <p className="newsSecondLine">
            Get E-mail updates about our{" "}
            <span className="strongLetter">New Products</span> and{" "}
            <span className="strongLetter">Special Offers</span>.
          </p>
        </div>
        <div className="newsRight">
          <input
            className="newsInput"
            type="email"
            placeholder="Enter your Email"
          />
          <button className="newsButton">Sign UP</button>
        </div>
      </div>
    </>
  );
};

export default News;
