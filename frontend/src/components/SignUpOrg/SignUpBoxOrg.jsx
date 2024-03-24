import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Link from "@mui/material/Link";
import axios from "axios";

function SignUpBoxOrg() {

  const [step, setStep] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    contact: "",
    address: "",
  });

  const nextStep = () => setStep(prevStep => prevStep + 1);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {setSelectedImage(file)}
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    const formDataToSend = new FormData();
    for (const key in formData) {formDataToSend.append(key, formData[key])}
    if (selectedImage) {formDataToSend.append("file", selectedImage)}

    axios.post("http://localhost:5000/users/org", formDataToSend)
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error))
  };

  return (
    <div>
      <Box sx={{display: "flex", flexDirection: "column", pt: 5, pl: 28, marginBottom: 4,}}>
        <Card variant="outlined" sx={{boxShadow: "0 4px 8px #4A4A4A",border: "1px solid #0069c4", width: "400px",pb: 4,}}>
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
                onChange={handleInputChange}
              />

              <TextField
                label="Create a Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                sx={{pb:1}}
                name="password"
                onChange={handleInputChange}
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
                name="name"
                onChange={handleInputChange}
              />

              <TextField 
                label="Contact" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
                name="contact"
                onChange={handleInputChange}
              />

              <TextField
                label="Address" 
                variant="outlined" 
                fullWidth 
                margin="normal" name="address"
                onChange={handleInputChange}
              />

              <Button type="submit" variant="contained" color="primary" fullWidth onClick={nextStep}>
                Next
              </Button>
            </div>

          ) : (

            <div>
              <Typography variant="subtitle2" gutterBottom sx={{ color: "gray" }}>
                Upload Your Organizations Logo
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

export default SignUpBoxOrg;
