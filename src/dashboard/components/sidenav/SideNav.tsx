import { useLocation, useNavigate } from "react-router";
import { navConfig } from "../../../shared/data/nav-config";
import classes from "./sidenav.module.scss";
import placeholderAvatar from "@/assets/placeholder_img.png";

const SideNav = () => {
  const userRole: keyof typeof navConfig = "admin"; // This would typically come from user context or props
  const navItems = navConfig[userRole];
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = (route: string) => {
    if (route === "/logout") {
      // Handle logout logic here
      console.log("Logging out...");
      return;
    }
    navigate(`/dashboard/${route}`);
  };

  return (
    <div className={classes.sideNav}>
      { userRole !== ("admin" as keyof typeof navConfig) && <div className={classes.userInfo}>
        <div className={classes.profilePic}>
          <div className={classes.circleMask}></div>
          <img src={placeholderAvatar} alt="User Avatar" />
        </div>

        <span className={classes.userName}>John Doe</span>
        <span className={classes.userRole}>Employee</span>
      </div>}
      <div className={classes.nav}>
        {navItems.map((item) => {
          const fullRoute = `/dashboard/${item.route}`;
          const isActive = location.pathname.startsWith(fullRoute) || location.pathname=== fullRoute;

          return (
            <section
              key={item.route}
              className={`${classes.navItem} ${isActive ? classes.active : ""}`}
              onClick={() => navigateTo(item.route)}
            >
              {item.icon && (
                <item.icon width={32} height={38} className={classes.icon} />
              )}
              <span>{item.name}</span>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
