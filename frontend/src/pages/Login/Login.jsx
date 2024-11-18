import * as React from "react";
import LoginBox from "../../components/Login/LoginBox";
import { Grid } from "@mui/material";
import AuthLayout from "../../layouts/AuthLayout";
import { IMAGE_PATHS } from "../../constants";

function Login() {
  return (
    <AuthLayout>
      <Grid container lg={6} md={2} justifyContent="center" class="displayNone">
        <img src={IMAGE_PATHS.LOGIN} alt="login" />
      </Grid>

      <Grid
        container
        lg={6}
        md={4}
        sm={12}
        xs={12}
        justifyContent="center"
        alignItems="center"
      >
        <LoginBox />
      </Grid>
    </AuthLayout>
  );
}

export default Login;
