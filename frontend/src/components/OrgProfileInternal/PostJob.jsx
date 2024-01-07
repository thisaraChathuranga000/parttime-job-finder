import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Grid from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";

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

const categories = [
  `Acounting & finance`,
  `Sales & Marketing`,
  `IT & Digital media`,
  `Labour`,
  `Other`,
];

function PostJob(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [open, setOpen] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
    console.log("Uploading image:", selectedImage);
  };

  const handleClose = () => setOpen(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  return (
    <div style={{ width: "97%", marginBottom: "30px", marginTop: "-25" }}>

      <form> 
     
        <Card
          sx={{
            boxShadow: "0 4px 8px #4A4A4A",
            border: "1px solid #0069c4",
          }}
        >
          <CardContent
            sx={{ flex: "1 0 auto", textAlign: "left", margin: "2%" }}
          >
            <Typography component="div" variant="h4" align="left">
              Post a Job
            </Typography>

            <div name="category">
              <TextField
                id="outlined-select-currency"
                select
                label="Select a category"
                sx={{ width: "45%", marginBottom: "20px", marginTop: "20px" }}
                value={selectedOption}
                onChange={handleOptionChange}
                required
              >
                {categories.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <div name="Title">
              <FormControl sx={{ width: "98%", marginBottom: "20px" }}>
                <InputLabel>Title</InputLabel>
                <OutlinedInput id="outlined-adornment-amount" label="Title" />
              </FormControl>
            </div>

            <div name="Discription">
              <TextField
                id="outlined-multiline-static"
                label="Discription"
                multiline
                rows={4}
                sx={{ width: "98%", marginBottom: "20px" }}
                required
              />
            </div>

            <div name="Image">
              <TextField
                type="file"
                inputProps={{ accept: "image/*" }}
                onChange={handleImageChange}
                variant="outlined"
                sx={{ width: "98%", marginBottom: "20px" }}
                helperText="Upload a suitable image here"
                required
              />
            </div>

            <div name="Loacation">
              <FormControl sx={{ width: "98%", marginBottom: "20px" }}>
                <InputLabel>Location</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  label="location"
                />
              </FormControl>
            </div>

            <div name="Date and time">
              <Stack
                spacing={2}
                direction="row"
                marginLeft={-2}
                marginBottom={"20px"}
              >
                <Grid>
                  <TextField
                    id="start-date"
                    helperText="Starting Date"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    sx={{ width: "90%" }}
                    required
                  />
                </Grid>
                <Grid>
                  <TextField
                    id="end-date"
                    helperText="End Date"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    sx={{ width: "90%" }}
                    required
                  />
                </Grid>
                <Grid>
                  <TextField
                    id="start-time"
                    helperText="Starting Time"
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    sx={{ width: "90%" }}
                    required
                  />
                </Grid>
                <Grid>
                  <TextField
                    id="end-time"
                    helperText="End Time"
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    sx={{ width: "90%" }}
                    required
                  />
                </Grid>
              </Stack>
            </div>

            <div name="Payment">
              <FormControl sx={{ width: "45%", marginBottom: "20px" }}>
                <InputLabel>Payment</InputLabel>
                <OutlinedInput id="outlined-adornment-amount" label="Payment" />
              </FormControl>
            </div>

            <Stack spacing={2} direction="row">
              <Button variant="contained" disableElevation onClick={handleOpen} type="submit">
                Post Job
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
                    <Typography
                      id="transition-modal-description"
                      sx={{ mt: 2, paddingBottom: 2 }}
                    >
                      You have succesfully posted the job
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{ borderRadius: 10, textTransform: "none" }}
                    >
                      See your Post
                    </Button>
                  </Box>
                </Fade>
              </Modal>
              <Button variant="outlined" onClick={props.onDiscardJob}>
                Discard job
              </Button>
            </Stack>
          </CardContent>
        </Card>
        </form>
     
    </div>
  );
}

export default PostJob;
