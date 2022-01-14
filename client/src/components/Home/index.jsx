import React, { useEffect } from "react";
import useFairs from "../../hooks/useFairs";

const Home = () => {
  const { onGoingFairs, upcomingFairs, pastFairs } = useFairs();

  useEffect(() => {
    console.log(upcomingFairs);
    console.log(onGoingFairs);
    console.log(pastFairs);
  }, [pastFairs]);

  return <div>HOME</div>;
};

export default Home;
