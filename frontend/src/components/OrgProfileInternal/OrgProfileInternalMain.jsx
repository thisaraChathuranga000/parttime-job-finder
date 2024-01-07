import React, { useState } from 'react';
import BannerOrgProfile from './BannerOrgProfile'
import JobChartOrg from './JobChartOrg'
import JobCardOrg from './JobCardOrg'
import PostJob from './PostJob'
import JobTabs from './JobTabs';

function OrgProfileInternalMain() {
  const [isPostJobVisible, setPostJobVisible] = useState(false);
  const [isAllJobVisible, setAllJobVisible] = useState(false)

  const handlePostJobClick = () => {
    setPostJobVisible(true);
  };

  const handleDiscardJob = () => {
    setPostJobVisible(false);
  };

  const handleAllJobs = () => {
    setAllJobVisible(true)
  }
  
  return (
    <div style={{marginTop:"-43%", width:"73%", marginLeft:"27%"}}> 
        <BannerOrgProfile onPostJobClick={handlePostJobClick}/>
        {isPostJobVisible && <PostJob onDiscardJob={handleDiscardJob} />}
        <JobChartOrg/>
        <JobCardOrg onAllJobClick={handleAllJobs}/>
        {isAllJobVisible && <JobTabs/>}
    </div>
  )
}

export default OrgProfileInternalMain