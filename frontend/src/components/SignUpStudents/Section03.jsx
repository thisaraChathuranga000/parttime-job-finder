import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const categoryList = [
  `Acounting & finance`,
  `Sales & Marketing`,
  `IT & Digital media`,
  `Labour`,
  `Other`,
];

function Section03() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [categories, setCategories] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCategories(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleImageChange2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage2(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Uploading image:", selectedImage);
    console.log("Uploading image university:", selectedImage2);
    console.log("categoris:", categories);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel id="demo-multiple-checkbox-label">Preffered Job Categories</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={categories}
              onChange={handleChange}
              input={<OutlinedInput label="preffered Job Categories" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {categoryList.map((category) => (
                <MenuItem key={category} value={category}>
                  <Checkbox checked={categories.indexOf(category) > -1} />
                  <ListItemText primary={category} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div>
          <Typography variant="h6" gutterBottom>
            Upload Your Image
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ color: "gray" }}>
            Upload your Clear and Recent photo
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

        <div sx={{ pt: 2 }}>
          <Typography variant="h6" gutterBottom>
            University Issued ID
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ color: "gray" }}>
            To keep our Community safe, Upload Your Sri lankan University Issued
            ID image that clearly shows your full name and complete photo
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            type="file"
            inputProps={{ accept: "image/*" }}
            onChange={handleImageChange2}
            variant="outlined"
          />
        </div>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Section03;
