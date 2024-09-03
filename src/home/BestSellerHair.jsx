import React, { useEffect } from "react";
import HairCards from "../components/HairCards";

const BestSellerHair = () => {
  const [hairs, setHairs] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-hairs")
      .then((res) => res.json())
      .then((data) => setHairs(data.slice(0, 8)));
  }, []);
  return (
    <div className="text-white">
    <HairCards hairs={hairs} headline={<span className="text-blue-500">Best Selling Hairs</span>} />
  </div>
  
  );
};

export default BestSellerHair;
