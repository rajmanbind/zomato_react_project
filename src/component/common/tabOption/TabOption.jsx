import React from "react";
import "./tabOption.css";
const tabs = [
  {
    id: 1,
    name: "Delivery",
    inactive_img: "/images/delivery_1.webp",
    backdrop: "#fceec0",
    active_img: "images/delivery_2.avif",
    white: "#fff",
  },
  {
    id: 2,
    name: "Dining Out",
    active_img: "/images/dining_1.avif",
    backdrop: "#e5f3f3",
    inactive_img: "/images/dining_2.avif",
    white: "#fff",
  },
  {
    id: 3,
    name: "Nightlife",
    active_img: "/images/nightlife_1.webp",
    backdrop: "#edf4ff",
    inactive_img: "/images/nightlife_2.webp",
    white: "#fff",
  },
];
const TabOption = ({ activeTab, setActiveTab }) => {
  // console.log(activeTab);
  return (
    <div className="tabOption">
      <div className="max-width options_wrapper">
        {tabs.map((item) => (
          <div
            onClick={() => setActiveTab(item.name)}
          className={`tab_item absolute_center cursor ${
              activeTab === item.name && "active_tab"
            }`} 
            key = {item.id}
          >
            <div
              className="tab_image_container absolute_center"
              style={{
                backgroundColor: `${
                  activeTab === item.name ? item.backdrop : item.white
                }`,
              }}
            >
              <img
                src={
                  `${activeTab === item.name
                    ? item.active_img
                    : item.inactive_img}`
                }
                alt={item.name}
                className="tab_image"
              />
            </div>
            <div className="tab_name">{item.name}</div>
          </div>
        ))}
      </div>
      {/* <button onClick={() => setActiveTab("Nightlife")}>raj</button> */}
    </div>
  );
};

export default TabOption;
