import React from "react";
import Typography from "@mui/material/Typography";
import JobSectionLayout from "../../../layouts/JobSectionLayout";
import JobCardLayout from "../../../layouts/JobCardLayout";
import { useSelector, useDispatch } from "react-redux";
import { postedJobs } from "../../../redux/action/postedJobsAction";

function PostedJobs({ onclick }) {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.postedJobs.postedJobs);
  const userDetails = useSelector((state) => state.authUser.userDetails);
  const isLoading = useSelector((state) => state.postedJobs.isLoading);
  const hasError = useSelector((state) => state.postedJobs.hasError);

  const handleExpand = () => {
    dispatch(postedJobs(userDetails._id));
  };

  return (
    <JobSectionLayout
      accordionTitle={"Posted Jobs"}
      count={10}
      onExpand={handleExpand}
    >
      {isLoading && <p>Loading...</p>}
      {hasError && <p>Failed to fetch posted jobs</p>}
      
      {jobs.map((i, index) => (
        <JobCardLayout actionName={"Remove Job"} img={i.img} key={index}>
          <Typography variant="h5" sx={{ textAlign: "left" }}>
            {i.title}
          </Typography>
          <Typography variant="subtitle2" sx={{ textAlign: "left" }}>
            {i.startingTime}
          </Typography>
          <Typography
            variant="subtitle2"
            color="#1976d2"
            sx={{ textAlign: "left", marginBottom: 2 }}
            onClick={onclick}
          >
            Applicants 10
          </Typography>
        </JobCardLayout>
      ))}
    </JobSectionLayout>
  );
}

export default PostedJobs;
