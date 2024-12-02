import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import FormBox from "../../layouts/FormBox";
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../services/usersService";
import { setEmail, setPassword } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../constants";
import { useEffect } from "react";

function LoginBox() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);
  const accessToken = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    if (accessToken) {
      navigate(APP_ROUTES.HOME);
    }
  }, [accessToken, navigate]);

  const handleLogin =   (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div>
      <FormBox maxWidth={320} p={5}>
        <Typography variant="h4" gutterBottom textAlign={"center"}>
          LogIn
        </Typography>

        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            type="email"
            placeholder={"email"}
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
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
            onChange={(e) => dispatch(setPassword(e.target.value))}
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
