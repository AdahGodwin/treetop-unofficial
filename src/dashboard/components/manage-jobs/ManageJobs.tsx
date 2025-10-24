import { useState } from "react";
import JobCard from "../../../shared/components/job-card/JobCard";
import classes from "./manage-jobs.module.scss";
import { jobs } from "../../../shared/data/jobs";
const ManageJobs = () => {
  const [availableJobs] = useState(jobs);
  return (
    <div className={classes.jobsList}>
        {availableJobs.map((job) => (
          <JobCard
            onClick={() => {}}
            key={job.id}
            job={job}
          />
        ))}
      </div>
  );
};

export default ManageJobs;
