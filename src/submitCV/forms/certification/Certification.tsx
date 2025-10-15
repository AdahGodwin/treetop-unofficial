import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import classes from './certification.module.css';

const Certification = () => {
    return (
        <form className={classes.container}>
            <div className={classes.formRow}>
                <Input placeholder='Certificate or license name' />
                <div className={classes.checkbox}>
                    <input type="checkbox" name='checkbox' />
                    <label htmlFor="checkbox">Does not expire</label>
                </div>
            </div>
            <div className={classes.formRow}>
                <div className={classes.dateInput}>
                    <label>Date issued</label>
                    <Input placeholder='Date' />
                </div>
                <div className={classes.dateInput}>
                    <label>Expiry date</label>
                    <Input placeholder='Date' />
                </div>
            </div>
            <textarea name="description" id="description" placeholder='Add additional details' />
            <Button bordered={true}>Add more Certificates/license</Button>
        </form>
    )
}

export default Certification;
