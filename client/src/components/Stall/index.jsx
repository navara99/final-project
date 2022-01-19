import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Stall = ({ currentUser }) => {
  let { fairId, organizationId } = useParams();
  const [inCall, setInCall] = useState(false);
  
  return <div>{inCall ? "we are in call" : "waiting to join call!"}</div>;
};

export default Stall;
