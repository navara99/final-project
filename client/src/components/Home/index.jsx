import React, { useEffect } from "react";
import useFairs from "../../hooks/useFairs";
import FairListItem from "./FairListItem";

const Home = () => {
  const { onGoingFairs, upcomingFairs, pastFairs } = useFairs();

  useEffect(() => {
    console.log(upcomingFairs);
    console.log(onGoingFairs);
    console.log(pastFairs);
  }, [pastFairs]);

  return (
    <div>
      <FairListItem />
    </div>
  );
};

export default Home;
