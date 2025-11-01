import React from "react";
import classes from "./skills-section.module.scss";
import type { Skill } from "../../../../../shared/data/employeeProfile";

interface Props {
  skills: Skill[];
}

/**
 * Read-only skills section laid out as rows:
 *  | Skill name (boxed) | Years of experience (boxed) |
 */
export const SkillsSection: React.FC<Props> = ({ skills }) => {
  return (
    <section className={classes.section}>
      <h3 className={classes.heading}>Skills</h3>

      {/* column labels similar to screenshot */}
      <div className={classes.labelsRow} role="row">
        <div className={classes.label}>Skill name</div>
        <div className={classes.label}>Years of experience</div>
      </div>

      {/* each skill rendered as a row of two boxed values */}
      <div className={classes.rows}>
        {skills.length === 0 ? (
          <div className={classes.empty}>No skills added</div>
        ) : (
          skills.map((s) => (
            <div key={s.id} className={classes.row} role="row">
              <div className={classes.box} aria-label={`Skill: ${s.name}`}>
                <span className={classes.boxText}>{s.name}</span>
              </div>

              <div className={classes.box} aria-label={`Years: ${s.years ?? "-"}`}>
                <span className={classes.boxText}>{typeof s.years === "number" ? `${s.years} years` : "-"}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};
