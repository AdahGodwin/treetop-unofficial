import classes from "./Header.module.scss";
import logo from "../../../assets/treetop-logo.png";

import AddIcon from "@/assets/icons/add.svg?react";
import HomeIcon from "@/assets/icons/home.svg?react";
import UserIcon from "@/assets/icons/user.svg?react";
import { useState } from "react";
import Button from "../button/Button";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isLoggedIn] = useState(false);

  return isLoggedIn ? (
    <div className={`${classes.container} padding`}>
      <div className={classes.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={classes.searchbar}>
        <div className={classes.input}>
          <i className="fas fa-magnifying-glass"></i>
          <input type="text" placeholder="Name, job role, keyword" />
        </div>
        <hr />
        <div className={classes.input}>
          <i className="fas fa-location-dot"></i>
          <input type="text" placeholder="Location, or “remote”" />
          <button className={classes.search}>
            <i className="fas fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <div className={classes.icons}>
        <NavLink to="/jobs" className={({ isActive }) => (isActive ? classes.active : "")}>
          <HomeIcon height={25} />
        </NavLink>
        {/* <BookMarkIcon height={25} /> */}
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? classes.active : "")}>
          <UserIcon className={classes.icon} height={25} />
        </NavLink>
       <NavLink to="/post-job">
         <div className={classes.postJob}>
            <Button> <AddIcon className={classes.icon} /></Button>
            Post Job
        </div>
       </NavLink>
      </div>
      <div className={classes.actions}></div>
    </div>
  ) : (
    <div className={`${classes.container} padding`}>
      <div className={classes.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <nav className={classes.links}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "var(--primary-500)" : "black",
          })}>
          Home
        </NavLink>
        <NavLink
          to="/jobs"
         style={({ isActive }) => ({
            color: isActive ? "var(--primary-500)" : "black",
          })}
        >
          Available Jobs
        </NavLink>
        <NavLink
          to="/blogs"
          style={({ isActive }) => ({
            color: isActive ? "var(--primary-500)" : "black",
          })}
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            color: isActive ? "var(--primary-500)" : "black",
          })}
        >
          Contact Us
        </NavLink>
      </nav>
      <div className={classes.searchbar}>
        <input type="text" placeholder="Search" />
        <button>
          <i className="fas fa-magnifying-glass"></i>
        </button>
      </div>

      <div className={classes.actions}>
        <NavLink to="/auth"
        state={{"mode":"login", "isLogin":true}}>
        <button className={classes.login}>Sign In</button>
        
        </NavLink>
        <NavLink to="/auth"
        state={{"mode":"signup", "isLogin":false}}>
            <Button bordered={true}>Get Started</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
