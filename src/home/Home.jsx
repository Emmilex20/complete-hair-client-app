import React from "react";
import Banner from "../components/Banner";
import BestSellerHair from "./BestSellerHair";
import FavHair from "./FavHair";
import PromoBanner from "./PromoBanner";
import OtherHairs from "./OtherHairs";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <BestSellerHair />
      <FavHair />
      <PromoBanner />
      <OtherHairs />
      <Review />
      
    </div>
  );
};

export default Home;
