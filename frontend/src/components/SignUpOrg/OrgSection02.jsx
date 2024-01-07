import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";

function OrgSection02() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
    console.log("Uploading image:", selectedImage);
  };
  return (
    <div>
      <TextField label="Name" variant="outlined" fullWidth margin="normal" />
      <TextField label="Contact" variant="outlined" fullWidth margin="normal" />
      <TextField label="Address" variant="outlined" fullWidth margin="normal" />
      <div>
        <Typography variant="h6" gutterBottom>
          Upload Your Organizations Logo
        </Typography>
        <Typography variant="subtitle2" gutterBottom sx={{ color: "gray" }}>
          Upload Your Organizations Logo
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          type="file"
          inputProps={{ accept: "image/*" }}
          onChange={handleImageChange}
          variant="outlined"
        />
      </div>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </div>
  );
}

export default OrgSection02;
