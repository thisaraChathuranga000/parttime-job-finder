import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeselectIcon from "@mui/icons-material/Deselect";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectApplicants, deleteApplicants } from "../../../redux/action/applicantsAction";

function AllApplicant({ applicant }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedJob = useSelector((state) => state.jobPosts.selectedJob);

  const handleClick = () => {
    navigate("/external-profile");
  };

  const handleSelectApplicant = (userId,postId) => {
    const body = {postId:postId,userId:userId};
    dispatch(selectApplicants({body}))
  }

  const handleDeleteApplicant = (userId, postId) => {
    if (!userId || !postId) {
      console.error("Invalid userId or postId provided");
      return;
    }
    dispatch(deleteApplicants({ userId, postId }));
  };

  const { userName, userImage, selected, userId } = applicant;
  return (
    <div>
      <Box
        sx={{
          fontSize: "14px",
          borderRadius: "6px",
          border: "1px solid rgba(0, 0, 0, 0.12)",
        }}
        marginLeft={2}
        marginBottom={2}
        width={600}
      >
        <Grid container>
          <Grid
            container
            lg={4}
            justifyContent="center"
            alignItems="center"
            p={2}
          >
            <Avatar
              sx={{ width: 70, height: 70 }}
              alt="applicant"
              src={userImage}
            />
          </Grid>

          <Grid
            container
            lg={4}
            direction="column"
            justifyContent="center"
            alignItems="left"
          >
            <Typography component="div">{userName}</Typography>
            <Typography color="#1976d2" onClick={handleClick}>
              View Profile
            </Typography>
          </Grid>

          <Grid
            container
            lg={4}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Stack direction="row">
              <Tooltip title="SelectApplicant">
                <IconButton
                  sx={{
                    color: "primary.main",
                    "&:hover": { color: "success.main" },
                  }}
                >
                  <CheckCircleIcon onClick={() => handleSelectApplicant(userId, selectedJob._id)} />
                </IconButton>
              </Tooltip>

              <Tooltip title="Delete">
                <IconButton
                  sx={{
                    color: "primary.main",
                    "&:hover": { color: "error.main" },
                  }}
                >
                  <DeselectIcon onClick={() => handleDeleteApplicant(userId, selectedJob._id)} />
                </IconButton>
              </Tooltip>

              {selected ? (
                <p style={{ color: "green" }}>Selected</p>
              ) : (
                <p>Not Selected</p>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default AllApplicant;
