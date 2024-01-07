import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function OrgSection01({onNextClick}) {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Sign Up as a Employer
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
        sx={{pb:1}}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth onClick={onNextClick}>
        next
      </Button>
    </div>
  );
}

export default OrgSection01;
