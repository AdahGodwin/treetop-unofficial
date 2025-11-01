import pdfImage from "@/assets/pdf-image.png";
import CheckIcon from "@/assets/icons/check-circle.svg?react";
import classes from "./resume-card.module.scss";
import type { Resume } from "../../data/employeeProfile";

interface ResumeCardProps {
  resume: Resume;
}

export const ResumeCard = ({ resume }: ResumeCardProps) => {
  return (
    <div
      className={`${classes.resumeCard} ${
        resume.isActive ? classes.active : ""
      }`}
    >
      <div className={classes.resumeHeader}>
        <div className={classes.left}>
          <img src={pdfImage} className={classes.icon} />
          <div>
            <h4>{resume.name}</h4>
            <p>Created {resume.createdAt}</p>
          </div>
        </div>
        {resume.isActive && <CheckIcon className={classes.check} />}
      </div>

      <div className={classes.preview}>
        {resume.previewUrl ? (
          <iframe src={resume.previewUrl} title={resume.name}></iframe>
        ) : (
          <p className={classes.placeholder}>Document Preview</p>
        )}
      </div>

      <div className={classes.footer}>
        <button className={classes.resumeOptions}>
          Resume options <span className={classes.arrow}> <i className="fas fa-chevron-right"></i> </span>
        </button>
        <div className={classes.pagination}>
          <button className={classes.navBtn}> <i className="fas fa-chevron-left"></i> </button>
          <span>1 / 1</span>
          <button className={classes.navBtn}> <i className="fas fa-chevron-right"></i></button>
        </div>
      </div>
    </div>
  );
};
