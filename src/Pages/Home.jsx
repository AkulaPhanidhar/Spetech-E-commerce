import React from "react";
import "../App.css";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Features from "../Components/Features/Features";
import Products from "../Components/Products/Products";
import Banner1 from "../Components/Banners/Banner1";
import Banner2 from "../Components/Banners/Banner2";
import Banner3 from "../Components/Banners/Banner3";
import News from "../Components/News/News";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Products
        title={"Featured Products"}
        subTitle={"Popular Products from top brands"}
      />
      <br />
      <br />
      <Banner1 />
      <Products
        title={"New Arrivals"}
        subTitle={"New Products from top brands"}
      />
      <br />
      <Banner2 />
      <Banner3 />
      <br />
      <br />
      <News />
      <Footer />
    </>
  );
};

export default Home;
