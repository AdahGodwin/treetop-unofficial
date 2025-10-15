import classes from "./job-card.module.css";

//icons
import BookmarkIcon from '../../assets/icons/bookmark.svg?react';
import EyeIcon from "../../assets/icons/eye.svg?react";
import BuildingIcon from "../../assets/icons/building.svg?react";
import LocationIcon from "../../assets/icons/location.svg?react";
import type { Job } from "../../data/jobs";


interface JobCardProps {
    job: Job;
    onClick: () => void;
    isSelected: boolean;
}

const JobCard: React.FC<JobCardProps> = ({job, onClick, isSelected}) => {
    return (
        <div onClick={onClick} className={classes.card} data-selected={isSelected }>
            <div className={classes.cardHeader}>
                <h3>{job.role}</h3>
                <div className={classes.icons}>
                    <BookmarkIcon />
                    <EyeIcon />
                </div>
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
