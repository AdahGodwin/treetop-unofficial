import Button from "../shared/components/button/Button";
import classes from "./landing-page.module.scss";
import heroImage from "../assets/hero-image.webp";
import { jobs } from "../shared/data/jobs";
import JobCard from "../shared/components/job-card/JobCard";
import ArrowRight from "../assets/icons/arrow-long-right.svg?react";
import BlogCard from "../shared/components/blog-card/BlogCard";
import { blogs } from "../shared/data/blog";
const LandingPage = () => {
  return (
    <div className={classes.container}>
      {/* Hero section */}
      <div className={`${classes.hero} padding`}>
        <div className={classes.heroContent}>
          <div className={classes.title}>
            Land a <span className={classes.secureText}>secure</span> job or a
            <span className={classes.trustedText}> trusted</span> and
            <span className={classes.qualifiedText}> qualified</span> employee
          </div>
          <div className={classes.subtitle}>
            Explore thousands of job opportunities or post jobs to find the
            perfect candidate with Treetop.
          </div>

          <Button secondary={true}>Get Started</Button>
        </div>
        <div className={classes.heroImage}>
          <img src={heroImage} alt="Hero" />
        </div>
      </div>

      {/* Available jobs section */}
      <div className={`${classes.availableJobs} padding`}>
        <h2>Available jobs</h2>
        <div className={classes.jobs}>
          {jobs.slice(0, 6).map((job) => (
            <JobCard job={job} key={job.id} onClick={() => null} />
          ))}
        </div>
        <button className={classes.seeMoreButton}>
          See more jobs <ArrowRight />{" "}
        </button>
      </div>

      {/* Expert Insights Section */}
      <div className={`${classes.insights} padding`}>
        <h2>Expert Insights</h2>
        <div className={classes.blogs}>
          {blogs.slice(0, 3).map((blog) => (
            <BlogCard blog={blog} key={blog.id} onReadMore={() => null} />
          ))}
        </div>
        <button className={classes.seeMoreButton}>
          See more expert insights <ArrowRight />{" "}
        </button>
      </div>

    </div>
  );
};

export default LandingPage;
