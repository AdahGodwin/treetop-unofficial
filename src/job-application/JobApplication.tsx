import Input from "../components/input/Input";
import classes from "./job-application.module.css";
import logo from "../assets/treetop-logo.png";
import pdfImg from "../assets/pdf-image.png";
import Button from "../components/button/Button";
const JobApplication = () => {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h2 className='padding'>Apply for job</h2>
            </div>
            <div className={classes.content}>
                <p>Choose how to apply</p>
                <div className={classes.resumeOption}>
                    <div className={classes.image}>
                        <img src={logo} alt="Pdf Icon" />
                    </div>
                    <div className={classes.info}>
                        <h2>Use your Treetop Resume</h2>
                        <p>Created 1 day ago</p>
                        <div className={classes.tag}>Recommended</div>
                    </div>
                </div>
                <div className={classes.resumeOption}>
                    <div className={classes.image}>
                        <img src={pdfImg} alt="Logo" />
                    </div>
                    <div className={classes.info}>
                        <h2> Upload your resume</h2>
                        <p>Created 1 day ago</p>
                        {/* <div className="tag">Recommended</div> */}
                    </div>
                </div>
                <h3>Job that shows relevant experience (optional)</h3>
                <Input placeholder="Job title" />
                <Input placeholder="Company name" />

                <h3>Employer questions</h3>

                <div className={classes.question}>Question</div>
                <Input placeholder="Answer" />
                <Button>Preview application</Button>
            </div>
        </div>
    )
}

export default JobApplication;
