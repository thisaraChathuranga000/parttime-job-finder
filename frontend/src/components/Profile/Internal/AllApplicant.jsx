import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeselectIcon from '@mui/icons-material/Deselect';
import { Link } from "react-router-dom";

function AllApplicant({onCloseApplicants,applicant}) {

  const  { name, image } = applicant
  return (
    <div style={{ marginBottom: "20px" }}> 
      <Card
        sx={{
          minWidth: 275,
          display: "flex",
          flexDirection: "row",
          border: "1px solid #999999",
          boxShadow: "none",
        }}
      >
        <CardMedia sx={{ pl: 6, pb: 2, pt: 2 }}>
          <Avatar
            sx={{ width: 120, height: 120 }}
            alt="applicant"
            src={image}
          />
        </CardMedia>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "left",
            pl: 4,
            pt: 2,
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5" sx={{ textAlign: "left" }}>
              {name}
            </Typography>
          </CardContent>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", pl: 12, pt: 2}}>
          <Box>
            <Button size="large" sx={{ pt: 4 }} component={Link} to="/StdProfileExternal">
              View Profile
            </Button>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <Tooltip title="SelectApplicant">
              <IconButton>
                <CheckCircleIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete">
              <IconButton>
                <DeselectIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Card>
    </div>
  );
}

export default AllApplicant;
