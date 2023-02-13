import React from "react";
import "./explore.css";
import ExploreCard from "./exploreCard/ExploreCard";
const Explore = ({ list, collectionName }) => {
  return (
    <div className="max-width explore_sections">
      <div className="collection_title">{collectionName}</div>
      <div className="explore_grid">
        {list &&
          list.map((item) => (
            <ExploreCard item = {item} />
          ))}
      </div>
    </div>
  );
};

export default Explore;
