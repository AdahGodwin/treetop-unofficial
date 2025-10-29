import { useState } from "react";
import JobCard from "../../../shared/components/job-card/JobCard";
import classes from "./manage-jobs.module.scss";
import { jobs } from "../../../shared/data/jobs";
import { useLocation, useNavigate } from "react-router";
const ManageJobs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [availableJobs] = useState(jobs);
  function setJobId(id: string) {
      const route = location.pathname;
      navigate(`${route}/${id}`);
  }
  return (
    <div className={classes.jobsList}>
        {availableJobs.map((job) => (
          <JobCard
            onClick={() => setJobId(job.id)}
            key={job.id}
            job={job}
          />
        ))}
      </div>
  );
};

export default ManageJobs;
