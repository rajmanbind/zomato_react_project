import React from "react";
import "../../../styles/common.css";
import "../../../styles/variable.css";
import "./header.css";
const Header = () => {
  return (
    <div className="header max-width">
      <div className="logo">
        <img src="/images/logo.avif" className="header_logo" alt="" />
      </div>

      <div className="header_right">
        <div className="header_search_Location_container">
          <div className="location_wrapper">
            <div className="location_icon_name">
              <i class="fi fi-sr-marker absolute_center"></i>
              <input type="text" className="absolute_center" placeholder="Bangalore"></input>
            </div>
            <i class="fi fi-sr-caret-down absolute_center"></i>
          </div>
          <div className="location_search_separator"></div>
          <div className="header_searchbar">
            <i class="fi fi-rr-search search_icon absolute_center"></i>
            <input
              className="search_input"
              type="text"
              placeholder="Search for restaurant, cuisine of a dish"
            />
          </div>
        </div>
        <div className="profile_wrapper">
          <img
            src="/images/profile.jpeg"
            className="header_profile_image"
            alt=""
          />
          <div className="profile_name ">
            <span> Rajman </span>
            <i class="fi fi-rr-angle-small-down absolute_center "></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
