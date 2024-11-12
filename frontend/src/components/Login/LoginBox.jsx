import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

function LoginBox() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = async (e) => {
    e.preventDefault();
    console.log("Login")
  };

  return (
    <div>
      <Box
        sx={{
          flexDirection: "column",
          pt: "10%",
          pl: "15%",
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
              <TextField
                label="Email"
                type="email"
                placeholder={"email"}
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                label="Password"
                type="password"
                placeholder={"password"}
                fullWidth
                margin="normal"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                sx={{marginTop:1}}
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
              <Link href="/sign-up" color="primary">
                Sign Up
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default LoginBox;
