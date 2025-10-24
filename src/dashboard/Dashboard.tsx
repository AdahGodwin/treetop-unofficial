import { Outlet } from "react-router";
import SideNav from "./components/sidenav/SideNav";
import classes from "./dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2 className="padding">Admin Dashboard</h2>
      </div>

      <div className={`${classes.content} padding`}>
        <SideNav />
        <div className={classes.mainView}>
          <div className={classes.contentHeader}>
            <div className={classes.crumbs}>job Summary</div>
            <div className={classes.filters}>
                
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
