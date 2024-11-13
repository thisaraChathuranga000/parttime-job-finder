import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Grid from '@mui/material/Grid';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function Post({ post }) {
  const {company,title,description,payment,image,date,location} = post;
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  return (
    <div>
        <Box 
          sx={{fontSize: "14px",borderRadius: "6px", border:"1px solid rgba(0, 0, 0, 0.12)"}}
          marginLeft={2}
          marginBottom={2}
          width={300}
        >
          <Grid container lg={12} justifyContent="center" p={2}>
            <img
              // src={`http://localhost:5000/posts/uploads/${img}`}
              src={image}
              alt={title}
              style={{ width:"250px", height:"200px"  }}
            />
          </Grid>

          <Grid container lg={12} direction="column" justifyContent="left" pl={3} pb={3} pr={3}>
            <Typography component="div" variant="h6">{title}</Typography>
            <Typography variant="subtitle1" component="h4">{company}</Typography>
            <Typography variant="subtitle1" component="h4">{date}</Typography>
            <Typography variant="subtitle1" color="text.secondary" component="h4">Payment : {payment} LKR</Typography>
            <Typography variant="subtitle1" color="#1976d2" component="div" onClick={handleOpen}>see more...</Typography>
            <Button variant="contained" onClick={handleOpen2}>Apply for job</Button>
          </Grid>
        </Box>

        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{backdrop:{timeout: 500}}}
        >
                <Fade in={open} >
                    <Card sx={style}> 
                      <CardContent marginBottom="50px">
                        <Typography component="div" variant="h4" align="left">{title}</Typography>
                        <Typography variant="subtitle1" component="h4">{company}</Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" align="left">{location}</Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" align="left">{date}</Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" marginBottom={-1}align="left">Payment: {payment} LKR</Typography>
                        <Typography variant="subtitle1" id="description" color="text.secondary" marginTop={2} marginLeft={0} marginRight={2} align="left">{description}</Typography>
                      </CardContent>

                      <Stack spacing={2} direction="row" marginLeft={2} marginBottom={3}>
                        <Button variant="contained" onClick={handleOpen2}>Apply for job</Button>
                        <Button variant="outlined">Save job</Button>
                      </Stack>
                    </Card>
                </Fade>
        </Modal> 

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open2}
          onClose={handleClose2}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{backdrop: {timeout: 500}}}
        >
                <Fade in={open2}>
                  <Box sx={style}>
                    <Typography
                      id="transition-modal-description"
                      sx={{ mt: 2, paddingBottom: 2 }}
                    >
                      You have successfully applied for this job
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
    </div>
  );
}

export default Post;
