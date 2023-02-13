import React from "react";
import Slider from "react-slick";
import NextArrow from "../../common/carousel/NextArrow";
import PrevArrow from "../../common/carousel/PrevArrow";
import DeliveryItem from "./deliveryItem/DeliveryItem";
import "./deliveryCollection.css";
const deliveryItem = [
  {
    id: 1,
    title: "Biryani",
    cover: "./images/biryani.avif",
  },
  {
    id: 2,
    title: "Pizza",
    cover: "./images/pizza.avif",
  },
  {
    id: 3,
    title: "Thali",
    cover: "./images/thali.avif",
  },

  {
    id: 4,
    title: "Chicken",
    cover: "./images/chicken.webp",
  },
  {
    id: 5,
    title: "Cake",
    cover: "./images/cake.avif",
  },
  {
    id: 6,
    title: "Fried Rice",
    cover: "./images/friderice.avif",
  },
  {
    id: 7,
    title: "Burger",
    cover: "./images/burger.avif",
  },
  {
    id: 8,
    title: "Paneer",
    cover: "./images/paneer.avif",
  },
  {
    id: 9,
    title: "Rolls",
    cover: "./images/rolls.avif",
  },
  {
    id: 10,
    title: "Dosa",
    cover: "./images/dosa.avif",
  },
  {
    id: 11,
    title: "Chowmein",
    cover: "./images/chowmein.avif",
  },
  {
    id: 12,
    title: "Momos",
    cover: "./images/momos.avif",
  },
];
const DeliveryCollection = () => {
    const settings = {
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
  return (
    <div className="deliveryCollection">
      <div className="max-width">
        <h3 className="collection_title">Inspiration for your first order</h3>
        <Slider {...settings}>
            {deliveryItem.map((item)=>(
                <DeliveryItem item = {item}/>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default DeliveryCollection;
