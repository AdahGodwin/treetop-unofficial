import { navConfig } from "../../../shared/data/nav-config";
import classes from "./sidenav.module.scss";
import placeholderAvatar from "@/assets/placeholder_img.png";

const userRole = "employee"; // This would typically come from user context or props
const navItems = navConfig[userRole];

const SideNav = () => {
  return (
    <div className={classes.sideNav}>
      <div className={classes.userInfo}>
        
        <div className={classes.profilePic}>
          <div className={classes.circleMask}></div>
             <img src={placeholderAvatar} alt="User Avatar" />
        </div>

        <span className={classes.userName}>John Doe</span>
        <span className={classes.userRole}>Employee</span>
      </div>
      <div className={classes.nav}>
        
        {navItems.map((item) => (
          <section key={item.route} className={classes.navItem}>
            {item.icon && <item.icon width={32} height={38} className={classes.icon} />}
            <span>{item.name}</span>
          </section>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
