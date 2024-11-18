import React from 'react';
import { Grid } from '@mui/material';

const AuthLayout = ({ children }) => {
  return (
    <div>
        <Grid
            container
            sx={{
                backgroundImage: "url('assets/BG-15.png')",
                boxShadow: "none",
            }}
            pt={2}
        >
            {children}
        </Grid>
    </div>
    
  );
};

export default AuthLayout;
