import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import AllAplicant from "./AllAplicant";
import { useState } from "react";
import { ApplicantData } from "../../dummyApplicantData";

function PostedJob({ job, onDelete, onComplete }) {
  const [isVissibleApplicants, setIsVissibleApplicants] = useState(false);

  const handleApplicants = () => {
    setIsVissibleApplicants(true);
  };

  const closeApplicants = () => {
    setIsVissibleApplicants(false);
  };

  const {
    title,
    startTime,
    endTime,
    startDate,
    endDate,
    postedTime,
    postedDate,
    noOfApplicants,
    img,
  } = job;
  return (
    <div style={{  width:"97%", marginBottom: "30px", marginTop:"-25"}}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#1769aa",
          color: "white",
          marginBottom: "20px",
        }}
      >
        <Box>
          <CardMedia
            component="img"
            sx={{
              width: 151,
              height: 110,
              marginLeft: "20px",
              marginTop: "25px",
              borderRadius: 2,
            }}
            image={img}
            alt="Live from space album cover"
          />
        </Box>

        <Box fullwidth sx={{ display: "flex", flexDirection: "column",width:"90%" }}>
          <CardContent sx={{ marginLeft: "20px" }}>
            <Typography variant="h5" sx={{ textAlign: "left" }}>
              {title}
            </Typography>

            <Typography variant="subtitle2" sx={{ textAlign: "left" }}>
              {startTime} - {endTime}
            </Typography>

            <Typography variant="subtitle2" sx={{ textAlign: "left" }}>
              {startDate} - {endDate}
            </Typography>

            <Typography variant="subtitle2" sx={{ textAlign: "left" }}>
              Posted Time - {postedTime}
            </Typography>

            <Typography variant="subtitle2" sx={{ textAlign: "left" }}>
              Posted Date - {postedDate}
            </Typography>
          </CardContent>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "25px",
            marginLeft: "40%",
            marginRight: "1%",
          }}
        >
          <Button
            sx={{
              size: "large",
              textTransform: "none",
              textAlign: "left",
              color: "white",
            }}
            onClick={handleApplicants}
          >
            Send Requests
          </Button>

          <Button
            sx={{
              size: "large",
              textTransform: "none",
              textAlign: "left",
              color: "white",
              pt:-2
            }}
             
            onClick={handleApplicants}
          >
            Applicants - {noOfApplicants}
          </Button>

          <Stack direction="row" marginTop={0.2} marginLeft={1}>
            <IconButton color="inherit">
              <EditIcon />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{
                ":hover": {
                  backgroundColor: "green",
                },
              }}
              onClick={() => onComplete(job)}
            >
              <CheckCircleIcon />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{
                ":hover": {
                  backgroundColor: "red",
                },
              }}
              onClick={() => onDelete(job.id)}
            >
              <DeleteIcon />
            </IconButton>
          </Stack>
        </Box>
      </Card>

      {/* All Applicant */}
      {isVissibleApplicants &&
        ApplicantData.map((applicant) => (
          <AllAplicant
            key={applicant.id}
            applicant={applicant}
            onCloseApplicants={closeApplicants}
          />
        ))}
    </div>
  );
}
export default PostedJob;
