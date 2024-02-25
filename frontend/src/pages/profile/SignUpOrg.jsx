import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Footer from "../../components/SignUpOrg/Footer";
import SignUpBoxOrg from "../../components/SignUpOrg/SignUpBoxOrg";
 

function SignUpOrg() {
  return (
    <div>
      <Card
        sx={{
          display: "flex",
          backgroundImage: "url('assets/BG-15.png')",
          boxShadow: "none",
        }}
      >
        <SignUpBoxOrg />

        <CardMedia
          component="img"
          sx={{ width: "500px", pl: "5%" }}
          image="assets/signup.png"
          alt="Sign Up"
        />
      </Card>

      <Footer />
    </div>
  );
}

export default SignUpOrg;
