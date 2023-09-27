import React from "react";
import "./Features.css";
import { MdLocalShipping, MdCardGiftcard } from "react-icons/md";
import { FaBoxOpen, FaPaperPlane } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";

const Features = () => {
  return (
    <>
      <div className="outerFeatures">
        <p className="title">FEATURES</p>
        <br />
        <br />
        <br />
        <div className="features">
          <div className="featureBox">
            <MdLocalShipping size={"50px"} color="#FF851B" />
            <p className="featureTitle">FREE SHIPPING</p>
            <p className="featureDescription">
              Free Worldwide shiping on all orders above ₹999
            </p>
          </div>
          <div className="featureBox">
            <FaBoxOpen size={"50px"} color="#FF851B" />
            <p className="featureTitle">30 DAYS RETURN</p>
            <p className="featureDescription">
              No question asked and easy return in 14 days
            </p>
          </div>
          <div className="featureBox">
            <MdCardGiftcard size={"50px"} color="#FF851B" />
            <p className="featureTitle">GIFT CARD</p>
            <p className="featureDescription">
              Buy gift cards and use coupon codes easily
            </p>
          </div>
          <div className="featureBox">
            <BsCashStack size={"50px"} color="#FF851B" />
            <p className="featureTitle">POD AVAILABLE</p>
            <p className="featureDescription">
              Pay easily at your doorstep with mulitle payment options
            </p>
          </div>
          <div className="featureBox">
            <FaPaperPlane size={"50px"} color="#FF851B" />
            <p className="featureTitle">CONTACT US</p>
            <p className="featureDescription">
              Keep in touch via email and support system
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
