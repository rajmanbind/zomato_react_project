import React from "react";
import "./topbrand.css";
import Slider from "react-slick";
import NextArrow from "../../common/carousel/NextArrow";
import PrevArrow from "../../common/carousel/PrevArrow";
import TopBrandItem from "./topBrandItem/TopBrandItem";
const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
const topbrandList = [
  {
    id: 1,
    name: "WOW! Momo",
    cover: "./images/momo.avif",
    time: "26 min",
  },
  {
    id: 2,
    name: "Domino's Pizza",
    cover: "./images/domino.avif",
    time: "30 min",
  },
  {
    id: 3,
    name: "chowman",
    cover: "./images/chowman.webp",
    time: "25 min",
  },
  {
    id: 4,
    name: "KFC",
    cover: "./images/kfc.avif",
    time: "27 min",
  },
  {
    id: 5,
    name: "Edabba",
    cover: "./images/dabba.avif",
    time: "26 min",
  },
  {
    id: 6,
    name: "Arsalan",
    cover: "./images/arsalan.avif",
    time: "27 min",
  },
  {
    id: 7,
    name: "Gupta Brothers",
    cover: "./images/gupta.avif",
    time: "16 min",
  },
  {
    id: 8,
    name: "Pizza Hut",
    cover: "./images/phut.avif",
    time: "32 min",
  },
  {
    id: 9,
    name: "Burger King",
    cover: "./images/bking.avif",
    time: "31 min",
  },
  {
    id: 10,
    cover: "./images/krestaurant.avif",
    name: "Kasturi Restaurant",
    time: "35 min",
  },
];
const TopBrand = () => {
  return (
    <div className="topBrands">
      <div className="max-width">
        <h3 className="collection_title">Top brands for you</h3>
        <Slider {...settings}>
          {topbrandList.map((item) => (
            <TopBrandItem item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopBrand;
