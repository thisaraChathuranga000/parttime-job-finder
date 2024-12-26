import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import JobSectionLayout from "../../../layouts/JobSectionLayout";
import JobCardLayout from "../../../layouts/JobCardLayout";
import { useSelector, useDispatch } from "react-redux";
import { postedJobs } from "../../../redux/action/postedJobsAction";
import {
  getPostById,
  deletePostById,
} from "../../../redux/action/jobPostsAction";
import ModelLayout from "../../../layouts/ModelLayout";
import { CardContent } from "@mui/material";

function PostedJobs({ onclick }) {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.postedJobs.postedJobs);
  const userDetails = useSelector((state) => state.authUser.userDetails);
  const isLoading = useSelector((state) => state.postedJobs.isLoading);
  const hasError = useSelector((state) => state.postedJobs.hasError);
  const selectedJob = useSelector((state) => state.jobPosts.selectedJob);
  const applicantData = useSelector((state) => state.applicants.applicantData);

  const [openJob, setOpenJob] = useState(false);

  const handleCloseJob = () => {
    setOpenJob(false);
  };

  const handleExpand = () => {
    dispatch(postedJobs(userDetails._id));
  };

  const handleViewJob = (id) => {
    dispatch(getPostById(id));
    setOpenJob(true);
  };

  const handleDelete = (id) => {
    dispatch(deletePostById(id));
  };

  return (
    <div>
      <JobSectionLayout
        accordionTitle={"Posted Jobs"}
        count={10}
        onExpand={handleExpand}
      >
        {/* {isLoading && <p>Loading...</p>}
        {hasError && <p>Failed to fetch posted jobs</p>} */}

        {jobs.map((i, index) => (
          <JobCardLayout
            actionName={"Remove Job"}
            img={i.img}
            key={index}
            action={() => {
              handleDelete(i._id);
            }}
          >
            <Typography variant="h5" sx={{ textAlign: "left" }}>
              {i.title}
            </Typography>
            <Typography variant="subtitle2" sx={{ textAlign: "left" }}>
              <span>Created at: </span>
              <br></br>
              {i.startingTime &&
                (() => {
                  const startingTime = new Date(i.startingTime);
                  const options = {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    hour12: true,
                  };
                  return `${startingTime.toLocaleTimeString(
                    "en-US",
                    options
                  )}, ${startingTime.toLocaleDateString("en-US")}`;
                })()}
            </Typography>
            <Typography
              variant="subtitle2"
              color="#1976d2"
              sx={{ textAlign: "left" }}
              onClick={() => onclick(i._id)}
            >
              Applicants {applicantData.applicants.length}
            </Typography>
            <Typography
              variant="subtitle1"
              color="#1976d2"
              sx={{ marginBottom: 1 }}
              onClick={() => {
                handleViewJob(i._id);
              }}
            >
              view Job
            </Typography>
          </JobCardLayout>
        ))}
      </JobSectionLayout>

      <ModelLayout open={openJob} onclose={handleCloseJob}>
        <CardContent marginBottom="50px">
          <Typography component="div" variant="h4" align="left">
            {selectedJob.title}
          </Typography>
          <Typography variant="subtitle1" component="h4">
            {userDetails.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            align="left"
          >
            {selectedJob.location}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            align="left"
          >
            {selectedJob.startingTime}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            align="left"
          >
            Payment: {selectedJob.payment}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            marginBottom={-1}
            align="left"
          >
            Starting time:
            {selectedJob.startingTime &&
              (() => {
                const startingTime = new Date(selectedJob.startingTime);
                const options = {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                };
                return `${startingTime.toLocaleTimeString(
                  "en-US",
                  options
                )}, ${startingTime.toLocaleDateString("en-US")}`;
              })()}
          </Typography>
          <Typography
            variant="subtitle1"
            id="description"
            color="text.secondary"
            marginTop={2}
            marginLeft={0}
            marginRight={2}
            align="left"
          >
            {selectedJob.description}
          </Typography>
        </CardContent>
      </ModelLayout>
    </div>
  );
}

export default PostedJobs;
