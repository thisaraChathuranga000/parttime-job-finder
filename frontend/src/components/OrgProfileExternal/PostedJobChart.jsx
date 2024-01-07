import React from "react";
import Card from "@mui/material/Card";
import { LineChart } from "@mui/x-charts/LineChart";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const pData = [20, 22, 13, 15, 16];
const xLabels = ["Jan 2023", "Feb 2023", "Mar 2023", "Apr 2023", "May 2023"];

const chartMonth = "(Last 04 Months)";

function PostedJobChart() {
  return (
<div style={{marginTop:"-43%", width:"71%", marginLeft:"27%", marginBottom:"2%"}}> 
      <Card
        sx={{
          boxShadow: "0 4px 8px #4A4A4A",
          border: "1px solid #0069c4",
        }}
      >
        <CardContent sx={{ marginRight: "700px", marginBottom: "-50px" }}>
          <Typography gutterBottom variant="h5" component="div">
            Posted Jobs
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {chartMonth}
          </Typography>
        </CardContent>
        <CardContent sx={{ marginLeft: "100px" }}>
          <LineChart
            width={700}
            height={350}
            series={[{ data: pData, label: "Posted Jobs" }]}
            xAxis={[{ scaleType: "point", data: xLabels }]}
            sx={{ marginTop: "-50px" }}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default PostedJobChart;
