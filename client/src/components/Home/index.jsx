import React, { useEffect } from "react";
import useFairs from "../../hooks/useFairs";

const Home = () => {
  const { onGoingFairs } = useFairs();

  useEffect(() => {
    console.log(onGoingFairs);
  }, [onGoingFairs]);

  return <div>HOME</div>;
};

export default Home;
