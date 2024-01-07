import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import { CardActions } from "@mui/material";

function Verification({ user }) {
  const { name, createdTime, img } = user;
  return (
    <div>
      <Card
        sx={{
          minWidth: 275,
          display: "flex",
          flexDirection: "row",
          border: "1px solid #999999",
          boxShadow: "none",
          marginBottom: "2%",
        }}
      >
        <CardMedia sx={{ pl: 6, pb: 2, pt: 2 }}>
          <Avatar sx={{ width: 120, height: 120 }} alt="applicant" src={img} />
        </CardMedia>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "left",
            pl: 4,
            pt: 2,
            width: "30%",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5" sx={{ textAlign: "left" }}>
              {name}
            </Typography>

            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{ textAlign: "left" }}
            >
              Created at : {createdTime}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="medium" sx={{ marginTop: "-22%" }}>
              View Profile
            </Button>
          </CardActions>
        </Box>

        <Box
          sx={{ display: "flex", flexDirection: "column", pl: 12, pt: "3%" }}
        >
          <Button
            variant="contained"
            sx={{ borderRadius: 1, textTransform: "none", marginBottom: "5%" }}
          >
            Verified User
          </Button>

          <Button
            variant="outlined"
            sx={{ borderRadius: 1, textTransform: "none" }}
          >
            Non-Verified User
          </Button>
        </Box>
      </Card>
    </div>
  );
}

export default Verification;
