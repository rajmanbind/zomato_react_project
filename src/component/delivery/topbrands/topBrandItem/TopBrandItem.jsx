import React from "react";
import "./topbrandItem.css";

const TopBrandItem = ({ item }) => {
  return (
    <div className="topBrand">
      <div className="topBrand_item_cover">
        <img
          src={item.cover}
          alt={item.name}
          className="topBrand_item_image"
        />
      </div>
      <div className="topBrand_item_name">{item.name}</div>
      <span>{item.time}</span>
    </div>
  );
};

export default TopBrandItem;
