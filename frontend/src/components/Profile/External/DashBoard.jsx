import React from "react";
import Typography from "@mui/material/Typography";
import JobCardLayout from "../../../layouts/JobCardLayout";

function DashBoard() {
  return (
    <JobCardLayout
      actionName={"View Job"}
      img={"/assets/jobs/stockCounting.jpg"}
    >
      <Typography variant="h5" sx={{ textAlign: "left" }}>
        {"title"}
      </Typography>
      <Typography variant="subtitle2" sx={{ textAlign: "left" }}>
        Posted Time
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ textAlign: "left", color: "", marginBottom: 1 }}
      >
        Open
      </Typography>
    </JobCardLayout>
  );
}

export default DashBoard;
