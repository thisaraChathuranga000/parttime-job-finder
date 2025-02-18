import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ModelLayout from "../../../layouts/ModelLayout";
import AllApplicant from "../../Profile/Internal/AllApplicant";
import { ApplicantData } from "../../../dummyApplicantData";

function Post({ post }) {
  const { company, title, description, payment, img, date, location, userId, startingTime } = post;
  const [openApplyPost, setOpenApplyPost] = useState(false);
  const [openSeeMore, setOpenSeeMore] = useState(false);
  const [isVisibleApplicants, setIsVisibleApplicants] = useState(false);

  const handleCloseApplyPost = () => setOpenApplyPost(false);
  const handleOpenSeeMore = () => setOpenSeeMore(true);
  const handleCloseSeeMore = () => setOpenSeeMore(false);

  const handleOpenApplyPost = () => {
    setOpenSeeMore(false);
    setOpenApplyPost(true);
  };

  const handleApplicants = () => {
    setIsVisibleApplicants(true);
  };

  const closeApplicants = () => {
    setIsVisibleApplicants(false);
  };

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
        width={300}
      >
        <Grid container lg={12} justifyContent="center" p={2}>
          <img
            // src={`http://localhost:5000/posts/uploads/${img}`}
            src={img}
            alt={title}
            style={{ width: "250px", height: "200px" }}
          />
        </Grid>

        <Grid
          container
          lg={12}
          direction="column"
          justifyContent="left"
          pl={3}
          pb={3}
          pr={3}
        >
          <Typography component="div" variant="h6">
            {title}
          </Typography>
          <Typography variant="subtitle1" component="h4">
            {userId.name}
          </Typography>
          <Typography variant="subtitle1" component="h4">
            {startingTime}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="h4">
            Payment : {payment} LKR
          </Typography>
          <Typography
            variant="subtitle1"
            color="#1976d2"
            component="div"
            onClick={handleOpenSeeMore}
          >
            see more...
          </Typography>
          <Button variant="contained" onClick={handleOpenApplyPost}>
            Apply for job
          </Button>
        </Grid>
      </Box>

      <ModelLayout open={openSeeMore} onclose={handleCloseSeeMore}>
        <CardContent marginBottom="50px">
          <Typography component="div" variant="h4" align="left">
            {title}
          </Typography>
          <Typography variant="subtitle1" component="h4">
            {userId.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            align="left"
          >
            {location}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            align="left"
          >
            {startingTime}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            marginBottom={-1}
            align="left"
          >
            Payment: {payment} LKR
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
            {description}
          </Typography>

          <Typography
            variant="subtitle2"
            color="#1976d2"
            sx={{ textAlign: "left", marginBottom: 2 }}
            onClick={handleApplicants}
          >
            Applicants 10
          </Typography>
        </CardContent>

        <Stack spacing={2} direction="row" marginLeft={2} marginBottom={3}>
          <Button variant="contained" onClick={handleOpenApplyPost}>
            Apply for job
          </Button>
        </Stack>
      </ModelLayout>

      <ModelLayout open={isVisibleApplicants} onclose={closeApplicants}>
        {ApplicantData.map((applicant) => (
          <AllApplicant key={applicant.id} applicant={applicant} />
        ))}
      </ModelLayout>

      <ModelLayout open={openApplyPost} onclose={handleCloseApplyPost}>
        <Typography sx={{ mt: 2, paddingBottom: 2 }}>
          You have successfully applied for this job
        </Typography>

        <Button
          variant="contained"
          sx={{ borderRadius: 10, textTransform: "none" }}
        >
          Go to your profile
        </Button>
      </ModelLayout>
    </div>
  );
}

export default Post;
