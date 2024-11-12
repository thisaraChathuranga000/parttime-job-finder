import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";

function DashBoard() {
    return (
      <div style={{marginTop:"-40%", width:"73%", marginLeft:"27%"}}>
            <Typography variant="body2" align="center">
              Posted Jobs
            </Typography>
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
                      image={"/"}
                      alt="Live from space album cover"
                    />
                  </Box>

                  <Box fullwidth sx={{ display: "flex", flexDirection: "column",width:"90%" }}>
                    <CardContent sx={{ marginLeft: "20px" }}>
                      <Typography variant="h5" sx={{ textAlign: "left" }}>
                        {"title"}
                      </Typography>
                      <Typography variant="subtitle2" sx={{ textAlign: "left" }}>
                        Posted 
                      </Typography>
                    </CardContent>
                  </Box>
              </Card>
      </div>
    )
  }
  
  export default DashBoard 