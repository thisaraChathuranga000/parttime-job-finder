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

function AppliedJobs({ job, onDelete }) {
  const { img, title, startTime, startDate, company } = job;
  return (
    <div>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#1769aa",
          color: "white",
          marginBottom: "20px",
          width: "90%",
          marginLeft: 6.5,
        }}
      >
        <Box>
          <CardMedia
            component="img"
            sx={{
              width: 151,
              height: 110,
              marginLeft: "20px",
              marginTop: "15px",
              borderRadius: 2,
            }}
            image={img}
            alt="Job"
          />
        </Box>

        <Box fullwidth sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ marginLeft: "20px", width: "200px" }}>
            <Typography variant="h5" sx={{ textAlign: "left" }}>
              {title}
            </Typography>

            <Typography variant="subtitle2" sx={{ textAlign: "left" }}>
              {company}
            </Typography>

            <Typography variant="subtitle2" sx={{ textAlign: "left" }}>
              {startDate} - {startTime}
            </Typography>

            <Typography variant="subtitle2" sx={{ textAlign: "left" }}>
              You applied at - appliedTime
            </Typography>
          </CardContent>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "60px",
            marginLeft: "180px",
            marginRight: "30px",
          }}
        >
          <Stack direction="row" marginTop={0.2} marginLeft={1}>
            <Button
              sx={{
                size: "large",
                textTransform: "none",
                textAlign: "left",
                color: "white",
              }}
            >
              See the job
            </Button>
            <IconButton
              color="inherit"
              sx={{
                ":hover": {
                  backgroundColor: "red",
                },
              }}
            >
              <DeleteIcon onClick={onDelete(job.id)} />
            </IconButton>
          </Stack>
        </Box>
      </Card>
    </div>
  );
}

export default AppliedJobs;
