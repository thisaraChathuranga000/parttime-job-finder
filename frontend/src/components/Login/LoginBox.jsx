import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import FormBox from "../../layouts/FormBox";

function LoginBox() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = async (e) => {
    e.preventDefault();
    console.log("Login");
  };

  return (
    <div>
      <FormBox maxWidth={320} p={5}>
        <Typography variant="h4" gutterBottom textAlign={"center"}>
          LogIn
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
            sx={{ marginTop: 1 }}
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
          >
            Login
          </Button>
        </form>

        <Typography variant="body2" align="center" style={{ marginTop: 10 }}>
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
      </FormBox>
    </div>
  );
}

export default LoginBox;
