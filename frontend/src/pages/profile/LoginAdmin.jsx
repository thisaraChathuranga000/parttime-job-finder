import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

const UserName = "Admin01";
const Password = "123456";

function LoginAdmin() {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e) => {
        e.preventDefault();

        if(userName !== UserName || password !== Password ){
            alert("Incorrect username or Password")
        }

        else{
            window.location.href = "/admin";
        }
    }
  return (
    <div>
        <form onSubmit={handleChange}>
        <Card
          sx={{
            boxShadow: "0 4px 8px #4A4A4A",
            border: "1px solid #0069c4",
            width: "50%",
            marginLeft: "25%",
            marginTop: "2%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography component="div" variant="h4" align="center" pt="5%">
            Admin Login
          </Typography>
          <TextField
            id="outlined-password-input"
            label="UserName"
            type="text"
            autoComplete="current-password"
            sx={{ width: "60%", marginLeft: "20%" }}
            margin="normal"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            sx={{ width: "60%", marginLeft: "20%" }}
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            sx={{
              width: "60%",
              marginLeft: "20%",
              marginBottom: "10%",
              marginTop: "2%",
            }}
            type="submit"
          >
            login
          </Button>
        </Card>
      </form>
    </div>
  )
}

export default LoginAdmin