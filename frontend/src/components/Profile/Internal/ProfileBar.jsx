import * as React from "react";
import "./profile.css";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import StarRateIcon from "@mui/icons-material/StarRate";


const StyledText = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

function ProfileBar() {
  return (
    <div className="sidebar">
      <Box
        sx={{
          width: "90%",
          backgroundColor: "#C5EDE7",
          padding: "20px",
          fontSize: "14px",
          borderRadius: "6px"
        }}
      >
        <div style={{ marginLeft: "10px" }}>
          <h3>Profile</h3>
          
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Remy Sharp"
              src="assets/Companies/logo (3).jpg"
              sx={{ width: 170, height: 170, border: "1px solid blue" }}
            />
          </Stack>

          <Stack
            direction="row"
            spacing={0}
            marginTop={2}
            marginBottom={4}
            margin={3}
          >
            <StarRateIcon style={{ color: "#e89705" }} />
            <StarRateIcon style={{ color: "#e89705" }} />
            <StarRateIcon style={{ color: "#e89705" }} />
            <StarRateIcon style={{ color: "#e89705" }} />
            <StarRateIcon style={{ color: "#e89705" }} />
          </Stack>

          <p>Name</p>
          <input type="text" disabled style={{ width: "90%" }} /><p>Name</p>
          <p>Email</p>
          <input type="text" disabled style={{ width: "90%" }} /><p>Email</p>
          <p>Contact</p>
          <input type="text" disabled style={{ width: "90%" }} /><p>Contact</p>
          <p>Address</p>
          <input type="text" disabled style={{ width: "90%" }} /><p>Address</p>

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
      </Box>
      <StyledText sx={{ textTransform: "none", width:"90%", padding: "20px" }}>
        <span>{"User Verifications"}</span>
        <br />
        <span>{"Terms & Conditions"}</span>
        <br />
        <span>{"News & Updates"}</span>
      </StyledText>
    </div>
  );
}

export default ProfileBar;
