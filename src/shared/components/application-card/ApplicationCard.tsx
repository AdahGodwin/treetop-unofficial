import classes from "./application-card.module.scss";

//icons
import UserIcon from "@/assets/icons/user-filled.svg?react";
import BuildingIcon from "@/assets/icons/building.svg?react";
import LocationIcon from "@/assets/icons/location.svg?react";
import ApproveIcon from "@/assets/icons/check-circle.svg?react";
import DeclineIcon from "@/assets/icons/close.svg?react";

import PdfImage from "@/assets/pdf-image.png";
import type { Application } from "../../data/applications";

interface EmployeeCardProps {
  application: Application;
  onClick: () => void;
}
export const ApplicationCard: React.FC<EmployeeCardProps> = ({
  onClick,
  application,
}) => {
  const isLoggedIn = true;
  let userRole: string = "admin"; // or 'employer'

  return (
    <div onClick={onClick} className={classes.card}>
      <div className={classes.cardHeader}>
        <h3>{application.jobTitle}</h3>
        {isLoggedIn && userRole === "admin" && (
          <div className={classes.icons}>
            <ApproveIcon />
            <DeclineIcon />
          </div>
        )}
      </div>
      <div className={classes.detailRow}>
        <UserIcon className={classes.icon} />
        <span>{application.applicantName}</span>
      </div>
      <div className={classes.detailRow}>
        <BuildingIcon className={classes.icon} />
        <span>{application.companyName}</span>
      </div>
      <div className={classes.detailRow}>
        <LocationIcon className={classes.icon} />
        <span>{application.location}</span>
      </div>
      <p>{application.visited}</p>

      <div className={classes.resumeUploaded}>
        <img src={PdfImage} alt="Pdf Icon Image" />
        <span>Uploaded resume</span>
      </div>
    </div>
  );
};
