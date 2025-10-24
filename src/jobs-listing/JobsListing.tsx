import { useState } from "react";
import JobCard from "../shared/components/job-card/JobCard";
import classes from "./jobs-listing.module.scss";
import { jobs } from "../shared/data/jobs";
import { useNavigate } from "react-router";

const JobsListing = () => {
  const navigate = useNavigate();

  const [availableJobs] = useState(jobs);
  
  function setJobId(id: string) {
      navigate(`/jobs/${id}`);
    
  }

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2 className="padding">Available jobs</h2>
      </div>
      <div className={`${classes.jobsList} padding`}>
        {availableJobs.map((job) => (
          <JobCard
            onClick={() => setJobId(job.id)}
            key={job.id}
            job={job}
          />
        ))}
      </div>
    </div>
  );
};

export default JobsListing;
