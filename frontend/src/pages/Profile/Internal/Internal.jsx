import React from "react";
import ProfileBar from "../../../components/Profile/Internal/ProfileBar";
import ProfileDashBoard from "../../../components/Profile/Internal/ProfileDashBoard";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

function Internal() {
  return (
    <div>
      <Grid container p={4}>
        <Grid lg={3} md={3} sm={12} xs={12}>
          <ProfileBar />
        </Grid>

        <Grid container lg={9} md={9} sm={12} xs={12} justifyContent="center">
          <ProfileDashBoard />
        </Grid>
      </Grid>
    </div>
  );
}

export default Internal;
