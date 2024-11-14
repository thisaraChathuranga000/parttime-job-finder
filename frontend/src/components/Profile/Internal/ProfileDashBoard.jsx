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
import Grid from '@mui/material/Grid';

function ProfileDashBoard() {
  const [isPostJobVisible, setPostJobVisible] = useState(true);
  const [isAllJobVisible, setAllJobVisible] = useState(false)
  const [isVisibleApplicants, setIsVisibleApplicants] = useState(false);

  const handleApplicants = () => {setIsVisibleApplicants(true)};
  const closeApplicants = () => {setIsVisibleApplicants(false)};
  const handlePostJobClick = () => {setPostJobVisible(true)};
  const handleDiscardJob = () => {setPostJobVisible(false)};
  const handleAllJobs = () => {setAllJobVisible(true)}
  
  return (
    <div> 
        <BannerOrgProfile onPostJobClick={handlePostJobClick}/>
        {isPostJobVisible && <PostJob onDiscardJob={handleDiscardJob} />}

        <div> 
          <Box 
            sx={{fontSize: "14px",borderRadius: "6px", border:"1px solid rgba(0, 0, 0, 0.12)"}}
            marginLeft={2}
            marginBottom={2}
          >
            <Accordion sx={{ boxShadow: "0 4px 8px #4A4A4A", border: "1px solid #0069c4"}} marginLeft={2}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Applied Jobs 13
              </AccordionSummary>
              <AccordionDetails>
                <Grid container lg={12} md={12} sm={12} xs={12}>
                  <Box
                      sx={{fontSize: "14px",borderRadius: "6px", border:"1px solid rgba(0, 0, 0, 0.12)"}}
                      marginLeft={2}
                      marginBottom={2}
                      width={250}
                    >
                      <Grid container lg={12} justifyContent="center" p={2}>
                        <img
                          // src={`http://localhost:5000/posts/uploads/${img}`}
                          src={"/assets/jobs/stockCounting.jpg"}
                          alt={"title"}
                          style={{ width:"200px", height:"150px"  }}
                        />
                      </Grid>

                      <Grid container lg={12} direction="column" justifyContent="left" pl={3} pb={3} pr={3}>
                          <Typography variant="h5" sx={{ textAlign: "left" }}>
                            {"title"}
                          </Typography>
                          <Typography variant="subtitle2" sx={{ textAlign: "left" }}>
                            Applied Time  
                          </Typography>
                          <Typography variant="subtitle2" sx={{ textAlign: "left" , color:"", marginBottom:1}}>
                            Pending  
                          </Typography>  
                          <Button variant="contained" sx={{textTransform: "none"}}>
                            Remove Application
                          </Button>                    
                      </Grid>
                  </Box>

                  <Box
                      sx={{fontSize: "14px",borderRadius: "6px", border:"1px solid rgba(0, 0, 0, 0.12)"}}
                      marginLeft={2}
                      marginBottom={2}
                      width={250}
                    >
                      <Grid container lg={12} justifyContent="center" p={2}>
                        <img
                          // src={`http://localhost:5000/posts/uploads/${img}`}
                          src={"/assets/jobs/stockCounting.jpg"}
                          alt={"title"}
                          style={{ width:"200px", height:"150px"  }}
                        />
                      </Grid>

                      <Grid container lg={12} direction="column" justifyContent="left" pl={3} pb={3} pr={3}>
                          <Typography variant="h5" sx={{ textAlign: "left" }}>
                            {"title"}
                          </Typography>
                          <Typography variant="subtitle2" sx={{ textAlign: "left" }}>
                            Applied Time  
                          </Typography>
                          <Typography variant="subtitle2" sx={{ textAlign: "left" , color:"", marginBottom:1}}>
                            Pending  
                          </Typography>  
                          <Button variant="contained" sx={{textTransform: "none"}}>
                            Remove Application
                          </Button>                    
                      </Grid>
                  </Box>

                  
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Box>

          <Box 
            sx={{fontSize: "14px",borderRadius: "6px", border:"1px solid rgba(0, 0, 0, 0.12)"}}
            marginLeft={2}
            marginBottom={2}
          >
            <Accordion sx={{ boxShadow: "0 4px 8px #4A4A4A", border: "1px solid #0069c4"}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Posted Jobs 11
              </AccordionSummary>

              <AccordionDetails>
              <Grid container lg={12} md={12} sm={12} xs={12}>
                  <Box
                      sx={{fontSize: "14px",borderRadius: "6px", border:"1px solid rgba(0, 0, 0, 0.12)"}}
                      marginLeft={2}
                      marginBottom={2}
                      width={250}
                    >
                      <Grid container lg={12} justifyContent="center" p={2}>
                        <img
                          // src={`http://localhost:5000/posts/uploads/${img}`}
                          src={"/assets/jobs/stockCounting.jpg"}
                          alt={"title"}
                          style={{ width:"200px", height:"150px"  }}
                        />
                      </Grid>

                      <Grid container lg={12} direction="column" justifyContent="left" pl={3} pb={3} pr={3}>
                          <Typography variant="h5" sx={{ textAlign: "left" }}>
                            {"title"}
                          </Typography>
                          <Typography variant="subtitle2" sx={{ textAlign: "left" }}>
                            Posted Time 
                          </Typography>
                          <Typography variant="subtitle2" sx={{ textAlign: "left", marginBottom:2 }} onClick={handleApplicants}>
                            Applicants 10
                          </Typography>
                          <Button variant="contained" sx={{textTransform: "none"}}>
                            Remove Job
                          </Button>                  
                      </Grid>
                  </Box>
                </Grid>

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
          </Box>
        </div>
    </div>
  )
}

export default ProfileDashBoard