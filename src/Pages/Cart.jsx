import React, { useEffect, useState } from "react";
import "./Cart.css";
import Navbar from "../Components/Navbar/Navbar";
import Image from "../Images/Partybox110.png";
import { BiSolidTrash } from "react-icons/bi";
import { BsFillBookmarksFill } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

const Cart = () => {
  const [cart, setCart] = useState(1);
  const [add, setAdd] = useState(1);
  const [promo, setPromo] = useState();
  const [clicked, setClicked] = useState();

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar number={5} />
      <br />
      <br />
      <br />
      <br />

      <div className="blank" id={`${cart === 1 ? "displayCart" : ""}`}>
        <p className="cartMessege">Nothing in Cart</p>
      </div>

      <div className="cartContainer" id={`${cart === 2 ? "displayCart" : ""}`}>
        <div className="cartItem">
          <div className="cartItemLeft">
            <img src={Image} alt="" className="itemImage" />
          </div>
          <div className="cartItemRight">
            <div className="itemsDescription">
              <p className="cartBrand">JBL</p>
              <p className="cartTitle">Partybox 110</p>
              <div className="prices" id="prices">
                <p id="itemPrice3">₹ 29,999</p>
                <p id="itemPrice4">₹ 23,999</p>
              </div>
              <p className="emi">
                or From ₹4,829/Month with no cost EMI.{" "}
                <p className="more">View More</p>
              </p>
            </div>

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

            <div className="cartButtons">
              <button
                onClick={() => setCart(2)}
                className="cartButton"
                id="cartButton1"
              >
                <div
                  style={{
                    background: "transparent",
                    marginTop: "2px",
                  }}
                >
                  <BiSolidTrash
                    color="white"
                    size={"15px"}
                    style={{ background: "transparent" }}
                  />
                </div>
                <p style={{ background: "transparent" }}>Delete</p>{" "}
              </button>
              <button className="cartButton" id="cartButton2">
                <div
                  style={{
                    background: "transparent",
                    marginTop: "2px",
                  }}
                >
                  <BsFillBookmarksFill
                    color="black"
                    size={"15px"}
                    style={{ background: "transparent" }}
                  />
                </div>

                <p style={{ background: "transparent" }}>Save for Later</p>
              </button>
              <button
                className="cartButton"
                id="cartButton3"
                onClick={handleShare}
              >
                <div
                  style={{
                    background: "transparent",
                    marginTop: "2px",
                  }}
                >
                  <FaShare
                    color="white"
                    size={"15px"}
                    style={{ background: "transparent" }}
                  />
                </div>
                <p style={{ background: "transparent" }}>Share</p>
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="line"></div>
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Promo Code"
          className="promoInput"
          onInput={(e) => setPromo(e.target.value.toUpperCase())}
        />
        <button onClick={() => setClicked(true)} className="promoButton">
          Apply
        </button>
        <span className="invalid">
          {clicked
            ? promo === "WELCOME10"
              ? ""
              : "The Entered Promo Code is Invalid !!!"
            : ""}
        </span>
        <br />
        <br />
        <br />
        <div className="finalPriceContainer">
          <p className="priceLineBox">
            <p>Sub Total ( 1 Item )</p>
            <p>₹ 29,999</p>
          </p>
          <p className="priceLineBox">
            <p>Discount Price</p>
            <p>- ₹ 7,000</p>
          </p>
          {clicked ? (
            promo === "WELCOME10" ? (
              <p className="priceLineBox">
                <p className="promoCode">
                  Promo Code :{" "}
                  <p className="codeBox">
                    WELCOME10
                    <AiFillCloseCircle
                      onClick={() => setClicked(false)}
                      color="black"
                      size={"20px"}
                      className="closeButton"
                      style={{ background: "transparent" }}
                    />
                  </p>
                </p>
                <p className="promoPrice">- ₹ 2,399</p>
              </p>
            ) : (
              // <div className="upperPopUp">
              //   <div className="popUp">
              //     <p className="popUpMessege">The Promo Code is Invalid</p>
              //   </div>
              // </div>
              ""
            )
          ) : (
            ""
          )}
          <br />
          <p className="priceLineBox">
            <p className="priceLine">Total Payable</p>
            <p className="priceLine">
              {clicked
                ? promo === "WELCOME10"
                  ? "₹ 21,600"
                  : "₹ 23,999"
                : "₹ 23,999"}
            </p>
          </p>
        </div>
        <br />
        <div className="checkoutButtonContainer">
          <button className="checkoutButton">Proceed to Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
