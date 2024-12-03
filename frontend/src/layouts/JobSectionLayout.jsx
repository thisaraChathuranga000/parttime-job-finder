import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function JobSectionLayout({ children, accordionTitle, count, onExpand }) {
  const handleAccordionChange = (expanded) => {
    if (expanded && onExpand) {
      onExpand();
    }
  };
  return (
    <Box
      sx={{
        fontSize: "14px",
        borderRadius: "6px",
        border: "1px solid rgba(0, 0, 0, 0.12)",
      }}
      marginLeft={2}
      marginBottom={2}
    >
      <Accordion
        sx={{ boxShadow: "0 4px 8px #4A4A4A", border: "1px solid #0069c4" }}
        onChange={handleAccordionChange} 
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{ fontSize: "16px", fontWeight: "400" }}
        >
          {accordionTitle} {""} {count}
        </AccordionSummary>

        <AccordionDetails>
          <Grid container lg={12} md={12} sm={12} xs={12}>
            {children}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default JobSectionLayout;
