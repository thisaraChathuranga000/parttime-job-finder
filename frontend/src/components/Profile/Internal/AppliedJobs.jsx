import React from "react";
import Typography from "@mui/material/Typography";
import JobSectionLayout from "../../../layouts/JobSectionLayout";
import JobCardLayout from "../../../layouts/JobCardLayout";
import { useSelector, useDispatch } from "react-redux";
import { appliedJobs } from "../../../redux/action/appliedJobsAction";
import { deleteApplicants } from "../../../redux/action/applicantsAction";

function AppliedJobs() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.appliedJobs.appliedJobs);
  const userDetails = useSelector((state) => state.authUser.userDetails);
  const isLoading = useSelector((state) => state.appliedJobs.isLoading);
  const hasError = useSelector((state) => state.appliedJobs.hasError);

  const handleExpand = () => {
    dispatch(appliedJobs(userDetails._id));
  };

  const handleDelete = (userId, postId) => {
    if (!userId || !postId) {
      console.error("Invalid userId or postId provided");
      return;
    }
    dispatch(deleteApplicants({ userId, postId }));
  };

  return (
    <JobSectionLayout
      accordionTitle={"Applied Jobs"}
      count={11}
      onExpand={handleExpand}
    >
      {/* {isLoading && <p>Loading...</p>}
      {hasError && <p>Failed to fetch applied jobs</p>} */}
      {jobs.map((i, index) => (
        <JobCardLayout
          actionName={"Remove Application"}
          img={i.img}
          key={index}
          action={() => {
            handleDelete(
              i.applicants.find((a) => userDetails._id === a.userId)?.userId,
              i._id
            );
          }}
        >
          <Typography variant="h5" sx={{ textAlign: "left" }}>
            {i.title}
          </Typography>
          <Typography variant="subtitle2" sx={{ textAlign: "left" }}>
            <span>Applied at: </span>
            <br></br>
            {i.applicants.find((a) => userDetails._id === a.userId)
              ?.createdAt &&
              (() => {
                const createdAt = new Date(
                  i.applicants.find(
                    (a) => userDetails._id === a.userId
                  ).createdAt
                );
                const options = {
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  hour12: true,
                };
                return `${createdAt.toLocaleTimeString(
                  "en-US",
                  options
                )}, ${createdAt.toLocaleDateString("en-US")}`;
              })()}
          </Typography>

          {i.applicants.find((a) => userDetails._id === a.userId)?.selected ? (
            <Typography
              variant="subtitle2"
              sx={{ textAlign: "left", color: "green", marginBottom: 1 }}
            >
              Selected
            </Typography>
          ) : (
            <Typography
              variant="subtitle2"
              sx={{ textAlign: "left", color: "red", marginBottom: 1 }}
            >
              Pending
            </Typography>
          )}
        </JobCardLayout>
      ))}
    </JobSectionLayout>
  );
}

export default AppliedJobs;
