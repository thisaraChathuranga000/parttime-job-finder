import * as React from "react";
import Card from "@mui/material/Card";
import { LineChart } from "@mui/x-charts/LineChart";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const pData = [200, 220, 130, 150, 160];
const xLabels = ["7/29","8/05", "8/12", "8/19", "8/26"];

const chartMonth = "(Last 04 Weeks)";

function JobChartOrg() {
  return (
    <div style={{  width:"97%", marginBottom: "30px", marginTop:"-25"}}>
        <Card
          sx={{
            boxShadow: "0 4px 8px #4A4A4A",
            border: "1px solid #0069c4",
          }}
        >
          <CardContent sx={{ marginRight: "800px", marginBottom: "-50px" }}>
            <Typography gutterBottom variant="h5" component="div">
              Applicant
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {chartMonth}
            </Typography>
          </CardContent>
          <CardContent sx={{marginLeft:"100px"}}>
          <LineChart
            width={700}
            height={350}
            series={[{ data: pData, label: "All Applicants" }]}
            xAxis={[{ scaleType: "point", data: xLabels }]}
            sx={{ marginTop: "-50px",  }}
          />
          </CardContent>
        </Card>
      </div>
    
  );
}

export default JobChartOrg;