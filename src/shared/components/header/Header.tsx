import classes from './Header.module.scss';
import logo from '../../../assets/treetop-logo.png';

import BookMarkIcon from "../../../assets/icons/bookmark.svg?react";
import HomeIcon from "../../../assets/icons/home.svg?react";
import UserIcon from "../../../assets/icons/user.svg?react";
import { useState } from 'react';
import Button from '../button/Button';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    function toggleLogin() {
        setIsLoggedIn((prevState) => !prevState);
    }

    return (
        
       isLoggedIn ? <div className={`${classes.container} padding`}>
            <div className={classes.logo}>
                <img src={logo} alt="Logo" />
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
                    <button className={classes.search}><i className="fas fa-magnifying-glass"></i></button>

                </div>
            </div>
            <div className={classes.icons}>
                <HomeIcon height={25} />
                <BookMarkIcon height={25}/>
                <UserIcon height={25}/>
            </div>
            <div className={classes.actions}>
            </div>
        
         
        </div>
        : <div className={`${classes.container} padding`}>
            <div className={classes.logo}>
                <img src={logo} alt="Logo" />
            </div>
           <div className={classes.links}>
                <a href="#home">Home</a>
                <a href="#about">Available Jobs</a>
                <a href="#services">Blog</a>
                <a href="#contact">Contact Us</a>
            </div>
            <div className={classes.searchbar}>
                <input type="text" placeholder='Search' />
                <button><i className="fas fa-magnifying-glass"></i></button>
            </div>

            <div className={classes.actions}>
                <button className={classes.login}>Sign In</button>
                <Button bordered={true}>Get Started</Button>
            </div>
        </div>
    )
}

export default Header
