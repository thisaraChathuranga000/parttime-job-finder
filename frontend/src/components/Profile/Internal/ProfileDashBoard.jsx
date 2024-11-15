import React, { useState } from 'react';
import BannerOrgProfile from './BannerOrgProfile'
import PostJob from './PostJob'
import { ApplicantData } from "../../../dummyApplicantData";
import AllApplicant from "./AllApplicant";
import AppliedJobs from './AppliedJobs';
import PostedJobs from './PostedJobs';

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

      <AppliedJobs/> 
      <PostedJobs onclick={handleApplicants}/>
          
      {isVisibleApplicants &&
        ApplicantData.map((applicant) => (
          <AllApplicant
            key={applicant.id}
            applicant={applicant}
            onCloseApplicants={closeApplicants}
          />
      ))}
    </div>
  )
}

export default ProfileDashBoard