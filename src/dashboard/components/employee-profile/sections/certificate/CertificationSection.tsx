import type { Certificate } from "../../../../../shared/data/employeeProfile";
import classes from "./certificate-section.module.scss";

interface Props {
  certificates: Certificate[];
}

export const CertificateSection: React.FC<Props> = ({ certificates }) => {
  return (
    <section className={classes.section}>
      <h3 className={classes.heading}>Certificate</h3>

      {certificates.length === 0 ? (
        <div className={classes.empty}>No certificates available</div>
      ) : (
        certificates.map((cert) => (
          <div key={cert.id} className={classes.card}>
            {/* Name of certificate */}
            <label>Name of certificate</label>

            <div className={classes.formGroup}>
              <div className={classes.boxVal}>{cert.name}</div>
              {/* Checkbox row */}
              <div className={classes.checkboxRow}>
                <input
                  type="checkbox"
                  checked={cert.doesNotExpire}
                  readOnly
                  className={classes.checkbox}
                />
                <span>Does not expire</span>
              </div>
            </div>

            {/* Dates row */}
            <div className={classes.dateRow}>
              <div className={classes.dateBox}>
                <label>Date issued</label>
                <div className={classes.boxVal}>{cert.issueDate}</div>
              </div>

              <div className={classes.dateBox}>
                <label>Expiry date</label>
                <div
                  className={`${classes.boxVal} ${
                    cert.doesNotExpire ? classes.disabledBox : ""
                  }`}
                >
                  {cert.doesNotExpire
                    ? "N/A"
                    : cert.expiryDate || "Not specified"}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className={classes.description}>
              <label>Certificate description</label>
              <div className={classes.boxVal}>
                {cert.description || "No description provided"}
              </div>
            </div>
          </div>
        ))
      )}
    </section>
  );
};
