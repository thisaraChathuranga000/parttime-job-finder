import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SignUpBox() {
  const [step, setStep] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const nextStep = () => setStep(prevStep => prevStep + 1);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Signing Up");
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {setSelectedImage(file)}
  };

  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column", pt: 5, pl: 28, marginBottom: 4 }}>
        <Card variant="outlined" sx={{ boxShadow: "0 4px 8px #4A4A4A", border: "1px solid #0069c4", width: "400px", pb: 4 }}>
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
                  name="email"
                />

                <TextField
                  label="Create a Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="password"
                />

                <TextField
                  label="Retype password"
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
                  <Link href="/login" color="primary">Log in</Link>
                </Typography>
              </div>
            ) : (
              <div>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="name"
                />

                <TextField
                  label="Contact"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="contact"
                />

                <TextField
                  label="Address"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="address"
                />

                <Typography variant="subtitle2" gutterBottom sx={{ color: "gray" }}>
                  Upload your Image
                </Typography>

                <TextField
                  fullWidth
                  margin="normal"
                  type="file"
                  inputProps={{ accept: "image/*" }}
                  onChange={handleImageChange}
                  name="file"
                  variant="outlined"
                />

              <Button type="submit" variant="contained" color="primary" fullWidth onClick={handleSubmit}>
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

