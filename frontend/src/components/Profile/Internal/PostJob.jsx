import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import ModelLayout from "../../../layouts/ModelLayout";

function PostJob(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    userId: "65ffd21e58661f9901764f91",
    category: "",
    title: "",
    description: "",
    location: "",
    start_data: "",
    end_data: "",
    start_time: "",
    end_time: "",
    payment: "",
    city: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOpen = (event) => {
    event.preventDefault();
    setOpen(true);
    console.log(formData);
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    if (selectedImage) {
      formDataToSend.append("file", selectedImage);
    }

    axios
      .post("http://localhost:5000/posts", formDataToSend)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  const handleClose = () => setOpen(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
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
          onChange={handleImageChange}
          variant="outlined"
          sx={{ marginBottom: "20px" }}
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
          sx={{ marginBottom: "20px" }}
          name="location"
          onChange={handleInputChange}
        />

        <TextField
          label="City"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ marginBottom: "20px" }}
          name="city"
          onChange={handleInputChange}
        />

        <TextField
          id="start-date"
          helperText="Starting Date and time"
          type="date"
          onChange={(e) =>
            setFormData({ ...formData, start_data: e.target.value })
          }
          fullWidth
          required
          value={formData.start_data}
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
            onClick={handleOpen}
            type="submit"
          >
            Post Job
          </Button>

          <ModelLayout open={open} onclose={handleClose}>
            <Typography sx={{ mt: 2, paddingBottom: 2 }}>
              You have successfully posted the job
            </Typography>

            <Button
              variant="contained"
              sx={{ borderRadius: 10, textTransform: "none" }}
            >
              See your Post
            </Button>
          </ModelLayout>

          <Button variant="outlined" onClick={props.onDiscardJob}>
            Discard job
          </Button>
        </Stack>
      </Box>
    </div>
  );
}

export default PostJob;
