import React from "react";
import useFairs from "../../hooks/useFairs";
import "./Home.css";
import FairList from "./FairList";

const Home = () => {
  const { onGoingFairs, upcomingFairs, pastFairs } = useFairs();

  return (
    <>
      <FairList items={onGoingFairs} text="Career Fairs LIVE" isOngoing={true} />
      <FairList
        items={upcomingFairs}
        text="Upcoming Career Fairs"
        showDate={true}
      />
      <FairList items={pastFairs} text="Past Career Fairs" showDate={true} />
    </>
  );
};

export default Home;
