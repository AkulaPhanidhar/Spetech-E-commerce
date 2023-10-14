import React, { useEffect, useState } from "react";
import "./View.css";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Image from "../Images/Partybox110.png";
import P2 from "../Images/P2.png";
import P3 from "../Images/P3.png";
import P4 from "../Images/P4.png";
import { BiSolidStar, BiSolidOffer, BiStar } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
import { GrDeliver } from "react-icons/gr";
import { FaShare } from "react-icons/fa";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineLock,
  AiOutlineGift,
  AiOutlineDownCircle,
  AiOutlineRightCircle,
} from "react-icons/ai";

const View = () => {
  const [add, setAdd] = useState(1);
  const [heart, setHeart] = useState(1);
  const [image, setImage] = useState(1);
  const [sub, setSub] = useState(Image);

  const handleShare = () => {
    navigator
      .share({
        title: "Product View",
        text: "Check out this new awesome speaker from JBL",
        url: "https://www.example.com",
      })
      .then(() => console.log("Shared successfully"))
      .catch((error) => console.error("Error sharing:", error));
  };

  const changeImage1 = () => {
    setImage(1);
    setSub(Image);
  };

  const changeImage2 = () => {
    setImage(2);
    setSub(P2);
  };

  const changeImage3 = () => {
    setImage(3);
    setSub(P3);
  };

  const changeImage4 = () => {
    setImage(4);
    setSub(P4);
  };

  let minus = () => {
    if (add > 1) {
      setAdd(add - 1);
    }
  };

  let plus = () => {
    if (add < 5) {
      setAdd(add + 1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar number={6} />
      <br />
      <br />
      <br />
      <br />

      <div className="viewProduct">
        <div className="leftViewContainer">
          <div className="viewImage">
            <img src={sub} alt="" className="itemImage2" />
          </div>
          <div className="viewSubImages">
            <div
              className="viewSubImage"
              onClick={changeImage1}
              id={`${image === 1 ? "active2" : ""}`}
            >
              <img src={Image} alt="" className="itemImage2" />
            </div>
            <div
              className="viewSubImage"
              onClick={changeImage2}
              id={`${image === 2 ? "active2" : ""}`}
            >
              <img src={P2} alt="" className="itemImage2" />
            </div>
            <div
              className="viewSubImage"
              onClick={changeImage3}
              id={`${image === 3 ? "active2" : ""}`}
            >
              <img src={P3} alt="" className="itemImage2" />
            </div>
            <div
              className="viewSubImage"
              onClick={changeImage4}
              id={`${image === 4 ? "active2" : ""}`}
            >
              <img src={P4} alt="" className="itemImage2" />
            </div>
          </div>

          <div className="details">
            <p className="productDetails">Product Specifications</p>
            <div className="dtls">
              <div className="leftDtls">
                <p className="dtlsTitle">Weight :</p>
                <p className="dtlsTitle">RMS Output :</p>
                <p className="dtlsTitle">Frequency response :</p>
                <p className="dtlsTitle">Connectivity :</p>
                <p className="dtlsTitle">Bluetooth Varsion :</p>
                <p className="dtlsTitle">Audio Codac :</p>
                <p className="dtlsTitle">IP Rating :</p>
              </div>
              <div className="rightDtls">
                <p className="dtlsValue">10 Kg's</p>
                <p className="dtlsValue">160 Watts</p>
                <p className="dtlsValue">45 Hz - 20 KHz</p>
                <p className="dtlsValue">Bluetooth, AirPlay, USB</p>
                <p className="dtlsValue">5.0</p>
                <p className="dtlsValue">AAC, SBC, LDAC</p>
                <p className="dtlsValue">IPX4 Rated</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rightViewContainer">
          <div className="share" onClick={handleShare}>
            <FaShare size={"15px"} style={{ background: "transparent" }} />
          </div>
          <div className="itemsDescription">
            <p className="brandName" id="brandName">
              JBL
            </p>
            <p className="itemTitle" id="itemTitle">
              Partybox 110
            </p>
            <p className="itemSubDescription">
              Pumping out 160 Watts, the JBL PartyBox 110 brings you JBL
              Original Pro Sound that makes your music amazing with two levels
              of Deep and adjustable Bass. With Colors synched to the Beat and
              with Customizable Strobes and Patterns that dazzle your eyes,
              party with an unique, immersive Audiovisual experience.
            </p>
            <div className="starContainer">
              <div className="stars" id="stars">
                <BiSolidStar size={"20px"} color="#FF851B" />
                <BiSolidStar size={"20px"} color="#FF851B" />
                <BiSolidStar size={"20px"} color="#FF851B" />
                <BiSolidStar size={"20px"} color="#FF851B" />
                <BiStar size={"20px"} color="#FF851B" />
              </div>
              <p className="rating">6,942 Ratings</p>
            </div>
            <div className="off">Special Deal of 20% off</div>
            <div className="prices">
              <p id="itemPrice1">₹ 29,999</p>
              <p id="itemPrice2">₹ 23,999</p>
            </div>
            <p className="emi">
              or From ₹4,829/Month with no cost EMI.{" "}
              <p className="more">View More</p>
            </p>
          </div>

          <div className="addUpperContainer">
            <div className="addContainer">
              <div className="add">
                <button className="minus" onClick={minus}>
                  -
                </button>
                <p className="addNumber">{add}</p>
                <button className="plus" onClick={plus}>
                  +
                </button>
              </div>
              <button className="heart">
                <AiFillHeart
                  onClick={() => setHeart(1)}
                  size={"25px"}
                  id={`${heart === 1 ? "display" : ""}`}
                />
                <AiOutlineHeart
                  onClick={() => setHeart(2)}
                  size={"25px"}
                  id={`${heart === 2 ? "display" : ""}`}
                />
              </button>
            </div>
            <p className="message">
              {add === 5 ? (
                "This Product is limited to Maximum '5' Quantity"
              ) : (
                <p style={{ opacity: "0", background: "transparent" }}>
                  Nothing
                </p>
              )}
            </p>
          </div>

          <div className="offersContainer">
            <div className="offers">
              <BiSolidOffer size={"20px"} />
              <p className="offer">Bank Offers</p>
            </div>
            <div className="banks">
              <div className="bank">
                <AiOutlineDownCircle
                  size={"20px"}
                  className="more2"
                  style={{ background: "transparent" }}
                />
                <p className="bankOffer">ICICI Bank</p>
                <p className="subOffer">10% instant Discount upto ₹1,500 ...</p>
              </div>
              <div className="bank">
                <AiOutlineDownCircle
                  size={"20px"}
                  className="more2"
                  style={{ background: "transparent" }}
                />
                <p className="bankOffer">HDFC Bank</p>
                <p className="subOffer">10% instant Discount upto ₹1,000 ...</p>
              </div>
              <div className="bank" id="moreBank">
                <AiOutlineRightCircle
                  size={"20px"}
                  className="more2"
                  style={{ background: "transparent" }}
                />
                <p className="bankOffer">More</p>
                <p className="subOffer">Get more ...</p>
              </div>
            </div>
          </div>

          <div className="addButtons">
            <Link to={"/cart"} style={{ width: "100%" }}>
              <button className="addButton" id="addButton">
                Add to Cart
              </button>
            </Link>
            <button className="addButton" id="buyButton">
              Buy Now
            </button>
          </div>

          <button className="addButton" id="exButton">
            Buy with Exchange
          </button>

          <div className="benifits">
            <div className="benifit">
              <GrDeliver size={"25px"} style={{ background: "transparent" }} />
              One Day Delivery
            </div>
            <div className="benifit">
              <AiOutlineGift
                size={"25px"}
                style={{ background: "transparent" }}
              />
              10 Days Return
            </div>
            <div className="benifit">
              <BsShieldCheck
                size={"25px"}
                style={{ background: "transparent" }}
              />
              Brand Warranty
            </div>
            <div className="benifit">
              <AiOutlineLock
                size={"25px"}
                style={{ background: "transparent" }}
              />
              Secure Transaction
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
