import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import axios from "axios";

function SignUpBoxOrg() {

  const [userData, setuserData] = useState({
    com_email: "",
    com_password: "",
    com_name: "",
    com_address: "",
  });

  //handle onChange inputes

  const handleOnChange = (event) => {
    setuserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(userData);
    axios
      .post("http://localhost:5000/api/auth/register/employee", userData)
      .then((response) => {
        console.log(response.data);
        window.location.href = "/OrgProfileInternal";
        alert("successfully  created an account",);
      })
      .catch((error) => {
        console.log(error);
        alert("Unsuccessful",);
      });
  };

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
            <form onSubmit={handleSubmit}>
              <Typography variant="h4" gutterBottom>
                Sign Up as a Employer
              </Typography>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={handleOnChange}
                name="com_email"
              />
              <TextField
                label="Create a Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                sx={{ pb: 1 }}
                onChange={handleOnChange}
                name="com_password"
              />

              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                name="com_name"
              />
              {/* <TextField
                label="Contact"
                variant="outlined"
                fullWidth
                margin="normal"
              /> */}
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                margin="normal"
                name="com_address"
              />

              <Typography variant="h6" gutterBottom>
                Upload Your Organizations Logo
              </Typography>
              <Typography
                variant="subtitle2"
                gutterBottom
                sx={{ color: "gray" }}
              >
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

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default SignUpBoxOrg;
