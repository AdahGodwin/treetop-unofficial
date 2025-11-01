import { ResumeCard } from "../../../../../shared/components/resume-card/ResumeCard";
import type { Resume } from "../../../../../shared/data/employeeProfile";
import classes from "./resume-section.module.scss";

interface ResumeSectionProps {
  resumes: Resume[];
}

export const ResumeSection = ({ resumes }: ResumeSectionProps) => {
  return (
    <section className={classes.resumeSection}>
      <div className={classes.header}>
        <h3>CV/Resume</h3>
        <button className={classes.addBtn}>Add CV</button>
      </div>

      <div className={classes.resumeList}>
        {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
    </section>
  );
};
