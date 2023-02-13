import React from "react";
import "./filterItem.css";
const FilterItem = ({ filter }) => {
  return (
    <div className="filterItem">
      {filter.icon && filter.icon}
      <div className="filter_name">{filter.title}</div>
      {filter.arrow && filter.arrow}
    </div>
  );
};

export default FilterItem;
