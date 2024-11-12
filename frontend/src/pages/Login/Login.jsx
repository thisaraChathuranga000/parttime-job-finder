import * as React from "react";
import LoginBox from "../../components/Login/LoginBox";
import Footer from "../../components/Login/Footer";
import {Grid} from '@mui/material';

function Login() {
  return (
    <div>
      <Grid container spacing={0} sx={{
          backgroundImage: "url('assets/BG-15.png')",
          boxShadow: "none",
          marginTop:0
        }}
      >
        <Grid lg={6} pl={10}>
            <img src="assets/Login.png" alt="login" />
        </Grid>

        <Grid lg={6}>
          <LoginBox />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Login;
