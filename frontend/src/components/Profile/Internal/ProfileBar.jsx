import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import StarRateIcon from "@mui/icons-material/StarRate";
import BoxLayout from "../../common/layouts/BoxLayout";

function ProfileBar() {
  return (
    <div>
      <BoxLayout>
        <div style={{ marginLeft: "10px" }}>
          <h3>Your Profile</h3>
          
          <Avatar
            alt=""
            src="assets/Companies/logo (3).jpg"
            sx={{ width: 170, height: 170, border: "1px solid blue" }}
          />

          <Stack direction="row" spacing={0} marginTop={2} marginBottom={4} margin={3}>
            <StarRateIcon style={{ color: "#e89705" }} />
            <StarRateIcon style={{ color: "#e89705" }} />
            <StarRateIcon style={{ color: "#e89705" }} />
            <StarRateIcon style={{ color: "#e89705" }} />
            <StarRateIcon style={{ color: "#e89705" }} />
          </Stack>

          <p>Name</p><input type="text"  style={{ width: "90%" }} />
          <p>Email</p><input type="text"  style={{ width: "90%" }} />
          <p>Contact</p><input type="text"  style={{ width: "90%" }} />
          <p>Address</p><input type="text" style={{ width: "90%" }} />
        </div>

        <Button
          variant="contained"
          sx={{
            borderRadius: "50px",
            fontSize: "12px",
            textTransform: "none",
            height: "30px",
            marginTop: "15px",
            marginLeft: "10px",
          }}
        >
          Update User details
        </Button>
      </BoxLayout>
    </div>
  );
}

export default ProfileBar;
