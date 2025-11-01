import type { Education } from "../../../../../shared/data/employeeProfile";
import classes from "./education-experience-section.module.scss";

export const EducationExperienceSection: React.FC<{ educationList: Education[] }> = ({ educationList }) => {
  return (
    <section className={classes.section}>
      <h3 className={classes.heading}>Education Experience</h3>

      {educationList.map((edu) => (
        <div key={edu.id} className={classes.row}>
          <div className={classes.grid}>
            <div>
              <div className={classes.label}>Level of education</div>
              <div className={classes.value}>{edu.level}</div>
            </div>
            <div>
              <div className={classes.label}>Field of study</div>
              <div className={classes.value}>{edu.field}</div>
            </div>
            <div>
              <div className={classes.label}>School name</div>
              <div className={classes.value}>{edu.school}</div>
            </div>
          </div>

          <div className={classes.locationRow}>
            <div>
              <div className={classes.label}>Country</div>
              <div className={classes.value}>{edu.country || "—"}</div>
            </div>
            <div>
              <div className={classes.label}>School location</div>
              <div className={classes.value}>{edu.city || "—"}</div>
            </div>
          </div>

          <div className={classes.dateRow}>
            <div className={classes.dateBox}>
              <div className={classes.label}>From</div>
              <div className={classes.boxVal}>{edu.from}</div>
            </div>
            <div className={classes.dateBox}>
              <div className={classes.label}>To</div>
              <div className={classes.boxVal}>{edu.to}</div>
            </div>
          </div>
          <div className={classes.desc}>
            <div className={classes.label}>Additional Details</div>
            {edu.details ? (
              <div className={classes.descBox}>{edu.details}</div>
            ) : null}
          </div>
        </div>
      ))}
    </section>
  );
};
