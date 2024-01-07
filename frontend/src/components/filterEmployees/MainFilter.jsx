import React from "react";
import FilterBanner from "./FilterBanner";
import FilterCount from "./FilterCount";
import ApplicantsToRequest from "./ApplicantsToRequest";
import { ApplicantData } from "../../dummyApplicantData";

function MainFilter() {
  return (
    <div style={{marginTop:"-43%", width:"73%", marginLeft:"27%"}}> 
      <FilterBanner />
      <FilterCount />
      {ApplicantData.map((applicant) => (
        <ApplicantsToRequest key={(applicant.id)} applicant={applicant} />
      ))}
    </div>
  );
}

export default MainFilter;
