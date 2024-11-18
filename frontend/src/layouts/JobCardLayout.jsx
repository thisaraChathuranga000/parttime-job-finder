import React from 'react';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';

function JobCardLayout({ children, img, actionName }){
    return(
        <Box
            sx={{fontSize: "14px",borderRadius: "6px", border:"1px solid rgba(0, 0, 0, 0.12)"}} 
            marginBottom={2}
            marginLeft={2}
            width={250}
        >
            <Grid container lg={12} justifyContent="center" p={2}>
                <img src={img} alt="" style={{ width:"200px", height:"150px" }}/>
            </Grid>

            <Grid container lg={12} direction="column" justifyContent="left" pl={3} pb={3} pr={3}>
                {children}
                <Button variant="contained" sx={{textTransform: "none"}} color="error">
                    {actionName}
                </Button> 
            </Grid>
        </Box>
    )
}

export default JobCardLayout;