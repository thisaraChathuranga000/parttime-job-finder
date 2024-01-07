import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChatIcon from '@mui/icons-material/Chat';
import { Link } from "react-router-dom";

function AllAplicant({onCloseApplicants,applicant}) {

  const  {
    name,
    jobId,
    appliedTime,
    university,
    image,
  } = applicant
  return (
    <div style={{ marginBottom: "20px" }}>
      {/* <Card
        sx={{
          minWidth: 275,
          display: "flex",
          flexDirection: "row",
          border: "1px solid #999999",
          boxShadow: "none",
          marginBottom: "20px",
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ marginLeft: "140px" }}
          >
            Great News! You can find suitable applicants here
          </Typography>
        </CardContent>
        <CardActions sx={{ marginLeft: "80px" }}>
          <Button size="large">Find Applicant</Button>
        </CardActions>
      </Card> */}

      {/* Applicants */}

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
            <Stack direction="row" spacing={2}>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Job Id : {jobId}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Applied at : {appliedTime}
              </Typography>
            </Stack>
            <Typography
              component="div"
              color="text.secondary"
              variant="subtitle1"
              sx={{ textAlign: "left" }}
            >
              {university}
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

            <Tooltip title="Delete">
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Card>

      
    </div>
  );
}

export default AllAplicant;
