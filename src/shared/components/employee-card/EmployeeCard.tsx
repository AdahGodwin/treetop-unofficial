import classes from "./employee-card.module.scss";
import ApproveIcon from "@/assets/icons/check-circle.svg?react";
import DeclineIcon from "@/assets/icons/close.svg?react";
import BriefCase from "@/assets/icons/briefCase.svg?react";
import LocationIcon from "@/assets/icons/location.svg?react";
import PhoneIcon from "@/assets/icons/phone.svg?react";
import type { Employee } from "../../data/employee";

interface EmployeeCardProps {
  employee: Employee;
  onApprove?: (id: number) => void;
  onDecline?: (id: number) => void;
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({
  employee,
}) => {
  const {name, jobRole, location, phone, lastVisited } = employee;
    const showAdminIcons = true;

  return (
    <div className={classes.employeeCard}>
      <div className={classes.cardHeader}>
        <h3>{name}</h3>

        {showAdminIcons && (
          <div className={classes.icons}>
            <ApproveIcon />
            <DeclineIcon />
          </div>
        )}
      </div>

      <div className={classes.detailRow}>
        <BriefCase />
        <span>{jobRole}</span>
      </div>

      <div className={classes.detailRow}>
        <LocationIcon />
        <span>{location}</span>
      </div>

      <div className={classes.detailRow}>
        <PhoneIcon />
        <span>{phone}</span>
      </div>

      <p>visited {lastVisited}</p>
    </div>
  );
};
