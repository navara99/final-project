import { useEffect, useState } from "react"
import axios from "axios";

const useOrganizationDetails = (id) => {
  const [organizationDetails, setOrganizationDetails] = useState()

  useEffect(() => {
    axios.get(`/api/organizations/${id}`).then(({ data }) => {
      setOrganizationDetails(data);
    });
  });

  return organizationDetails;
};

export default useOrganizationDetails;
