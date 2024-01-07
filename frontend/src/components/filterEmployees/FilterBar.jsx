import React from "react";
import "./filterbar.css";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function FilterBar() {
  const categories = [
    `Acounting & finance`,
    `Sales & Marketing`,
    `IT & Digital media`,
    `Labour`,
    `Other`,
  ];
  const location = [
    `Any`,
    `Near me`,
    `Within 15 KM`,
    `Within 30 KM`,
    `Within 50 KM`,
  ];
  return (
    <div className="sidebar2">
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
          <h3>Filters</h3>
          <FormControl>

          <FormLabel id="Payment" style={{ color: "black" }}>
              <h4>Category</h4>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="AnyPayment"
                control={<Radio />}
                label={<span style={{ color: "#393F47" }}>{categories[0]}</span>}
              />
              <FormControlLabel
                value="payment01"
                control={<Radio />}
                label={<span style={{ color: "#393F47" }}>{categories[1]}</span>}
              />
              <FormControlLabel
                value="payment02"
                control={<Radio />}
                label={<span style={{ color: "#393F47" }}>{categories[2]}</span>}
              />
              <FormControlLabel
                value="payment03"
                control={<Radio />}
                label={<span style={{ color: "#393F47" }}>{categories[3]}</span>}
              />
              <FormControlLabel
                value="payment04"
                control={<Radio />}
                label={<span style={{ color: "#393F47" }}>{categories[4]}</span>}
              />
            </RadioGroup>


            <FormLabel id="Location" style={{ color: "black" }}>
              <h4>Location</h4>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Any"
                control={<Radio />}
                label={<span style={{ color: "#393F47" }}>{location[0]}</span>}
              />
              <FormControlLabel
                value="Near me"
                control={<Radio />}
                label={<span style={{ color: "#393F47" }}>{location[1]}</span>}
              />
              <FormControlLabel
                value="Within 15 KM"
                control={<Radio />}
                label={<span style={{ color: "#393F47" }}>{location[2]}</span>}
              />
              <FormControlLabel
                value="Within 30 KM"
                control={<Radio />}
                label={<span style={{ color: "#393F47" }}>{location[3]}</span>}
              />
              <FormControlLabel
                value="Within 50 KM"
                control={<Radio />}
                label={<span style={{ color: "#393F47" }}>{location[4]}</span>}
              />
            </RadioGroup>
          </FormControl>
        </div>
      </Box>
    </div>
  );
}

export default FilterBar;
