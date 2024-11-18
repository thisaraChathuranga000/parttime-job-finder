import React from "react";
import SignUpBox from "../../components/SignUp/SignUpBox";
import {Grid} from '@mui/material';
import AuthLayout from "../../layouts/AuthLayout";
import { IMAGE_PATHS } from "../../constants";

function SignUp() {
  return (
    <AuthLayout>
      <Grid container lg={6} md={4} sm={12} xs={12} justifyContent="center" alignItems="center"  >
        <SignUpBox />
      </Grid>

      <Grid container lg={6} md={4} justifyContent="center" class="displayNone">
        <img src={IMAGE_PATHS.SIGNUP} alt="login"/>
      </Grid>      
    </AuthLayout>
  );
}

export default SignUp;
