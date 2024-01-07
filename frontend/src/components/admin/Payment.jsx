import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CardActions } from "@mui/material";

function Payment({ pay }) {
  const { jobId, paymentTime, amount } = pay;
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "left",
            pl: 4,
            pt: 2,
            width: "25%",
            marginLeft: "5%",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5" sx={{ textAlign: "left" }}>
              Job Id - {jobId}
            </Typography>

            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{ textAlign: "left" }}
            >
              Payed at : {paymentTime}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="medium" sx={{ marginTop: "-9%" }}>
              View Details
            </Button>
          </CardActions>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            pl: 12,
            pt: "3%",
            width: "20%",
          }}
        >
          <Button
            variant="contained"
            sx={{ borderRadius: 1, textTransform: "none", marginBottom: "5%" }}
          >
            Refund Money
          </Button>

          <Button
            variant="outlined"
            sx={{ borderRadius: 1, textTransform: "none" }}
          >
            Send a Message
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            pl: 12,
            pt: "5%",
            width: "20%",
          }}
        >
          <Typography component="div" variant="h5" sx={{ textAlign: "left" }}>
            Payed : {amount} LKR
          </Typography>
        </Box>
      </Card>
    </div>
  );
}

export default Payment;
