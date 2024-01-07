import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import AppliedJobs from "./AppliedJobs";
import { jobData } from "../../dummyJobData";
import { useState } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function JobTabs() {
  const [currentJobs, setCurrentJobs] = useState(jobData);
  const [value, setValue] = React.useState(0);

  const handleDelete = (jobId) => {
    const updatedJobs = currentJobs.filter((job) => job.id !== jobId);
    setCurrentJobs(updatedJobs);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
<div style={{marginTop:"-43%", width:"71%", marginLeft:"27%", marginBottom:"2%"}}> 
 
      <Card
        sx={{
          boxShadow: "0 4px 8px #4A4A4A",
          border: "1px solid #0069c4",
        }}
      >
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Applied Jobs" {...a11yProps(0)} />
            <Tab label="Requests" {...a11yProps(1)} />
            <Tab label="Selected Jobs" {...a11yProps(2)} />
            <Tab label="Accepted Jobs" {...a11yProps(3)} />
            <Tab label="Completed Jobs" {...a11yProps(4)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>
          {jobData.map((job)=>
            <AppliedJobs key={job.id} job={job} onDelete={handleDelete} />
          )}
          
        </TabPanel>
        <TabPanel value={value} index={1}>
          Requests
        </TabPanel>
        <TabPanel value={value} index={2}>
          Selected Jobs
        </TabPanel>
        <TabPanel value={value} index={3}>
          Accepted Jobs
        </TabPanel>
        <TabPanel value={value} index={4}>
          Completed Jobs
        </TabPanel>
      </Card>
    </div>
  );
}

export default JobTabs;
