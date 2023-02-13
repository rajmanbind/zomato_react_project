import React from "react";
import "./filter.css";
import FilterItem from "./filterItem/FilterItem";
const Filter = ({ filterList }) => {
  return (
    <div className="filter max-width">
      {filterList && filterList.map((item) => (
        <FilterItem filter = {item} key = {item.id}/>
      ))}
    </div>
  );
};

export default Filter;
