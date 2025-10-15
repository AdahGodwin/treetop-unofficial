import classes from "./job-details.module.css";

//icons
import BookmarkIcon from '../../assets/icons/bookmark.svg?react';
import EyeIcon from "../../assets/icons/eye.svg?react";
import BuildingIcon from "../../assets/icons/building.svg?react";
import LocationIcon from "../../assets/icons/location.svg?react";
import Button from "../button/Button";
import { jobs, type Job } from "../../data/jobs";
import { useLoaderData } from "react-router";
import { useMediaQuery } from "react-responsive";

interface jobDetailsProps {
    selectedId?: string;
}

const JobDetails: React.FC<jobDetailsProps> = ({ selectedId }) => {
    const isMobile = useMediaQuery({ maxWidth: 1000 });
    const data = useLoaderData();
    // console.log(data);
    const selectedJob: Job = data !== undefined
        ? data.job
        : jobs.find((job) => job.id === selectedId);
    return (
        <div className={classes.container}>
            {
                selectedJob && (
                    <>
                        {
                            isMobile &&
                            <div className={classes.header}>
                                <h2 className='padding'>Details</h2>
                            </div>
                        }
                        <div className={isMobile ? "padding" : ""} style={{marginTop: isMobile ? "32px": "0"}}>
                            <div className={classes.jobHeader}>
                                <h2>{selectedJob.role}</h2>
                                <div className={classes.location}>
                                    <BuildingIcon />
                                    <span>{selectedJob.company}</span>
                                    <hr /> <LocationIcon />
                                    <span>{selectedJob.location}</span>
                                </div>
                                <section className={classes.tags}>
                                    <span className={classes.tag}>{selectedJob.salary}</span>
                                    <span className={classes.tag}>{selectedJob.type}</span>
                                    <span className={classes.tag}>{selectedJob.mode}</span>

                                    <span className={classes.tag}>{selectedJob.level}</span>
                                </section>
                                <p>{selectedJob.visited}</p>

                                <div className={classes.jobActions}>
                                    <Button>Apply now</Button>
                                    <section className={classes.icon}>
                                        <BookmarkIcon width={24} height={24} />
                                    </section>
                                    <section className={classes.icon}>
                                        <EyeIcon width={24} height={24} />
                                    </section>
                                </div>
                            </div>
                            <hr />
                            <div className={classes.details}>
                                <h2>Full job description</h2>

                                <pre className={classes.description}>
                                    {selectedJob.description}
                                </pre>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default JobDetails
