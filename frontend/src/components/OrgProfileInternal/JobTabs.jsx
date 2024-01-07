import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import PostedJob from "./PostedJob";
import { jobData } from "../../dummyJobData";

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
  const [value, setValue] = React.useState(0);
  const [currentJobs, setCurrentJobs] = React.useState(jobData);
  const [completedJobs, setCompletedJobs] = React.useState([]);

  const handleDelete = (jobId) => {
    const updatedJobs = currentJobs.filter((job) => job.id !== jobId);
    setCurrentJobs(updatedJobs);
  };

  const handleComplete = (job) => {
    const updatedCurrentJobs = currentJobs.filter((j) => j.id !== job.id);
    setCurrentJobs(updatedCurrentJobs);
    setCompletedJobs([...completedJobs, job]);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{  width:"97%", marginBottom: "30px", marginTop:"-25"}}>
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
            <Tab label="Current Jobs" {...a11yProps(0)} />
            <Tab label="All Jobs" {...a11yProps(1)} />
            <Tab label="Completed Jobs" {...a11yProps(2)} />
            <Tab label="Payment" {...a11yProps(3)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>
          {currentJobs.map((job) => (
            <PostedJob
              key={job.id}
              job={job}
              onDelete={handleDelete}
              onComplete={handleComplete}
            />
          ))}
        </TabPanel>
        <TabPanel value={value} index={1}>
          All Jobs
        </TabPanel>
        <TabPanel value={value} index={2}>
          {completedJobs.map((job) => (
            <PostedJob key={job.id} job={job} onDelete={handleDelete} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={3}>
          Payment
        </TabPanel>
      </Card>
    </div>
  );
}

export default JobTabs;
