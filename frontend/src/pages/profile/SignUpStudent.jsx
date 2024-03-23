import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import SignUpBox from "../../components/SignUpStudents/SignUpBox";
import Footer from "../../components/SignUpStudents/Footer";

function SignUpStudent() {
  return (
    <div>
      <div>
        <Card
          sx={{
            display: "flex",
            backgroundImage: "url('assets/BG-15.png')",
            boxShadow: "none",
          }}
        >
          <SignUpBox />
          <CardMedia
            component="img"
            sx={{ width: "500px", pl: "5%" }}
            image="assets/signup.png"
            alt="Sign Up"
          />
        </Card>
        <Footer/>
      </div>
    </div>
  );
}

export default SignUpStudent;
