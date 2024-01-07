import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function JobCards() {
  return (
    <div style={{  width:"71%", marginLeft:"27%", marginBottom:"2%"}}> 
      <Stack
        spacing={2}
        direction="row"
      >
        <Card
          sx={{
            boxShadow: "0 4px 8px #4A4A4A",
            border: "1px solid #0069c4",
            width: "49%",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5">
              Completed Jobs - 43
            </Typography>
            <Button
              size="large"
              sx={{ textTransform: "none" }}
            //   onClick={props.onAllJobClick}
            >
              See Jobs
            </Button>
          </CardContent>
        </Card>

        <Card
          sx={{
            boxShadow: "0 4px 8px #4A4A4A",
            border: "1px solid #0069c4",
            width: "49%",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5">
              FeedBacks - 40
            </Typography>
            <Button
              size="large"
              sx={{ textTransform: "none" }}
            //   onClick={props.onAllJobClick}
            >
              See Feedbacks
            </Button>
          </CardContent>
        </Card>
      </Stack>
    </div>
  );
}

export default JobCards;
