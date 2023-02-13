import React from "react";
import "./deliveryItem.css";
const DeliveryItem = ({ item }) => {
  return (
    <div className="deliveryItem_container">
      <div className="deliveryItem">
        <div className="delivery_item_cover">
          <img
            src={item.cover}
            alt={item.title}
            className="delivery_item_image"
          />
        </div>
        <div className="delivery_item_title">{item.title}</div>
      </div>
    </div>
  );
};

export default DeliveryItem;
