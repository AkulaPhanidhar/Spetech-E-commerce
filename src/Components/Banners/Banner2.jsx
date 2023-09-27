import React from "react";
import "./Banners.css";

const Banner2 = () => {
  return (
    <>
      <div className="banner2">
        <div className="innerBanner" id="leftBanner">
          <div className="blackOut2">
            <p className="bannerFirstLine">Crazy Deals</p>
            <p className="bannerSecondLine">Exdended Worrenty</p>
            <p className="bannerThirdLine">
              Get extended worrenty for all products for a limited period of
              time
            </p>
            <br />
            <br />
            <button className="button">Learn More</button>
          </div>
        </div>
        <div className="innerBanner" id="rightBanner">
          <div className="blackOut2">
            <p className="bannerFirstLine">Spring / Summer</p>
            <p className="bannerSecondLine">Up Comming Products</p>
            <p className="bannerThirdLine">
              New speakers will be available soon
            </p>
            <br />
            <br />
            <button className="button">Explore</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner2;
