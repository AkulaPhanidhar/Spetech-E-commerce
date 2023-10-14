import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import Image from "../Images/Partybox110.png";
import { BiSolidStar, BiStar } from "react-icons/bi";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

const Products = (props) => {
  const lol = () => {
    props.setD(props.d + 1);
  };

  return (
    <>
      <div className="featuredProducts">
        <p className="productsTitle">{props.title}</p>
        <br />
        <p className="productsDescription">{props.subTitle}</p>
        <br />
        <br />
        <br />
        <div className="productsContainer">
          <Link to={"/view"} style={{ textDecoration: "none" }}>
            <div className="product">
              <img src={Image} alt="" className="itemImage" />
              <div className="itemDescription">
                <br />
                <p className="brandName">JBL</p>
                <p className="itemTitle">Partybox 110</p>
                <div className="stars">
                  <BiSolidStar size={"15px"} color="#FF851B" />
                  <BiSolidStar size={"15px"} color="#FF851B" />
                  <BiSolidStar size={"15px"} color="#FF851B" />
                  <BiSolidStar size={"15px"} color="#FF851B" />
                  <BiStar size={"15px"} color="#FF851B" />
                </div>
                <p className="itemPrice">₹ 29,999</p>
              </div>
              <div className="addToCart" onClick={lol}>
                <PiShoppingCartSimpleFill
                  size={"25px"}
                  style={{ background: "transparent" }}
                />
              </div>
            </div>
          </Link>
          <div className="product">
            <img src={Image} alt="" className="itemImage" />
            <div className="itemDescription">
              <br />
              <p className="brandName">JBL</p>
              <p className="itemTitle">Partybox 110</p>
              <div className="stars">
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiStar size={"15px"} color="#FF851B" />
              </div>
              <p className="itemPrice">₹ 29,999</p>
            </div>
            <div className="addToCart" onClick={lol}>
              <PiShoppingCartSimpleFill
                size={"25px"}
                style={{ background: "transparent" }}
              />
            </div>
          </div>
          <div className="product">
            <img src={Image} alt="" className="itemImage" />
            <div className="itemDescription">
              <br />
              <p className="brandName">JBL</p>
              <p className="itemTitle">Partybox 110</p>
              <div className="stars">
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiStar size={"15px"} color="#FF851B" />
              </div>
              <p className="itemPrice">₹ 29,999</p>
            </div>
            <div className="addToCart">
              <PiShoppingCartSimpleFill
                size={"25px"}
                style={{ background: "transparent" }}
              />
            </div>
          </div>
          <div className="product">
            <img src={Image} alt="" className="itemImage" />
            <div className="itemDescription">
              <br />
              <p className="brandName">JBL</p>
              <p className="itemTitle">Partybox 110</p>
              <div className="stars">
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiStar size={"15px"} color="#FF851B" />
              </div>
              <p className="itemPrice">₹ 29,999</p>
            </div>
            <div className="addToCart">
              <PiShoppingCartSimpleFill
                size={"25px"}
                style={{ background: "transparent" }}
              />
            </div>
          </div>
          <div className="product">
            <img src={Image} alt="" className="itemImage" />
            <div className="itemDescription">
              <br />
              <p className="brandName">JBL</p>
              <p className="itemTitle">Partybox 110</p>
              <div className="stars">
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiStar size={"15px"} color="#FF851B" />
              </div>
              <p className="itemPrice">₹ 29,999</p>
            </div>
            <div className="addToCart">
              <PiShoppingCartSimpleFill
                size={"25px"}
                style={{ background: "transparent" }}
              />
            </div>
          </div>
          <div className="product">
            <img src={Image} alt="" className="itemImage" />
            <div className="itemDescription">
              <br />
              <p className="brandName">JBL</p>
              <p className="itemTitle">Partybox 110</p>
              <div className="stars">
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiStar size={"15px"} color="#FF851B" />
              </div>
              <p className="itemPrice">₹ 29,999</p>
            </div>
            <div className="addToCart">
              <PiShoppingCartSimpleFill
                size={"25px"}
                style={{ background: "transparent" }}
              />
            </div>
          </div>
          <div className="product">
            <img src={Image} alt="" className="itemImage" />
            <div className="itemDescription">
              <br />
              <p className="brandName">JBL</p>
              <p className="itemTitle">Partybox 110</p>
              <div className="stars">
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiStar size={"15px"} color="#FF851B" />
              </div>
              <p className="itemPrice">₹ 29,999</p>
            </div>
            <div className="addToCart">
              <PiShoppingCartSimpleFill
                size={"25px"}
                style={{ background: "transparent" }}
              />
            </div>
          </div>
          <div className="product">
            <img src={Image} alt="" className="itemImage" />
            <div className="itemDescription">
              <br />
              <p className="brandName">JBL</p>
              <p className="itemTitle">Partybox 110</p>
              <div className="stars">
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiSolidStar size={"15px"} color="#FF851B" />
                <BiStar size={"15px"} color="#FF851B" />
              </div>
              <p className="itemPrice">₹ 29,999</p>
            </div>
            <div className="addToCart">
              <PiShoppingCartSimpleFill
                size={"25px"}
                style={{ background: "transparent" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
