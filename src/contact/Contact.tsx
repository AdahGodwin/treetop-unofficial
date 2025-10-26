import Button from "../shared/components/button/Button";
import Input from "../shared/components/input/Input";
import classes from "./contact.module.scss";
const Contact = () => {
  return (
    <div className={classes.container}>
      <div className="header">
        <h2 className="padding"> Contact us</h2>
      </div>
      <form className={classes.formSection}>
        <div className={classes.field}>
          <label>First & Last Name</label>
          <Input icon="fas fa-user"  placeholder="Full Name" />
        </div>
        <div className={classes.field}>
          <label>Email</label>
          <Input icon="fas fa-envelope"  placeholder="Email" />
        </div>

        <div className={classes.field}>
          <label>Subject</label>
          <Input icon="fas fa-envelope-open-text"  placeholder="Enter Subject" />
        </div>

        <div className={classes.field}>
          <label>Message</label>
          <textarea name="message" id="message" placeholder="Enter description">
          </textarea>
        </div>
        <Button secondary={true}>Send</Button> 
      </form>
    </div>
  );
};

export default Contact;
