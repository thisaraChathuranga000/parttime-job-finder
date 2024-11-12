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
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import axios from "axios";

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
  const [selectedOption, setSelectedOption] = useState("");
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    userId: "65ffd21e58661f9901764f91",
    category: "",
    title: "",
    description: "",
    location: "",
    start_data:"",
    end_data:"",
    start_time:"",
    end_time:"",
    payment:"",
    city:""
  });

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOpen = (event) => {
    event.preventDefault();
    setOpen(true);
    console.log(formData);
    const formDataToSend = new FormData();
    for (const key in formData) {formDataToSend.append(key, formData[key])}
    if (selectedImage) {formDataToSend.append("file", selectedImage)}

    axios.post("http://localhost:5000/posts", formDataToSend)
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error))
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

          <Card sx={{boxShadow: "0 4px 8px #4A4A4A",border: "1px solid #0069c4",}}>
            <CardContent sx={{ flex: "1 0 auto", textAlign: "left", margin: "2%" }}>
              <Typography component="div" variant="h4" align="left">Post a Job</Typography>

              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Gender"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <MenuItem value="Acounting & finance">Acounting & finance</MenuItem>
                    <MenuItem value="Sales & Marketing">Sales & Marketing</MenuItem>
                    <MenuItem value="IT & Digital media">IT & Digital media</MenuItem>
                    <MenuItem value="Labour">Labour</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>

              <TextField
                label="Title"
                variant="outlined"
                fullWidth
                margin="normal"
                sx={{  marginBottom: "20px" }}
                name="title"
                onChange={handleInputChange}
              />

             
              <TextField
                id="outlined-multiline-static"
                label="Discription"
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
                onChange={handleImageChange}
                variant="outlined"
                sx={{  marginBottom: "20px" }}
                helperText="Upload a suitable image here"
                required
                fullWidth
                name="file"
              />

              <TextField
                label="Location"
                variant="outlined"
                fullWidth
                margin="normal"
                sx={{  marginBottom: "20px" }}
                name="location"
                onChange={handleInputChange}
              />

              <TextField
                label="City"
                variant="outlined"
                fullWidth
                margin="normal"
                sx={{  marginBottom: "20px" }}
                name="city"
                onChange={handleInputChange}
              />

            
               <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" fullWidth spacing={2}>
                <Grid lg={3} md={6} xs={12}>
                  <TextField
                    id="start-date"
                    helperText="Starting Date"
                    type="date"
                    onChange={(e) => setFormData({ ...formData, start_data: e.target.value })}
                    fullWidth
                    required
                    value={formData.start_data}
                  />
                </Grid>
                 
                <Grid lg={3} md={6} xs={12}>
                  <TextField
                    id="end-date"
                    helperText="End Date"
                    type="date"
                    onChange={(e) => setFormData({ ...formData, end_data: e.target.value })}
                    fullWidth
                    required
                    value={formData.end_data}
                  />
                </Grid>
             
                <Grid lg={3} md={6} xs={12}>
                  <TextField
                    id="start-time"
                    helperText="Starting Time"
                    type="time"
                    onChange={(e) => setFormData({ ...formData, start_time: e.target.value })}
                    fullWidth
                    required
                    value={formData.start_time}
                  />
                </Grid>
               
                <Grid lg={3} md={6} xs={12}>
                  <TextField
                    id="end-time"
                    helperText="End Time"
                    type="time"
                    onChange={(e) => setFormData({ ...formData, end_time: e.target.value })}
                    fullWidth
                    required
                    value={formData.end_time}
                  />
                </Grid>
              </Grid>
               
              <TextField
                label="Payment"
                variant="outlined"
                fullWidth
                margin="normal"
                sx={{  marginBottom: "20px" }}
                name="payment"
                onChange={handleInputChange}
              />

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
     
    </div>
  );
}

export default PostJob;
