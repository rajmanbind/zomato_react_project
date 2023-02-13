import React from "react";
import Filter from "../common/filters/Filter";
import DeliveryCollection from "./deliveryCollections/DeliveryCollection";
import Explore from "./exploreSection/Explore";
import TopBrand from "./topbrands/TopBrand";
import { restaurants } from "../../data/resaurant";
const deliveryFilters = [
  {
    id: 1,
    icon: <i class="fi fi-rr-settings-sliders absolute_center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    icon: <i class="fi fi-rr-apps-sort absolute_center"></i>,
    title: "Delivery Time",
  },
  {
    id: 3,
    title: "Ratinge 4.0+",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,

    title: "Cuisine",
    arrow: <i class="fi fi-rr-angle-small-down absolute_center "></i>,
  },
  {
    id: 6,
    title: "More Items",
    arrow: <i class="fi fi-rr-angle-small-down absolute_center "></i>,
  },
];

const restaurantList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filter filterList={deliveryFilters} />
      </div>
      <DeliveryCollection />
      <TopBrand />
      <Explore
        list={restaurantList}
        collectionName=" Delivery Restaurants in Bangalore"
      />
    </div>
  );
};

export default Delivery;
