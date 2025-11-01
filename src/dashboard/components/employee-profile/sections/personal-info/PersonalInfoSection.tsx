import React from "react";
import classes from "./personal-info-section.module.scss";

export const PersonalInfoSection: React.FC<{
  employmentStatus?: string;
  dob?: string;
  educationLevel?: string;
  nyscStatus?: string;
}> = ({ employmentStatus, dob, educationLevel, nyscStatus }) => {
  const items = [
    { label: "Employment status", value: employmentStatus || "—" },
    { label: "Date of birth", value: dob || "—" },
    { label: "Highest level of education", value: educationLevel || "—" },
    { label: "NYSC status", value: nyscStatus || "—" }
  ];

  return (
    <section className={classes.section}>
      <h3 className={classes.heading}>Personal Information</h3>
      <div className={classes.grid}>
        {items.map((it) => (
          <div key={it.label} className={classes.item}>
            <div className={classes.label}>{it.label}</div>
            <div className={classes.value}>{it.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
