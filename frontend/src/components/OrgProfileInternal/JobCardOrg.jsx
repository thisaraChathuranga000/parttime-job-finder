import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function JobCardOrg(props) {
  return (
    <div style={{  width:"97%", marginBottom: "30px", marginTop:"-25"}}>
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
              Current Jobs - 13
            </Typography>
            <Button size="large" sx={{ textTransform: "none" }} onClick={props.onAllJobClick}>
              See All Jobs
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
              All Jobs - 47
            </Typography>
            <Button size="large" sx={{ textTransform: "none" }}onClick={props.onAllJobClick}>
              See All Jobs
            </Button>
          </CardContent>
        </Card>
      </Stack>
    </div>
  );
}

export default JobCardOrg;
