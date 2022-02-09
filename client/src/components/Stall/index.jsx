import React, { useState } from "react";
import { useParams } from "react-router-dom";
import VideoCall from "./VideoCall";
import { Button } from "@mui/material";
import useChannel from "../../hooks/useChannel";
import useMember from "../../hooks/useMember";
import useOrganizationDetails from "../../hooks/useOrganizationDetails";
import "./Stall.css";
import useFairDetails from "../../hooks/useFairDetails";
import useTitle from "../../hooks/useTitle";

const Stall = ({ currentUser, leaveStall, joinStall, updateUsers }) => {
  const { organizationId, fairId } = useParams();
  const { fair } = useFairDetails(fairId);
  const isMember = useMember(organizationId);
  const [organizationDetails] = useOrganizationDetails(organizationId);
  const { config, useClient } = useChannel(
    organizationId,
    currentUser && organizationDetails
      ? `${currentUser.username}${
          isMember ? ` (${organizationDetails.details.name})` : ""
        }`
      : ""
  );
  const [inCall, setInCall] = useState(false);

  const title = `${inCall ? "📞" : ""}Stall of ${
    organizationDetails ? organizationDetails.details.name : ""
  }`;
  useTitle(title);

  return (
    <div className="stall">
      {!inCall && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setInCall(true)}
        >
          Join Stall {isMember && "as host"}
        </Button>
      )}
      {inCall && (
        <>
          <h3>
            Currently in stall hosted by: {organizationDetails.details.name}
          </h3>
          <VideoCall
            {...{ config, useClient, setInCall, fair }}
            channelName={organizationId}
            username={
              currentUser
                ? `${currentUser.username}${
                    isMember ? ` (${organizationDetails.details.name})` : ""
                  }`
                : ""
            }
            leaveStall={() => leaveStall(fairId, organizationId)}
            joinStall={() => joinStall(fairId, organizationId)}
            updateUsers={num => updateUsers(fairId, organizationId, num)}
          />
        </>
      )}
    </div>
  );
};

export default Stall;
