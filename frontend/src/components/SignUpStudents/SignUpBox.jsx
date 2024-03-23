import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

function SignUpBox() {
  const [step, setStep] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
 
  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  return (
    <div>
      <Box sx={{display: "flex",flexDirection: "column",pt: 5,pl: 28,marginBottom: 4,}}>
        <Card variant="outlined" sx={{boxShadow: "0 4px 8px #4A4A4A",border: "1px solid #0069c4",width: "400px",pb: 4,}}>
          <CardContent sx={{ width: "340px", pl: 3.5 }}>
            {step === 1 ? (
              <div>
                <Typography variant="h4" gutterBottom>
                  Sign Up
                </Typography>

                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />

                <TextField
                  label="Create a Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth onClick={nextStep}>
                  Next
                </Button>

                <Typography variant="body2" align="center" sx={{ pt: 2 }}>
                  Allready Have an account?{" "}
                  <Link href="#" color="primary">Log in</Link>
                </Typography>
              </div>
            ) : step === 2 ? (
              <div>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Gender"
                  >
                    <MenuItem value={10}>Male</MenuItem>
                    <MenuItem value={20}>Female</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  label="Age"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />

                <TextField
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  id="start-date"
                  helperText="Birthday"
                  type="date"
                />

                <TextField
                  label="Contact"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />

                <TextField
                  label="University Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />

                <TextField
                  label="Permenent Address"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />

                <TextField
                  label="Residential Address"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />

                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary" 
                  fullWidth sx={{marginTop:1}} 
                  onClick={nextStep}
                >
                  next
                </Button>
              </div>
            ) : (
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

                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Submit
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default SignUpBox;
