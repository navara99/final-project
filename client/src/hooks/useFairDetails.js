import { useState, useEffect } from "react";
import axios from "axios";

const useFairDetails = (id) => {
  const [organizations, setOrganizations] = useState([]);
  const [fair_name, setFairName] = useState('');
  const [fair_desc, setFairDesc] = useState('');
  const [host_name, setHostName] = useState('');
  const [poster, setPoster] = useState('');
  useEffect(() => {
    axios.get(`/api/fairs/${id}`).then(({data}) => {
      const {organizations, fair_name, fair_desc, host_name,poster} = data;
      setOrganizations(organizations);
      setFairName(fair_name);
      setFairDesc(fair_desc);
      setHostName(host_name);
      setPoster(poster); 
    });
  }, []);

  return {organizations, fair_name, fair_desc, host_name, poster}

}

export default useFairDetails;