import React from "react";
import classes from "./basic-info-section.module.scss";

export const BasicInfoSection: React.FC<{ summary?: string }> = ({ summary }) => {
  return (
    <section className={classes.section}>
      <h3 className={classes.heading}>Full Profile</h3>
      <p className={classes.subtitle}>Basic information description</p>
      <div className={classes.textBox}>{summary || "—"}</div>
    </section>
  );
};
