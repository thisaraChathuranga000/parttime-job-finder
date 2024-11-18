import React from 'react';
import Typography from "@mui/material/Typography";
import JobSectionLayout from '../../../Layouts/JobSectionLayout';
import JobCardLayout from '../../../Layouts/JobCardLayout';

function AppliedJobs(){
    return(
        <JobSectionLayout accordionTitle={"Applied Jobs"} count={11}>
            <JobCardLayout actionName={"Remove Application"} img={"/assets/jobs/stockCounting.jpg"}>
                <Typography variant="h5" sx={{ textAlign: "left" }}>
                    {"title"}
                </Typography>
                <Typography variant="subtitle2" sx={{ textAlign: "left" }}>
                    Applied Time  
                </Typography>
                <Typography variant="subtitle2" sx={{ textAlign: "left" , color:"", marginBottom:1}}>
                    Pending  
                </Typography>  
            </JobCardLayout>
        </JobSectionLayout>
    );
}

export default AppliedJobs;