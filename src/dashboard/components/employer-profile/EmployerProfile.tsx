import classes from "./employer-profile.module.scss";

import LocationIcon from "@/assets/icons/location.svg?react";
import PhoneIcon from "@/assets/icons/phone.svg?react";

const EmployerProfile = () => {
  const {name, location, phone, jobsPosted, applicationsReceived } = {
    name: "Techify Solutions",
    location: "Ikeja, Lagos",
    jobsPosted: 12,
    phone: "+234 123 456 7890",
    applicationsReceived: 500
  }
  return (
    <div className={classes.employeeCard}>
        <h3>{name}</h3>

      <div className={classes.detailRow}>
        <LocationIcon />
        <span>{location}</span>
      </div>

      <div className={classes.detailRow}>
        <PhoneIcon />
        <span>{phone}</span>
      </div>
      <p>visited 1 day ago</p>

      <section className={classes.statistics}>
        <div className={classes.jobsPosted}>
          <h4>Number of Jobs posted</h4>
          <span>{jobsPosted}</span>
        </div>
        <div className={classes.applicationsReceived}>
          <h4>Number of Applications Received</h4>
          <span>{applicationsReceived}</span>
        </div>
      </section>
    </div>
  )
}

export default EmployerProfile