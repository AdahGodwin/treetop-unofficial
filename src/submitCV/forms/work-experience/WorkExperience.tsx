import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import classes from './work-experience.module.css';
const WorkExperience = () => {
    return (
        <form className={classes.container}>
            <div className={classes.formRow}>
                <Input placeholder='Job title' />
            </div>
            <div className={classes.formRow}>
                <Input placeholder='Company' />
            </div>
            <div className={classes.formRow}>
                <Input placeholder='City/state' />
                <div className={classes.dateInput}>
                    <label>From</label>
                    <Input placeholder='Date' />
                </div>
                <div className={classes.dateInput}>
                    <label>To</label>
                    <Input placeholder='Date' />
                </div>
            </div>
            <textarea name="description" id="description" placeholder='Enter Description' />
            <Button bordered={true}>Add more experience</Button>
        </form>
    )
}

export default WorkExperience;
