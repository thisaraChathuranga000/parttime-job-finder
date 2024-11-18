import React from "react";
import { Box } from "@mui/material";

const FormBox = ({
  children,
  p,
  maxWidth,
  backgroundColor = "white",
  ...props
}) => {
  return (
    <Box
      p={p}
      sx={{
        flexDirection: "column",
        boxShadow: "0 4px 8px #4A4A4A",
        border: "1px solid #0069c4",
        maxWidth: { maxWidth },
        borderRadius: 3,
        backgroundColor: { backgroundColor },
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default FormBox;
