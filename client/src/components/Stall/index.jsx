import React from "react";
import { useParams } from "react-router-dom";
import useFairDetails from "../../hooks/useFairDetails";
import Header from "./Header";
import "./Fair.css";
import OrganizationList from "./OrganizationList";

const Stall = ({ currentUser }) => {
  let { fairId, organizationId } = useParams();

  return (
    <div>
      Hello
    </div>
  );
};

export default Stall;
