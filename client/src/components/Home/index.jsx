import React from "react";
import useFairs from "../../hooks/useFairs";
import "./Home.css";
import FairList from "./FairList";

const Home = () => {
  const { onGoingFairs, upcomingFairs, pastFairs } = useFairs();

  return (
    <div className="Home">
      <FairList items={onGoingFairs} text="On Going Career Fairs" />
      <FairList
        items={upcomingFairs}
        text="Upcoming Career Fairs"
        showDate={true}
      />
      <FairList items={pastFairs} text="Past Career Fairs" showDate={true} />
    </div>
  );
};

export default Home;
