import React from 'react';
import Typography from "@mui/material/Typography";
import JobSectionLayout from '../../Layouts/JobSectionLayout';
import JobCardLayout from '../../Layouts/JobCardLayout';

function PostedJobs({onclick}){
    return(
        <JobSectionLayout accordionTitle={"Posted Jobs"} count={10}>
            <JobCardLayout actionName={"Remove Job"} img={"/assets/jobs/stockCounting.jpg"}>
                <Typography variant="h5" sx={{ textAlign: "left" }}>
                    Title
                </Typography>
                <Typography variant="subtitle2" sx={{ textAlign: "left" }}>
                    Posted Time 
                </Typography>
                <Typography variant="subtitle2" sx={{ textAlign: "left", marginBottom:2 }} onClick={onclick}>
                    Applicants 10
                </Typography>
            </JobCardLayout>
        </JobSectionLayout>
    )
}

export default PostedJobs;