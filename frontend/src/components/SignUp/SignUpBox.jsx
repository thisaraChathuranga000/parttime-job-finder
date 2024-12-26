import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormBox from "../../layouts/FormBox";
import { createNewUser } from "../../redux/action/authUsersAction";
import { useDispatch, useSelector } from "react-redux";
import { setCreateUser, setClearCreatedUser } from "../../redux/slices/authUserSlice";
import { useNavigate } from "react-router-dom";

function SignUpBox() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const createUser = useSelector((state) => state.authUser.createUser);
  const [step, setStep] = useState(1);
  const [initialPassword, setInitialPassword] = useState("");
  const [password, setPassword] = useState("");

  const nextStep = () => {
    if (password !== initialPassword) {
      alert("Passwords do not match");
    } else {
      dispatch(setCreateUser({ key: "password", value: password }));
      setStep((prevStep) => prevStep + 1);
    }
  };

  const previousStep = () => setStep((prevStep) => prevStep - 1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setCreateUser({ key: name, value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(setCreateUser({ key: "file", value: file }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(createNewUser(createUser)).unwrap();
      alert("Sign-up successful! Please log in to continue.");
      dispatch(setClearCreatedUser());
      navigate("/login");
    } catch (error) {
      console.error("Failed to post job:", error);
    }
  };

  return (
    <div>
      <FormBox maxWidth={320} p={5}>
        {step === 1 ? (
          <div>
            <Typography variant="h4" gutterBottom textAlign={"center"}>
              Sign Up
            </Typography>

            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              name="email"
              value={createUser.email || ""}
              onChange={handleInputChange}
            />

            <TextField
              label="Create a Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              name="initialPassword"
              value={initialPassword}
              onChange={(e) => setInitialPassword(e.target.value)}
            />

            <TextField
              label="Retype password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={nextStep}
            >
              Next
            </Button>

            <Typography variant="body2" align="center" sx={{ pt: 2 }}>
              Already Have an account?{" "}
              <Link href="/login" color="primary">
                Log in
              </Link>
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
              value={createUser.name || ""}
              onChange={handleInputChange}
            />

            <TextField
              label="Contact"
              variant="outlined"
              fullWidth
              margin="normal"
              name="contact"
              value={createUser.contact || ""}
              onChange={handleInputChange}
            />

            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              margin="normal"
              name="address"
              value={createUser.address || ""}
              onChange={handleInputChange}
            />

            <Typography variant="subtitle2" gutterBottom sx={{ color: "gray" }}>
              Upload your Image
            </Typography>

            <TextField
              fullWidth
              margin="normal"
              type="file"
              inputProps={{ accept: "image/*" }}
              name="file"
              variant="outlined"
              onChange={handleFileUpload}
            />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={previousStep}
              sx={{ marginBottom: 1 }}
            >
              Back
            </Button>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        )}
      </FormBox>
    </div>
  );
}

export default SignUpBox;
