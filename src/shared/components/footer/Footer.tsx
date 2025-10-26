import React, { useState } from "react";
import classes from "./footer.module.scss";
import logo from '../../../assets/treetop-logo-white.png';

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email");
    alert(`Subscribed successfully with: ${email}`);
    setEmail("");
  };

  return (
    <footer>
      {/* Subscribe Section */}
      <div className={classes.footerContainer}>
        <h2 className={classes.subscribeTitle}>Subscribe to job alert</h2>
        <div className={classes.underline}></div>
        <p className={classes.subscribeSubtitle}>
          Join our list of happy subscribers
        </p>

        <form className={classes.form} onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={classes.input}
            required
          />
          <button type="submit" className={classes.button}>
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Bottom */}
      <div className={classes.bottom}>
        <div className={classes.footerContent}>
          <div className={classes.logoSection}>
            <div className={classes.logo}>
                <img src={logo} alt="Logo" />
            </div>

            <div className={classes.socials}>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-x-twitter"></i>
            </div>
          </div>

          <div className={classes.links}>
            <div className={classes.linksGroup}>
            <h4>Services</h4>
            <ul>
              <li>Available Jobs</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div className={classes.linksGroup}>
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          </div>
        </div>

        <p className={classes.copyright}>
          © {new Date().getFullYear()} Copyright, Treetop Consulting
        </p>
      </div>
    </footer>
  );
};

export default Footer;
