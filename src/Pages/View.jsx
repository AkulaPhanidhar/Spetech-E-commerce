import React, { useState } from "react";
import "./View.css";
import Navbar from "../Components/Navbar/Navbar";
import Image from "../Images/Partybox110.png";
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
            <img src={Image} alt="" className="itemImage2" />
          </div>
          <div className="viewSubImages">
            <div className="viewSubImage">
              <img src={Image} alt="" className="itemImage2" />
            </div>
            <div className="viewSubImage">
              <img src={Image} alt="" className="itemImage2" />
            </div>
            <div className="viewSubImage">
              <img src={Image} alt="" className="itemImage2" />
            </div>
            <div className="viewSubImage">
              <img src={Image} alt="" className="itemImage2" />
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
              With Bass Boost and loud, powerful JBL Original Pro Sound, your
              friends won't just hear the music, they'll feel it as 12 hours of
              playtime keeps the party rocking all day or night. Use the
              PartyBox app for total control as you stream your tunes
              wirelessly.
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
              <p className="itemPrice" id="itemPrice1">
                ₹ 29,999
              </p>
              <p className="itemPrice" id="itemPrice2">
                ₹ 23,999
              </p>
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
            <button className="addButton" id="addButton">
              Add to Cart
            </button>
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
