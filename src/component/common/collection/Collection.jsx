import React from "react";
import Slider from "react-slick";
import "./collection.css";
import NextArrow from "../../common/carousel/NextArrow";
import PrevArrow from "../../common/carousel/PrevArrow";
const Collection = ({ list }) => {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="collection_wrapper">
      <div className="max-width collection">
        <div className="collection_title">Collections</div>
        <div className="collection_subtitle_row">
          <div className="collection_subtitle_text">
          Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends
          </div>
          <div className="collection_location">
            <div>All collections in Kolkata</div>
            <i className="fi fi-rr-caret-right absolute_center"></i>
          </div>
        </div>
        <Slider {...settings}>
          {list.map((item) => (
            <div>
              <div className="collection_cover">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="collection_image"
                />
                <div className="gradient_bg"></div>
                <div className="collection_card_title">{item.title}</div>
                <div className="collection_card_places">
                  <div>{item.places}</div>
                  <i className="fi fi-rr-caret-right absolute_center"></i>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Collection;
