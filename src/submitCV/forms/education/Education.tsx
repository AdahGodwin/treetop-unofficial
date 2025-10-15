import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input"
import classes from "./education.module.css";
const Education = () => {
    return (
        <form className={classes.container}>
            <div className={classes.formRow}>
                <Input placeholder='Level of education' />
            </div>
            <div className={classes.formRow}>
                <Input placeholder='Field of study' />
            </div>
            <div className={classes.formRow}>
                <Input placeholder='Country' />
                <Input placeholder='School location' />
            </div>
            <div className={classes.formRow}>
                <div className={classes.dateInput}>
                    <label>From</label>
                    <Input placeholder='Date' />
                </div>
                <div className={classes.dateInput}>
                    <label>To</label>
                    <Input placeholder='Date' />
                </div>
            </div>

            <textarea name="description" id="description" placeholder='Add additional details' />
            <Button bordered={true}>Add more places of education</Button>
        </form>
    )
}

export default Education;
