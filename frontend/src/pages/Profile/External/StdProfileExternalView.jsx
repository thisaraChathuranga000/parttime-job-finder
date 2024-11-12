import React from "react";
import ProfileBar from "../../../components/StdProfileExternal/ProfileBar";
import CompletedJobChart from "../../../components/StdProfileExternal/CompletedJobChart";
import JobCards from "../../../components/StdProfileExternal/JobCards";
import Typography from "@mui/material/Typography";
import PrefferedCategories from "../../../components/StdProfileExternal/PrefferedCategories";

function StdProfileExternalView() {
  return (
    <div>
      <ProfileBar />
      <CompletedJobChart />
      <JobCards />

      <Typography gutterBottom variant="h5" sx={{marginLeft:"25%"}}>
        Preffered Categories
      </Typography>

      <PrefferedCategories />
    </div>
  );
}

export default StdProfileExternalView;
