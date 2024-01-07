import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Section02({ onNextClick }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const [contact, setContact] = useState("");
  const [uniName, setUniName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Gender:", gender);
    console.log("date:", date);
    console.log("contact:", contact);
    console.log("uniName:", uniName);
    console.log("address:", address);
    onNextClick();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Age"
            onChange={(e) => setGender(e.target.value)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <TextField
          variant="outlined"
          fullWidth
          margin="normal"
          id="start-date"
          helperText="Birthday"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <TextField
          label="Contact"
          variant="outlined"
          fullWidth
          margin="normal"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />

        <TextField
          label="University Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={uniName}
          onChange={(e) => setUniName(e.target.value)}
        />

        <TextField
          label="Residential Address"
          variant="outlined"
          fullWidth
          margin="normal"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <Button type="submit" variant="contained" color="primary" fullWidth sx={{marginTop:1}}>
          next
        </Button>
      </form>
    </div>
  );
}

export default Section02;
