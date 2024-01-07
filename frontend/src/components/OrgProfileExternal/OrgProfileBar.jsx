import React from "react";
import "./orgProfileBar.css";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import StarRateIcon from "@mui/icons-material/StarRate";

function OrgProfileBar() {
  return (
    <div className="sidebar">
      <Box
        sx={{
          width: "90%",
          backgroundColor: "#C5EDE7",
          padding: "20px",
          fontSize: "14px",
        }}
      >
        <div style={{ marginLeft: "10px" }}>
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Remy Sharp"
              src="assets/Companies/logo (3).jpg"
              sx={{ width: 170, height: 170, border: "1px solid blue" }}
            />
          </Stack>

          <h2 style={{ marginLeft: "40px" }}>MAS Holdings</h2>

          <Stack direction="row" marginLeft={3}>
            <StarRateIcon style={{ color: "#e89705" }} />
            <StarRateIcon style={{ color: "#e89705" }} />
            <StarRateIcon style={{ color: "#e89705" }} />
            <StarRateIcon style={{ color: "#e89705" }} />
            <StarRateIcon style={{ color: "#e89705" }} />
          </Stack>

          <p>Name</p>
          <input
            type="text"
            disabled
            style={{ width: "200px" }}
            value={"MAS Holdings (pvt) Ltd"}
          />

          <p>Location</p>
          <input
            type="text"
            disabled
            style={{ width: "200px" }}
            value={"Katunayake"}
          />

          <p>Email</p>
          <input
            type="text"
            disabled
            style={{ width: "200px" }}
            value={"masholdings@gmail.com"}
          />
        </div>

        <Button
          variant="contained"
          sx={{
            borderRadius: "5px",
            fontSize: "12px",
            textTransform: "none",
            height: "30px",
            marginTop: "15px",
            width: "210px",
            marginLeft: "10px"
          }}
        >
          Drop a message
        </Button>
      </Box>
    </div>
  );
}

export default OrgProfileBar;
