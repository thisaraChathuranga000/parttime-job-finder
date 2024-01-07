import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function BannerOrgProfile(props) {
  return (
    <div style={{  width:"97%", marginBottom: "30px", marginTop:"-25"}}>
      <Card
        sx={{
          display: "flex",
          boxShadow: "0 4px 8px #4A4A4A",
          border: "1px solid #0069c4",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: "60%" }}
          image="assets/common/Capture.PNG"
          alt="Live from space album cover"
        />
        <Box
          sx={{ display: "flex", flexDirection: "column", marginTop: "10px", marginLeft:"2%" }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Box sx={{ width: 280 }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div">
                    Unlock New Opportunities!
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Post a Job Now on parttimez and Find Your Perfect Candidates
                    Today!
                  </Typography>
                  <Button
                    variant="contained"
                    disableElevation
                    onClick={props.onPostJobClick}
                  >
                    Post a Job
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
}

export default BannerOrgProfile;
