import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import CompanyList from "./Companies/CompanyList";
import FairHeader from "./FairHeader";
import { useParams } from "react-router-dom";
import axios from "axios";

const CareerFair = () => {
  let { id } = useParams();

  const [fair, updateFair] = useState();

  useEffect(() => {
    axios.get(`/api/fairs/${id}`).then((result) => {
      updateFair(result.data);
      console.log(result.data);
    });
  }, []);

  const industries = [
    {
      name: "Dabtype",
      description:
        "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero convallis eget eleifend luctus ultricies eu nibh.",
    },
    {
      name: "Devcast",
      description:
        "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    },
  ];

  return (
    <Grid container spacing={2}>
      {/* Name of the fair */}
      {fair && (
        <>
          <Grid item xs={12}>
            <FairHeader fair={fair} />
          </Grid>
          <Grid item xs={12} marginTop={2}>
            <CompanyList industries={industries} />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default CareerFair;
