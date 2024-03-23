import React from "react";
import "./post.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #0069c4",
  boxShadow: 24,
  p: 4,
};

function Post({ post }) {
  const {
    com_id,
    title,
    description,
    payment,
    image,
    start_date,
    end_date,
    start_time,
    end_time,
    location,
  } = post;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const handleClick = () => {
    window.location.href = "/StdProfileInternal";
  }

  return (
    <div className="feed">
      <Card sx={{ minWidth: 275, padding: "10px", boxShadow: "none" }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            boxShadow: "0 4px 8px #4A4A4A",
            border: "1px solid #0069c4",
          }}
        >
          {/* post image */}

          <CardMedia
            sx={{
              minWidth: 200,
              maxWidth: 200,
              width: "100%",
              height: "auto",
              marginRight: "10px",
            }}
          >
            <img
              src={image}
              alt={title}
              style={{ width: "400px", height: "300px", padding: "10px" }}
            />
          </CardMedia>

          {/* post contents */}

          <CardContent
            sx={{ flex: "1 0 auto", textAlign: "left", marginLeft: "200px" }}
          >
            <Typography component="div" variant="h4">
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {com_id}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {location}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Starting date: {start_date}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Ending date: {end_date}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {start_time} - {end_time}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              marginBottom={-1}
            >
              Payment : {payment} LKR
            </Typography>

            {/* Seemore Button */}

            <CardActions>
              <Button
                size="large"
                sx={{
                  textTransform: "none",
                  textAlign: "left",
                  marginLeft: "-20px",
                  marginBottom: "-10px",
                }}
                onClick={handleOpen}
              >
                see more...
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 500,
                  },
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <Card>
                      <CardContent marginBottom="50px">
                        <Typography component="div" variant="h4" align="left">
                          {title}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                          align="left"
                        >
                          {com_id}
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
                          Starting date: {start_date}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                          align="left"
                        >
                          Ending date: {end_date}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                          align="left"
                        >
                          {start_time} - {end_time}
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
                      </CardContent>
                      <Stack
                        spacing={2}
                        direction="row"
                        marginLeft={2}
                        marginBottom={3}
                      >
                        {/* Apply for job button */}

                        <Button variant="contained" onClick={handleOpen2}>
                          Apply for job
                        </Button>
                        <Modal
                          aria-labelledby="transition-modal-title"
                          aria-describedby="transition-modal-description"
                          open={open2}
                          onClose={handleClose2}
                          closeAfterTransition
                          slots={{ backdrop: Backdrop }}
                          slotProps={{
                            backdrop: {
                              timeout: 500,
                            },
                          }}
                        >
                          <Fade in={open2}>
                            <Box sx={style}>
                              <Typography
                                id="transition-modal-description"
                                sx={{ mt: 2, paddingBottom: 2 }}
                              >
                                You have succesfully applied for this job
                              </Typography>
                              <Button
                                variant="contained"
                                sx={{ borderRadius: 10, textTransform: "none" }}
                                onClick={handleClick}
                              >
                                Go to your profile
                              </Button>
                            </Box>
                          </Fade>
                        </Modal>

                        {/* save job Button */}

                        <Button variant="outlined">Save job</Button>
                      </Stack>
                    </Card>
                  </Box>
                </Fade>
              </Modal>
            </CardActions>

            {/* Apply for job and save job Button */}

            <Stack spacing={2} direction="row">
              {/* Apply for job button */}

              <Button variant="contained" onClick={handleOpen2}>
                Apply for job
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open2}
                onClose={handleClose2}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 500,
                  },
                }}
              >
                <Fade in={open2}>
                  <Box sx={style}>
                    <Typography
                      id="transition-modal-description"
                      sx={{ mt: 2, paddingBottom: 2 }}
                    >
                      You have succesfully applied for this job
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{ borderRadius: 10, textTransform: "none" }}
                    >
                      Go to your profile
                    </Button>
                  </Box>
                </Fade>
              </Modal>

              {/* save job Button */}

              <Button variant="outlined">Save job</Button>
            </Stack>
          </CardContent>
        </Card>
      </Card>
    </div>
  );
}

export default Post;
