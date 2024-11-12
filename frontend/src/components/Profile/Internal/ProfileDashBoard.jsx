import React, { useState } from 'react';
import BannerOrgProfile from './BannerOrgProfile'
import PostJob from './PostJob'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ApplicantData } from "../../../dummyApplicantData";
import AllApplicant from "./AllApplicant";

function ProfileDashBoard() {
  const [isPostJobVisible, setPostJobVisible] = useState(false);
  const [isAllJobVisible, setAllJobVisible] = useState(false)
  const [isVisibleApplicants, setIsVisibleApplicants] = useState(false);

  const handleApplicants = () => {setIsVisibleApplicants(true)};
  const closeApplicants = () => {setIsVisibleApplicants(false)};
  const handlePostJobClick = () => {setPostJobVisible(true)};
  const handleDiscardJob = () => {setPostJobVisible(false)};
  const handleAllJobs = () => {setAllJobVisible(true)}
  
  return (
    <div style={{marginTop:"-43%", width:"73%", marginLeft:"27%"}}> 
        <BannerOrgProfile onPostJobClick={handlePostJobClick}/>
        {isPostJobVisible && <PostJob onDiscardJob={handleDiscardJob} />}

        <div style={{  width:"97%", marginBottom: "30px", marginTop:"-25"}}>
          {/* Applied Jobs */}
          <Accordion sx={{ boxShadow: "0 4px 8px #4A4A4A", border: "1px solid #0069c4"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Applied Jobs 13
            </AccordionSummary>
            <AccordionDetails>
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
                        Applied Time  
                      </Typography>
                    </CardContent>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "25px",
                      marginLeft: "40%",
                      marginRight: "1%",
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ textAlign: "left" , color:""}}>
                      Pending  
                    </Typography>

                    <IconButton
                        color="inherit"
                        sx={{
                          ":hover": {
                            backgroundColor: "red",
                          },
                        }}
                      >
                        <DeleteIcon />
                    </IconButton>
                  </Box>
              </Card>
            </AccordionDetails>
          </Accordion>

          {/* Posted Jobs */}
          <Accordion sx={{ boxShadow: "0 4px 8px #4A4A4A", border: "1px solid #0069c4"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              Posted Jobs 11
            </AccordionSummary>

            <AccordionDetails>
              {/* jobs */}
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
                      Posted Time  
                    </Typography>
                  </CardContent>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "25px",
                    marginLeft: "40%",
                    marginRight: "1%",
                  }}
                >
                  
                  <Button
                    sx={{
                      size: "large",
                      textTransform: "none",
                      textAlign: "left",
                      color: "white",
                      pt:-2
                    }}
                    
                    onClick={handleApplicants}
                  >
                    Applicants 10
                  </Button>

                  <Stack direction="row" marginTop={0.2} marginLeft={1}>
                    <IconButton
                      color="inherit"
                      sx={{
                        ":hover": {
                          backgroundColor: "green",
                        },
                      }}
                      // onClick={() => onComplete(job)}
                    >
                      <CheckCircleIcon />
                    </IconButton>
                    <IconButton
                      color="inherit"
                      sx={{
                        ":hover": {
                          backgroundColor: "red",
                        },
                      }}
                      // onClick={() => onDelete(job.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                </Box>
              </Card>

              {/* applicants */}
              {isVisibleApplicants &&
                  ApplicantData.map((applicant) => (
                    <AllApplicant
                      key={applicant.id}
                      applicant={applicant}
                      onCloseApplicants={closeApplicants}
                    />
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
    </div>
  )
}

export default ProfileDashBoard