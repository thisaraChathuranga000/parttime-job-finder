import * as React from "react";
//import Filter from "../components/home/Filter";
import Post from "../components/home/Post";
import SearchBar from "../components/home/SearchBar";
import "./home.css";
import { useState, useEffect } from "react";
import axios from "axios";
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
import "../components/home/filter.css";
import { Link } from "react-router-dom";
import { postData } from "../dummyData";

const card = (
  <CardContent>
    <Typography variant="h5" component="div" data-testid="content01">
      Unlock New Opportunities!
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary" data-testid="content02">
      Post a Job Now on parttimez and Find Your Perfect Candidates Today!
    </Typography>
    <Button
      variant="contained"
      disableElevation
      component={Link}
      to="/OrgProfileInternal"
    >
      Post a Job
    </Button>
  </CardContent>
);

function Home() {
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
  const [posts, setPosts] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("Any");
  const [selectedPayment, setSelectedPayment] = useState("Any");
  const [selectedDate, setSelectedDate] = useState("All time");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jobposts/alljobs")
      .then((res) => {
        console.log(res);
        let filteredPosts = res.data;
  
        if (selectedLocation !== "Any") {
          filteredPosts = filteredPosts.filter(post => post.location === selectedLocation);
        }
        // Apply similar filtering for payment and date
  
        setPosts(filteredPosts);
      })
      .catch((err) => console.log(err));
  }, [selectedLocation, selectedPayment, selectedDate]);

  return (
    <div className="homeContainer">


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
              onChange={(event) => setSelectedLocation(event.target.value)}
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
              onChange={(event) => setSelectedPayment(event.target.value)}
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
              onChange={(event) => setSelectedPayment(event.target.value)}
            >
              <FormControlLabel
                value="AnyPayment"
                control={<Radio />}
                label={
                  <span style={{ color: "#393F47" }}>{dateOfPost[0]}</span>
                }
              />
              <FormControlLabel
                value="payment01"
                control={<Radio />}
                label={
                  <span style={{ color: "#393F47" }}>{dateOfPost[1]}</span>
                }
              />
              <FormControlLabel
                value="payment02"
                control={<Radio />}
                label={
                  <span style={{ color: "#393F47" }}>{dateOfPost[2]}</span>
                }
              />
              <FormControlLabel
                value="payment03"
                control={<Radio />}
                label={
                  <span style={{ color: "#393F47" }}>{dateOfPost[3]}</span>
                }
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <br></br>
        <Box sx={{ width: "100%" }}>
          <Card variant="outlined">{card}</Card>
        </Box>
      </div>


      <div className="mainSpace">
        <SearchBar />
        {postData.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
