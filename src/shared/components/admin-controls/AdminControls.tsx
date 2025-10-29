import ApproveIcon from "@/assets/icons/check-circle.svg?react";
import DeclineIcon from "@/assets/icons/close.svg?react";
import classes from "./admin-controls.module.scss";
const AdminControls = () => {
  return (
    <div className={classes.adminControls}>
      <button className={classes.approve}>
        <ApproveIcon className={classes.icon} />
        Approve
      </button>
      <button className={classes.decline}>
        <DeclineIcon className={classes.icon} />
        Reject
      </button>
    </div>
  );
};

export default AdminControls;
