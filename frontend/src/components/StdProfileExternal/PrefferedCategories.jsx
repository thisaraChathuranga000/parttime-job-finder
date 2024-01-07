import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const categories = [
    `Acounting & finance`,
    `Sales & Marketing`,
    `IT & Digital media`,
    `Labour`,
    `Other`,
  ];

function PrefferedCategories({category}) {
  return (
    <div style={{  width:"71%", marginLeft:"27%", marginBottom:"2%"}}> 
      <Card
        sx={{
          boxShadow: "0 4px 8px #4A4A4A",
          border: "1px solid #0069c4",
          marginBottom:"20px"
        }}
      >
        <CardContent sx={{pt:2}}>
            <Typography gutterBottom variant="body">
              {categories[0]}
            </Typography>
          </CardContent>
      </Card>

      <Card
        sx={{
          boxShadow: "0 4px 8px #4A4A4A",
          border: "1px solid #0069c4",
          marginBottom:"20px"
        }}
      >
        <CardContent sx={{pt:2}}>
            <Typography gutterBottom variant="body">
              {categories[1]}
            </Typography>
          </CardContent>
      </Card>

      <Card
        sx={{
          boxShadow: "0 4px 8px #4A4A4A",
          border: "1px solid #0069c4",
          marginBottom:"20px"
        }}
      >
        <CardContent sx={{pt:2}}>
            <Typography gutterBottom variant="body">
              {categories[2]}
            </Typography>
          </CardContent>
      </Card>

      <Card
        sx={{
          boxShadow: "0 4px 8px #4A4A4A",
          border: "1px solid #0069c4",
          marginBottom:"20px"
        }}
      >
        <CardContent sx={{pt:2}}>
            <Typography gutterBottom variant="body">
              {categories[3]}
            </Typography>
          </CardContent>
      </Card>

      <Card
        sx={{
          boxShadow: "0 4px 8px #4A4A4A",
          border: "1px solid #0069c4",
          marginBottom:"20px"
        }}
      >
        <CardContent sx={{pt:2}}>
            <Typography gutterBottom variant="body">
              {categories[4]}
            </Typography>
          </CardContent>
      </Card>
    </div>
  );
}

export default PrefferedCategories;
