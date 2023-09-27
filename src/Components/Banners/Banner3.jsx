import React from "react";
import "./Banners.css";

const Banner3 = () => {
  return (
    <>
      <div className="banner2">
        <div className="box" id="box1">
          <div className="blackOut2">
            <p className="bannerSecondLine">SEASONAL SALE</p>
            <p className="bannerThirdLine" id="line">
              New Arrivals get upto 30% off
            </p>
          </div>
        </div>
        <div className="box" id="box2">
          <div className="blackOut2">
            <p className="bannerSecondLine">NEW COLLECTION</p>
            <p className="bannerThirdLine" id="line">
              Spring / Summer 2023
            </p>
          </div>
        </div>
        <div className="box" id="box3">
          <div className="blackOut2">
            <p className="bannerSecondLine">SOUNDBARS</p>
            <p className="bannerThirdLine" id="line">
              New Soundbar from Devialet
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner3;
