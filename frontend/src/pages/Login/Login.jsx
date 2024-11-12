import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import LoginBox from "../../components/Login/LoginBox";
import Footer from "../../components/Login/Footer";

function Login() {
  return (
    <div>
      <Card
        sx={{
          display: "flex",
          backgroundImage: "url('assets/BG-15.png')",
          boxShadow: "none",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: "40%", pl: 20 }}
          image="assets/Login.png"
          alt="Login"
        />
        <LoginBox />
      </Card>
      <Footer />
    </div>
  );
}

export default Login;
