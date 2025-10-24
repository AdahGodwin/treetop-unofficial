// import { useState } from 'react';
// import JobCard from '../../shared/components/job-card/JobCard';
// import JobDetails from '../../job-details/JobDetails';
// import classes from './jobs-listing.module.scss';
// import { jobs } from '../../shared/data/jobs';
// import { useMediaQuery } from 'react-responsive';
// import { useNavigate } from 'react-router';
// const JobsListing = () => {
//     const navigate = useNavigate();

//     const [availableJobs] = useState(jobs);
//     const [selectedJobId, setSelectedJobId] = useState("");

//     const isDesktop = useMediaQuery({ minWidth: 1000 });
//     function setJobId(id: string) {
//         if (isDesktop) {
//             setSelectedJobId(id);
//         }
//         else {
//             navigate(`/jobs/${id}`)
//         }
//     }

//     return (
//         <div className={classes.container}>
//             <div className={classes.header}>
//                 <h2 className='padding'>Available jobs</h2>
//             </div>
//             <div className={`${classes.jobs} padding`}>
//                 <div className={classes.jobsList}>
//                     {
//                         availableJobs.map((job) => (
//                             <JobCard
//                                 onClick={() => setJobId(job.id)}
//                                 key={job.id}
//                                 job={job}
//                                 isSelected={(selectedJobId === job.id) && isDesktop}
//                             />
//                         ))
//                     }
//                 </div>
//                 {
//                     isDesktop &&
//                     <div className={classes.jobDetails}>
//                         <JobDetails selectedId={selectedJobId} />
//                     </div>
//                 }
//             </div>
//         </div>
//     )
// }

// export default JobsListing;
