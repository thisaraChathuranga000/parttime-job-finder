import React from "react";
import "./profileBar.css";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import StarRateIcon from "@mui/icons-material/StarRate";

function ProfileBar() {
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
              src="assets/Applicants/student01.jpg"
              sx={{ width: 170, height: 170, border: "1px solid blue" }}
            />
          </Stack>

          <h2 style={{ marginLeft: "40px" }}>Jhon doe</h2>

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
            value={"Jhon doe"}
          />

          <p>Age</p>
          <input type="text" disabled style={{ width: "200px" }} value={23} />

          <p>Gender</p>
          <input
            type="text"
            disabled
            style={{ width: "200px" }}
            value={"Male"}
          />

          <p>UniverSity Name</p>
          <input
            type="text"
            disabled
            style={{ width: "200px" }}
            value={"University Of Sri Jayewardenepura"}
          />

          <p>Location</p>
          <input
            type="text"
            disabled
            style={{ width: "200px" }}
            value={"Nugegoda"}
          />

          <p>Preffered Job Catogories</p>
          <input
            type="text"
            disabled
            style={{ width: "200px" }}
            value={`Acounting & finance`}
          />
          <br />
          <br />

          <input
            type="text"
            disabled
            style={{ width: "200px" }}
            value={`Sales & Marketing`}
          />
          <br />
          <br />

          <input
            type="text"
            disabled
            style={{ width: "200px" }}
            value={`IT & Digital media`}
          />
        </div>

        <Stack direction="column" spacing={2} sx={{marginLeft:"10px", marginTop:"10px"}}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "5px",
              fontSize: "12px",
              textTransform: "none",
              height: "30px",
              marginTop: "15px",
              width:"210px"
            }}
          >
            Hire Me
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "5px",
              fontSize: "12px",
              textTransform: "none",
              height: "30px",
              marginTop: "15px",
              width:"210px"
            }}
          >
            Drop me a message
          </Button>
        </Stack>
      </Box>
    </div>
  );
}

export default ProfileBar;
