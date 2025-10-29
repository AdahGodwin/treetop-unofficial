import classes from "./job-card.module.scss";

//icons
import BookmarkIcon from '@/assets/icons/bookmark-filled.svg?react';
import EyeIcon from "@/assets/icons/eye.svg?react";
import BuildingIcon from "@/assets/icons/building.svg?react";
import LocationIcon from "@/assets/icons/location.svg?react";
import ApproveIcon from "@/assets/icons/check-circle.svg?react";
import DeclineIcon from "@/assets/icons/close.svg?react";
import type { Job } from "../../../shared/data/jobs";


interface JobCardProps {
    job: Job;
    onClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({job, onClick}) => {
    const isLoggedIn = true;
    let userRole: string = "employer"; // or 'employer'
    return (
        <div onClick={onClick} className={classes.card}>
            <div className={classes.cardHeader}>
                <h3>{job.role}</h3>
                {
                    isLoggedIn && userRole === 'employee' && <div className={classes.icons}>
                    <BookmarkIcon  />
                    <EyeIcon />
                </div>
                }
                {
                    isLoggedIn && userRole === 'admin' && <div className={classes.icons}>
                    <ApproveIcon  />
                    <DeclineIcon />
                </div>
                }
            </div>
            <div className={classes.company}>
                <BuildingIcon />
                <span>{job.company}</span>
            </div>
            <div className={classes.location}>
                <LocationIcon />
                <span>{job.location}</span>
            </div>
            <section className={classes.tags}>
                <span className={classes.tag}>{job.salary}</span>
                <span className={classes.tag}>{job.type}</span>
                <span className={classes.tag}>{job.mode}</span>
                
                <span className={classes.tag}>{job.level}</span>
            </section>
            <p>{job.visited}</p>
        </div>
    )
}

export default JobCard;
