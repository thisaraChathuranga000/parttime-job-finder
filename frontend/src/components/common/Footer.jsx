import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Footer() {
  return (
    <div>
      <Box
        pb={2}
        sx={{
          backgroundColor: "white",
          borderTop: "1px solid #DFD0B8",
          boxShadow: "none",
        }}
      >
        <Typography
          component="div"
          variant="h4"
          sx={{ pt: 4, color: "gray", pb: 2, textAlign: "center" }}
        >
          Lets Get you Hired By top Employers
        </Typography>
      </Box>
    </div>
  );
}

export default Footer;
