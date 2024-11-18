import React from 'react'
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useState } from "react";
import BoxLayout from '../../../layouts/BoxLayout';
  
const timeOfPost = [`All time`,`Last 24 hours`,`Last 3 days`,`Last 7 days`];

function Sidebar() {
  const [selectedTime, setSelectedTime] = useState("Any");
  return (
    <div>
        <BoxLayout>
          <FormControl>
            <FormLabel id="postedDate" style={{ color: "black" }}>
              <h4>Filter by posted time</h4>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="0"
              name="radio-buttons-group"
              onChange={(event) => setSelectedTime(event.target.value)}
            >
              {timeOfPost.map((time, index) => (
                <FormControlLabel
                  key={index}
                  value={index.toString()}
                  control={<Radio />}
                  label={<span style={{ color: "#393F47" }}>{time}</span>}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </BoxLayout>

        <div className="displayNone">
          <Box 
            pt={2} pl={4} pb={2}pr={4}
            sx={{border:"1px solid rgba(0, 0, 0, 0.12)", borderRadius: "6px"}}
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
              component={Link}
              to="/internal-profile"
            >
              Post a Job
            </Button>
          </Box>
        </div>
    </div>
  )
}

export default Sidebar