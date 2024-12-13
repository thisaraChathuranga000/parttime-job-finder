import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Box from "@mui/material/Box";
import ModelLayout from "../../../layouts/ModelLayout";
import { useDispatch, useSelector } from "react-redux";
import { setJobPost } from "../../../redux/slices/jobPostsSlice";
import { postJob } from "../../../redux/action/jobPostsAction";
import CardContent from "@mui/material/CardContent";
import {
  setPostedJobClear,
  setJobPostClear,
} from "../../../redux/slices/jobPostsSlice";

function PostJob(props) {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.authUser.userDetails);
  const jobPost = useSelector((state) => state.jobPosts.jobPost);
  const postedJob = useSelector((state) => state.jobPosts.postedJob);
  const [open, setOpen] = useState(false);
  const [openPostedJob, setOpenPostedJob] = useState(false);

  const handleSeePost = () => {
    setOpenPostedJob(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setJobPost({ key: name, value }));
    dispatch(setJobPost({ key: "userId", value: userDetails._id }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(setJobPost({ key: "file", value: file }));
    }
  };

  const handlePostJob = async (event) => {
    event.preventDefault();
    try {
      await dispatch(postJob(jobPost)).unwrap();
      setOpen(true);
    } catch (error) {
      console.error("Failed to post job:", error);
    }
  };

  const handleClose = () => setOpen(false);
  const handleClosePostedJob = () => {
    setOpenPostedJob(false);
    dispatch(setJobPostClear());
    dispatch(setPostedJobClear());
    setOpen(false);
    props.onDiscardJob();
    window.location.reload();
  };

  return (
    <div>
      <Box
        sx={{
          boxShadow: "0 4px 8px #4A4A4A",
          border: "1px solid #0069c4",
          marginLeft: 2,
          borderRadius: "6px",
        }}
        p={3}
        marginBottom={2}
        xs={{ sx: { marginLeft: 0 } }}
      >
        <Typography component="div" variant="h4" align="left" pb={2}>
          Post a Job
        </Typography>

        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ marginBottom: "20px" }}
          name="title"
          onChange={handleInputChange}
        />

        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          sx={{ marginBottom: "20px" }}
          fullWidth
          required
          name="description"
          onChange={handleInputChange}
        />

        <TextField
          type="file"
          inputProps={{ accept: "image/*" }}
          variant="outlined"
          sx={{ marginBottom: "20px" }}
          helperText="Upload a suitable image here"
          required
          fullWidth
          name="file"
          onChange={handleFileUpload}
        />

        <TextField
          label="Location"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ marginBottom: "20px" }}
          name="location"
          onChange={handleInputChange}
        />

        <TextField
          id="start-date"
          helperText="Starting Date and time"
          type="datetime-local"
          fullWidth
          name="startingTime"
          onChange={handleInputChange}
        />

        <TextField
          label="Payment"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ marginBottom: "20px" }}
          name="payment"
          onChange={handleInputChange}
        />

        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            disableElevation
            onClick={handlePostJob}
            type="submit"
          >
            Post Job
          </Button>

          <Button variant="outlined" onClick={props.onDiscardJob}>
            Discard job
          </Button>
        </Stack>

        <ModelLayout open={open} onclose={handleClose}>
          <Typography sx={{ mt: 2, paddingBottom: 2 }}>
            You have successfully posted the job
          </Typography>

          <Button
            variant="contained"
            sx={{ borderRadius: 10, textTransform: "none" }}
            onClick={handleSeePost}
          >
            See your Post
          </Button>
        </ModelLayout>

        <ModelLayout open={openPostedJob} onclose={handleClosePostedJob}>
          <CardContent marginBottom="50px">
            <Typography component="div" variant="h4" align="left">
              {postedJob.title}
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
              {postedJob.location}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              align="left"
            >
              {postedJob.startingTime}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              marginBottom={2}
              align="left"
            >
              Payment: {postedJob.payment}
            </Typography>
            <img
              src={postedJob.img}
              alt=""
              style={{ width: "250px", height: "200px" }}
            />
            <Typography
              variant="subtitle1"
              id="description"
              color="text.secondary"
              marginTop={2}
              marginLeft={0}
              marginRight={2}
              align="left"
            >
              {postedJob.description}
            </Typography>
          </CardContent>
        </ModelLayout>
      </Box>
    </div>
  );
}

export default PostJob;
