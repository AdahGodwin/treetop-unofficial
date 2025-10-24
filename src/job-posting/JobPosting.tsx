import Button from "../shared/components/button/Button";
import Input from "../shared/components/input/Input";
import classes from "./job-posting.module.scss";

const JobPosting = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2 className="padding"> Post a job</h2>
      </div>
      <div className={classes.content}>
        <form>
          <Input placeholder="Job Role" />
          <div className={classes.formRow}>
            <Input placeholder="Company name" />
            <Input placeholder="Location" />
          </div>
          <div className={classes.formRow}>
            <Input placeholder="Salary" />
            <div className={classes.selectGroup}>
              <select name="Job type" id="job-type">
                <option value="select">- Job Type -</option>
                <option value="remote">Remote</option>
                <option value="on-site">On-site</option>
              </select>
            </div>
          </div>
          <h2>Full job description</h2>
          <textarea placeholder="Enter description"></textarea>
          <Button>Submit for approval</Button>
        </form>
      </div>
    </div>
  );
};

export default JobPosting;
