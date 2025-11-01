import type { Experience } from "../../../../../shared/data/employeeProfile";
import classes from "./work-experience-section.module.scss";

export const WorkExperienceSection: React.FC<{ experiences: Experience[] }> = ({
  experiences,
}) => {
  return (
    <section className={classes.section}>
      <h3 className={classes.heading}>Work Experience</h3>

      {experiences.length === 0 ? (
        <p className={classes.empty}>No experience listed</p>
      ) : null}

      {experiences.map((exp) => (
        <div key={exp.id} className={classes.row}>
          <div className={classes.metaRow}>
            <div className={classes.col}>
              <div className={classes.label}>Job title</div>
              <div className={classes.value}>{exp.jobTitle}</div>
            </div>

            <div className={classes.col}>
              <div className={classes.label}>Company</div>
              <div className={classes.value}>{exp.company}</div>
            </div>

            <div className={classes.col}>
              <div className={classes.label}>Location</div>
              <div className={classes.value}>{exp.location}</div>
            </div>
          </div>

          <div className={classes.dateRow}>
            <div className={classes.dateBox}>
              <div className={classes.label}>From</div>
              <div className={classes.boxVal}>{exp.from}</div>
            </div>
            <div className={classes.dateBox}>
              <div className={classes.label}>To</div>
              <div className={classes.boxVal}>{exp.to}</div>
            </div>
          </div>
          <div className={classes.desc}>
            <div className={classes.label}>Certificate description</div>
            {exp.description ? (
              <div className={classes.descBox}>{exp.description}</div>
            ) : null}
          </div>
        </div>
      ))}
    </section>
  );
};
