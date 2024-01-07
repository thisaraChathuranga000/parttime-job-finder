import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { LineChart } from "@mui/x-charts/LineChart";
import CardContent from "@mui/material/CardContent";

const pData = [20, 22, 13, 15, 16];
const xLabels = ["Jan 2023", "Feb 2023", "Mar 2023", "Apr 2023", "May 2023"];
const chartMonth = "(Last 04 Months)";

const pData2 = [20, 22, 13, 15, 16];
const xLabels2 = ["Jan 2023", "Feb 2023", "Mar 2023", "Apr 2023", "May 2023"];
const chartMonth2 = "(Last 04 Months)";

function Status() {
  return (
    <div>
      <Card
        sx={{
          boxShadow: "0 4px 8px #4A4A4A",
          border: "1px solid #0069c4",
          width:"98%",
          marginBottom:"3%"
        
        }}
      >
        <CardContent sx={{ marginRight: "700px", marginBottom: "-50px" }}>
          <Typography gutterBottom variant="h5" component="div">
            All Users
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {chartMonth}
          </Typography>
        </CardContent>
        <CardContent sx={{ marginLeft: "100px" }}>
          <LineChart
            width={700}
            height={350}
            series={[{ data: pData, label: "All Users" }]}
            xAxis={[{ scaleType: "point", data: xLabels }]}
            sx={{ marginTop: "-50px" }}
          />
        </CardContent>
      </Card>

      {/*All Jobs*/}

      <Card
        sx={{
          boxShadow: "0 4px 8px #4A4A4A",
          border: "1px solid #0069c4",
          width:"98%",
        
        }}
      >
        <CardContent sx={{ marginRight: "700px", marginBottom: "-50px" }}>
          <Typography gutterBottom variant="h5" component="div">
            All Jobs
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {chartMonth2}
          </Typography>
        </CardContent>
        <CardContent sx={{ marginLeft: "100px" }}>
          <LineChart
            width={700}
            height={350}
            series={[{ data: pData2, label: "All Jobs" }]}
            xAxis={[{ scaleType: "point", data: xLabels2 }]}
            sx={{ marginTop: "-50px" }}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default Status;
