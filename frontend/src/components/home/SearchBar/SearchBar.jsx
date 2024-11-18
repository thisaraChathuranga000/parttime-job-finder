import React from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

function SearchBar() {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#C5EDE7",
          fontSize: "14px",
          borderRadius: "6px",
          marginBottom: 2,
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search on Parttimez"
          />

          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton color="primary" sx={{ p: "10px" }}>
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
    </div>
  );
}

export default SearchBar;
