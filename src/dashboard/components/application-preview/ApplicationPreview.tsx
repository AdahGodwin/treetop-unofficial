import AdminControls from "../../../shared/components/admin-controls/AdminControls";
import classes from "./application-preview.module.scss";

import UserIcon from "@/assets/icons/user-filled.svg?react";
import BuildingIcon from "@/assets/icons/building.svg?react";
import LocationIcon from "@/assets/icons/location.svg?react";
import { useLoaderData } from "react-router";
import type { Application } from "../../../shared/data/applications";

const ApplicationPreview = () => {
  const data = useLoaderData();
  const isAdmin = false;

  const selectedApplication: Application = data.application;
  console.log(data.application)
    
    return (
    <div className={classes.container}>
      {selectedApplication && <>
      <div className={classes.info}>
          <h3>{selectedApplication.jobTitle}</h3>
        
        <div className={classes.detailRow}>
          <UserIcon className={classes.icon} />
          <span>{selectedApplication.applicantName}</span>
        </div>
        <div className={classes.detailRow}>
          <BuildingIcon className={classes.icon} />
          <span>{selectedApplication.companyName}</span>
        </div>
        <div className={classes.detailRow}>
          <LocationIcon className={classes.icon} />
          <span>{selectedApplication.location}</span>
        </div>
        <p>{selectedApplication.visited}</p>

        {isAdmin && <AdminControls />}
        <hr />
      </div>
      <div className={classes.content}>
        <div className={classes.cardHeader}>
          <span>CV Preview</span>
        </div>

        <div className={classes.card}>
          <div className={classes.document}>Document Preview</div>
        </div>

        {/* Employer questions section */}
        <div className={classes.cardHeader}>
          <span>Employer questions</span>
        </div>

        <div className={classes.card}>
          <h2>Question</h2>
          <p>Answer</p>
        </div>
      </div>
      </>}
    </div>
  );
};

export default ApplicationPreview;
