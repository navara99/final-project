import React, { useEffect } from "react";
import useFairs from "../../hooks/useFairs";
import "./Home.css";
import FairList from "./FairList";

const Home = () => {
  const { onGoingFairs, upcomingFairs, pastFairs } = useFairs();

  useEffect(() => {
    console.log(upcomingFairs);
    console.log(onGoingFairs);
    console.log(pastFairs);
  }, [pastFairs]);

  return (
    <div>
      <FairList />
    </div>
  );
};

export default Home;
