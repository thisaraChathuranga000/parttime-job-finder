import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
//import OutlinedInput from "@mui/material/OutlinedInput";
//import ListItemText from "@mui/material/ListItemText";
//import Checkbox from "@mui/material/Checkbox";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const categoryList = [
//   `Acounting & finance`,
//   `Sales & Marketing`,
//   `IT & Digital media`,
//   `Labour`,
//   `Other`,
// ];

function SignUpBox() {
  const [userData, setuserData] = useState({
    email: "",
    password: "",
    name: "",
    contact: "",
    uni_name: "",
    res_address: "",
    gender: "",
    birthday: "",
    age: "",
  });

  // const [categories, setCategories] = useState({
  //   job_categories: [],
  // });

  const handleOnChange = (event) => {
    setuserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  // const handleCategoryChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setCategories(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(userData);
    axios
      .post("http://localhost:5000/api/auth/register/undergraduates", userData)
      .then((response) => {
        console.log(response.data);
        window.location.href = "/StdProfileInternal";
         
      })
      .catch((error) => {
        console.log(error);
        alert("Unsuccessful",);
      });
       
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          pt: 5,
          pl: 28,
          marginBottom: 4,
        }}
      >
        <Card
          variant="outlined"
          sx={{
            boxShadow: "0 4px 8px #4A4A4A",
            border: "1px solid #0069c4",
            width: "400px",
            pb: 4,
          }}
        >
          <CardContent sx={{ width: "340px", pl: 3.5 }}>
            <div>
              <Typography variant="h4" gutterBottom>
                Sign Up as Undergraduate
              </Typography>
              
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="email"
                  onChange={handleOnChange}
                />
                <TextField
                  label="Create a Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="password"
                  onChange={handleOnChange}
                />

                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="name"
                  onChange={handleOnChange}
                />

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Gender"
                    name="gender"
                    onChange={handleOnChange}
                  >
                    <MenuItem value={'Male'}>Male</MenuItem>
                    <MenuItem value={'female'}>Female</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  id="start-date"
                  helperText="Birthday"
                  type="date"
                  name="birthday"
                  onChange={handleOnChange}
                />

                <TextField
                  label="Age"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="age"
                  onChange={handleOnChange}
                />

                <TextField
                  label="Contact"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="contact"
                  onChange={handleOnChange}
                />

                <TextField
                  label="University Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="uni_name"
                  onChange={handleOnChange}
                />

                <TextField
                  label="Residential Address"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="res_address"
                  onChange={handleOnChange}
                />

                {/* <div>
                  <FormControl variant="outlined" fullWidth margin="normal">
                    <InputLabel id="demo-multiple-checkbox-label">
                      Preffered Job Categories
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={categories}
                      onChange={handleCategoryChange}
                      name="job_categories"
                      input={<OutlinedInput label="preffered Job Categories" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {categoryList.map((category) => (
                        <MenuItem key={category} value={category}>
                          <Checkbox
                            checked={categories.indexOf(category) > -1}
                          />
                          <ListItemText primary={category} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div> */}

                {/* <div>
                  <Typography variant="h6" gutterBottom>
                    Upload Your Image
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    sx={{ color: "gray" }}
                  >
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
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    sx={{ color: "gray" }}
                  >
                    To keep our Community safe, Upload Your Sri lankan
                    University Issued ID image that clearly shows your full name
                    and complete photo
                  </Typography>
                  <TextField
                    fullWidth
                    margin="normal"
                    type="file"
                    inputProps={{ accept: "image/*" }}
                    onChange={handleImageChange2}
                    variant="outlined"
                  />
                </div> */}

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </form>

              <Typography variant="body2" align="center" sx={{ pt: 2 }}>
                Allready Have an account?{" "}
                <Link href="/OrgProfileInternal" color="primary">
                  Log in
                </Link>
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default SignUpBox;
