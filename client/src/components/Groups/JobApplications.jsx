import React from "react";
import ApplicantsList from "./ApplicantsList";
import { useParams } from "react-router";
import useApplications from "../../hooks/useApplications";
import useEachJob from "../../hooks/useEachJob";

function JobApplications({
  setSnackBarDetails,
  currentUser,
  setMessages,
  setSenders,
  socket,
}) {
  const { id } = useParams();
  const [applications] = useApplications(id);
  const [job] = useEachJob(id);

  return (
    <div>
      {job && <h2>Applications for {job.title}</h2>}
      {applications && (
        <ApplicantsList
          {...{
            setMessages,
            setSenders,
            socket,
            applications,
            jobTitle: job.title,
            setSnackBarDetails,
            currentUser,
          }}
        />
      )}
    </div>
  );
}

export default JobApplications;
