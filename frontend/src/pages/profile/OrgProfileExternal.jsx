import React from "react";
import OrgProfileBar from "../../components/OrgProfileExternal/OrgProfileBar";
import PostedJobChart from "../../components/OrgProfileExternal/PostedJobChart";
import JobCards from "../../components/OrgProfileExternal/JobCards";
import JobsForYou from "../../components/OrgProfileExternal/JobsForYou";

function OrgProfileExternal() {
  return (
    <div>
      <OrgProfileBar />
      <PostedJobChart/>
      <JobCards/>
      <JobsForYou/>
    </div>
  );
}

export default OrgProfileExternal;