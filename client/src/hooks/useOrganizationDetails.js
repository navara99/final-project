import { useEffect, useState } from "react"
import axios from "axios";

const useOrganizationDetails = (id) => {
  const [organizationDetails, setOrganizationDetails] = useState()

  useEffect(() => {
    axios.get(`/api/organizations/${id}`).then(({ data }) => {
      setOrganizationDetails(data);
      console.log(data);
    });
    console.log("USE organization details")
  }, [id]);

  return [organizationDetails, setOrganizationDetails];
};

export default useOrganizationDetails;
