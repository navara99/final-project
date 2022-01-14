import React, { useEffect } from "react";
import useFairs from "../../hooks/useFairs";
import "./Home.css";
import FairList from "./FairList";

const Home = () => {
  const { onGoingFairs, upcomingFairs, pastFairs } = useFairs();

  return (
    <div>
      <h2>On Going Fairs</h2>
      <FairList items={onGoingFairs} />

      <h2>Upcoming Fairs</h2>
      <FairList items={upcomingFairs} />

      <h2>Past Fairs</h2>
      <FairList items={pastFairs} />
    </div>
  );
};

export default Home;
