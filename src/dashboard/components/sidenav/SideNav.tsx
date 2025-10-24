import classes from "./sidenav.module.scss";
import UsersIcon from "../../../assets/icons/users-2.svg?react";
import FileIcon from "../../../assets/icons/file.svg?react";
import OverViewIcon from "../../../assets/icons/overview.svg?react";
import Logout from "../../../assets/icons/logout.svg?react";

const navItems = [
  {
    name: "Manage job Seeker",
    icon: <UsersIcon width={32} />,
    route: "job-seekers",
  },
  {
    name: "Manage Application",
    icon: <FileIcon width={32} />,
    route: "all-applications",
  },
  {
    name: "System Overview",
    icon: <OverViewIcon width={32} />,
    route: "system-overview",
  },
  {
    name: "Logout",
    icon: <Logout width={32} />,
    route: "/logout",
  },
];

const SideNav = () => {
  return (
    <div className={classes.sideNav}>
      <div className={classes.nav}>
        {navItems.map((item) => (
          <section key={item.route} className={classes.navItem}>
            {item.icon}
            <span>{item.name}</span>
          </section>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
