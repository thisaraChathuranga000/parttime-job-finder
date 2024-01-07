import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link as Links } from "react-router-dom";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function LoginBox() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [userType, setUserType] = useState("Undergraduate");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const handleChange = async (e) => {
    e.preventDefault();

    const formData = userType === "Undergraduate"
      ? { email, password }
      : { com_email: email, com_password: password };

    const endpoint = userType === "Undergraduate"
      ? "http://localhost:5000/api/auth/login/undergraduate"
      : "http://localhost:5000/api/auth/login/company";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        // Do something with the data, like storing tokens or user info
        console.log("Login successful:", data);
        if (userType === "Undergraduate") {
          window.location.href = "/StdProfileInternal";
        } else {
          window.location.href = "/OrgProfileInternal";
        }
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          pt: "15%",
          pl: "30%",
          pb: "2%",
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
            <Typography variant="h4" gutterBottom>
              Log In
            </Typography>

            <form onSubmit={handleChange}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Log as</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Log as"
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <MenuItem value={"Undergraduate"}>UnderGraduate</MenuItem>
                  <MenuItem value={"Employee"}>Employee</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Email"
                type="email"
                placeholder={userType === "Undergraduate" ? "email" : "com_email"}
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                label="Password"
                type="password"
                placeholder={userType === "Undergraduate" ? "password" : "com_password"}
                fullWidth
                margin="normal"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                Login
              </Button>
            </form>

            <Typography
              variant="body2"
              align="center"
              style={{ marginTop: 10 }}
            >
              <Link href="#" color="inherit">
                Forgot Password?
              </Link>
            </Typography>
            <Typography variant="body2" align="center">
              Don't have an account?{" "}
              <Link href="#" color="primary" onClick={handleMenu}>
                Sign Up
              </Link>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  component={Links}
                  to="/SignUpStudent"
                  onClick={handleClose}
                >
                  UnderGraduate
                </MenuItem>
                <MenuItem
                  component={Links}
                  to="/SignUpOrg"
                  onClick={handleClose}
                >
                  Employer
                </MenuItem>
              </Menu>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default LoginBox;
