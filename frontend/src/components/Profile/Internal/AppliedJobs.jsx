import React from "react";
import Typography from "@mui/material/Typography";
import JobSectionLayout from "../../../layouts/JobSectionLayout";
import JobCardLayout from "../../../layouts/JobCardLayout";
import { useSelector, useDispatch } from "react-redux";
import { appliedJobs } from "../../../redux/action/appliedJobsAction";

function AppliedJobs() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.appliedJobs.appliedJobs);
  const userDetails = useSelector((state) => state.authUser.userDetails);
  const isLoading = useSelector((state) => state.appliedJobs.isLoading);
  const hasError = useSelector((state) => state.appliedJobs.hasError);

  const handleExpand = () => {
    dispatch(appliedJobs(userDetails._id));
  };

  return (
    <JobSectionLayout
      accordionTitle={"Applied Jobs"}
      count={11}
      onExpand={handleExpand}
    >
      {isLoading && <p>Loading...</p>}
      {hasError && <p>Failed to fetch applied jobs</p>}
      {jobs.map((i, index) => (
        <JobCardLayout
          actionName={"Remove Application"}
          img={i.img}
          key={index}
        >
          <Typography variant="h5" sx={{ textAlign: "left" }}>
            {i.title}
          </Typography>
          <Typography variant="subtitle2" sx={{ textAlign: "left" }}>
            Applied Time
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ textAlign: "left", color: "", marginBottom: 1 }}
          >
            Pending
          </Typography>
        </JobCardLayout>
      ))}
    </JobSectionLayout>
  );
}

export default AppliedJobs;
