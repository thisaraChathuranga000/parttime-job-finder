import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./filter.css";
import { Link } from "react-router-dom";

const card = (
  <CardContent>
    <Typography variant="h5" component="div" data-testid="content01">
      Unlock New Opportunities!
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary" data-testid="content02">
      Post a Job Now on parttimez and Find Your Perfect Candidates Today!
    </Typography>
    <Button variant="contained" disableElevation component={Link} to="/OrgProfileInternal" >
      Post a Job
    </Button>
  </CardContent>
);

function Filter() {
  const Payment = [`Any`, `<2000 LKR`, `>2000 LKR`, `>3000 LKR`, `>5000 LKR`];
  const location = [
    `Any`,
    `Near me`,
    `Within 15 KM`,
    `Within 30 KM`,
    `Within 50 KM`,
  ];
  const dateOfPost = [
    `All time`,
    `Last 24 hours`,
    `Last 3 days`,
    `Last 7 days`,
  ];

  return (
    <div className="sidebar" data-testid="filter">
      <Box
        sx={{
          width: "89%",
          backgroundColor: "#C5EDE7",
          padding: "20px",
          fontSize: "14px",
          borderRadius: "6px",
        }}
      >
        <h3>Filters</h3>
        <FormControl>
          <FormLabel id="Location" style={{ color: "black" }}>
            <h4>Location</h4>
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              data-testid="formContent01"
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

          <FormLabel id="Payment" style={{ color: "black" }}>
            <h4>Payment</h4>
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="AnyPayment"
              control={<Radio />}
              label={<span style={{ color: "#393F47" }}>{Payment[0]}</span>}
            />
            <FormControlLabel
              value="payment01"
              control={<Radio />}
              label={<span style={{ color: "#393F47" }}>{Payment[1]}</span>}
            />
            <FormControlLabel
              value="payment02"
              control={<Radio />}
              label={<span style={{ color: "#393F47" }}>{Payment[2]}</span>}
            />
            <FormControlLabel
              value="payment03"
              control={<Radio />}
              label={<span style={{ color: "#393F47" }}>{Payment[3]}</span>}
            />
            <FormControlLabel
              value="payment04"
              control={<Radio />}
              label={<span style={{ color: "#393F47" }}>{Payment[4]}</span>}
            />
          </RadioGroup>

          <FormLabel id="postedDate" style={{ color: "black" }}>
            <h4>Date of Posted</h4>
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="AnyPayment"
              control={<Radio />}
              label={<span style={{ color: "#393F47" }}>{dateOfPost[0]}</span>}
            />
            <FormControlLabel
              value="payment01"
              control={<Radio />}
              label={<span style={{ color: "#393F47" }}>{dateOfPost[1]}</span>}
            />
            <FormControlLabel
              value="payment02"
              control={<Radio />}
              label={<span style={{ color: "#393F47" }}>{dateOfPost[2]}</span>}
            />
            <FormControlLabel
              value="payment03"
              control={<Radio />}
              label={<span style={{ color: "#393F47" }}>{dateOfPost[3]}</span>}
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <br></br>
      <Box sx={{ width: "100%" }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </div>
  );
}

export default Filter;
