import React from 'react';
import { Grid } from '@mui/material';
import Footer from '../common/Footer';

const AuthLayout = ({ children }) => {
  return (
    <div>
        <Grid
            container
            sx={{
                backgroundImage: "url('assets/BG-15.png')",
                boxShadow: "none",
                marginTop: 0,
            }}
            pt={2}
        >
            {children}
        </Grid>
        <Footer />
    </div>
    
  );
};

export default AuthLayout;
