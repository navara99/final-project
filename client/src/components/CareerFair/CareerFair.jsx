import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import CompanyList from "./Companies/CompanyList";
import FairHeader from "./FairHeader";
import { useParams } from "react-router-dom";
import axios from "axios";
import useEachFair from "../../hooks/useEachFair";

const CareerFair = () => {
  let { id } = useParams();
  const {organizations, fair_name, fair_desc, host_name, poster} = useEachFair(id)
  return (
    <Grid container spacing={2}>
      {/* Name of the fair */}
      {fair_name && (
        <>
          <Grid item xs={12}>
            <FairHeader fair_name={fair_name} fair_desc={fair_desc} host_name={host_name} poster={poster} />
          </Grid>
          <Grid item xs={12} marginTop={2}>
            <CompanyList organizations={organizations} />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default CareerFair;
