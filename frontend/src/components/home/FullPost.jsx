import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

function FullPost({ post }) {
  const {
    title,
    company,
    location,
    payment,
    image,
    startDate,
    endDate,
    startTime,
    endTime,
  } = post;

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  return (
    <div>
      <Card>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
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
              style={{
                width: "400px",
                height: "300px",
                padding: "10px",
              }}
            />
          </CardMedia>
          <div style={{marginRight:"290px", marginTop:"50px"}}>
            <Typography component="div" variant="h4" align="left">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div" align="left">
              {company}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div" align="left">
              {location}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div" align="left">
              Starting date: {startDate}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div" align="left">
              Ending date: {endDate}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div" align="left">
              {startTime} - {endTime}
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
          </div>
        </CardContent>
        <CardContent>
          <Typography
          variant="subtitle1"
            id="description"
             
            color="text.secondary"
            marginTop={-2}
            marginLeft={2}
            marginRight={2}
            align="left"
          >
            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <Stack spacing={2} direction="row" marginLeft={5} marginBottom={3}>
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
      </Card>
    </div>
  );
}

export default FullPost;
