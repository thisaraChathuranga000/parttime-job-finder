import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChatIcon from '@mui/icons-material/Chat';

function ApplicantsToRequest({applicant}) {

    const {
        name,
        university,
        image,
        location,
    } = applicant;

  return (
    <div style={{  width:"97%", marginBottom: "30px", marginTop:"-25"}}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          boxShadow: "0 4px 8px #4A4A4A",
          marginBottom: "20px",
          border: "1px solid #0069c4",
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
          <CardContent sx={{ flex: "1 0 auto", width:"200px" , pr:20 }}>
            <Typography component="div" variant="h5" sx={{ textAlign: "left" }}>
              {name}
            </Typography>
            <Stack direction="row" spacing={2}>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {location}
              </Typography>
            </Stack>
            <Typography
              component="div"
              color="text.secondary"
              variant="subtitle1"
              sx={{ textAlign: "left", }}
            >
              {university}
            </Typography>
          </CardContent>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", pl: 14, pt: 2,}}>
          <Box>
            <Button size="large" sx={{ pt: 4 }}>
              View Profile
            </Button>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1, }}>
            <Tooltip title="Chat with Applicant">
              <IconButton>
                <ChatIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="SelectApplicant">
              <IconButton>
                <CheckCircleIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Card>
    </div>
  );
}

export default ApplicantsToRequest;
