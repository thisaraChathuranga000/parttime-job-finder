import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import StarRateIcon from "@mui/icons-material/StarRate";
import BoxLayout from "../../../layouts/BoxLayout";
import Grid from "@mui/material/Grid";

function ProfileBar() {
  return (
    <div>
      <BoxLayout>
        <Grid
          container
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignContent="center"
        >
          <Avatar
            alt=""
            src="assets/Companies/logo (3).jpg"
            sx={{ width: 170, height: 170, border: "1px solid blue" }}
          />

          <Grid marginLeft={3} marginTop={2} marginBottom={2}>
            <StarRateIcon style={{ color: "#e89705" }} />
            <StarRateIcon style={{ color: "#e89705" }} />
            <StarRateIcon style={{ color: "#e89705" }} />
            <StarRateIcon style={{ color: "#e89705" }} />
            <StarRateIcon style={{ color: "#e89705" }} />
          </Grid>

          <Button
            variant="contained"
            sx={{
              borderRadius: "50px",
              fontSize: "12px",
              textTransform: "none",
              marginBottom: 3,
            }}
          >
            Drop a message
          </Button>
        </Grid>
      </BoxLayout>
    </div>
  );
}

export default ProfileBar;
