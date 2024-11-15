import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';

function BannerOrgProfile(props) {
  return (
    <div>
        <Box 
          container 
          sx={{
            fontSize: "14px",
            borderRadius: "6px", 
            boxShadow: "0 4px 8px #4A4A4A", 
            border: "1px solid #0069c4"
          }}
          display="flex"
          flexDirection="row"
          marginLeft={2}
          marginBottom={2}
        >
          <Grid container lg={6} class="displayNone">
            <img
              src="assets/common/Capture.PNG"
              alt={"img"}
              style={{ width:"550px", borderRadius: "6px"  }}
            />
          </Grid>

          <Grid container lg={6} xs={12} justifyContent="center" alignItems="center">
              <Box 
                pt={2} pl={4} pb={2}pr={4}
                maxWidth={300}
                marginRight={2}
              >
                <Typography variant="h5" component="div">
                  Unlock New Opportunities!
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Post a Job Now on parttimez and Find Your Perfect Candidates Today!
                </Typography>
                <Button
                  variant="contained"
                  disableElevation
                  onClick={props.onPostJobClick}
                >
                  Post a Job
                </Button>
              </Box>
          </Grid>
        </Box>
    </div>
  );
}

export default BannerOrgProfile;
