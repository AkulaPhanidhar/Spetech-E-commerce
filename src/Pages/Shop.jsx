import React, { useState } from "react";
import "../App.css";
import Navbar from "../Components/Navbar/Navbar";
import Products from "../Components/Products/Products";
import { HiSearch } from "react-icons/hi";
import News from "../Components/News/News";
import Footer from "../Components/Footer/Footer";

const Shop = (props) => {
  const [data, setData] = useState();
  const [clicked, setClicked] = useState();
  const [d, setD] = useState(0);

  return (
    <>
      <Navbar d={d} number={2} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="searchContainer">
        <input
          type="text"
          className="searchInput"
          placeholder="Search..."
          onInput={(e) => setData(e.target.value)}
        />
        <button onClick={() => setClicked(true)} className="searchButton">
          <HiSearch
            size={"20px"}
            color="white"
            style={{ background: "transparent" }}
          />
        </button>
      </div>
      <p>{clicked ? (data === "lol" ? 0 : 1) : ""}</p>
      {/* <button onClick={() => setClicked(false)}>X</button> */}
      <br />
      <Products
        d={d}
        setD={setD}
        title={"Featured Products"}
        subTitle={"Popular Products from top brands"}
      />
      <Products
        d={d}
        setD={setD}
        title={"New Arrivals"}
        subTitle={"New Products from top brands"}
      />
      <Products
        d={d}
        setD={setD}
        title={"Premium Products"}
        subTitle={"Hign Quality and luxurious Products"}
      />
      <br />
      <br />
      <News />
      <Footer />
    </>
  );
};

export default Shop;
