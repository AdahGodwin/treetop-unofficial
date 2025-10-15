import Button from "../components/button/Button";
import classes from "./application-preview.module.css";

const ApplicationPreview = () => {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h2 className='padding'>Preview application</h2>
            </div>
            <div className={classes.content}>
                <div className={classes.cardHeader}>
                    <span>CV</span>
                </div>

                <div className={classes.card}>
                    <div className={classes.document}>
                        Document Preview
                    </div>
                </div>

                {/* experience section */}
                <div className={classes.cardHeader}>
                    <span>Relevant experience</span>
                </div>

                <div className={classes.card}>
                    <h2>Job title</h2>
                    <p>Company name</p>
                </div>

                {/* Employer questions section */}
                <div className={classes.cardHeader}>
                    <span>Employer questions</span>
                </div>

                <div className={classes.card}>
                    <h2>Question</h2>
                    <p>Answer</p>
                </div>

                <div className={classes.button}>
                    <div className={classes.editButton}>
                        <Button bordered={true}>Edit</Button>

                    </div>
                    <Button>Submit for Review</Button>
                </div>
            </div>

        </div>
    )
}

export default ApplicationPreview;
