import React from "react";
import Collection from "../common/collection/Collection";
import Filter from "../common/filters/Filter";
import Explore from "../delivery/exploreSection/Explore";
import { diningOut } from "../../data/DiningOutdata";
const collectionList = [
  {
    id: "1",
    title: "13 Newly Opened Restaurants",
    cover: "./images/din_img_1.avif",
    places: "13 places",
  },
  {
    id: "2",
    title: "9 Great Buffets",
    cover: "./images/din_img_2.avif",
    places: "9 places",
  },
  {
    id: "3",
    title: "9 Best Insta-worthy Places",
    cover: "./images/din_img_3.avif",
    places: "9 places",
  },
  {
    id: "4",
    title: "15 Best Bars & Pubs",
    cover: "./images/din_img_4.avif",
    places: "15 places",
  },
  {
    id: "5",
    title: "8 Places for Lip-smacking",
    cover: "./images/din_img_5.avif",
    places: "8 places",
  },
  {
    id: "6",
    title: "11 Serene Rooftop Places",
    cover: "./images/din_img_6.avif",
    places: "11 places",
  },
  {
    id: "7",
    title: "14 Must-visit Legendary",
    cover: "./images/din_img_7.avif",
    places: "14 places",
  },
  {
    id: "8",
    title: "7 Finest Microbreweries",
    cover: "./images/din_img_8.avif",
    places: "7 places",
  },
];
const diningFilters = [
  {
    id: 1,
    icon: <i class="fi fi-rr-settings-sliders absolute_center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Ratinge 4.0+",
  },
  {
    id: 3,
    title: "Outdoor Seating",
  },
  {
    id: 4,
    title: "Serves Alcohol",
  },
  {
    id: 5,

    title: "Open Now",
  },
];
const restaurantList = diningOut;
const DiningOut = () => {
  return (
    <div className="diningout">
      <Collection list={collectionList} />
      <div className="max-width">
        <Filter filterList={diningFilters} />
      </div>
      <Explore
        list={restaurantList}
        collectionName="Best Dining Restaurants near you "
      />
    </div>
  );
};

export default DiningOut;
