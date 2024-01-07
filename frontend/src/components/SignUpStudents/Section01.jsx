import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Section01({ onNextClick }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement your login logic
    console.log("Username:", username);
    console.log("Password:", password);
    onNextClick();
  };
  return (
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
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          label="Create a Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          next
        </Button>
      </form>
      <Typography variant="body2" align="center" sx={{ pt: 2 }}>
        Allready Have an account?{" "}
        <Link href="#" color="primary">
          Log in
        </Link>
      </Typography>
    </div>
  );
}

export default Section01;
