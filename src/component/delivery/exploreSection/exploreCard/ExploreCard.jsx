import React from "react";
import "./exploreCard.css";
const ExploreCard = ({ item }) => {
  const name = item?.info?.name ?? "";
  const coverImg = item?.info?.image?.url;
  const deliveryTime = item?.order?.deliveryTime;
  const rating = item?.info?.rating?.rating_text;
  const approxPrice = item?.info?.cfo?.text;
  const offers = item?.bulkOffers ?? [];
  const cuisines = item?.info?.cuisine?.map((item) => item.name).slice(0, 3);
  const bottomContainer = item?.bottomContainers;
  const goldOff = item?.gold?.text;
  const proOff = offers.length > 1 ? offers[0].text : null;
  const discount =
    offers > 1 ? offers[1].text : offers.length === 1 ? offers[0].text : null;

  return (
    <div className="exploreCard cursor">
      <div className="explore_card_cover">
        <img src={coverImg} alt={name} className="explore_card_image" />
        <div className="deliveryTime"> {deliveryTime}</div>
        {proOff && <div className="proOff">{proOff}</div>}
        {goldOff && <div className="goldOff absolute_center">{goldOff}</div>}
        {discount && <div className="discount absolute_center">{discount}</div>}
      </div>
      <div className="restaurant_row">
        <div className="rest_name">{name}</div>
        {rating && (
          <div className="rest_rating absolute_center">
            {rating}
            <i className="fi fi-rr-star absolute_center"></i>
          </div>
        )}
      </div>
      <div className="restaurant_row">
        {cuisines && (
          <div className="rest_cuisine">
            {cuisines.map((item, i) => (
              <span className="rest_cuisines_tab">
                {item}
                {i !== cuisines.length - 1 && ","}
              </span>
            ))}
          </div>
        )}
        {approxPrice && <div className="rest_price">{approxPrice}</div>}
      </div>
      {bottomContainer.length > 0 && (
        <div>
          <div className="card_separator"></div>
          <div className="explore_bottom">
            <img
              src={bottomContainer[0]?.image?.url}
              alt={bottomContainer[0].text}
              style={{ height: "18px" }}
            />
            <div className="rest_bottom_text">{bottomContainer[0]?.text}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreCard;
