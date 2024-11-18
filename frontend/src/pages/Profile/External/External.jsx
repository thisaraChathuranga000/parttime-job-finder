import React from "react";
import ProfileBar from "../../../components/Profile/External/ProfileBar";
import DashBoard from "../../../components/Profile/External/DashBoard";
import Grid from "@mui/material/Grid";

function External() {
  return (
    <div>
      <Grid container p={4}>
        <Grid lg={3} md={3} sm={12} xs={12}>
          <ProfileBar />
        </Grid>

        <Grid container lg={9} md={9} sm={12} xs={12}>
          <DashBoard />
        </Grid>
      </Grid>
    </div>
  );
}

export default External;
