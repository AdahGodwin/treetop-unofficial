import classes from './Header.module.css';
import logo from '../../assets/treetop-logo.png';

import BookMarkIcon from "../../assets/icons/bookmark.svg?react";
import MessageIcon from "../../assets/icons/message.svg?react";
import NotificationIcon from "../../assets/icons/notification.svg?react";
import UserIcon from "../../assets/icons/user.svg?react";



const Header = () => {
    return (
        <div className={`${classes.container} padding`}>
            <div className={classes.logo}>
                <img src={logo} alt="Logo" />
            </div>
            <div className={classes.links}>
                <a href="#home">Home</a>
            </div>
            <div className={classes.searchbar}>
                <div className={classes.input}>
                    <i className="fas fa-magnifying-glass"></i>
                    <input type="text" placeholder='Name, job role, keyword' />

                </div>
                <hr />
                <div className={classes.input}>
                    <i className="fas fa-location-dot"></i>
                    <input type="text" placeholder='Location, or “remote”' />
                    <button><i className="fas fa-magnifying-glass"></i></button>

                </div>
            </div>
            <div className={classes.icons}>
                <BookMarkIcon width={40}/>
                <MessageIcon width={40} />
                <NotificationIcon width={40}/>
                <UserIcon width={40}/>
            </div>
            <div className={classes.actions}>
            </div>

            {/* <div className={classes.links}>
                <a href="#home">Home</a>
                <a href="#about">Available Jobs</a>
                <a href="#services">Blog</a>
                <a href="#contact">Contact</a>
            </div>
            <div className={classes.searchbar}>
                <input type="text" />
                <button><i className="fas fa-magnifying-glass"></i></button>
            </div>

            <div className={classes.actions}>
                <button className={classes.login}>Sign In</button>
                <Button bordered={true}>Get Started</Button>
            </div> */}
        </div>
    )
}

export default Header
