import React, { useState } from "react";
import "./home.css";
import Header from "../../component/common/header/Header";
import Footer from "../../component/common/footer/Footer";
import TabOption from "../../component/common/tabOption/TabOption";
import Delivery from "../../component/delivery/Delivery";
import DiningOut from "../../component/diningout/DiningOut";
import NightLife from "../../component/nightlife/NightLife";
const Home = () => {
  const [activeTab, setActiveTab] = useState("");
  return (
    <div className="home">
      <Header />
      <TabOption activeTab = {activeTab} setActiveTab = {setActiveTab}/>
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};
const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery": {
      return <Delivery/>;
    }
    case "Dining Out": {
      return <DiningOut/>;
    }
    case "Nightlife": {
      return <NightLife/>;
    }

    default: {
      return <Delivery/>;
    }
  }
};
export default Home;
