import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

const Navbar = (props) => {
  const [active, setActive] = useState(props.number ? props.number : 1);

  return (
    <>
      <div className="outerNavbar">
        <div className="navbar">
          <Link to={"/"} className="logo">
            Spetech
          </Link>
          <div className="navLinksContainer">
            <Link
              to={"/"}
              onClick={() => setActive(1)}
              id={`${active === 1 ? "active" : ""}`}
              className={`${active === 1 ? "" : "navLinks"}`}
            >
              Home
            </Link>
            <Link
              to={"/shop"}
              onClick={() => setActive(2)}
              id={`${active === 2 ? "active" : ""}`}
              className={`${active === 2 ? "" : "navLinks"}`}
            >
              Shop
            </Link>
            <Link
              to={"/about"}
              onClick={() => setActive(3)}
              id={`${active === 3 ? "active" : ""}`}
              className={`${active === 3 ? "" : "navLinks"}`}
            >
              About
            </Link>
            <Link
              to={"/contact"}
              onClick={() => setActive(4)}
              id={`${active === 4 ? "active" : ""}`}
              className={`${active === 4 ? "" : "navLinks"}`}
            >
              Contact
            </Link>
            <Link to={"/cart"} className="cartIcon">
              <div className="cart">
                <p className="number">{props.d ? props.d : 0}</p>
                <PiShoppingCartSimpleFill
                  size={"40px"}
                  style={{ background: "transparent" }}
                  color="black"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
